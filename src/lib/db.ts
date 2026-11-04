import fs from "fs";
import path from "path";

export interface EnquiryRecord {
  id: string;
  createdAt: string;
  fullName: string;
  email: string;
  phone: string;
  interestedDevelopment: string;
  enquiryType: "General Enquiry" | "Request Callback" | "Schedule Site Visit";
  visitDate?: string;
  preferredTime?: string;
  message?: string;
  privacyConsent: boolean;
  status: "New" | "Contacted" | "Site Visit Scheduled" | "Completed" | "Archived";
  notes?: string;
}

const DATA_DIR = path.join(process.cwd(), "src", "data");
const DB_FILE = path.join(DATA_DIR, "enquiries.json");

const SEED_ENQUIRIES: EnquiryRecord[] = [
  {
    id: "enq-101",
    createdAt: "2026-11-03T14:30:00.000Z",
    fullName: "Vikramaditya Singhania",
    email: "v.singhania@apexholding.com",
    phone: "+91 98200 45112",
    interestedDevelopment: "ROVERA",
    enquiryType: "Schedule Site Visit",
    visitDate: "2026-11-08",
    preferredTime: "11:00 AM",
    message: "Interested in the 4,000 sq.ft Master Estate parcel. Requesting private chauffeured walkthrough of the western arboretum boundary.",
    privacyConsent: true,
    status: "Site Visit Scheduled",
    notes: "HNW investor based in Mumbai. Managing director requested private executive vehicle pickup from Kempegowda Airport.",
  },
  {
    id: "enq-102",
    createdAt: "2026-11-04T09:15:00.000Z",
    fullName: "Ananya Deshmukh",
    email: "ananya.deshmukh@venturestudio.in",
    phone: "+91 99801 88402",
    interestedDevelopment: "ROVERA",
    enquiryType: "Request Callback",
    preferredTime: "Between 2:00 PM – 4:00 PM",
    message: "Looking for two contiguous 2,400 sq.ft Signature plots for an extended family compound. Seeking clarification on architectural covenants.",
    privacyConsent: true,
    status: "New",
    notes: "Callback scheduled for relationship manager today.",
  },
  {
    id: "enq-103",
    createdAt: "2026-11-02T18:40:00.000Z",
    fullName: "Dr. K. R. Nambiar",
    email: "kr.nambiar@specialtyhealth.org",
    phone: "+91 94480 33291",
    interestedDevelopment: "ROVERA",
    enquiryType: "General Enquiry",
    message: "Please share the comprehensive master-plan documentation and details regarding the underground utility specifications.",
    privacyConsent: true,
    status: "Contacted",
    notes: "Brochure and engineering docket shared via encrypted email.",
  },
];

function ensureDbFile() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(DB_FILE)) {
    fs.writeFileSync(DB_FILE, JSON.stringify(SEED_ENQUIRIES, null, 2), "utf-8");
  }
}

export function getEnquiries(): EnquiryRecord[] {
  try {
    ensureDbFile();
    const data = fs.readFileSync(DB_FILE, "utf-8");
    return JSON.parse(data) as EnquiryRecord[];
  } catch (error) {
    console.error("Error reading enquiries DB:", error);
    return SEED_ENQUIRIES;
  }
}

export function saveEnquiry(enquiry: Omit<EnquiryRecord, "id" | "createdAt" | "status">): EnquiryRecord {
  ensureDbFile();
  const list = getEnquiries();
  const newRecord: EnquiryRecord = {
    ...enquiry,
    id: "enq-" + Date.now().toString(36) + Math.random().toString(36).substring(2, 5),
    createdAt: new Date().toISOString(),
    status: "New",
  };
  list.unshift(newRecord);
  fs.writeFileSync(DB_FILE, JSON.stringify(list, null, 2), "utf-8");
  return newRecord;
}

export function updateEnquiryStatus(id: string, status: EnquiryRecord["status"], notes?: string): boolean {
  ensureDbFile();
  const list = getEnquiries();
  const index = list.findIndex((e) => e.id === id);
  if (index === -1) return false;
  list[index].status = status;
  if (notes !== undefined) {
    list[index].notes = notes;
  }
  fs.writeFileSync(DB_FILE, JSON.stringify(list, null, 2), "utf-8");
  return true;
}

export function deleteEnquiry(id: string): boolean {
  ensureDbFile();
  const list = getEnquiries();
  const filtered = list.filter((e) => e.id !== id);
  if (filtered.length === list.length) return false;
  fs.writeFileSync(DB_FILE, JSON.stringify(filtered, null, 2), "utf-8");
  return true;
}

