import { Metadata } from "next";
import RoveraView from "@/components/RoveraView";

export const metadata: Metadata = {
  title: "ROVERA by STTHIRA — Luxury Plotted Living | North Bengaluru",
  description:
    "ROVERA is the inaugural 42+ acre luxury plotted enclave by STTHIRA in North Bengaluru. Featuring 186 curated residential villa plots, 100% underground utilities, and 45% conserved nature.",
};

export default function RoveraPage() {
  return <RoveraView />;
}
