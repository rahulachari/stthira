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

    // Featured Project
    "project.badge": "Featured Master Development",
    "project.title": "OUR DEVELOPMENTS",
    "project.tagline": "An expression of thoughtfully planned luxury plotted living.",
    "project.roveraIntro": "ROVERA is the premiere luxury plotted development under the STTHIRA brand. Conceived with architectural rigor, expansive green corridors, underground utilities, and monumental stone entrance architecture.",
    "project.cta": "Explore ROVERA Page",
    "project.all": "All Developments",

    // Partnership
    "partnership.badge": "Strategic Land Alliance",
    "partnership.title": "STTHIRA | AKSHARA",
    "partnership.subtitle": "A Master Collaboration in Luxury Plotted Living",
    "partnership.desc": "Uniting STTHIRA's architectural mastery and institutional capital governance with AKSHARA's storied regional land stewardship to curate sovereign plotted landmarks across India.",

    // Leadership
    "leadership.badge": "Board Governance",
    "leadership.title": "LEADERSHIP & STEWARDSHIP",
    "leadership.name": "Lokesh Mudhaliar",
    "leadership.role": "Board of Directors • STTHIRA",
    "leadership.quote": "At STTHIRA, our standard is permanence. We do not develop merely for transactions; we curate generational landmarks where land becomes an enduring canvas for modern architecture and lasting value.",

    // Philosophy
    "phil.badge": "Core Brand Direction",
    "phil.headline": "REFINED IN THOUGHT. BOLD IN VISION.",
    "phil.sub": "Our eight foundational pillars dictate every master plan, architectural threshold, and fiduciary commitment.",
    "phil.read": "Read Full Treatise",

    // Form
    "form.badge": "Private Advisory Concierge",
    "form.headline": "LET'S BEGIN A CONVERSATION.",
    "form.sub": "Schedule a private consultation, request an executive callback, or arrange a chauffeured site visit to ROVERA.",
    "form.enquiry": "Enquiry",
    "form.callback": "Callback",
    "form.sitevisit": "Site Visit",
    "form.fullname": "Full Legal Name *",
    "form.email": "Email Address *",
    "form.phone": "Contact Phone / WhatsApp *",
    "form.dev": "Development of Interest",
    "form.submit": "Submit Formal Enquiry",
    "form.consent": "I authorize STTHIRA and its relationship team to contact me.",

    // Footer
    "footer.statement": "THOUGHTFULLY BUILT. TIMELESSLY ENVISIONED.",
    "footer.desc": "STTHIRA curates institutional-grade luxury plotted developments designed around architectural restraint, forensic legal purity, and long-term capital permanence.",
    "footer.rights": "© 2026 STTHIRA DEVELOPMENTS PRIVATE LIMITED. ALL RIGHTS RESERVED.",
    "footer.hierarchy": "Brand Hierarchy: STTHIRA is the principal corporate master developer. ROVERA is an exclusive plotted development under STTHIRA.",
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

    // Featured Project
    "project.badge": "ప్రధాన మాస్టర్ డెవలప్‌మెంట్",
    "project.title": "మా ప్రాజెక్టులు",
    "project.tagline": "ఆలోచనాత్మకంగా రూపొందించిన లగ్జరీ ప్లాటెడ్ జీవనం.",
    "project.roveraIntro": "రోవెరా అనేది స్థిర బ్రాండ్ ఆధ్వర్యంలో నిర్మితమైన ప్రతిష్టాత్మక లగ్జరీ ప్లాటెడ్ ప్రాజెక్ట్. ప్రకృతి మధ్యలో ఆధునిక అండర్‌గ్రౌండ్ సౌకర్యాలు మరియు అద్భుతమైన ప్రవేశ ద్వారంతో రూపుదిద్దుకుంది.",
    "project.cta": "రోవెరా పేజీ చూడండి",
    "project.all": "అన్ని ప్రాజెక్టులు",

    // Partnership
    "partnership.badge": "వ్యూహాత్మక భాగస్వామ్యం",
    "partnership.title": "స్థిర | అక్షర",
    "partnership.subtitle": "లగ్జరీ ప్లాటెడ్ జీవనంలో మహోన్నత భాగస్వామ్యం",
    "partnership.desc": "స్థిర వాస్తు శిల్ప నైపుణ్యం మరియు అక్షర సంస్థ యొక్క ప్రాంతీయ భూమి యాజమాన్య అనుభవం కలిసి భారతదేశంలో అత్యున్నత ల్యాండ్‌మార్క్‌లను సృష్టిస్తున్నాయి.",

    // Leadership
    "leadership.badge": "బోర్డు పాలన",
    "leadership.title": "నాయకత్వం & నిర్వహణ",
    "leadership.name": "లోకేష్ మొదలియార్",
    "leadership.role": "డైరెక్టర్ల బోర్డు • స్థిర",
    "leadership.quote": "స్థిరలో మా ప్రమాణం శాశ్వతత్వం. మేము కేవలం లావాదేవీల కోసం నిర్మించము; తరతరాల పాటు నిలిచే ల్యాండ్‌మార్క్‌లను సృష్టిస్తాము.",

    // Philosophy
    "phil.badge": "కోర్ బ్రాండ్ దిశ",
    "phil.headline": "ఆలోచనలో పరిపక్వత. దృష్టిలో ధైర్యం.",
    "phil.sub": "మా ఎనిమిది మూలస్తంభాలు ప్రతి మాస్టర్ ప్లాన్ మరియు విశ్వసనీయతను నిర్దేశిస్తాయి.",
    "phil.read": "పూర్తి సిద్ధాంతం చదవండి",

    // Form
    "form.badge": "ప్రైవేట్ కన్సల్టేషన్",
    "form.headline": "సంభాషణను ప్రారంభిద్దాం.",
    "form.sub": "వ్యక్తిగత సంప్రదింపులను షెడ్యూల్ చేయండి లేదా రోవెరా సైట్ సందర్శనను ఏర్పాటు చేసుకోండి.",
    "form.enquiry": "విచారణ",
    "form.callback": "కాల్‌బ్యాక్",
    "form.sitevisit": "సైట్ సందర్శన",
    "form.fullname": "పూర్తి పేరు *",
    "form.email": "ఈమెయిల్ చిరునామా *",
    "form.phone": "ఫోన్ / వాట్సాప్ *",
    "form.dev": "ఆసక్తి ఉన్న ప్రాజెక్ట్",
    "form.submit": "విచారణ సమర్పించండి",
    "form.consent": "స్థిర ప్రతినిధులు నన్ను సంప్రదించడానికి నేను అంగీకరిస్తున్నాను.",

    // Footer
    "footer.statement": "ఆలోచనాత్మకంగా నిర్మించబడింది. శాశ్వతంగా ఊహించబడింది.",
    "footer.desc": "స్థిర సంస్థ పారదర్శకత, శాశ్వత చట్టబద్ధత మరియు ఉన్నతమైన వాస్తు శిల్పంతో లగ్జరీ ప్లాటెడ్ కమ్యూనిటీలను అభివృద్ధి చేస్తుంది.",
    "footer.rights": "© 2026 స్థిర డెవలప్‌మెంట్స్ ప్రైవేట్ లిమిటెడ్. సర్వహక్కులు ప్రత్యేకించబడ్డాయి.",
    "footer.hierarchy": "బ్రాండ్ శ్రేణి: స్థిర ప్రధాన కార్పొరేట్ సంస్థ. రోవెరా స్థిర ఆధ్వర్యంలోని లగ్జరీ ప్లాటెడ్ ప్రాజెక్ట్.",
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

    // Featured Project
    "project.badge": "முதன்மை திட்டம்",
    "project.title": "எங்கள் திட்டங்கள்",
    "project.tagline": "திட்டமிட்டு செதுக்கப்பட்ட சொகுசு மனை வாழ்க்கை.",
    "project.roveraIntro": "ரோவேரா என்பது ஸ்திரா பிராண்டின் கீழ் அமைந்த முதன்மை சொகுசு மனைத் திட்டமாகும். இயற்கையோடு இயைந்த நிலவமைப்பு மற்றும் நவீன உள்கட்டமைப்புடன் அமைக்கப்பட்டுள்ளது.",
    "project.cta": "ரோவேரா பக்கம் செல்க",
    "project.all": "அனைத்து திட்டங்கள்",

    // Partnership
    "partnership.badge": "மூலோபாய நில கூட்டணி",
    "partnership.title": "ஸ்திரா | அக்ஷரா",
    "partnership.subtitle": "சொகுசு மனை வாழ்க்கையில் உன்னத கூட்டாண்மை",
    "partnership.desc": "ஸ்திராவின் கட்டிடக்கலை திறனும், அக்ஷரா நிறுவனத்தின் நில நிர்வாக அனுபவமும் இணைந்து தலைமுறைக்கான அடையாளங்களை உருவாக்குகின்றன.",

    // Leadership
    "leadership.badge": "நிர்வாகக் குழு",
    "leadership.title": "தலைமை மற்றும் மேலாண்மை",
    "leadership.name": "லோகேஷ் முதலியார்",
    "leadership.role": "இயக்குனர் குழு • ஸ்திரா",
    "leadership.quote": "ஸ்திராவில் எங்கள் தரம் என்பது நிரந்தரமானது. வணிகத்திற்காக மட்டுமல்லாமல், தலைமுறைகள் போற்றும் நில அடையாளங்களை உருவாக்குகிறோம்.",

    // Philosophy
    "phil.badge": "மையக் கொள்கை",
    "phil.headline": "சிந்தனையில் நேர்த்தி. பார்வையில் துணிவு.",
    "phil.sub": "எங்களின் எட்டு தூண்கள் ஒவ்வொரு திட்டத்தையும் துல்லியமாக வழிநடத்துகின்றன.",
    "phil.read": "முழு கட்டுரையை வாசியுங்கள்",

    // Form
    "form.badge": "தனியார் ஆலோசனை",
    "form.headline": "ஒரு உரையாடலைத் தொடங்குவோம்.",
    "form.sub": "தனிப்பட்ட ஆலோசனையை பதிவு செய்யுங்கள் அல்லது ரோவேரா தளத்தை பார்வையிடுங்கள்.",
    "form.enquiry": "விசாரணை",
    "form.callback": "திரும்ப அழைக்க",
    "form.sitevisit": "தளப் பார்வை",
    "form.fullname": "முழு பெயர் *",
    "form.email": "மின்னஞ்சல் *",
    "form.phone": "தொலைபேசி / வாட்ஸ்அப் *",
    "form.dev": "ஆர்வமுள்ள திட்டம்",
    "form.submit": "விசாரணையை சமர்ப்பிக்கவும்",
    "form.consent": "ஸ்திரா பிரதிநிதிகள் என்னை தொடர்பு கொள்ள ஒப்புக்கொள்கிறேன்.",

    // Footer
    "footer.statement": "சிந்தனையுடன் கட்டப்பட்டது. காலத்தால் அழியாமல் வடிவமைக்கப்பட்டது.",
    "footer.desc": "ஸ்திரா சட்டப்பூர்வ தூய்மை மற்றும் உயர்ந்த கட்டிடக்கலையுடன் சொகுசு மனை சமூகங்களை உருவாக்குகிறது.",
    "footer.rights": "© 2026 ஸ்திரா டெவலப்மென்ட்ஸ் பிரைவேட் லிமிடெட். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
    "footer.hierarchy": "பிராண்ட் வரிசை: ஸ்திரா முதன்மை நிறுவனம். ரோவேரா ஸ்திராவின் கீழ் உள்ள சொகுசு மனைத் திட்டம்.",
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

    // Featured Project
    "project.badge": "प्रमुख मास्टर डेवलपमेंट",
    "project.title": "हमारी परियोजनाएं",
    "project.tagline": "विचारशीलता से नियोजित लक्जरी प्लॉटेड जीवन की अभिव्यक्ति।",
    "project.roveraIntro": "रोवेरा स्थिरा ब्रांड के तहत प्रमुख लक्जरी प्लॉटेड विकास है। व्यापक हरित गलियारों, भूमिगत उपयोगिताओं और भव्य प्रवेश वास्तुकला के साथ निर्मित।",
    "project.cta": "रोवेरा पेज देखें",
    "project.all": "सभी परियोजनाएं",

    // Partnership
    "partnership.badge": "रणनीतिक भूमि गठबंधन",
    "partnership.title": "स्थिरा | अक्षरा",
    "partnership.subtitle": "लक्जरी प्लॉटेड लिविंग में एक ऐतिहासिक सहयोग",
    "partnership.desc": "स्थिरा की वास्तुशिल्प उत्कृष्टता और अक्षरा के क्षेत्रीय भूमि प्रबंधन का संगम भारत में पीढ़ीगत स्थलों का निर्माण करता है।",

    // Leadership
    "leadership.badge": "बोर्ड प्रशासन",
    "leadership.title": "नेतृत्व और प्रबंधन",
    "leadership.name": "लोकेश मुदलियार",
    "leadership.role": "निदेशक मंडल • स्थिरा",
    "leadership.quote": "स्थिरा में हमारा मानक स्थायित्व है। हम केवल लेन-देन के लिए निर्माण नहीं करते; हम पीढ़ीगत स्थलों का निर्माण करते हैं।",

    // Philosophy
    "phil.badge": "मूल ब्रांड दिशा",
    "phil.headline": "विचार में परिष्कृत। दृष्टि में साहसी।",
    "phil.sub": "हमारे आठ बुनियादी स्तंभ हर मास्टर प्लान और कानूनी प्रतिबद्धता को निर्देशित करते हैं।",
    "phil.read": "पूरा लेख पढ़ें",

    // Form
    "form.badge": "निजी सलाहकार कंसीयर्ज",
    "form.headline": "आइए बातचीत शुरू करें।",
    "form.sub": "निजी परामर्श शेड्यूल करें या रोवेरा में साइट विजिट की व्यवस्था करें।",
    "form.enquiry": "पूछताछ",
    "form.callback": "कॉलबैक",
    "form.sitevisit": "साइट विजिट",
    "form.fullname": "पूरा कानूनी नाम *",
    "form.email": "ईमेल पता *",
    "form.phone": "फोन / व्हाट्सएप *",
    "form.dev": "रुचि की परियोजना",
    "form.submit": "पूछताछ सबमिट करें",
    "form.consent": "मैं स्थिरा प्रतिनिधियों द्वारा मुझसे संपर्क करने की सहमति देता हूं।",

    // Footer
    "footer.statement": "विचारपूर्वक निर्मित। कालातीत रूप से परिकल्पित।",
    "footer.desc": "स्थिरा कानूनी शुद्धता, भूमिगत बुनियादी ढांचे और वास्तुशिल्प संयम के साथ लक्जरी प्लॉटेड समुदाय विकसित करता है।",
    "footer.rights": "© 2026 स्थिरा डेवलपमेंट्स प्राइवेट लिमिटेड। सर्वाधिकार सुरक्षित।",
    "footer.hierarchy": "ब्रांड पदानुक्रम: स्थिरा मुख्य कॉर्पोरेट इकाई है। रोवेरा स्थिरा के तहत एक विशेष प्लॉटेड परियोजना है।",
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

    // Featured Project
    "project.badge": "ಪ್ರಮುಖ ಯೋಜನೆ",
    "project.title": "ನಮ್ಮ ಯೋಜನೆಗಳು",
    "project.tagline": "ಚಿಂತನಶೀಲವಾಗಿ ಯೋಜಿಸಲಾದ ಲಕ್ಸುರಿ ಪ್ಲಾಟೆಡ್ ಜೀವನ.",
    "project.roveraIntro": "ರೋವೆರಾ ಎಂಬುದು ಸ್ಥಿರ ಬ್ರ್ಯಾಂಡ್ ಅಡಿಯಲ್ಲಿ ನಿರ್ಮಾಣವಾಗಿರುವ ಪ್ರತಿಷ್ಠಿತ ಲಕ್ಸುರಿ ಪ್ಲಾಟೆಡ್ ಯೋಜನೆಯಾಗಿದೆ. ವಿಶಾಲ ಹಸಿರು ಪರಿಸರ ಮತ್ತು ಆಧುನಿಕ ಭೂಗತ ಸೌಲಭ್ಯಗಳೊಂದಿಗೆ ರೂಪುಗೊಂಡಿದೆ.",
    "project.cta": "ರೋವೆರಾ ಪುಟ ನೋಡಿ",
    "project.all": "ಎಲ್ಲಾ ಯೋಜನೆಗಳು",

    // Partnership
    "partnership.badge": "ಕಾರ್ಯತಂತ್ರದ ಭೂ ಪಾಲುದಾರಿಕೆ",
    "partnership.title": "ಸ್ಥಿರ | ಅಕ್ಷರ",
    "partnership.subtitle": "ಲಕ್ಸುರಿ ಪ್ಲಾಟೆಡ್ ಜೀವನದಲ್ಲಿ ಮಹೋನ್ನತ ಸಹಯೋಗ",
    "partnership.desc": "ಸ್ಥಿರ ಸಂಸ್ಥೆಯ ವಾಸ್ತುಶಿಲ್ಪ ಪ್ರಾವೀಣ್ಯತೆ ಮತ್ತು ಅಕ್ಷರ ಸಂಸ್ಥೆಯ ಪ್ರಾದೇಶಿಕ ಭೂ ಆಡಳಿತ ಅನುಭವ ಒಗ್ಗೂಡಿ ಭಾರತದಲ್ಲಿ ಐತಿಹಾಸಿಕ ತಾಣಗಳನ್ನು ನಿರ್ಮಿಸುತ್ತಿವೆ.",

    // Leadership
    "leadership.badge": "ಮಂಡಳಿ ಆಡಳಿತ",
    "leadership.title": "ನಾಯಕತ್ವ ಮತ್ತು ಆಡಳಿತ",
    "leadership.name": "ಲೋಕೇಶ್ ಮೊದಲಿಯಾರ್",
    "leadership.role": "ನಿರ್ದೇಶಕರ ಮಂಡಳಿ • ಸ್ಥಿರ",
    "leadership.quote": "ಸ್ಥಿರದಲ್ಲಿ ನಮ್ಮ ಮಾನದಂಡ ಶಾಶ್ವತತೆ. ನಾವು ಕೇವಲ ವಹಿವಾಟಿಗಾಗಿ ನಿರ್ಮಿಸುವುದಿಲ್ಲ; ತಲೆಮಾರುಗಳು ಹೆಮ್ಮೆಪಡುವ ಹೆಗ್ಗುರುತುಗಳನ್ನು ಸೃಷ್ಟಿಸುತ್ತೇವೆ.",

    // Philosophy
    "phil.badge": "ಮೂಲ ಬ್ರ್ಯಾಂಡ್ ನಿರ್ದೇಶನ",
    "phil.headline": "ಚಿಂತನೆಯಲ್ಲಿ ಪರಿಪಕ್ವತೆ. ದೃಷ್ಟಿಯಲ್ಲಿ ಧೈರ್ಯ.",
    "phil.sub": "ನಮ್ಮ ಎಂಟು ಮೂಲಸ್ತಂಭಗಳು ಪ್ರತಿಯೊಂದು ಮಾಸ್ಟರ್ ಪ್ಲಾನ್ ಮತ್ತು ವಿಶ್ವಾಸಾರ್ಹತೆಯನ್ನು ರೂಪಿಸುತ್ತವೆ.",
    "phil.read": "ಸಂಪೂರ್ಣ ಲೇಖನ ಓದಿ",

    // Form
    "form.badge": "ಖಾಸಗಿ ಸಲಹಾ ಕನ್ಸಿಯರ್ಜ್",
    "form.headline": "ಸಂಭಾಷಣೆಯನ್ನು ಪ್ರಾರಂಭಿಸೋಣ.",
    "form.sub": "ವೈಯಕ್ತಿಕ ಸಮಾಲೋಚನೆಯನ್ನು ನಿಗದಿಪಡಿಸಿ ಅಥವಾ ರೋವೆರಾ ಸೈಟ್ ವೀಕ್ಷಣೆಯನ್ನು ಕಾಯ್ದಿರಿಸಿ.",
    "form.enquiry": "ವಿಚಾರಣೆ",
    "form.callback": "ಕಾಲ್‌ಬ್ಯಾಕ್",
    "form.sitevisit": "ಸೈಟ್ ವೀಕ್ಷಣೆ",
    "form.fullname": "ಪೂರ್ಣ ಹೆಸರು *",
    "form.email": "ಇಮೇಲ್ ವಿಳಾಸ *",
    "form.phone": "ಫೋನ್ / ವಾಟ್ಸಾಪ್ *",
    "form.dev": "ಆಸಕ್ತಿಯ ಯೋಜನೆ",
    "form.submit": "ವಿಚಾರಣೆ ಸಲ್ಲಿಸಿ",
    "form.consent": "ಸ್ಥಿರ ಪ್ರತಿನಿಧಿಗಳು ನನ್ನನ್ನು ಸಂಪರ್ಕಿಸಲು ನಾನು ಸಮ್ಮತಿಸುತ್ತೇನೆ.",

    // Footer
    "footer.statement": "ಚಿಂತನಶೀಲವಾಗಿ ನಿರ್ಮಿಸಲಾಗಿದೆ. ಶಾಶ್ವತವಾಗಿ ಕಲ್ಪಿಸಲಾಗಿದೆ.",
    "footer.desc": "ಸ್ಥಿರ ಸಂಸ್ಥೆಯು ಸಂಪೂರ್ಣ ಕಾನೂನು ಶುದ್ಧತೆ ಮತ್ತು ವಾಸ್ತುಶಿಲ್ಪ ಸಂಯಮದೊಂದಿಗೆ ಐಷಾರಾಮಿ ನಿವೇಶನಗಳನ್ನು ಅಭಿವೃದ್ಧಿಪಡಿಸುತ್ತದೆ.",
    "footer.rights": "© 2026 ಸ್ಥಿರ ಡೆವಲಪ್‌ಮೆಂಟ್ಸ್ ಪ್ರೈವೇಟ್ ಲಿಮಿಟೆಡ್. ಎಲ್ಲ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.",
    "footer.hierarchy": "ಬ್ರ್ಯಾಂಡ್ ಶ್ರೇಣಿ: ಸ್ಥಿರ ಮುಖ್ಯ ಕಾರ್ಪೊರೇಟ್ ಸಂಸ್ಥೆ. ರೋವೆರಾ ಸ್ಥಿರ ಅಡಿಯಲ್ಲಿನ ವಿಶೇಷ ಯೋಜನೆಯಾಗಿದೆ.",
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, fallback?: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
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
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

