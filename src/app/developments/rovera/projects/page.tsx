import { Metadata } from "next";
import RoveraProjectsView from "@/components/RoveraProjectsView";

export const metadata: Metadata = {
  title: "ROVERA Architectural Dossier & Disciplines | STTHIRA",
  description:
    "Explore the architectural specifications, sub-grade infrastructure, flamed basalt gatehouse, bespoke villa parcels, and biophilic landscape at ROVERA North Bengaluru.",
};

export default function RoveraProjectsPage() {
  return <RoveraProjectsView />;
}
