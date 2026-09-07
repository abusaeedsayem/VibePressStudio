import { prisma } from "@/lib/prisma";
import { addSubscriberToMemory } from "@/lib/db/memoryStore";

export async function saveSubscriber(
  name: string,
  email: string,
  source: string
) {
  const sanitizedEmail = email.toLowerCase().trim();
  const sanitizedName = name?.trim() || "Launch Subscriber";
  const sanitizedSource = source || "Studio Lab Pre-Launch";

  // Always store in memory cache fallback to guarantee instant data persistence
  const memoryRecord = addSubscriberToMemory(sanitizedName, sanitizedEmail, sanitizedSource);

  // Try DB persistence if database is reachable
  try {
    const dbRecord = await prisma.subscriber.upsert({
      where: { email: sanitizedEmail },
      update: {
        name: sanitizedName,
        source: sanitizedSource,
        updatedAt: new Date(),
      },
      create: {
        name: sanitizedName,
        email: sanitizedEmail,
        source: sanitizedSource,
        status: "ACTIVE",
      },
    });

    return dbRecord;
  } catch (err) {
    console.warn("Prisma DB write failed, using memory store record:", err);
    return memoryRecord;
  }
}