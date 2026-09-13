import { prisma } from "@/lib/prisma";
import {
  addSupportTicketToMemory,
  getMemorySupportTickets,
  updateMemorySupportTicketStatus,
  deleteMemorySupportTicket,
  StoredSupportTicket,
} from "@/lib/db/memoryStore";

export interface CreateSupportTicketInput {
  name: string;
  email: string;
  product?: string;
  category?: string;
  license?: string;
  message: string;
}

export async function saveSupportTicket(input: CreateSupportTicketInput): Promise<StoredSupportTicket> {
  const sanitizedEmail = input.email.toLowerCase().trim();
  const sanitizedName = input.name?.trim() || "Support Requester";
  const sanitizedProduct = input.product || "vibepress-affiliate-link-cloaker";
  const sanitizedCategory = input.category || "general-inquiry";
  const sanitizedLicense = input.license?.trim() || "N/A";
  const sanitizedMessage = input.message.trim();

  // 1. Always write to memory cache fallback
  const memoryRecord = addSupportTicketToMemory({
    name: sanitizedName,
    email: sanitizedEmail,
    product: sanitizedProduct,
    category: sanitizedCategory,
    license: sanitizedLicense,
    message: sanitizedMessage,
  });

  // 2. Try DB persistence if database is reachable
  try {
    const dbRecord = await (prisma as any).supportTicket.create({
      data: {
        name: sanitizedName,
        email: sanitizedEmail,
        product: sanitizedProduct,
        category: sanitizedCategory,
        license: sanitizedLicense,
        message: sanitizedMessage,
        status: "OPEN",
      },
    });

    return {
      id: dbRecord.id,
      name: dbRecord.name,
      email: dbRecord.email,
      product: dbRecord.product,
      category: dbRecord.category,
      license: dbRecord.license || "N/A",
      message: dbRecord.message,
      status: dbRecord.status,
      createdAt: dbRecord.createdAt.toISOString(),
      updatedAt: dbRecord.updatedAt.toISOString(),
    };
  } catch (err) {
    console.warn("Prisma DB write for support ticket failed, using memory store record:", err);
    return memoryRecord;
  }
}

export async function fetchAllSupportTickets(): Promise<StoredSupportTicket[]> {
  try {
    const dbTickets = await (prisma as any).supportTicket.findMany({
      orderBy: { createdAt: "desc" },
    });

    if (dbTickets && Array.isArray(dbTickets) && dbTickets.length > 0) {
      return dbTickets.map((t: any) => ({
        id: t.id,
        name: t.name,
        email: t.email,
        product: t.product,
        category: t.category,
        license: t.license || "N/A",
        message: t.message,
        status: t.status,
        createdAt: t.createdAt instanceof Date ? t.createdAt.toISOString() : t.createdAt,
        updatedAt: t.updatedAt instanceof Date ? t.updatedAt.toISOString() : t.updatedAt,
      }));
    }
  } catch (err) {
    console.warn("Prisma DB read for support tickets failed, using memory store records:", err);
  }

  return getMemorySupportTickets();
}

export async function updateTicketStatus(id: string, status: "OPEN" | "RESOLVED" | "IN_PROGRESS") {
  updateMemorySupportTicketStatus(id, status);

  try {
    await (prisma as any).supportTicket.update({
      where: { id },
      data: { status, updatedAt: new Date() },
    });
  } catch (err) {
    console.warn("Prisma update ticket status failed:", err);
  }
}

export async function deleteTicket(id: string) {
  deleteMemorySupportTicket(id);

  try {
    await (prisma as any).supportTicket.delete({
      where: { id },
    });
  } catch (err) {
    console.warn("Prisma delete ticket failed:", err);
  }
}
