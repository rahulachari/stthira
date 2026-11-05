import { NextResponse } from "next/server";
import { getEnquiries, saveEnquiry } from "@/lib/db";

export async function GET() {
  try {
    const list = getEnquiries();
    return NextResponse.json({ success: true, enquiries: list });
  } catch (error) {
    console.error("GET /api/enquiries error:", error);
    return NextResponse.json({ success: false, error: "Failed to fetch enquiries" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, interestedDevelopment, enquiryType, visitDate, preferredTime, message, privacyConsent } = body;

    // Streamlined, client-friendly validation
    const trimmedName = (fullName || "").trim();
    if (!trimmedName || trimmedName.length < 2) {
      return NextResponse.json({ success: false, error: "Please enter your name." }, { status: 400 });
    }

    const trimmedPhone = (phone || "").trim();
    if (!trimmedPhone || trimmedPhone.length < 8) {
      return NextResponse.json({ success: false, error: "Please enter a valid contact number." }, { status: 400 });
    }

    const trimmedEmail = (email || "").trim().toLowerCase();

    const saved = saveEnquiry({
      fullName: trimmedName,
      email: trimmedEmail || `${trimmedPhone}@contact.stthira.com`,
      phone: trimmedPhone,
      interestedDevelopment: interestedDevelopment || "ROVERA (North Bengaluru)",
      enquiryType: enquiryType || "Direct Consultation",
      visitDate: visitDate || undefined,
      preferredTime: preferredTime || undefined,
      message: message ? message.trim() : undefined,
      privacyConsent: privacyConsent !== undefined ? Boolean(privacyConsent) : true,
    });

    return NextResponse.json({
      success: true,
      message: "Thank you for reaching out to STTHIRA. Our senior relationship manager will connect with you shortly.",
      enquiryId: saved.id,
    });
  } catch (error) {
    console.error("POST /api/enquiries error:", error);
    return NextResponse.json({ success: false, error: "An unexpected error occurred. Please try again." }, { status: 500 });
  }
}
