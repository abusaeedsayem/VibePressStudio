const globalForPrisma = globalThis as unknown as {
  prisma: any;
};

function getPrismaInstance(): any {
  if (globalForPrisma.prisma) {
    return globalForPrisma.prisma;
  }

  try {
    let PrismaClientClass: any;
    try {
      const pc = require("@prisma/client");
      PrismaClientClass = pc.PrismaClient;
    } catch {
      PrismaClientClass = null;
    }

    if (!PrismaClientClass) {
      throw new Error("PrismaClient module not generated or unavailable");
    }

    const client = new PrismaClientClass({
      log: process.env.NODE_ENV !== "production" ? ["query", "error"] : ["error"],
    } as any);

    if (process.env.NODE_ENV !== "production") {
      globalForPrisma.prisma = client;
    }
    return client;
  } catch (err) {
    console.warn("PrismaClient initialization bypassed (fallback mode active):", err);
    // Provide safe mock for build and database-less environments
    const mock = {
      subscriber: {
        findMany: async () => [],
        delete: async () => ({ id: "mock" }),
        upsert: async ({ create }: any) => ({
          id: `sub_${Date.now()}`,
          ...create,
          createdAt: new Date(),
          updatedAt: new Date(),
        }),
      },
    };
    globalForPrisma.prisma = mock;
    return mock;
  }
}

export const prisma = new Proxy({} as any, {
  get(_target, prop) {
    const instance = getPrismaInstance();
    return instance[prop];
  },
});