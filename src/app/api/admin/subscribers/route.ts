import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const subscribers = await prisma.subscriber.findMany({
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
    return NextResponse.json({ success: true, subscribers });
  } catch (err) {
    console.error("Failed to fetch subscribers:", err);
    return NextResponse.json(
      { success: false, subscribers: [], error: "Failed to fetch subscribers" },
      { status: 500 }
    );
  }
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

    await prisma.subscriber.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Failed to delete subscriber:", err);
    return NextResponse.json(
      { success: false, error: "Failed to delete subscriber" },
      { status: 500 }
    );
  }
}
