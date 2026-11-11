"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Language = "en" | "te" | "ta" | "hi" | "kn";

export interface LanguageOption {
  code: Language;
  name: string;
  nativeName: string;
}

export const LANGUAGE_OPTIONS: LanguageOption[] = [
  { code: "en", name: "English", nativeName: "English" },
  { code: "te", name: "Telugu", nativeName: "తెలుగు" },
  { code: "ta", name: "Tamil", nativeName: "தமிழ்" },
  { code: "hi", name: "Hindi", nativeName: "हिन्दी" },
  { code: "kn", name: "Kannada", nativeName: "ಕನ್ನಡ" },
];

export const TRANSLATIONS: Record<Language, Record<string, string>> = {
  en: {
    // Nav
    "nav.home": "Home",
    "nav.about": "About",
    "nav.developments": "Developments",
    "nav.rovera": "ROVERA",
    "nav.philosophy": "Philosophy",
    "nav.leadership": "Leadership",
    "nav.journal": "Journal",
    "nav.gallery": "Gallery",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "nav.enquire": "Enquire Now",

    // Hero
    "hero.badge": "STTHIRA • Master Plotted Developments • 2026",
    "hero.brand": "STTHIRA",
    "hero.headline": "BUILDING A LEGACY. SHAPING TOMORROW.",
    "hero.subheadline": "Thoughtful development. Timeless spaces. A vision for better living.",
    "hero.description": "Curating India's premier luxury plotted estates rooted in architectural permanence, forensic legal purity, and fiduciary trust.",
    "hero.explore": "Explore Our Developments",
    "hero.discover": "Discover STTHIRA",
    "hero.featured": "Featured: ROVERA — Bengaluru",

    // Brand Intro
    "intro.badge": "The STTHIRA Ethos",
    "intro.headline": "BEYOND DEVELOPMENT. A VISION OF LIVING.",
    "intro.text1": "STTHIRA was founded with a singular conviction: that luxury in the 21st century is not measured by decorative excess, but by the quiet permanence of land, architectural restraint, and uncompromising fiduciary integrity.",
    "intro.text2": "Operating as an elite corporate master developer in India, STTHIRA conceives master-planned plotted communities where each residential parcel is engineered to institutional standards.",
    "intro.explore": "Explore STTHIRA Corporate Profile",

    // Stats
    "stats.yearVal": "2026",
    "stats.yearLabel": "FOUNDATION YEAR",
    "stats.titleVal": "100%",
    "stats.titleLabel": "CLEAR TITLE AUDIT",
    "stats.greenVal": "45%",
    "stats.greenLabel": "PRESERVED GREEN SPACE",
    "stats.codeVal": "100%",
    "stats.codeLabel": "ARCHITECTURAL COMPLIANCE",

    // Featured Project
    "project.badge": "Featured Master Development",
    "project.title": "OUR DEVELOPMENTS",
    "project.tagline": "An expression of thoughtfully planned luxury plotted living.",
    "project.roveraIntro": "ROVERA is the premiere luxury plotted development under the STTHIRA brand. Conceived with architectural rigor, expansive green corridors, underground utilities, and monumental stone entrance architecture.",
    "project.cta": "Explore ROVERA Page",
    "project.all": "All Developments",

    // Rovera Card
    "rovera.status": "NOW ENQUIRING — PHASE 1",
    "rovera.location": "North Bengaluru Growth Corridor",
    "rovera.acresVal": "42+",
    "rovera.acresLabel": "Acres Master Enclave",
    "rovera.plotsVal": "186",
    "rovera.plotsLabel": "Exclusive Villa Plots",
    "rovera.price": "Institutional-Grade Luxury",
    "rovera.readMore": "EXPLORE ROVERA MASTERPLAN",

    // Partnership
    "partnership.badge": "Master Developer & Flagship Portfolio",
    "partnership.title": "STTHIRA | ROVERA",
    "partnership.subtitle": "A Sovereign Expression of Luxury Plotted Living",
    "partnership.desc": "Uniting STTHIRA's architectural mastery and institutional capital governance with ROVERA's boutique 3-acre plotted sanctuary in North Bengaluru.",
    "partnership.stthiraBrand": "STTHIRA",
    "partnership.roveraBrand": "ROVERA",

    // Leadership
    "leadership.badge": "Board Governance",
    "leadership.title": "LEADERSHIP & STEWARDSHIP",
    "leadership.name": "Lokesh Mudhaliar",
    "leadership.role": "Board of Directors • STTHIRA",
    "leadership.quote": "At STTHIRA, our standard is permanence. We do not develop merely for transactions; we curate generational landmarks where land becomes an enduring canvas for modern architecture and lasting value.",
    "leadership.directors": "Board of Directors",
    "leadership.viewGovernance": "View Governance Profile",

    // Philosophy
    "phil.badge": "Core Brand Direction",
    "phil.headline": "REFINED IN THOUGHT. BOLD IN VISION.",
    "phil.sub": "Our eight foundational pillars dictate every master plan, architectural threshold, and fiduciary commitment.",
    "phil.read": "Read Full Treatise",
    "phil.pillar1": "01 VISION & SCALE",
    "phil.pillar2": "02 PRECISION ENGINEERING",
    "phil.pillar4": "04 ARCHITECTURAL RESTRAINT",
    "phil.pillar6": "06 FIDUCIARY TRUST",

    // Journal
    "journal.badge": "Curated Treatises",
    "journal.title": "ARCHITECTURAL ARCHIVES & INSIGHTS",
    "journal.sub": "Critical perspectives on land tenure, biophilic urban planning, and generational wealth.",
    "journal.readMore": "Read Treatise",
    "journal.viewAll": "View All Articles",

    // FAQ
    "faq.badge": "Clarity & Verification",
    "faq.title": "FREQUENTLY ASKED QUESTIONS",
    "faq.sub": "Clear answers regarding STTHIRA corporate governance, ROVERA plotted living, and legal diligence.",
    "faq.searchPlaceholder": "Search by topic, legal due diligence, approvals...",
    "faq.noMatch": "No matching questions found. Contact our advisory team directly.",
    "faq.viewAll": "View All Questions",

    // Form
    "form.badge": "Private Advisory Concierge",
    "form.headline": "LET'S BEGIN A CONVERSATION.",
    "form.sub": "Schedule a private consultation, request an executive callback, or arrange a chauffeured site visit to ROVERA.",
    "form.subDesc": "Whether you seek private consultation regarding ROVERA plot configurations, wish to schedule a chauffeured site walkthrough, or are evaluating corporate partnership opportunities with STTHIRA, our relationship directors are at your service.",
    "form.enquiry": "Enquire Now",
    "form.callback": "Callback",
    "form.sitevisit": "Site Visit",
    "form.fullname": "Name",
    "form.email": "Email",
    "form.phone": "Contact No *",
    "form.dev": "Development of Interest",
    "form.notes": "Private Consultation Notes",
    "form.submit": "SUBMIT",
    "form.submitting": "Submitting...",
    "form.consent": "I agree to be contacted through SMS, RCS, Email, Phone and other communication channels for knowing further details.",
    "form.successTitle": "Enquiry Registered Successfully",
    "form.successSub": "A Senior Relationship Director from STTHIRA will contact you within 4 business hours.",

    // Footer
    "footer.col1": "DEVELOPMENTS",
    "footer.col2": "PHILOSOPHY",
    "footer.col3": "COMPANY",
    "footer.col4": "LEGAL",
    "footer.col5": "CONNECT",
    "footer.allDevs": "All Developments",
    "footer.masterPlanMatrix": "Master Plan Matrix",
    "footer.plotConfigs": "Plot Configurations",
    "footer.eightPillars": "Eight Core Pillars",
    "footer.p1": "01 Vision & Scale",
    "footer.p2": "02 Precision Engineering",
    "footer.p4": "04 Architectural Restraint",
    "footer.p5": "05 Native Ecology",
    "footer.p6": "06 Fiduciary Trust",
    "footer.aboutStthira": "About STTHIRA",
    "footer.leadership": "Leadership & Governance",
    "footer.alliance": "STTHIRA & ROVERA",
    "footer.gallery": "Architectural Gallery",
    "footer.journal": "Journal & Insights",
    "footer.faqs": "Frequently Asked Questions",
    "footer.privacy": "Privacy Policy (DPDP Act)",
    "footer.terms": "Terms of Service",
    "footer.disclaimer": "Website Disclaimer",
    "footer.cookies": "Cookie Policy",
    "footer.projectDisclaimer": "Project Disclaimer",
    "footer.rera": "RERA Disclosures",
    "footer.office": "Corporate Office",
    "footer.concierge": "Direct Concierge",
    "footer.conciergeDesk": "Direct Concierge",
    "footer.statement": "THOUGHTFULLY BUILT. TIMELESSLY ENVISIONED.",
    "footer.desc": "STTHIRA curates institutional-grade luxury plotted developments designed around architectural restraint, forensic legal purity, and long-term capital permanence.",
    "footer.rights": "© 2026 STTHIRA DEVELOPMENTS PRIVATE LIMITED. ALL RIGHTS RESERVED.",
    "footer.hierarchyTitle": "Hierarchy & Governance",
    "footer.hierarchyText": "STTHIRA Developments Private Limited is the parent master developer (Est. 2026, Board of Directors: Lokesh Mudhaliar). ROVERA is an exclusive plotted living development under STTHIRA.",
    "footer.reraCompliance": "RERA & DPDP Compliant",
    "footer.contactAdvisory": "Contact Advisory",
    "footer.reraAudit": "RERA Audit",
  },

  te: {
    // Nav
    "nav.home": "హోమ్",
    "nav.about": "గురించి",
    "nav.developments": "ప్రాజెక్టులు",
    "nav.rovera": "రోవెరా",
    "nav.philosophy": "సిద్ధాంతం",
    "nav.leadership": "నాయకత్వం",
    "nav.journal": "జర్నల్",
    "nav.gallery": "గ్యాలరీ",
    "nav.faq": "ప్రశ్నోత్తరాలు",
    "nav.contact": "సంప్రదించండి",
    "nav.enquire": "విచారించండి",

    // Hero
    "hero.badge": "స్థిర • లగ్జరీ ప్లాటెడ్ డెవలప్‌మెంట్స్ • 2026",
    "hero.brand": "స్థిర",
    "hero.headline": "వారసత్వ నిర్మాణం. రేపటి రూపకల్పన.",
    "hero.subheadline": "ఆలోచనాత్మక అభివృద్ధి. శాశ్వత స్థలాలు. ఉన్నతమైన జీవన దృష్టి.",
    "hero.description": "భారతదేశంలో వాస్తుశిల్ప శాశ్వతత్వం, చట్టపరమైన స్వచ్ఛత మరియు విశ్వసనీయతతో కూడిన ప్రీమియం లగ్జరీ ప్లాట్లను మేము అందిస్తున్నాము.",
    "hero.explore": "మా ప్రాజెక్టులను చూడండి",
    "hero.discover": "స్థిర గురించి తెలుసుకోండి",
    "hero.featured": "ప్రత్యేక ప్రాజెక్ట్: రోవెరా — బెంగళూరు",

    // Brand Intro
    "intro.badge": "స్థిర సిద్ధాంతం",
    "intro.headline": "అభివృద్ధికి మించి. ఒక జీవన విధానం.",
    "intro.text1": "21వ శతాబ్దంలో విలాసం అనేది ఆడంబరంలో కాదు, భూమి యొక్క శాశ్వతత్వంలో, పరిమిత వాస్తుశిల్పంలో మరియు సంపూర్ణ పారదర్శకతలో ఉందని స్థిర నమ్ముతుంది.",
    "intro.text2": "భారతదేశంలో అగ్రగామి మాస్టర్ డెవలపర్‌గా, ప్రతి ప్లాట్‌ను అంతర్జాతీయ ప్రమాణాలతో స్థిర రూపొందిస్తుంది.",
    "intro.explore": "కార్పొరేట్ ప్రొఫైల్ చూడండి",

    // Stats
    "stats.yearVal": "2026",
    "stats.yearLabel": "స్థాపన సంవత్సరం",
    "stats.titleVal": "100%",
    "stats.titleLabel": "స్పష్టమైన టైటిల్ ఆడిట్",
    "stats.greenVal": "45%",
    "stats.greenLabel": "సంరక్షిత పచ్చదనం",
    "stats.codeVal": "100%",
    "stats.codeLabel": "వాస్తుశిల్ప ప్రమాణాలు",

    // Featured Project
    "project.badge": "ప్రధాన మాస్టర్ డెవలప్‌మెంట్",
    "project.title": "మా ప్రాజెక్టులు",
    "project.tagline": "ఆలోచనాత్మకంగా రూపొందించిన లగ్జరీ ప్లాటెడ్ జీవనం.",
    "project.roveraIntro": "రోవెరా అనేది స్థిర బ్రాండ్ ఆధ్వర్యంలో నిర్మితమైన ప్రతిష్టాత్మక లగ్జరీ ప్లాటెడ్ ప్రాజెక్ట్. ప్రకృతి మధ్యలో ఆధునిక అండర్‌గ్రౌండ్ సౌకర్యాలు మరియు అద్భుతమైన ప్రవేశ ద్వారంతో రూపుదిద్దుకుంది.",
    "project.cta": "రోవెరా పేజీ చూడండి",
    "project.all": "అన్ని ప్రాజెక్టులు",

    // Rovera Card
    "rovera.status": "ఇప్పుడు విచారణలు తెరిచి ఉన్నాయి — దశ 1",
    "rovera.location": "ఉత్తర బెంగళూరు వృద్ధి కారిడార్",
    "rovera.acresVal": "42+",
    "rovera.acresLabel": "ఎకరాల మాస్టర్ ప్రాజెక్ట్",
    "rovera.plotsVal": "186",
    "rovera.plotsLabel": "ప్రత్యేక విల్లా ప్లాట్లు",
    "rovera.price": "సంస్థాగత స్థాయి లగ్జరీ",
    "rovera.readMore": "రోవెరా మాస్టర్‌ప్లాన్ చూడండి",

    // Partnership
    "partnership.badge": "వ్యూహాత్మక భాగస్వామ్యం",
    "partnership.title": "స్థిర | అక్షర",
    "partnership.subtitle": "లగ్జరీ ప్లాటెడ్ జీవనంలో మహోన్నత భాగస్వామ్యం",
    "partnership.desc": "స్థిర వాస్తు శిల్ప నైపుణ్యం మరియు అక్షర సంస్థ యొక్క ప్రాంతీయ భూమి యాజమాన్య అనుభవం కలిసి భారతదేశంలో అత్యున్నత ల్యాండ్‌మార్క్‌లను సృష్టిస్తున్నాయి.",
    "partnership.stthiraBrand": "స్థిర",
    "partnership.roveraBrand": "రోవెరా",

    // Leadership
    "leadership.badge": "బోర్డు పాలన",
    "leadership.title": "నాయకత్వం & నిర్వహణ",
    "leadership.name": "లోకేష్ మొదలియార్",
    "leadership.role": "డైరెక్టర్ల బోర్డు • స్థిర",
    "leadership.quote": "స్థిరలో మా ప్రమాణం శాశ్వతత్వం. మేము కేవలం లావాదేవీల కోసం నిర్మించము; తరతరాల పాటు నిలిచే ల్యాండ్‌మార్క్‌లను సృష్టిస్తాము.",
    "leadership.directors": "డైరెక్టర్ల బోర్డు",
    "leadership.viewGovernance": "పాలనా ప్రొఫైల్ చూడండి",

    // Philosophy
    "phil.badge": "కోర్ బ్రాండ్ దిశ",
    "phil.headline": "ఆలోచనలో పరిపక్వత. దృష్టిలో ధైర్యం.",
    "phil.sub": "మా ఎనిమిది మూలస్తంభాలు ప్రతి మాస్టర్ ప్లాన్ మరియు విశ్వసనీయతను నిర్దేశిస్తాయి.",
    "phil.read": "పూర్తి సిద్ధాంతం చదవండి",
    "phil.pillar1": "01 దృష్టి & పరిమాణం",
    "phil.pillar2": "02 ఖచ్చితమైన ఇంజనీరింగ్",
    "phil.pillar4": "04 నిర్మాణ సంయమనం",
    "phil.pillar6": "06 విశ్వసనీయత",

    // Journal
    "journal.badge": "ప్రత్యేక రచనలు",
    "journal.title": "వాస్తుశిల్ప ఆర్కైవ్స్ & సమాచారం",
    "journal.sub": "భూమి యాజమాన్యం మరియు తరతరాల సంపదపై లోతైన విశ్లేషణలు.",
    "journal.readMore": "వ్యాసం చదవండి",
    "journal.viewAll": "అన్ని వ్యాసాలు చూడండి",

    // FAQ
    "faq.badge": "స్పష్టత & సమాచారం",
    "faq.title": "తరచుగా అడిగే ప్రశ్నలు",
    "faq.sub": "స్థిర పాలన, రోవెరా ప్లాట్లు మరియు చట్టపరమైన పరిశీలనపై పూర్తి వివరాలు.",
    "faq.searchPlaceholder": "అంశం, చట్టపరమైన పరిశీలన, ఆమోదాల ద్వారా శోధించండి...",
    "faq.noMatch": "సరిపోలే ప్రశ్నలు కనుగొనబడలేదు. నేరుగా మా బృందాన్ని సంప్రదించండి.",
    "faq.viewAll": "అన్ని ప్రశ్నలను చూడండి",

    // Form
    "form.badge": "ప్రైవేట్ కన్సల్టేషన్",
    "form.headline": "సంభాషణను ప్రారంభిద్దాం.",
    "form.sub": "వ్యక్తిగత సంప్రదింపులను షెడ్యూల్ చేయండి లేదా రోవెరా సైట్ సందర్శనను ఏర్పాటు చేసుకోండి.",
    "form.subDesc": "మీరు రోవెరా ప్లాట్ కాన్ఫిగరేషన్లపై సలహా కోరినా, లేదా సైట్ సందర్శన చేయాలనుకున్నా, మా సీనియర్ డైరెక్టర్లు మీకు సేవ చేయడానికి సిద్ధంగా ఉన్నారు.",
    "form.enquiry": "విచారణ",
    "form.callback": "కాల్‌బ్యాక్",
    "form.sitevisit": "సైట్ సందర్శన",
    "form.fullname": "పూర్తి పేరు *",
    "form.email": "ఈమెయిల్ చిరునామా *",
    "form.phone": "ఫోన్ / వాట్సాప్ *",
    "form.dev": "ఆసక్తి ఉన్న ప్రాజెక్ట్",
    "form.notes": "సంప్రదింపు గమనికలు",
    "form.submit": "విచారణ సమర్పించండి",
    "form.submitting": "సమర్పిస్తోంది...",
    "form.consent": "స్థిర ప్రతినిధులు నన్ను సంప్రదించడానికి నేను అంగీకరిస్తున్నాను.",
    "form.successTitle": "విచారణ విజయవంతంగా నమోదు చేయబడింది",
    "form.successSub": "స్థిర నుండి సీనియర్ రిలేషన్షిప్ డైరెక్టర్ 4 గంటల్లో మిమ్మల్ని సంప్రదిస్తారు.",

    // Footer
    "footer.col1": "ప్రాజెక్టులు",
    "footer.col2": "సిద్ధాంతం",
    "footer.col3": "సంస్థ",
    "footer.col4": "చట్టపరమైనవి",
    "footer.col5": "సంప్రదించండి",
    "footer.allDevs": "అన్ని ప్రాజెక్టులు",
    "footer.masterPlanMatrix": "మాస్టర్ ప్లాన్ మ్యాట్రిక్స్",
    "footer.plotConfigs": "ప్లాట్ కాన్ఫిగరేషన్లు",
    "footer.eightPillars": "ఎనిమిది మూలస్తంభాలు",
    "footer.p1": "01 దృష్టి & పరిమాణం",
    "footer.p2": "02 ఇంజనీరింగ్",
    "footer.p4": "04 నిర్మాణ సంయమనం",
    "footer.p5": "05 పర్యావరణం",
    "footer.p6": "06 విశ్వసనీయత",
    "footer.aboutStthira": "స్థిర గురించి",
    "footer.leadership": "నాయకత్వం & పాలన",
    "footer.alliance": "స్థిర | అక్షర భాగస్వామ్యం",
    "footer.gallery": "వాస్తుశిల్ప గ్యాలరీ",
    "footer.journal": "జర్నల్ & విశ్లేషణలు",
    "footer.faqs": "ప్రశ్నోత్తరాలు",
    "footer.privacy": "గోప్యతా విధానం",
    "footer.terms": "నిబంధనలు",
    "footer.disclaimer": "వెబ్‌సైట్ నిరాకరణ",
    "footer.cookies": "కుకీల విధానం",
    "footer.projectDisclaimer": "ప్రాజెక్ట్ నిరాకరణ",
    "footer.rera": "రెరా వివరాలు",
    "footer.office": "కార్పొరేట్ కార్యాలయం",
    "footer.concierge": "డైరెక్ట్ కన్సియర్జ్",
    "footer.conciergeDesk": "ప్రత్యక్ష ద్వారపాలకుడు",
    "footer.statement": "ఆలోచనాత్మకంగా నిర్మించబడింది. శాశ్వతంగా ఊహించబడింది.",
    "footer.desc": "స్థిర సంస్థ పారదర్శకత, శాశ్వత చట్టబద్ధత మరియు ఉన్నతమైన వాస్తు శిల్పంతో లగ్జరీ ప్లాటెడ్ కమ్యూనిటీలను అభివృద్ధి చేస్తుంది.",
    "footer.rights": "© 2026 స్థిర డెవలప్‌మెంట్స్ ప్రైవేట్ లిమిటెడ్. సర్వహక్కులు ప్రత్యేకించబడ్డాయి.",
    "footer.hierarchyTitle": "శ్రేణి & భాగస్వామ్యం",
    "footer.hierarchyText": "స్థిర డెవలప్‌మెంట్స్ ప్రైవేట్ లిమిటెడ్ ప్రధాన మాస్టర్ డెవలపర్ (స్థాపన 2026, బోర్డ్ ఆఫ్ డైరెక్టర్స్: లోకేష్ మొదలియార్). రోవెరా స్థిర ఆధ్వర్యంలోని లగ్జరీ ప్రాజెక్ట్. అక్షర భాగస్వామ్యంతో నిర్మించబడింది.",
    "footer.reraCompliance": "రెరా & డిపిడిపి చట్టబద్ధం",
    "footer.contactAdvisory": "సలహాదారులను సంప్రదించండి",
    "footer.reraAudit": "రెరా ఆడిట్",
  },

  ta: {
    // Nav
    "nav.home": "முகப்பு",
    "nav.about": "பற்றி",
    "nav.developments": "திட்டங்கள்",
    "nav.rovera": "ரோவேரா",
    "nav.philosophy": "தத்துவம்",
    "nav.leadership": "தலைமை",
    "nav.journal": "கட்டுரைகள்",
    "nav.gallery": "புகைப்படங்கள்",
    "nav.faq": "கேள்வி-பதில்",
    "nav.contact": "தொடர்பு",
    "nav.enquire": "விசாரிக்க",

    // Hero
    "hero.badge": "ஸ்திரா • சொகுசு வீட்டு மனைத் திட்டங்கள் • 2026",
    "hero.brand": "ஸ்திரா",
    "hero.headline": "ஒரு பாரம்பரியத்தை உருவாக்குதல். நாளையை செதுக்குதல்.",
    "hero.subheadline": "சிந்தனைமிக்க வளர்ச்சி. காலத்தால் அழியாத இடங்கள். சிறந்த வாழ்க்கைக்கான பார்வை.",
    "hero.description": "கட்டடக் கலை நேர்த்தி, சட்டப் பாதுகாப்பு மற்றும் நம்பகத்தன்மையுடன் இந்தியாவின் முதன்மை சொகுசு வீட்டு மனைகளை உருவாக்குகிறோம்.",
    "hero.explore": "திட்டங்களை ஆராயுங்கள்",
    "hero.discover": "ஸ்திராவை அறியுங்கள்",
    "hero.featured": "சிறப்புத் திட்டம்: ரோவேரா — பெங்களூரு",

    // Brand Intro
    "intro.badge": "ஸ்திரா கொள்கை",
    "intro.headline": "வளர்ச்சிக்கு அப்பாற்பட்ட வாழ்க்கை பார்வை.",
    "intro.text1": "21ஆம் நூற்றாண்டின் ஆடம்பரம் என்பது அலங்காரத்தில் அல்ல, நிலத்தின் நிலைத்தன்மை மற்றும் கட்டிடக்கலை ஒழுக்கத்தில் உள்ளது என்று ஸ்திரா நம்புகிறது.",
    "intro.text2": "இந்தியாவில் முதன்மை நிறுவனமாக, ஒவ்வொரு மனையையும் சர்வதேச தரத்திற்கு ஏற்ப வடிவமைக்கிறோம்.",
    "intro.explore": "நிறுவன விவரத்தை காண்க",

    // Stats
    "stats.yearVal": "2026",
    "stats.yearLabel": "நிறுவப்பட்ட ஆண்டு",
    "stats.titleVal": "100%",
    "stats.titleLabel": "தெளிவான ஆவண தணிக்கை",
    "stats.greenVal": "45%",
    "stats.greenLabel": "பாதுகாக்கப்பட்ட பசுமை பகுதி",
    "stats.codeVal": "100%",
    "stats.codeLabel": "கட்டிடக்கலை இணக்கம்",

    // Featured Project
    "project.badge": "முதன்மை திட்டம்",
    "project.title": "எங்கள் திட்டங்கள்",
    "project.tagline": "திட்டமிட்டு செதுக்கப்பட்ட சொகுசு மனை வாழ்க்கை.",
    "project.roveraIntro": "ரோவேரா என்பது ஸ்திரா பிராண்டின் கீழ் அமைந்த முதன்மை சொகுசு மனைத் திட்டமாகும். இயற்கையோடு இயைந்த நிலவமைப்பு மற்றும் நவீன உள்கட்டமைப்புடன் அமைக்கப்பட்டுள்ளது.",
    "project.cta": "ரோவேரா பக்கம் செல்க",
    "project.all": "அனைத்து திட்டங்கள்",

    // Rovera Card
    "rovera.status": "தற்போது விசாரணைகள் நடைபெறுகின்றன — கட்டம் 1",
    "rovera.location": "வடக்கு பெங்களூரு வளர்ச்சி பகுதி",
    "rovera.acresVal": "42+",
    "rovera.acresLabel": "ஏக்கர் பரப்பளவு",
    "rovera.plotsVal": "186",
    "rovera.plotsLabel": "தனித்துவமான வில்லா மனைகள்",
    "rovera.price": "உயர்தர நிறுவன ஆடம்பரம்",
    "rovera.readMore": "ரோவேரா திட்ட வரைபடத்தை காண்க",

    // Partnership
    "partnership.badge": "மூலோபாய நில கூட்டணி",
    "partnership.title": "ஸ்திரா | அக்ஷரா",
    "partnership.subtitle": "சொகுசு மனை வாழ்க்கையில் உன்னத கூட்டாண்மை",
    "partnership.desc": "ஸ்திராவின் கட்டிடக்கலை திறனும், அக்ஷரா நிறுவனத்தின் நில நிர்வாக அனுபவமும் இணைந்து தலைமுறைக்கான அடையாளங்களை உருவாக்குகின்றன.",
    "partnership.stthiraBrand": "ஸ்திரா",
    "partnership.roveraBrand": "ரோவேரா",

    // Leadership
    "leadership.badge": "நிர்வாகக் குழு",
    "leadership.title": "தலைமை மற்றும் மேலாண்மை",
    "leadership.name": "லோகேஷ் முதலியார்",
    "leadership.role": "இயக்குனர் குழு • ஸ்திரா",
    "leadership.quote": "ஸ்திராவில் எங்கள் தரம் என்பது நிரந்தரமானது. வணிகத்திற்காக மட்டுமல்லாமல், தலைமுறைகள் போற்றும் நில அடையாளங்களை உருவாக்குகிறோம்.",
    "leadership.directors": "இயக்குனர் குழு",
    "leadership.viewGovernance": "நிர்வாக சுயவிவரம் காண்க",

    // Philosophy
    "phil.badge": "மையக் கொள்கை",
    "phil.headline": "சிந்தனையில் நேர்த்தி. பார்வையில் துணிவு.",
    "phil.sub": "எங்களின் எட்டு தூண்கள் ஒவ்வொரு திட்டத்தையும் துல்லியமாக வழிநடத்துகின்றன.",
    "phil.read": "முழு கட்டுரையை வாசியுங்கள்",
    "phil.pillar1": "01 தொலைநோக்கு & அளவு",
    "phil.pillar2": "02 துல்லியமான பொறியியல்",
    "phil.pillar4": "04 கட்டிடக்கலை கட்டுப்பாடு",
    "phil.pillar6": "06 நம்பகத்தன்மை",

    // Journal
    "journal.badge": "தேர்ந்தெடுக்கப்பட்ட கட்டுரைகள்",
    "journal.title": "கட்டிடக்கலை ஆவணங்கள் & பார்வைகள்",
    "journal.sub": "நில உரிமை மற்றும் தலைமுறை சொத்து பற்றிய ஆழமான பார்வைகள்.",
    "journal.readMore": "கட்டுரையை வாசியுங்கள்",
    "journal.viewAll": "அனைத்து கட்டுரைகளையும் காண்க",

    // FAQ
    "faq.badge": "தெளிவு & சரிபார்ப்பு",
    "faq.title": "அடிக்கடி கேட்கப்படும் கேள்விகள்",
    "faq.sub": "ஸ்திரா நிர்வாகம், ரோவேரா திட்டங்கள் மற்றும் சட்டப்பூர்வ விவரங்கள் பற்றிய தெளிவான பதில்கள்.",
    "faq.searchPlaceholder": "தலைப்பு, சட்டப்பூர்வ சரிபார்ப்பு, அனுமதிகள் மூலம் தேடுங்கள்...",
    "faq.noMatch": "பொருத்தமான கேள்விகள் எதுவும் கிடைக்கவில்லை. எங்கள் குழுவை நேரடியாக தொடர்பு கொள்ளவும்.",
    "faq.viewAll": "அனைத்து கேள்விகளையும் காண்க",

    // Form
    "form.badge": "தனியார் ஆலோசனை",
    "form.headline": "ஒரு உரையாடலைத் தொடங்குவோம்.",
    "form.sub": "தனிப்பட்ட ஆலோசனையை பதிவு செய்யுங்கள் அல்லது ரோவேரா தளத்தை பார்வையிடுங்கள்.",
    "form.subDesc": "ரோவேரா மனைகள் பற்றி ஆலோசனை பெறவோ அல்லது தளப் பார்வை செய்யவோ எங்கள் மூத்த அதிகாரிகள் உங்கள் சேவைக்கு தயாராக உள்ளனர்.",
    "form.enquiry": "விசாரணை",
    "form.callback": "திரும்ப அழைக்க",
    "form.sitevisit": "தளப் பார்வை",
    "form.fullname": "முழு பெயர் *",
    "form.email": "மின்னஞ்சல் *",
    "form.phone": "தொலைபேசி / வாட்ஸ்அப் *",
    "form.dev": "ஆர்வமுள்ள திட்டம்",
    "form.notes": "ஆலோசனை குறிப்புகள்",
    "form.submit": "விசாரணையை சமர்ப்பிக்கவும்",
    "form.submitting": "சமர்ப்பிக்கப்படுகிறது...",
    "form.consent": "ஸ்திரா பிரதிநிதிகள் என்னை தொடர்பு கொள்ள ஒப்புக்கொள்கிறேன்.",
    "form.successTitle": "விசாரணை வெற்றிகரமாக பதிவு செய்யப்பட்டது",
    "form.successSub": "ஸ்திரா மூத்த இயக்குனர் 4 வணிக மணிநேரத்திற்குள் உங்களை தொடர்புகொள்வார்.",

    // Footer
    "footer.col1": "திட்டங்கள்",
    "footer.col2": "தத்துவம்",
    "footer.col3": "நிறுவனம்",
    "footer.col4": "சட்டப்பூர்வ",
    "footer.col5": "தொடர்பு",
    "footer.allDevs": "அனைத்து திட்டங்கள்",
    "footer.masterPlanMatrix": "திட்ட வரைபடம்",
    "footer.plotConfigs": "மனை கட்டமைப்புகள்",
    "footer.eightPillars": "எட்டு தூண்கள்",
    "footer.p1": "01 பார்வை",
    "footer.p2": "02 பொறியியல்",
    "footer.p4": "04 கட்டிடக்கலை",
    "footer.p5": "05 இயற்கை சூழல்",
    "footer.p6": "06 நம்பகத்தன்மை",
    "footer.aboutStthira": "ஸ்திரா பற்றி",
    "footer.leadership": "தலைமை & நிர்வாகம்",
    "footer.alliance": "ஸ்திரா | அக்ஷரா கூட்டணி",
    "footer.gallery": "புகைப்பட தொகுப்பு",
    "footer.journal": "கட்டுரைகள் & பார்வைகள்",
    "footer.faqs": "கேள்வி-பதில்",
    "footer.privacy": "தனியுரிமைக் கொள்கை",
    "footer.terms": "விதிமுறைகள்",
    "footer.disclaimer": "தள மறுப்பு",
    "footer.cookies": "குக்கீ கொள்கை",
    "footer.projectDisclaimer": "திட்ட மறுப்பு",
    "footer.rera": "ரேரா வெளிப்பாடுகள்",
    "footer.office": "நிறுவன அலுவலகம்",
    "footer.concierge": "நேரடி உதவி",
    "footer.conciergeDesk": "நேரடி வரவேற்பாளர்",
    "footer.statement": "சிந்தனையுடன் கட்டப்பட்டது. காலத்தால் அழியாமல் வடிவமைக்கப்பட்டது.",
    "footer.desc": "ஸ்திரா சட்டப்பூர்வ தூய்மை மற்றும் உயர்ந்த கட்டிடக்கலையுடன் சொகுசு மனை சமூகங்களை உருவாக்குகிறது.",
    "footer.rights": "© 2026 ஸ்திரா டெவலப்மென்ட்ஸ் பிரைவேட் லிமிடெட். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
    "footer.hierarchyTitle": "வரிசை & கூட்டணி",
    "footer.hierarchyText": "ஸ்திரா டெவலப்மென்ட்ஸ் பிரைவேட் லிமிடெட் முதன்மை நிறுவனம் (2026 நிறுவப்பட்டது, இயக்குனர் குழு: லோகேஷ் முதலியார்). ரோவேரா ஸ்திராவின் கீழ் உள்ள சொகுசு மனைத் திட்டம். அக்ஷரா கூட்டணியுடன்.",
    "footer.reraCompliance": "ரேரா & டிபிடிபி சட்டபூர்வமானது",
    "footer.contactAdvisory": "ஆலோசகரை தொடர்பு கொள்க",
    "footer.reraAudit": "ரேரா தணிக்கை",
  },

  hi: {
    // Nav
    "nav.home": "होम",
    "nav.about": "परिचय",
    "nav.developments": "प्रोजेक्ट्स",
    "nav.rovera": "रोवेरा",
    "nav.philosophy": "दर्शन",
    "nav.leadership": "नेतृत्व",
    "nav.journal": "पत्रिका",
    "nav.gallery": "गैलरी",
    "nav.faq": "अक्सर पूछे जाने वाले प्रश्न",
    "nav.contact": "संपर्क",
    "nav.enquire": "पूछताछ करें",

    // Hero
    "hero.badge": "स्थिरा • मास्टर प्लॉटेड डेवलपमेंट्स • 2026",
    "hero.brand": "स्थिरा",
    "hero.headline": "एक विरासत का निर्माण। कल को आकार देना।",
    "hero.subheadline": "विचारशील विकास। कालातीत स्थान। बेहतर जीवन की दृष्टि।",
    "hero.description": "भारत में स्थापत्य स्थायित्व, कानूनी शुद्धता और विश्वसनीयता पर आधारित विशिष्ट लक्जरी प्लॉटेड एस्टेट्स।",
    "hero.explore": "हमारी परियोजनाएं देखें",
    "hero.discover": "स्थिरा को जानें",
    "hero.featured": "विशेष परियोजना: रोवेरा — बेंगलुरु",

    // Brand Intro
    "intro.badge": "स्थिरा दर्शन",
    "intro.headline": "विकास से परे। जीवन की एक दृष्टि।",
    "intro.text1": "स्थिरा की स्थापना इस विश्वास के साथ हुई थी कि 21वीं सदी में विलासिता दिखावे में नहीं, बल्कि भूमि के स्थायित्व और स्थापत्य संयम में है।",
    "intro.text2": "भारत में एक प्रतिष्ठित कॉर्पोरेट मास्टर डेवलपर के रूप में, स्थिरा अंतरराष्ट्रीय मानकों के अनुसार प्लॉटेड समुदायों की रचना करता है।",
    "intro.explore": "कॉर्पोरेट प्रोफाइल देखें",

    // Stats
    "stats.yearVal": "2026",
    "stats.yearLabel": "स्थापना वर्ष",
    "stats.titleVal": "100%",
    "stats.titleLabel": "स्पष्ट शीर्षक ऑडिट",
    "stats.greenVal": "45%",
    "stats.greenLabel": "संरक्षित हरित क्षेत्र",
    "stats.codeVal": "100%",
    "stats.codeLabel": "वास्तु अनुपालन",

    // Featured Project
    "project.badge": "प्रमुख मास्टर डेवलपमेंट",
    "project.title": "हमारी परियोजनाएं",
    "project.tagline": "विचारशीलता से नियोजित लक्जरी प्लॉटेड जीवन की अभिव्यक्ति।",
    "project.roveraIntro": "रोवेरा स्थिरा ब्रांड के तहत प्रमुख लक्जरी प्लॉटेड विकास है। व्यापक हरित गलियारों, भूमिगत उपयोगिताओं और भव्य प्रवेश वास्तुकला के साथ निर्मित।",
    "project.cta": "रोवेरा पेज देखें",
    "project.all": "सभी परियोजनाएं",

    // Rovera Card
    "rovera.status": "अब पूछताछ खुली है — चरण 1",
    "rovera.location": "उत्तर बेंगलुरु विकास गलियारा",
    "rovera.acresVal": "42+",
    "rovera.acresLabel": "एकड़ मास्टर एन्क्लेव",
    "rovera.plotsVal": "186",
    "rovera.plotsLabel": "विशिष्ट विला प्लॉट्स",
    "rovera.price": "संस्थागत-ग्रेड लक्जरी",
    "rovera.readMore": "रोवेरा मास्टरप्लान देखें",

    // Partnership
    "partnership.badge": "रणनीतिक भूमि गठबंधन",
    "partnership.title": "स्थिरा | अक्षरा",
    "partnership.subtitle": "लक्जरी प्लॉटेड लिविंग में एक ऐतिहासिक सहयोग",
    "partnership.desc": "स्थिरा की वास्तुशिल्प उत्कृष्टता और अक्षरा के क्षेत्रीय भूमि प्रबंधन का संगम भारत में पीढ़ीगत स्थलों का निर्माण करता है।",
    "partnership.stthiraBrand": "स्थिरा",
    "partnership.roveraBrand": "रोवेरा",

    // Leadership
    "leadership.badge": "बोर्ड प्रशासन",
    "leadership.title": "नेतृत्व और प्रबंधन",
    "leadership.name": "लोकेश मुदलियार",
    "leadership.role": "निदेशक मंडल • स्थिरा",
    "leadership.quote": "स्थिरा में हमारा मानक स्थायित्व है। हम केवल लेन-देन के लिए निर्माण नहीं करते; हम पीढ़ीगत स्थलों का निर्माण करते हैं।",
    "leadership.directors": "निदेशक मंडल",
    "leadership.viewGovernance": "गवर्नेंस प्रोफाइल देखें",

    // Philosophy
    "phil.badge": "मूल ब्रांड दिशा",
    "phil.headline": "विचार में परिष्कृत। दृष्टि में साहसी।",
    "phil.sub": "हमारे आठ बुनियादी स्तंभ हर मास्टर प्लान और कानूनी प्रतिबद्धता को निर्देशित करते हैं।",
    "phil.read": "पूरा लेख पढ़ें",
    "phil.pillar1": "01 दृष्टि और पैमाना",
    "phil.pillar2": "02 सटीक इंजीनियरिंग",
    "phil.pillar4": "04 स्थापत्य संयम",
    "phil.pillar6": "06 विश्वास और निष्ठा",

    // Journal
    "journal.badge": "चयनित लेख",
    "journal.title": "स्थापत्य अभिलेखागार और अंतर्दृष्टि",
    "journal.sub": "भूमि स्वामित्व, बायोफिलिक शहरी नियोजन और पीढ़ीगत संपत्ति पर गहन दृष्टिकोण।",
    "journal.readMore": "लेख पढ़ें",
    "journal.viewAll": "सभी लेख देखें",

    // FAQ
    "faq.badge": "स्पष्टता और सत्यापन",
    "faq.title": "अक्सर पूछे जाने वाले प्रश्न",
    "faq.sub": "स्थिरा कॉर्पोरेट प्रशासन, रोवेरा प्लॉटेड लिविंग और कानूनी सतर्कता के बारे में स्पष्ट उत्तर।",
    "faq.searchPlaceholder": "विषय, कानूनी सतर्कता, अनुमोदन द्वारा खोजें...",
    "faq.noMatch": "कोई मेल खाने वाले प्रश्न नहीं मिले। सीधे हमारी सलाहकार टीम से संपर्क करें।",
    "faq.viewAll": "सभी प्रश्न देखें",

    // Form
    "form.badge": "निजी सलाहकार कंसीयर्ज",
    "form.headline": "आइए बातचीत शुरू करें।",
    "form.sub": "निजी परामर्श शेड्यूल करें या रोवेरा में साइट विजिट की व्यवस्था करें।",
    "form.subDesc": "चाहे आप रोवेरा प्लॉट कॉन्फ़िगरेशन के संबंध में परामर्श चाहते हों, या साइट विजिट शेड्यूल करना चाहते हों, हमारे निदेशक आपकी सेवा में तत्पर हैं।",
    "form.enquiry": "पूछताछ",
    "form.callback": "कॉलबैक",
    "form.sitevisit": "साइट विजिट",
    "form.fullname": "पूरा कानूनी नाम *",
    "form.email": "ईमेल पता *",
    "form.phone": "फोन / व्हाट्सएप *",
    "form.dev": "रुचि की परियोजना",
    "form.notes": "परामर्श नोट्स",
    "form.submit": "पूछताछ सबमिट करें",
    "form.submitting": "सबमिट किया जा रहा है...",
    "form.consent": "मैं स्थिरा प्रतिनिधियों द्वारा मुझसे संपर्क करने की सहमति देता हूं।",
    "form.successTitle": "पूछताछ सफलतापूर्वक पंजीकृत",
    "form.successSub": "स्थिरा के एक वरिष्ठ संबंध निदेशक 4 कार्य घंटों के भीतर आपसे संपर्क करेंगे।",

    // Footer
    "footer.col1": "परियोजनाएं",
    "footer.col2": "दर्शन",
    "footer.col3": "कंपनी",
    "footer.col4": "कानूनी",
    "footer.col5": "संपर्क",
    "footer.allDevs": "सभी परियोजनाएं",
    "footer.masterPlanMatrix": "मास्टर प्लान मैट्रिक्स",
    "footer.plotConfigs": "प्लॉट कॉन्फ़िगरेशन",
    "footer.eightPillars": "आठ मुख्य स्तंभ",
    "footer.p1": "01 दृष्टि और पैमाना",
    "footer.p2": "02 सटीक इंजीनियरिंग",
    "footer.p4": "04 स्थापत्य संयम",
    "footer.p5": "05 प्राकृतिक पारिस्थितिकी",
    "footer.p6": "06 विश्वास और निष्ठा",
    "footer.aboutStthira": "स्थिरा के बारे में",
    "footer.leadership": "नेतृत्व और प्रशासन",
    "footer.alliance": "स्थिरा | अक्षरा गठबंधन",
    "footer.gallery": "स्थापत्य गैलरी",
    "footer.journal": "पत्रिका और अंतर्दृष्टि",
    "footer.faqs": "अक्सर पूछे जाने वाले प्रश्न",
    "footer.privacy": "गोपनीयता नीति",
    "footer.terms": "सेवा की शर्तें",
    "footer.disclaimer": "वेबसाइट अस्वीकरण",
    "footer.cookies": "कुकी नीति",
    "footer.projectDisclaimer": "परियोजना अस्वीकरण",
    "footer.rera": "रेरा प्रकटीकरण",
    "footer.office": "कॉर्पोरेट कार्यालय",
    "footer.concierge": "प्रत्यक्ष कंसीयर्ज",
    "footer.conciergeDesk": "सीधा द्वारपाल",
    "footer.statement": "विचारपूर्वक निर्मित। कालातीत रूप से परिकल्पित।",
    "footer.desc": "स्थिरा कानूनी शुद्धता, भूमिगत बुनियादी ढांचे और वास्तुशिल्प संयम के साथ लक्जरी प्लॉटेड समुदाय विकसित करता है।",
    "footer.rights": "© 2026 स्थिरा डेवलपमेंट्स प्राइवेट लिमिटेड। सर्वाधिकार सुरक्षित।",
    "footer.hierarchyTitle": "पदानुक्रम और गठबंधन",
    "footer.hierarchyText": "स्थिरा डेवलपमेंट्स प्राइवेट लिमिटेड मुख्य मास्टर डेवलपर है (स्थापना 2026, निदेशक मंडल: लोकेश मुदलियार)। रोवेरा स्थिरा के तहत एक विशेष परियोजना है। अक्षरा के साथ रणनीतिक साझेदारी में।",
    "footer.reraCompliance": "रेरा और डीपीडीपी अनुपालन",
    "footer.contactAdvisory": "सलाहकार से संपर्क करें",
    "footer.reraAudit": "रेरा ऑडिट",
  },

  kn: {
    // Nav
    "nav.home": "ಮುಖಪುಟ",
    "nav.about": "ಪರಿಚಯ",
    "nav.developments": "ಯೋಜನೆಗಳು",
    "nav.rovera": "ರೋವೆರಾ",
    "nav.philosophy": "ಸಿದ್ಧಾಂತ",
    "nav.leadership": "ನಾಯಕತ್ವ",
    "nav.journal": "ಜರ್ನಲ್",
    "nav.gallery": "ಗ್ಯಾಲರಿ",
    "nav.faq": "ಪ್ರಶ್ನೋತ್ತರಗಳು",
    "nav.contact": "ಸಂಪರ್ಕ",
    "nav.enquire": "ವಿಚಾರಿಸಿ",

    // Hero
    "hero.badge": "ಸ್ಥಿರ • ಲಕ್ಸುರಿ ಪ್ಲಾಟೆಡ್ ಡೆವಲಪ್‌ಮೆಂಟ್ಸ್ • 2026",
    "hero.brand": "ಸ್ಥಿರ",
    "hero.headline": "ಪರಂಪರೆಯ ನಿರ್ಮಾಣ. ನಾಳೆಯ ರೂಪಿಸುವಿಕೆ.",
    "hero.subheadline": "ಚಿಂತನಶೀಲ ಅಭಿವೃದ್ಧಿ. ಶಾಶ್ವತ ಸ್ಥಳಗಳು. ಉತ್ತಮ ಜೀವನದ ದೃಷ್ಟಿ.",
    "hero.description": "ವಾಸ್ತುಶಿಲ್ಪದ ಶಾಶ್ವತತೆ, ಸಂಪೂರ್ಣ ಕಾನೂನು ಶುದ್ಧತೆ ಮತ್ತು ವಿಶ್ವಾಸಾರ್ಹತೆಯೊಂದಿಗೆ ಭಾರತದ ಪ್ರಮುಖ ಐಷಾರಾಮಿ ನಿವೇಶನಗಳನ್ನು ನಾವು ರೂಪಿಸುತ್ತಿದ್ದೇವೆ.",
    "hero.explore": "ನಮ್ಮ ಯೋಜನೆಗಳನ್ನು ಅನ್ವೇಷಿಸಿ",
    "hero.discover": "ಸ್ಥಿರ ಬಗ್ಗೆ ತಿಳಿಯಿರಿ",
    "hero.featured": "ವಿಶೇಷ ಯೋಜನೆ: ರೋವೆರಾ — ಬೆಂಗಳೂರು",

    // Brand Intro
    "intro.badge": "ಸ್ಥಿರ ಸಿದ್ಧಾಂತ",
    "intro.headline": "ಅಭಿವೃದ್ಧಿಯನ್ನು ಮೀರಿದ ಜೀವನ ದೃಷ್ಟಿ.",
    "intro.text1": "21ನೇ ಶತಮಾನದಲ್ಲಿ ಐಷಾರಾಮಿ ಎಂಬುದು ಕೇವಲ ಆಡಂಬರವಲ್ಲ, ಭೂಮಿಯ ಶಾಶ್ವತತೆ, ವಾಸ್ತುಶಿಲ್ಪದ ಸಂಯಮ ಮತ್ತು ಸಂಪೂರ್ಣ ಪಾರದರ್ಶಕತೆಯಲ್ಲಿದೆ ಎಂದು ಸ್ಥಿರ ನಂಬುತ್ತದೆ.",
    "intro.text2": "ಭಾರತದ ಪ್ರಮುಖ ಮಾಸ್ಟರ್ ಡೆವಲಪರ್ ಆಗಿ, ಪ್ರತಿಯೊಂದು ನಿವೇಶನವನ್ನು ಅಂತಾರಾಷ್ಟ್ರೀಯ ಗುಣಮಟ್ಟಕ್ಕೆ ತಕ್ಕಂತೆ ಸ್ಥಿರ ನಿರ್ಮಿಸುತ್ತದೆ.",
    "intro.explore": "ಕಾರ್ಪೊರೇಟ್ ವಿವರ ನೋಡಿ",

    // Stats
    "stats.yearVal": "2026",
    "stats.yearLabel": "ಸ್ಥಾಪನೆಯ ವರ್ಷ",
    "stats.titleVal": "100%",
    "stats.titleLabel": "ಸ್ಪಷ್ಟ ಶೀರ್ಷಿಕೆ ಲೆಕ್ಕಪರಿಶೋಧನೆ",
    "stats.greenVal": "45%",
    "stats.greenLabel": "ಸಂರಕ್ಷಿತ ಹಸಿರು ವಲಯ",
    "stats.codeVal": "100%",
    "stats.codeLabel": "ವಾಸ್ತುಶಿಲ್ಪ ಅನುಸರಣೆ",

    // Featured Project
    "project.badge": "ಪ್ರಮುಖ ಯೋಜನೆ",
    "project.title": "ನಮ್ಮ ಯೋಜನೆಗಳು",
    "project.tagline": "ಚಿಂತನಶೀಲವಾಗಿ ಯೋಜಿಸಲಾದ ಲಕ್ಸುರಿ ಪ್ಲಾಟೆಡ್ ಜೀವನ.",
    "project.roveraIntro": "ರೋವೆರಾ ಎಂಬುದು ಸ್ಥಿರ ಬ್ರ್ಯಾಂಡ್ ಅಡಿಯಲ್ಲಿ ನಿರ್ಮಾಣವಾಗಿರುವ ಪ್ರತಿಷ್ಠಿತ ಲಕ್ಸುರಿ ಪ್ಲಾಟೆಡ್ ಯೋಜನೆಯಾಗಿದೆ. ವಿಶಾಲ ಹಸಿರು ಪರಿಸರ ಮತ್ತು ಆಧುನಿಕ ಭೂಗತ ಸೌಲಭ್ಯಗಳೊಂದಿಗೆ ರೂಪುಗೊಂಡಿದೆ.",
    "project.cta": "ರೋವೆರಾ ಪುಟ ನೋಡಿ",
    "project.all": "ಎಲ್ಲಾ ಯೋಜನೆಗಳು",

    // Rovera Card
    "rovera.status": "ಈಗ ವಿಚಾರಣೆಗಳು ಆರಂಭವಾಗಿವೆ — ಹಂತ 1",
    "rovera.location": "ಉತ್ತರ ಬೆಂಗಳೂರು ಬೆಳವಣಿಗೆಯ ಕಾರಿಡಾರ್",
    "rovera.acresVal": "42+",
    "rovera.acresLabel": "ಎಕರೆ ಮಾಸ್ಟರ್ ಎನ್‌ಕ್ಲೇವ್",
    "rovera.plotsVal": "186",
    "rovera.plotsLabel": "ವಿಶೇಷ ವಿಲ್ಲಾ ನಿವೇಶನಗಳು",
    "rovera.price": "ಸಾಂಸ್ಥಿಕ ದರ್ಜೆಯ ಐಷಾರಾಮಿ",
    "rovera.readMore": "ರೋವೆರಾ ಮಾಸ್ಟರ್‌ಪ್ಲಾನ್ ಅನ್ವೇಷಿಸಿ",

    // Partnership
    "partnership.badge": "ಕಾರ್ಯತಂತ್ರದ ಭೂ ಪಾಲುದಾರಿಕೆ",
    "partnership.title": "ಸ್ಥಿರ | ಅಕ್ಷರ",
    "partnership.subtitle": "ಲಕ್ಸುರಿ ಪ್ಲಾಟೆಡ್ ಜೀವನದಲ್ಲಿ ಮಹೋನ್ನತ ಸಹಯೋಗ",
    "partnership.desc": "ಸ್ಥಿರ ಸಂಸ್ಥೆಯ ವಾಸ್ತುಶಿಲ್ಪ ಪ್ರಾವೀಣ್ಯತೆ ಮತ್ತು ಅಕ್ಷರ ಸಂಸ್ಥೆಯ ಪ್ರಾದೇಶಿಕ ಭೂ ಆಡಳಿತ ಅನುಭವ ಒಗ್ಗೂಡಿ ಭಾರತದಲ್ಲಿ ಐತಿಹಾಸಿಕ ತಾಣಗಳನ್ನು ನಿರ್ಮಿಸುತ್ತಿವೆ.",
    "partnership.stthiraBrand": "ಸ್ಥಿರ",
    "partnership.roveraBrand": "ರೋವೆರಾ",

    // Leadership
    "leadership.badge": "ಮಂಡಳಿ ಆಡಳಿತ",
    "leadership.title": "ನಾಯಕತ್ವ ಮತ್ತು ಆಡಳಿತ",
    "leadership.name": "ಲೋಕೇಶ್ ಮೊದಲಿಯಾರ್",
    "leadership.role": "ನಿರ್ದೇಶಕರ ಮಂಡಳಿ • ಸ್ಥಿರ",
    "leadership.quote": "ಸ್ಥಿರದಲ್ಲಿ ನಮ್ಮ ಮಾನದಂಡ ಶಾಶ್ವತತೆ. ನಾವು ಕೇವಲ ವಹಿವಾಟಿಗಾಗಿ ನಿರ್ಮಿಸುವುದಿಲ್ಲ; ತಲೆಮಾರುಗಳು ಹೆಮ್ಮೆಪಡುವ ಹೆಗ್ಗುರುತುಗಳನ್ನು ಸೃಷ್ಟಿಸುತ್ತೇವೆ.",
    "leadership.directors": "ನಿರ್ದೇಶಕರ ಮಂಡಳಿ",
    "leadership.viewGovernance": "ಆಡಳಿತ ಪ್ರೊಫೈಲ್ ನೋಡಿ",

    // Philosophy
    "phil.badge": "ಮೂಲ ಬ್ರ್ಯಾಂಡ್ ನಿರ್ದೇಶನ",
    "phil.headline": "ಚಿಂತನೆಯಲ್ಲಿ ಪರಿಪಕ್ವತೆ. ದೃಷ್ಟಿಯಲ್ಲಿ ಧೈರ್ಯ.",
    "phil.sub": "ನಮ್ಮ ಎಂಟು ಮೂಲಸ್ತಂಭಗಳು ಪ್ರತಿಯೊಂದು ಮಾಸ್ಟರ್ ಪ್ಲಾನ್ ಮತ್ತು ವಿಶ್ವಾಸಾರ್ಹತೆಯನ್ನು ರೂಪಿಸುತ್ತವೆ.",
    "phil.read": "ಸಂಪೂರ್ಣ ಲೇಖನ ಓದಿ",
    "phil.pillar1": "01 ದೃಷ್ಟಿ ಮತ್ತು ಪ್ರಮಾಣ",
    "phil.pillar2": "02 ನಿಖರ ಎಂಜಿನಿಯರಿಂಗ್",
    "phil.pillar4": "04 ವಾಸ್ತುಶಿಲ್ಪ ಸಂಯಮ",
    "phil.pillar6": "06 ವಿಶ್ವಾಸಾರ್ಹತೆ",

    // Journal
    "journal.badge": "ಆಯ್ದ ಲೇಖನಗಳು",
    "journal.title": "ವಾಸ್ತುಶಿಲ್ಪ ದಾಖಲೆಗಳು & ಒಳನೋಟಗಳು",
    "journal.sub": "ಭೂ ಮಾಲೀಕತ್ವ ಮತ್ತು ಪೀಳಿಗೆಯ ಆಸ್ತಿಯ ಕುರಿತು ಆಳವಾದ ವಿಶ್ಲೇಷಣೆಗಳು.",
    "journal.readMore": "ಲೇಖನ ಓದಿ",
    "journal.viewAll": "ಎಲ್ಲಾ ಲೇಖನಗಳನ್ನು ವೀಕ್ಷಿಸಿ",

    // FAQ
    "faq.badge": "ಸ್ಪಷ್ಟತೆ & ಪರಿಶೀಲನೆ",
    "faq.title": "ಪದೇ ಪದೇ ಕೇಳಲಾಗುವ ಪ್ರಶ್ನೆಗಳು",
    "faq.sub": "ಸ್ಥಿರ ಆಡಳಿತ, ರೋವೆರಾ ನಿವೇಶನಗಳು ಮತ್ತು ಕಾನೂನು ಪರಿಶೀಲನೆ ಕುರಿತು ಸ್ಪಷ್ಟ ಉತ್ತರಗಳು.",
    "faq.searchPlaceholder": "ವಿಷಯ, ಕಾನೂನು ಪರಿಶೀಲನೆ, ಅನುಮೋದನೆಗಳ ಮೂಲಕ ಹುಡುಕಿ...",
    "faq.noMatch": "ಹೊಂದುವ ಪ್ರಶ್ನೆಗಳು ಕಂಡುಬಂದಿಲ್ಲ. ನೇರವಾಗಿ ನಮ್ಮ ತಂಡವನ್ನು ಸಂಪರ್ಕಿಸಿ.",
    "faq.viewAll": "ಎಲ್ಲಾ ಪ್ರಶ್ನೆಗಳನ್ನು ವೀಕ್ಷಿಸಿ",

    // Form
    "form.badge": "ಖಾಸಗಿ ಸಲಹಾ ಕನ್ಸಿಯರ್ಜ್",
    "form.headline": "ಸಂಭಾಷಣೆಯನ್ನು ಪ್ರಾರಂಭಿಸೋಣ.",
    "form.sub": "ವೈಯಕ್ತಿಕ ಸಮಾಲೋಚನೆಯನ್ನು ನಿಗದಿಪಡಿಸಿ ಅಥವಾ ರೋವೆರಾ ಸೈಟ್ ವೀಕ್ಷಣೆಯನ್ನು ಕಾಯ್ದಿರಿಸಿ.",
    "form.subDesc": "ರೋವೆರಾ ನಿವೇಶನ ಸಂರಚನೆಗಳ ಕುರಿತು ಸಲಹೆ ಪಡೆಯಲು ಅಥವಾ ಸೈಟ್ ಭೇಟಿಯನ್ನು ನಿಗದಿಪಡಿಸಲು ನಮ್ಮ ನಿರ್ದೇಶಕರು ನಿಮ್ಮ ಸೇವೆಗೆ ಲಭ್ಯವಿದ್ದಾರೆ.",
    "form.enquiry": "ವಿಚಾರಣೆ",
    "form.callback": "ಕಾಲ್‌ಬ್ಯಾಕ್",
    "form.sitevisit": "ಸೈಟ್ ವೀಕ್ಷಣೆ",
    "form.fullname": "ಪೂರ್ಣ ಹೆಸರು *",
    "form.email": "ಇಮೇಲ್ ವಿಳಾಸ *",
    "form.phone": "ಫೋನ್ / ವಾಟ್ಸಾಪ್ *",
    "form.dev": "ಆಸಕ್ತಿಯ ಯೋಜನೆ",
    "form.notes": "ಸಮಾಲೋಚನೆ ಟಿಪ್ಪಣಿಗಳು",
    "form.submit": "ವಿಚಾರಣೆ ಸಲ್ಲಿಸಿ",
    "form.submitting": "ಸಲ್ಲಿಸಲಾಗುತ್ತಿದೆ...",
    "form.consent": "ಸ್ಥಿರ ಪ್ರತಿನಿಧಿಗಳು ನನ್ನನ್ನು ಸಂಪರ್ಕಿಸಲು ನಾನು ಸಮ್ಮತಿಸುತ್ತೇನೆ.",
    "form.successTitle": "ವಿಚಾರಣೆ ಯಶಸ್ವಿಯಾಗಿ ದಾಖಲಾಗಿದೆ",
    "form.successSub": "ಸ್ಥಿರದಿಂದ ಹಿರಿಯ ಸಂಬಂಧ ನಿರ್ದೇಶಕರು 4 ಕೆಲಸದ ಗಂಟೆಗಳಲ್ಲಿ ನಿಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸುತ್ತಾರೆ.",

    // Footer
    "footer.col1": "ಯೋಜನೆಗಳು",
    "footer.col2": "ಸಿದ್ಧಾಂತ",
    "footer.col3": "ಕಂಪನಿ",
    "footer.col4": "ಕಾನೂನು",
    "footer.col5": "ಸಂಪರ್ಕ",
    "footer.allDevs": "ಎಲ್ಲಾ ಯೋಜನೆಗಳು",
    "footer.masterPlanMatrix": "ಮಾಸ್ಟರ್ ಪ್ಲಾನ್ ಮ್ಯಾಟ್ರಿಕ್ಸ್",
    "footer.plotConfigs": "ನಿವೇಶನ ಸಂರಚನೆಗಳು",
    "footer.eightPillars": "ಎಂಟು ಮೂಲಸ್ತಂಭಗಳು",
    "footer.p1": "01 ದೃಷ್ಟಿ & ಪ್ರಮಾಣ",
    "footer.p2": "02 ನಿಖರ ಎಂಜಿನಿಯರಿಂಗ್",
    "footer.p4": "04 ವಾಸ್ತುಶಿಲ್ಪ ಸಂಯಮ",
    "footer.p5": "05 ಪರಿಸರ ವ್ಯವಸ್ಥೆ",
    "footer.p6": "06 ವಿಶ್ವಾಸಾರ್ಹತೆ",
    "footer.aboutStthira": "ಸ್ಥಿರ ಬಗ್ಗೆ",
    "footer.leadership": "ನಾಯಕತ್ವ & ಆಡಳಿತ",
    "footer.alliance": "ಸ್ಥಿರ | ಅಕ್ಷರ ಸಹಯೋಗ",
    "footer.gallery": "ವಾಸ್ತುಶಿಲ್ಪ ಗ್ಯಾಲರಿ",
    "footer.journal": "ಜರ್ನಲ್ & ಒಳನೋಟಗಳು",
    "footer.faqs": "ಪ್ರಶ್ನೋತ್ತರಗಳು",
    "footer.privacy": "ಗೌಪ್ಯತಾ ನೀತಿ",
    "footer.terms": "ಸೇವಾ ನಿಯಮಗಳು",
    "footer.disclaimer": "ವೆಬ್‌ಸೈಟ್ ಹಕ್ಕುತ್ಯಾಗ",
    "footer.cookies": "ಕುಕೀ ನೀತಿ",
    "footer.projectDisclaimer": "ಯೋಜನೆಯ ಹಕ್ಕುತ್ಯಾಗ",
    "footer.rera": "ರೆರಾ ಬಹಿರಂಗಪಡಿಸುವಿಕೆ",
    "footer.office": "ಕಾರ್ಪೊರೇಟ್ ಕಚೇರಿ",
    "footer.concierge": "ನೇರ ಕನ್ಸಿಯರ್ಜ್",
    "footer.conciergeDesk": "ನೇರ ಕನ್ಸಿಯರ್ಜ್",
    "footer.statement": "ಚಿಂತನಶೀಲವಾಗಿ ನಿರ್ಮಿಸಲಾಗಿದೆ. ಶಾಶ್ವತವಾಗಿ ಕಲ್ಪಿಸಲಾಗಿದೆ.",
    "footer.desc": "ಸ್ಥಿರ ಸಂಸ್ಥೆಯು ಸಂಪೂರ್ಣ ಕಾನೂನು ಶುದ್ಧತೆ ಮತ್ತು ವಾಸ್ತುಶಿಲ್ಪ ಸಂಯಮದೊಂದಿಗೆ ಐಷಾರಾಮಿ ನಿವೇಶನಗಳನ್ನು ಅಭಿವೃದ್ಧಿಪಡಿಸುತ್ತದೆ.",
    "footer.rights": "© 2026 ಸ್ಥಿರ ಡೆವಲಪ್‌ಮೆಂಟ್ಸ್ ಪ್ರೈವೇಟ್ ಲಿಮಿಟೆಡ್. ಎಲ್ಲ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.",
    "footer.hierarchyTitle": "ಶ್ರೇಣಿ & ಸಹಯೋಗ",
    "footer.hierarchyText": "ಸ್ಥಿರ ಡೆವಲಪ್‌ಮೆಂಟ್ಸ್ ಪ್ರೈವೇಟ್ ಲಿಮಿಟೆಡ್ ಮುಖ್ಯ ಮಾಸ್ಟರ್ ಡೆವಲಪರ್ ಆಗಿದೆ (ಸ್ಥಾಪನೆ 2026, ನಿರ್ದೇಶಕರ ಮಂಡಳಿ: ಲೋಕೇಶ್ ಮೊದಲಿಯಾರ್). ರೋವೆರಾ ಸ್ಥಿರ ಅಡಿಯಲ್ಲಿನ ವಿಶೇಷ ಯೋಜನೆಯಾಗಿದೆ. ಅಕ್ಷರ ಸಹಯೋಗದೊಂದಿಗೆ.",
    "footer.reraCompliance": "ರೆರಾ & ಡಿಪಿಡಿಪಿ ಅನುಸರಣೆ",
    "footer.contactAdvisory": "ಸಲಹಾ ತಂಡವನ್ನು ಸಂಪರ್ಕಿಸಿ",
    "footer.reraAudit": "ರೆರಾ ಲೆಕ್ಕಪರಿಶೋಧನೆ",
  },
};

export interface LanguageContextType {
  language: Language;
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, fallback?: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  currentLanguage: "en",
  setLanguage: () => {},
  t: (key: string, fallback?: string) => fallback || key,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("stthira_lang") as Language;
    if (saved && ["en", "te", "ta", "hi", "kn"].includes(saved)) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("stthira_lang", lang);
    document.documentElement.lang = lang;
  };

  const t = (key: string, fallback?: string): string => {
    const dict = TRANSLATIONS[language] || TRANSLATIONS.en;
    return dict[key] || TRANSLATIONS.en[key] || fallback || key;
  };

  return (
    <LanguageContext.Provider value={{ language, currentLanguage: language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
