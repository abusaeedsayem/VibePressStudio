import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getMemorySubscribers, deleteMemorySubscriber } from "@/lib/db/memoryStore";

export const dynamic = "force-dynamic";

export async function GET() {
  let dbSubscribers: any[] = [];
  try {
    dbSubscribers = await prisma.subscriber.findMany({
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        name: true,
        email: true,
        source: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  } catch (err) {
    console.warn("Prisma DB fetch warning (using fallback store):", err);
  }

  // Combine DB subscribers and memory fallback subscribers without duplicates
  const memorySubscribers = getMemorySubscribers();
  const emailSet = new Set(dbSubscribers.map((s) => s.email.toLowerCase()));

  const combined = [
    ...dbSubscribers,
    ...memorySubscribers.filter((s) => !emailSet.has(s.email.toLowerCase())),
  ];

  return NextResponse.json({ success: true, subscribers: combined });
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { success: false, error: "Subscriber ID is required" },
        { status: 400 }
      );
    }

    // Try deleting from DB
    try {
      await prisma.subscriber.delete({
        where: { id },
      });
    } catch (err) {
      // Ignored if DB record not present or DB unreachable
    }

    // Delete from memory store
    deleteMemorySubscriber(id);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Failed to delete subscriber:", err);
    return NextResponse.json(
      { success: false, error: "Failed to delete subscriber" },
      { status: 500 }
    );
  }
}
