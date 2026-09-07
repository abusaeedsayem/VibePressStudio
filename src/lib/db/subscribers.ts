import { prisma } from "@/lib/prisma";
import { subscriberInputSchema } from "@/lib/validations/subscriber";

export async function saveSubscriber(
  name: string,
  email: string,
  source: string
) {
  const parsed = subscriberInputSchema.safeParse({
    name,
    email,
    source,
    honeypot: "",
  });

  if (!parsed.success) {
    throw new Error("Invalid input data");
  }

  const { name: sanitizedName, email: sanitizedEmail } = parsed.data;

  const record = await prisma.subscriber.upsert({
    where: { email: sanitizedEmail },
    update: {
      name: sanitizedName,
      source,
      updatedAt: new Date(),
    },
    create: {
      name: sanitizedName,
      email: sanitizedEmail,
      source,
      status: "ACTIVE",
    },
  });

  return record;
}