import { NextResponse } from "next/server";
import { fetchAllSupportTickets, deleteTicket, updateTicketStatus } from "@/lib/db/tickets";

export async function GET() {
  try {
    const tickets = await fetchAllSupportTickets();
    return NextResponse.json({
      success: true,
      tickets,
    });
  } catch (error) {
    console.error("Error fetching support tickets for admin:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch tickets" },
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
        { success: false, error: "Ticket ID is required" },
        { status: 400 }
      );
    }

    await deleteTicket(id);
    return NextResponse.json({
      success: true,
      message: "Ticket deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting support ticket:", error);
    return NextResponse.json(
      { success: false, error: "Failed to delete ticket" },
      { status: 500 }
    );
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { id, status } = body;

    if (!id || !status) {
      return NextResponse.json(
        { success: false, error: "ID and status are required" },
        { status: 400 }
      );
    }

    await updateTicketStatus(id, status);
    return NextResponse.json({
      success: true,
      message: `Ticket status updated to ${status}`,
    });
  } catch (error) {
    console.error("Error updating support ticket status:", error);
    return NextResponse.json(
      { success: false, error: "Failed to update ticket status" },
      { status: 500 }
    );
  }
}
