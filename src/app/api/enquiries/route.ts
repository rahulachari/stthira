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

    // Strict validation
    if (!fullName || typeof fullName !== "string" || fullName.trim().length < 2) {
      return NextResponse.json({ success: false, error: "Please enter your full name." }, { status: 400 });
    }

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ success: false, error: "Please enter a valid email address." }, { status: 400 });
    }

    if (!phone || typeof phone !== "string" || phone.trim().length < 8) {
      return NextResponse.json({ success: false, error: "Please enter a valid phone number." }, { status: 400 });
    }

    if (!privacyConsent) {
      return NextResponse.json({ success: false, error: "You must accept the privacy policy to proceed." }, { status: 400 });
    }

    const saved = saveEnquiry({
      fullName: fullName.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      interestedDevelopment: interestedDevelopment || "ROVERA",
      enquiryType: enquiryType || "General Enquiry",
      visitDate: visitDate || undefined,
      preferredTime: preferredTime || undefined,
      message: message ? message.trim() : undefined,
      privacyConsent: Boolean(privacyConsent),
    });

    return NextResponse.json({
      success: true,
      message: "Thank you for reaching out to STTHIRA. A senior relationship advisor will contact you shortly.",
      enquiryId: saved.id,
    });
  } catch (error) {
    console.error("POST /api/enquiries error:", error);
    return NextResponse.json({ success: false, error: "An unexpected error occurred. Please try again." }, { status: 500 });
  }
}

