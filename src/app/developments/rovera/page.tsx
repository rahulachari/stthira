import { Metadata } from "next";
import RoveraView from "@/components/RoveraView";

export const metadata: Metadata = {
  title: "ROVERA by STTHIRA — 3-Acre Luxury Plotted Sanctuary | Devanahalli–Doddaballapura Road",
  description:
    "ROVERA is an exclusive 3-acre boutique luxury plotted enclave by STTHIRA on Devanahalli–Doddaballapura Road, North Bengaluru. Featuring monumental double-height entrance gates, 24 bespoke villa plots, and 100% underground utilities.",
};

export default function RoveraPage() {
  return <RoveraView />;
}
