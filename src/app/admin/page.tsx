"use client";

import { useState, useEffect } from "react";
import {
  Users,
  Building,
  FileText,
  HelpCircle,
  Shield,
  Download,
  Trash2,
  CheckCircle,
  Clock,
  Plus,
  RefreshCw,
  Search,
  Lock,
  Unlock,
  AlertCircle,
  ExternalLink,
} from "lucide-react";
import { DEVELOPMENTS, JOURNAL_ARTICLES, FAQS, COMPANY_INFO } from "@/lib/data";
import { EnquiryRecord } from "@/lib/db";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState("");
  const [authError, setAuthError] = useState("");

  const [activeTab, setActiveTab] = useState<"enquiries" | "developments" | "journal" | "faqs" | "governance">("enquiries");
  const [enquiries, setEnquiries] = useState<EnquiryRecord[]>([]);
  const [loadingEnquiries, setLoadingEnquiries] = useState(false);
  const [enquiryStatusFilter, setEnquiryStatusFilter] = useState("All");
  const [searchLeadQuery, setSearchLeadQuery] = useState("");

  // Projects state for adding new development without code changes
  const [developmentsList, setDevelopmentsList] = useState(DEVELOPMENTS);
  const [showAddProjectModal, setShowAddProjectModal] = useState(false);
  const [newProjectName, setNewProjectName] = useState("");
  const [newProjectLocation, setNewProjectLocation] = useState("");
  const [newProjectAcres, setNewProjectAcres] = useState("");
  const [newProjectCategory, setNewProjectCategory] = useState<"Upcoming" | "Ongoing" | "Completed">("Upcoming");

  // Load enquiries from API
  const fetchEnquiries = async () => {
    setLoadingEnquiries(true);
    try {
      const res = await fetch("/api/enquiries");
      const data = await res.json();
      if (data.success && Array.isArray(data.enquiries)) {
        setEnquiries(data.enquiries);
      }
    } catch (err) {
      console.error("Failed to fetch enquiries:", err);
    } finally {
      setLoadingEnquiries(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchEnquiries();
    }
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode.trim() === "STTHIRA2026" || passcode.trim() === "admin") {
      setIsAuthenticated(true);
      setAuthError("");
    } else {
      setAuthError("Invalid administrative security key. Enter 'STTHIRA2026' or 'admin'.");
    }
  };

  const handleUpdateStatus = async (id: string, newStatus: EnquiryRecord["status"]) => {
    try {
      const res = await fetch(`/api/enquiries/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      if (res.ok) {
        setEnquiries((prev) =>
          prev.map((e) => (e.id === id ? { ...e, status: newStatus } : e))
        );
      }
    } catch (err) {
      console.error("Failed to update status:", err);
    }
  };

  const handleDeleteEnquiry = async (id: string) => {
    if (!confirm("Are you sure you want to permanently delete this lead record?")) return;
    try {
      const res = await fetch(`/api/enquiries/${id}`, { method: "DELETE" });
      if (res.ok) {
        setEnquiries((prev) => prev.filter((e) => e.id !== id));
      }
    } catch (err) {
      console.error("Failed to delete enquiry:", err);
    }
  };

  const exportLeadsCsv = () => {
    if (enquiries.length === 0) return;
    const headers = ["ID", "Date", "Full Name", "Email", "Phone", "Development", "Type", "Status", "Notes"];
    const rows = enquiries.map((e) => [
      e.id,
      new Date(e.createdAt).toLocaleString("en-IN"),
      `"${e.fullName}"`,
      e.email,
      e.phone,
      e.interestedDevelopment,
      e.enquiryType,
      e.status,
      `"${(e.notes || e.message || "").replace(/"/g, '""')}"`,
    ]);
    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `STTHIRA_Enquiries_${new Date().toISOString().split("T")[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleAddNewProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProjectName.trim()) return;

    const newDev = {
      id: newProjectName.toLowerCase().replace(/\s+/g, "-"),
      slug: newProjectName.toLowerCase().replace(/\s+/g, "-"),
      name: newProjectName.toUpperCase(),
      brand: "STTHIRA",
      tagline: "A new landmark of planned luxury living.",
      category: newProjectCategory,
      statusBadge: `${newProjectCategory} — Pre-Launch`,
      location: newProjectLocation || "Bengaluru Growth Corridor",
      acres: newProjectAcres || "50+ Acres",
      plotsCount: "Exclusive Parcels",
      priceGuide: "Register Early Interest",
      shortIntro: `An exceptional luxury plotted development curated under the parent corporate stewardship of STTHIRA.`,
      description: `Conceived with architectural rigor and forensic legal due diligence, ${newProjectName} expands STTHIRA's luxury portfolio in India.`,
      heroImage: "/images/hero-cinematic.jpg",
      coverImage: "/images/aerial-view.jpg",
      galleryImages: [
        { url: "/images/hero-cinematic.jpg", title: "Entrance Structure", category: "Architecture" },
        { url: "/images/aerial-view.jpg", title: "Aerial Master Plan", category: "Planning" },
      ],
      highlights: ["100% Underground Infrastructure", "45% Conserved Green Spaces", "Clear Title Audit"],
      connectivity: [{ destination: "International Airport", time: "25 Mins", distance: "20 km" }],
      plotSizes: [{ name: "Master Plot", dimension: "40'x60'", areaSqFt: "2,400 Sq.Ft", idealFor: "Luxury Villa" }],
      amenities: [{ name: "Resident Club", category: "Clubhouse", description: "Minimalist community pavilion." }],
      reraStatus: "Regulatory Submission in Progress",
      reraDisclaimer: "Pre-planning stage. No financial solicitations.",
      masterPlanNote: "Conceptual zoning layout.",
    };

    setDevelopmentsList((prev) => [...prev, newDev]);
    setShowAddProjectModal(false);
    setNewProjectName("");
    setNewProjectLocation("");
    setNewProjectAcres("");
    alert(`Project ${newDev.name} has been successfully registered under the STTHIRA portfolio!`);
  };

  const filteredEnquiries = enquiries.filter((e) => {
    const matchesStatus = enquiryStatusFilter === "All" || e.status === enquiryStatusFilter;
    const matchesSearch =
      searchLeadQuery.trim() === "" ||
      e.fullName.toLowerCase().includes(searchLeadQuery.toLowerCase()) ||
      e.email.toLowerCase().includes(searchLeadQuery.toLowerCase()) ||
      e.phone.includes(searchLeadQuery);
    return matchesStatus && matchesSearch;
  });

  // Login Gate Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center p-6 pt-24">
        <div className="w-full max-w-md bg-neutral-950 border border-neutral-800 p-8 sm:p-10 shadow-2xl">
          <div className="text-center mb-8">
            <span className="text-[10px] uppercase tracking-[0.35em] text-neutral-500 font-sans block mb-1">
              Internal Corporate Access
            </span>
            <h1 className="font-editorial text-3xl sm:text-4xl uppercase tracking-wider text-white">
              STTHIRA CMS
            </h1>
            <p className="text-xs text-neutral-400 font-sans mt-2">
              Corporate Content &amp; Leads Management Console
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            {authError && (
              <div className="p-3 bg-red-950/50 border border-red-900 text-xs text-red-200">
                {authError}
              </div>
            )}

            <div>
              <label className="block text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-2">
                Administrative Security Key
              </label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                <input
                  type="password"
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  placeholder="Enter STTHIRA2026 or admin"
                  className="w-full bg-neutral-900 border border-neutral-800 pl-10 pr-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors"
                />
              </div>
              <p className="text-[10px] text-neutral-500 font-sans mt-1">
                Default authorization passkey: <code className="text-neutral-300">STTHIRA2026</code>
              </p>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-white text-black font-sans text-xs uppercase tracking-[0.25em] font-medium hover:bg-neutral-200 transition-colors"
            >
              Authenticate Session
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Top Control Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-neutral-800 pb-8 mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 font-sans">
                Corporate Console • Secure Mode
              </span>
            </div>
            <h1 className="font-editorial text-3xl sm:text-4xl uppercase tracking-wider text-white mt-1">
              STTHIRA ADMINISTRATIVE CMS
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsAuthenticated(false)}
              className="px-4 py-2 border border-neutral-800 text-xs uppercase tracking-wider text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors"
            >
              Lock Console
            </button>
            <a
              href="/"
              target="_blank"
              className="px-4 py-2 bg-neutral-900 border border-neutral-800 text-xs uppercase tracking-wider text-white hover:bg-white hover:text-black transition-colors flex items-center gap-1.5"
            >
              <span>View Live Platform</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* CMS Navigation Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-neutral-800 pb-4 mb-8 text-xs uppercase tracking-widest font-sans">
          <button
            onClick={() => setActiveTab("enquiries")}
            className={`px-4 py-2.5 flex items-center gap-2 transition-colors ${
              activeTab === "enquiries" ? "bg-white text-black font-medium" : "text-neutral-400 hover:text-white"
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>Enquiries &amp; Leads ({enquiries.length})</span>
          </button>
          <button
            onClick={() => setActiveTab("developments")}
            className={`px-4 py-2.5 flex items-center gap-2 transition-colors ${
              activeTab === "developments" ? "bg-white text-black font-medium" : "text-neutral-400 hover:text-white"
            }`}
          >
            <Building className="w-3.5 h-3.5" />
            <span>Developments ({developmentsList.length})</span>
          </button>
          <button
            onClick={() => setActiveTab("journal")}
            className={`px-4 py-2.5 flex items-center gap-2 transition-colors ${
              activeTab === "journal" ? "bg-white text-black font-medium" : "text-neutral-400 hover:text-white"
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Journal Articles ({JOURNAL_ARTICLES.length})</span>
          </button>
          <button
            onClick={() => setActiveTab("faqs")}
            className={`px-4 py-2.5 flex items-center gap-2 transition-colors ${
              activeTab === "faqs" ? "bg-white text-black font-medium" : "text-neutral-400 hover:text-white"
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>FAQs ({FAQS.length})</span>
          </button>
          <button
            onClick={() => setActiveTab("governance")}
            className={`px-4 py-2.5 flex items-center gap-2 transition-colors ${
              activeTab === "governance" ? "bg-white text-black font-medium" : "text-neutral-400 hover:text-white"
            }`}
          >
            <Shield className="w-3.5 h-3.5" />
            <span>Governance &amp; SEO</span>
          </button>
        </div>

        {/* TAB 1: ENQUIRIES & LEADS MANAGEMENT */}
        {activeTab === "enquiries" && (
          <div className="space-y-6">
            {/* Filter & Actions Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-neutral-900/60 p-4 border border-neutral-800">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-neutral-500" />
                  <input
                    type="text"
                    value={searchLeadQuery}
                    onChange={(e) => setSearchLeadQuery(e.target.value)}
                    placeholder="Search leads by name, email, phone..."
                    className="bg-black border border-neutral-800 pl-9 pr-3 py-1.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <select
                  value={enquiryStatusFilter}
                  onChange={(e) => setEnquiryStatusFilter(e.target.value)}
                  className="bg-black border border-neutral-800 px-3 py-1.5 text-xs text-white focus:outline-none focus:border-white"
                >
                  <option value="All">All Statuses</option>
                  <option value="New">New</option>
                  <option value="Contacted">Contacted</option>
                  <option value="Site Visit Scheduled">Site Visit Scheduled</option>
                  <option value="Completed">Completed</option>
                  <option value="Archived">Archived</option>
                </select>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={fetchEnquiries}
                  className="p-2 bg-black border border-neutral-800 text-neutral-400 hover:text-white"
                  title="Refresh leads list"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${loadingEnquiries ? "animate-spin" : ""}`} />
                </button>
                <button
                  onClick={exportLeadsCsv}
                  className="px-4 py-1.5 bg-white text-black text-xs uppercase tracking-wider font-medium flex items-center gap-1.5 hover:bg-neutral-200 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Export CSV</span>
                </button>
              </div>
            </div>

            {/* Enquiries Table */}
            <div className="bg-black border border-neutral-800 overflow-x-auto">
              <table className="w-full text-left text-xs font-sans">
                <thead className="bg-neutral-900 border-b border-neutral-800 text-neutral-400 uppercase tracking-widest text-[10px]">
                  <tr>
                    <th className="p-4">Date / Ref</th>
                    <th className="p-4">Patron Details</th>
                    <th className="p-4">Development &amp; Type</th>
                    <th className="p-4">Schedule / Preferences</th>
                    <th className="p-4">Status Pipeline</th>
                    <th className="p-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-900 text-neutral-300">
                  {filteredEnquiries.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="p-8 text-center text-neutral-500">
                        No enquiry records found matching current criteria.
                      </td>
                    </tr>
                  ) : (
                    filteredEnquiries.map((enq) => (
                      <tr key={enq.id} className="hover:bg-neutral-950 transition-colors">
                        <td className="p-4 font-mono text-[11px]">
                          <span className="text-white block font-semibold">{enq.id}</span>
                          <span className="text-neutral-500 text-[10px]">
                            {new Date(enq.createdAt).toLocaleDateString("en-IN", {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                            })}
                          </span>
                        </td>

                        <td className="p-4">
                          <strong className="text-white block font-medium">{enq.fullName}</strong>
                          <span className="text-neutral-400 block text-[11px]">{enq.email}</span>
                          <span className="text-neutral-500 block text-[11px]">{enq.phone}</span>
                        </td>

                        <td className="p-4">
                          <span className="text-white font-medium block">{enq.interestedDevelopment}</span>
                          <span className="text-neutral-400 text-[10px] uppercase tracking-wider">
                            {enq.enquiryType}
                          </span>
                        </td>

                        <td className="p-4 text-[11px]">
                          {enq.visitDate && (
                            <div className="text-neutral-300">
                              <span className="text-neutral-500">Visit: </span>
                              {enq.visitDate} {enq.preferredTime ? `(${enq.preferredTime})` : ""}
                            </div>
                          )}
                          {enq.message && (
                            <p className="text-neutral-400 italic line-clamp-2 max-w-xs mt-1">
                              &ldquo;{enq.message}&rdquo;
                            </p>
                          )}
                        </td>

                        <td className="p-4">
                          <select
                            value={enq.status}
                            onChange={(e) => handleUpdateStatus(enq.id, e.target.value as EnquiryRecord["status"])}
                            className={`px-2 py-1 text-[10px] uppercase tracking-wider font-semibold border ${
                              enq.status === "New"
                                ? "bg-white text-black border-white"
                                : enq.status === "Site Visit Scheduled"
                                ? "bg-neutral-800 text-white border-neutral-600"
                                : enq.status === "Contacted"
                                ? "bg-neutral-900 text-neutral-300 border-neutral-700"
                                : "bg-neutral-950 text-neutral-500 border-neutral-800"
                            }`}
                          >
                            <option value="New">New</option>
                            <option value="Contacted">Contacted</option>
                            <option value="Site Visit Scheduled">Site Visit Scheduled</option>
                            <option value="Completed">Completed</option>
                            <option value="Archived">Archived</option>
                          </select>
                        </td>

                        <td className="p-4 text-right">
                          <button
                            onClick={() => handleDeleteEnquiry(enq.id)}
                            className="p-1.5 text-neutral-500 hover:text-red-400 transition-colors"
                            title="Delete Lead"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 2: DEVELOPMENTS PORTFOLIO MANAGER */}
        {activeTab === "developments" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-editorial text-2xl uppercase tracking-wider text-white">
                  STTHIRA Development Portfolio
                </h3>
                <p className="text-xs text-neutral-400 font-sans mt-0.5">
                  Manage active projects and seamlessly introduce new plotted communities under the STTHIRA parent brand.
                </p>
              </div>

              <button
                onClick={() => setShowAddProjectModal(true)}
                className="px-4 py-2 bg-white text-black text-xs uppercase tracking-wider font-medium flex items-center gap-1.5 hover:bg-neutral-200 transition-colors"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add New Development</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {developmentsList.map((dev) => (
                <div key={dev.id} className="bg-black border border-neutral-800 p-6 space-y-4">
                  <div className="flex items-center justify-between border-b border-neutral-900 pb-3">
                    <span className="text-[10px] uppercase tracking-widest text-neutral-500">
                      Parent: {dev.brand}
                    </span>
                    <span className="text-[10px] bg-neutral-900 border border-neutral-800 px-2 py-0.5 text-white uppercase tracking-wider">
                      {dev.category}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-editorial text-3xl uppercase tracking-wider text-white">
                      {dev.name}
                    </h4>
                    <p className="text-xs text-neutral-400 italic mt-0.5">
                      &ldquo;{dev.tagline}&rdquo;
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs font-sans text-neutral-400 pt-2 border-t border-neutral-900">
                    <div>Location: <span className="text-white">{dev.location}</span></div>
                    <div>Scale: <span className="text-white">{dev.acres}</span></div>
                    <div>Parcels: <span className="text-white">{dev.plotsCount}</span></div>
                    <div>RERA Status: <span className="text-white">{dev.reraStatus}</span></div>
                  </div>

                  <div className="pt-2 flex items-center justify-between border-t border-neutral-900">
                    <span className="text-[10px] uppercase tracking-wider text-neutral-500">
                      Slug: /{dev.slug}
                    </span>
                    {dev.slug === "rovera" && (
                      <a
                        href="/developments/rovera"
                        target="_blank"
                        className="text-xs uppercase tracking-wider text-white underline hover:text-neutral-400"
                      >
                        Preview Live Page
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Modal for adding a project */}
            {showAddProjectModal && (
              <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
                <div className="bg-neutral-950 border border-neutral-800 p-6 sm:p-8 max-w-lg w-full space-y-6">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-neutral-500 block mb-1">
                      Architecture Scalability
                    </span>
                    <h3 className="font-editorial text-2xl uppercase tracking-wider text-white">
                      Register New STTHIRA Development
                    </h3>
                  </div>

                  <form onSubmit={handleAddNewProject} className="space-y-4 text-xs font-sans">
                    <div>
                      <label className="block uppercase tracking-wider text-neutral-400 mb-1">
                        Development Name (e.g., AURA, TERRA, VALE) *
                      </label>
                      <input
                        type="text"
                        required
                        value={newProjectName}
                        onChange={(e) => setNewProjectName(e.target.value)}
                        placeholder="e.g. AURA"
                        className="w-full bg-neutral-900 border border-neutral-800 px-3 py-2 text-white focus:outline-none focus:border-white"
                      />
                    </div>

                    <div>
                      <label className="block uppercase tracking-wider text-neutral-400 mb-1">
                        Location Corridor
                      </label>
                      <input
                        type="text"
                        value={newProjectLocation}
                        onChange={(e) => setNewProjectLocation(e.target.value)}
                        placeholder="e.g. Goa Coastal Sanctuary / Nandi Foothills"
                        className="w-full bg-neutral-900 border border-neutral-800 px-3 py-2 text-white focus:outline-none focus:border-white"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block uppercase tracking-wider text-neutral-400 mb-1">
                          Acreage / Scale
                        </label>
                        <input
                          type="text"
                          value={newProjectAcres}
                          onChange={(e) => setNewProjectAcres(e.target.value)}
                          placeholder="e.g. 50+ Acres"
                          className="w-full bg-neutral-900 border border-neutral-800 px-3 py-2 text-white focus:outline-none focus:border-white"
                        />
                      </div>

                      <div>
                        <label className="block uppercase tracking-wider text-neutral-400 mb-1">
                          Project Status Category
                        </label>
                        <select
                          value={newProjectCategory}
                          onChange={(e) => setNewProjectCategory(e.target.value as "Upcoming" | "Ongoing" | "Completed")}
                          className="w-full bg-neutral-900 border border-neutral-800 px-3 py-2 text-white focus:outline-none focus:border-white"
                        >
                          <option value="Upcoming">Upcoming</option>
                          <option value="Ongoing">Ongoing</option>
                          <option value="Completed">Completed</option>
                        </select>
                      </div>
                    </div>

                    <div className="pt-4 flex items-center justify-end gap-3">
                      <button
                        type="button"
                        onClick={() => setShowAddProjectModal(false)}
                        className="px-4 py-2 border border-neutral-800 text-neutral-400 hover:text-white"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-6 py-2 bg-white text-black font-medium hover:bg-neutral-200"
                      >
                        Create Project
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 3: JOURNAL & BLOGS */}
        {activeTab === "journal" && (
          <div className="space-y-6">
            <h3 className="font-editorial text-2xl uppercase tracking-wider text-white">
              Published Journal Treatises ({JOURNAL_ARTICLES.length})
            </h3>
            <div className="divide-y divide-neutral-900 border border-neutral-800 bg-black">
              {JOURNAL_ARTICLES.map((article) => (
                <div key={article.slug} className="p-4 flex items-center justify-between hover:bg-neutral-950">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-neutral-500 block mb-1">
                      {article.category} • {article.date} • {article.readTime}
                    </span>
                    <h4 className="font-editorial text-lg text-white font-medium">
                      {article.title}
                    </h4>
                  </div>
                  <a
                    href={`/journal/${article.slug}`}
                    target="_blank"
                    className="text-xs uppercase tracking-wider text-neutral-400 hover:text-white underline shrink-0 ml-4"
                  >
                    View Article
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: FAQS */}
        {activeTab === "faqs" && (
          <div className="space-y-6">
            <h3 className="font-editorial text-2xl uppercase tracking-wider text-white">
              Frequently Asked Questions Registry ({FAQS.length})
            </h3>
            <div className="divide-y divide-neutral-900 border border-neutral-800 bg-black text-xs font-sans">
              {FAQS.map((faq) => (
                <div key={faq.id} className="p-4 space-y-1 hover:bg-neutral-950">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-wider text-neutral-500 font-mono">
                      Category: {faq.category}
                    </span>
                  </div>
                  <strong className="text-white block font-editorial text-base uppercase tracking-wide">
                    {faq.question}
                  </strong>
                  <p className="text-neutral-400 leading-relaxed font-light">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: GOVERNANCE & SEO */}
        {activeTab === "governance" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-black border border-neutral-800 p-6 space-y-4">
              <h3 className="font-editorial text-2xl uppercase tracking-wider text-white">
                Corporate Governance Matrix
              </h3>
              <div className="space-y-2 text-xs font-sans text-neutral-400">
                <div>Company: <strong className="text-white">{COMPANY_INFO.name}</strong></div>
                <div>Legal Entity: <strong className="text-white">{COMPANY_INFO.legalEntity}</strong></div>
                <div>Foundation Year: <strong className="text-white">{COMPANY_INFO.foundationYear}</strong></div>
                <div>Board of Directors: <strong className="text-white">{COMPANY_INFO.director}</strong></div>
                <div>Designation: <strong className="text-white">{COMPANY_INFO.directorTitle}</strong></div>
                <div>Official HQ: <span className="text-white">{COMPANY_INFO.address}</span></div>
                <div>Central Line: <span className="text-white">{COMPANY_INFO.phone}</span></div>
                <div>Direct Concierge: <span className="text-white">{COMPANY_INFO.salesPhone}</span></div>
              </div>
            </div>

            <div className="bg-black border border-neutral-800 p-6 space-y-4">
              <h3 className="font-editorial text-2xl uppercase tracking-wider text-white">
                SEO &amp; Digital Metadata Audit
              </h3>
              <div className="space-y-3 text-xs font-sans text-neutral-400">
                <div className="flex items-center gap-2 text-white">
                  <CheckCircle className="w-4 h-4" />
                  <span>Schema.org JSON-LD RealEstateAgent Structured Data Active</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <CheckCircle className="w-4 h-4" />
                  <span>OpenGraph &amp; Twitter Cards configured for all routes</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <CheckCircle className="w-4 h-4" />
                  <span>Robots.txt &amp; Dynamic XML Sitemap Enabled</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <CheckCircle className="w-4 h-4" />
                  <span>Strict Monochromatic Color System &amp; Web Vitals Optimized</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

