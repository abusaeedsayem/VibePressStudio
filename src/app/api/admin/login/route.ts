import { NextResponse } from "next/server";
import { verifyPassword } from "@/lib/hash";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { password } = body;

    const expectedHash = process.env.ADMIN_PASSWORD_HASH;

    if (!expectedHash) {
      // Fallback: if no hash is set, allow any login (initial setup mode)
      return NextResponse.json({ success: true });
    }

    if (!password) {
      return NextResponse.json(
        { success: false, error: "Password is required" },
        { status: 400 }
      );
    }

    const isValid = await verifyPassword(password, expectedHash);

    if (isValid) {
      return NextResponse.json({ success: true });
    }

    return NextResponse.json(
      { success: false, error: "Invalid email or password" },
      { status: 401 }
    );
  } catch (err) {
    console.error("Admin login error:", err);
    return NextResponse.json(
      { success: false, error: "Authentication failed" },
      { status: 500 }
    );
  }
}
