import { NextResponse } from "next/server";
import { updateEnquiryStatus, deleteEnquiry } from "@/lib/db";

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { status, notes } = body;

    const ok = updateEnquiryStatus(id, status, notes);
    if (!ok) {
      return NextResponse.json({ success: false, error: "Enquiry not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: "Enquiry updated successfully" });
  } catch (error) {
    console.error("PATCH /api/enquiries error:", error);
    return NextResponse.json({ success: false, error: "Failed to update enquiry" }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const ok = deleteEnquiry(id);
    if (!ok) {
      return NextResponse.json({ success: false, error: "Enquiry not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: "Enquiry deleted successfully" });
  } catch (error) {
    console.error("DELETE /api/enquiries error:", error);
    return NextResponse.json({ success: false, error: "Failed to delete enquiry" }, { status: 500 });
  }
}

