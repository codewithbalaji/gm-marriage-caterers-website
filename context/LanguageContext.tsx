"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Lang = "en" | "ta";

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    // Only access localStorage on the client side
    const saved = localStorage.getItem("gm-lang");
    if (saved === "ta" || saved === "en") {
      setLangState(saved);
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") {
      localStorage.setItem("gm-lang", l);
    }
  };

  const t = (key: string): string => {
    const keys = key.split(".");
    let value: any = translations[lang];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

const translations: Record<Lang, any> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      menu: "Menu",
      gallery: "Gallery",
      book: "Book Now",
    },
    hero: {
      auspicious: "ஸ்ரீ மதுரகாளியம்மன் துணை",
      heading: "We Make Your Wedding Unforgettable",
      sub: "25+ Years of Authentic South Indian Catering · All of Tamil Nadu",
      cta1: "Explore Our Menu",
      cta2: "Book Now",
    },
    trust: {
      years: "Years of Experience",
      functions: "Functions Served",
      events: "Events Per Year",
      satisfaction: "Satisfaction Guaranteed",
    },
    services: {
      heading: "Our Services",
      sub: "Traditional catering for every auspicious occasion",
      marriage: { name: "Marriage", desc: "Complete traditional Brahmin wedding catering with full banana leaf feast" },
      betrothal: { name: "Betrothal", desc: "Elegant engagement ceremony catering with traditional offerings" },
      seemantham: { name: "Seemantham", desc: "Traditional baby shower ceremony with authentic delicacies" },
      upanayanam: { name: "Upanayanam", desc: "Sacred thread ceremony catering with ritual-perfect menus" },
      ayushya: { name: "Ayushya Homam", desc: "First birthday celebration with traditional feast arrangements" },
      grihapravesam: { name: "Grihapravesam", desc: "House warming ceremony catering with auspicious preparations" },
      sashtiabdha: { name: "Sashtiabdhapoorthi", desc: "60th birthday celebration with grand traditional feast" },
      sadabhishekam: { name: "Sadabhishekam", desc: "80th birthday celebration catering with full traditional honors" },
      punyahavachanam: { name: "Punyahavachanam", desc: "Purification ceremony catering with sacred offerings" },
      corporate: { name: "Corporate Events", desc: "Professional South Indian catering for corporate functions" },
    },
    whyUs: {
      heading: "Why Choose GM Marriage Caterers?",
      quote: "25+ Years Trusted by Tamil Nadu Families",
      taste: { title: "Authentic Taste", desc: "Traditional recipes passed down through generations, prepared with pure ingredients and love" },
      ritual: { title: "Ritual Precision", desc: "Deep understanding of Brahmin wedding customs ensures every meal aligns with tradition" },
      fullService: { title: "Full Service", desc: "From cooking to serving, cleanup to setup — we handle everything seamlessly" },
    },
    menuTeaser: {
      heading: "A Taste of What We Serve",
      viewFull: "View Full Menu",
    },
    testimonials: {
      heading: "What Our Clients Say",
      items: [
        { name: "Ramesh Iyer", location: "Chennai", event: "Marriage", text: "GM Caterers made our daughter's wedding feast absolutely perfect. Every guest praised the authentic taste. Truly exceptional service!" },
        { name: "Lakshmi Narayanan", location: "Coimbatore", event: "Upanayanam", text: "The attention to detail in both the food and service was remarkable. They understood every ritual requirement perfectly." },
        { name: "Priya Venkatesh", location: "Madurai", event: "Seemantham", text: "From the paal payasam to the sambar, everything tasted just like home cooking but at a grand scale. Wonderful!" },
        { name: "Suresh Kumar", location: "Trichy", event: "Grihapravesam", text: "Professional, punctual, and the food was divine. Our house warming was made special by GM Marriage Caterers." },
      ],
    },
    galleryTeaser: {
      heading: "A Glimpse of Our Work",
      viewFull: "View Full Gallery",
    },
    cta: {
      heading: "Ready to Make Your Function Unforgettable?",
      book: "Book Now",
      call: "Call 9282117620",
    },
    about: {
      heading: "About GM Marriage Caterers",
      sub: "A Legacy of Taste Since 2000",
      story: "Founded by T. Ganesan in 2000, GM Marriage Caterers has grown from humble beginnings in Ambattur, Chennai to become one of Tamil Nadu's most trusted Brahmin wedding catering services. With over 25 years of experience and more than 10,000 functions served, we bring authentic South Indian flavors to every celebration. Our commitment to traditional recipes, pure ingredients, and impeccable service has made us the preferred choice for families across Tamil Nadu.",
      values: {
        tradition: { title: "Rooted in Tradition", desc: "Every recipe follows time-honored methods passed through generations of master cooks" },
        quality: { title: "Uncompromising Quality", desc: "Only the freshest ingredients and purest spices make it to our kitchen" },
        service: { title: "Dedicated Service", desc: "A trained team of 50+ professionals ensures flawless execution at every event" },
      },
      timeline: [
        { year: "2000", text: "Founded by T. Ganesan in Ambattur, Chennai" },
        { year: "2005", text: "Expanded services across Chennai city" },
        { year: "2010", text: "Reached 2,000+ events milestone" },
        { year: "2015", text: "Extended operations to all of Tamil Nadu" },
        { year: "2020", text: "Celebrated 20 years with 8,000+ events" },
        { year: "2025", text: "25+ years, 10,000+ functions, and still growing" },
      ],
    },
    menuPage: {
      heading: "Our Menu",
      sub: "Traditional South Indian Brahmin Wedding Feast",
      tabs: { janavaasam: "Janavaasam Day", muhurtham: "Muhurtham Day", kattusatham: "Kattusatham", custom: "Custom Menu" },
      download: "Download Full Menu PDF",
      customize: "Customise Your Menu",
    },
    galleryPage: {
      heading: "Our Gallery",
      filters: { all: "All", food: "Food", setup: "Event Setup", serving: "Serving", rituals: "Rituals" },
    },
    bookPage: {
      heading: "Book Your Event",
      sub: "Let us make your celebration memorable",
      form: {
        name: "Full Name",
        mobile: "Mobile Number",
        email: "Email Address",
        eventType: "Event Type",
        eventDate: "Event Date",
        venue: "Venue / City",
        guests: "Number of Guests",
        services: "Additional Services",
        message: "Your Message",
        hearAbout: "How did you hear about us?",
        submit: "Send Enquiry",
        success: "Thank you! We'll get back to you within 24 hours.",
        selectEvent: "Select event type",
        placeholders: {
          name: "Enter your full name",
          mobile: "+91",
          email: "your.email@example.com",
          venue: "Enter venue or city name",
          guests: "e.g., 100",
          message: "Tell us about your requirements, preferences, or any special requests...",
        },
      },
      contact: {
        heading: "Contact Us",
        address: "31/4 & 31/5, Old Bank of Baroda Street, Secretariat Colony, Ambattur, Chennai - 600 053",
        hours: "Mon–Sun: 8:00 AM – 9:00 PM",
        whatsapp: "Chat on WhatsApp",
      },
    },
    footer: {
      tagline: "Serving authentic South Indian Brahmin wedding feasts since 2000. With 25+ years of experience and 10,000+ functions across Tamil Nadu, we bring traditional flavors and impeccable service to every celebration.",
      quickLinks: "Quick Links",
      contact: "Contact Us",
      copyright: "© 2025 GM Marriage Caterers. All rights reserved.",
    },
    complements: {
      heading: "Complement Services",
      mangalavadhyam: "Mangalavadhyam",
      flowers: "Flowers & Garlands",
      sastrigal: "Sastrigal",
      kolam: "Kolam / Rangoli",
      seerbakshanam: "Seerbakshanam",
      thambula: "Thambula Bag",
      coffee: "Pure Filter Coffee",
      buffet: "Buffet Dinner",
      kattusatham: "Kattusatham",
      photoVideo: "Photo & Video",
      music: "Music Party",
      mehandi: "Mehandi",
    },
    faq: {
      heading: "Frequently Asked Questions",
      sub: "Everything you need to know about our catering services",
      items: [
        {
          q: "What areas does GM Marriage Caterers serve?",
          a: "We serve all of Tamil Nadu, including Chennai, Coimbatore, Madurai, Trichy, Salem, and surrounding areas. Our team travels across the state to ensure you experience authentic Brahmin catering wherever your event is held.",
        },
        {
          q: "What types of events do you cater for?",
          a: "We cater for all auspicious occasions — weddings, betrothal (Nischayatartham), Seemantham, Upanayanam, Grihapravesam, Sashtiapthapoorthi, Sadabhishekam, Ayushya Homam, Punyahavachanam, and corporate events.",
        },
        {
          q: "How many years of experience do you have?",
          a: "GM Marriage Caterers was founded in 2000 and has 25+ years of experience in authentic South Indian Brahmin wedding catering. We have served 10,000+ functions and over 500 events per year across Tamil Nadu.",
        },
        {
          q: "What is included in a full-service catering package?",
          a: "Our full-service catering covers menu planning, ingredient sourcing, cooking, banana leaf setup, serving, and cleanup. We handle everything from the kitchen to the dining area so your family can focus on the celebration.",
        },
        {
          q: "Can we customize the menu?",
          a: "Yes, absolutely. We offer four menu types — Janavaasam, Muhurtham feast, Kattusatham, and fully custom packages. We work with you to include your family's favourite traditional dishes while maintaining ritual appropriateness.",
        },
        {
          q: "How far in advance should we book?",
          a: "We recommend booking at least 2–3 months in advance for weddings, and 4–6 weeks for smaller events. Peak wedding season (April–June and November–February) fills up quickly — book early to secure your date.",
        },
        {
          q: "What is a banana leaf feast (Virundhu)?",
          a: "A banana leaf feast, or Virundhu Sappadu, is a traditional South Indian multi-course meal served on a fresh banana leaf. It typically includes rice, sambar, rasam, kootu, poriyal, appalam, pickles, and payasam — all served in the traditional Brahmin style.",
        },
        {
          q: "How can we get a quote or book your services?",
          a: "You can reach us at 9282117620 or 9677067620, email ganesan@gmmarriagecaterers.com, WhatsApp us, or fill out our online enquiry form. We typically respond within 24 hours.",
        },
      ],
    },
  },
  ta: {
    nav: {
      home: "முகப்பு",
      about: "எங்களைப் பற்றி",
      services: "சேவைகள்",
      menu: "மெனு",
      gallery: "படத்தொகுப்பு",
      book: "முன்பதிவு",
    },
    hero: {
      auspicious: "ஸ்ரீ மதுரகாளியம்மன் துணை",
      heading: "உங்கள் திருமணத்தை சுவையாக்குகிறோம்",
      sub: "25+ ஆண்டுகள் நம்பகமான தென்னிந்திய சமையல் · தமிழ்நாடு முழுவதும்",
      cta1: "மெனுவை காணுங்கள்",
      cta2: "முன்பதிவு செய்யுங்கள்",
    },
    trust: {
      years: "ஆண்டுகள் அனுபவம்",
      functions: "விழாக்கள் நடத்தப்பட்டன",
      events: "ஆண்டுக்கு நிகழ்ச்சிகள்",
      satisfaction: "திருப்தி உறுதி",
    },
    services: {
      heading: "எங்கள் சேவைகள்",
      sub: "ஒவ்வொரு மங்களகரமான நிகழ்விற்கும் பாரம்பரிய உணவு",
      marriage: { name: "திருமணம்", desc: "பாரம்பரிய பிராமண திருமண விருந்து வாழை இலையில்" },
      betrothal: { name: "நிச்சயதார்த்தம்", desc: "பாரம்பரிய படையலுடன் நிச்சயதார்த்த விருந்து" },
      seemantham: { name: "சீமந்தம்", desc: "பாரம்பரிய சுவையுணவுகளுடன் வளைகாப்பு" },
      upanayanam: { name: "உபநயனம்", desc: "சடங்குகளுக்கேற்ற மெனுவுடன் பூணூல் கல்யாணம்" },
      ayushya: { name: "ஆயுஷ்ய ஹோமம்", desc: "பாரம்பரிய விருந்துடன் முதல் பிறந்தநாள்" },
      grihapravesam: { name: "கிரஹப்ரவேசம்", desc: "மங்களகரமான ஏற்பாடுகளுடன் புதுமனை புகுவிழா" },
      sashtiabdha: { name: "சஷ்டியப்தபூர்த்தி", desc: "60வது பிறந்தநாள் பாரம்பரிய விருந்து" },
      sadabhishekam: { name: "சதாபிஷேகம்", desc: "80வது பிறந்தநாள் பாரம்பரிய விருந்து" },
      punyahavachanam: { name: "புன்யாஹவசனம்", desc: "புனிதப் படையலுடன் சுத்திகரிப்பு சடங்கு" },
      corporate: { name: "கார்ப்பரேட் நிகழ்வுகள்", desc: "தொழில்முறை தென்னிந்திய விருந்து" },
    },
    whyUs: {
      heading: "ஏன் ஜி.எம். கேட்டரர்ஸ்?",
      quote: "25+ ஆண்டுகள் தமிழ்நாடு குடும்பங்களின் நம்பிக்கை",
      taste: { title: "உண்மையான சுவை", desc: "தலைமுறைகளாக கடத்தப்பட்ட பாரம்பரிய சமையல் குறிப்புகள்" },
      ritual: { title: "சடங்கு துல்லியம்", desc: "பிராமண திருமண பழக்கவழக்கங்களின் ஆழமான புரிதல்" },
      fullService: { title: "முழு சேவை", desc: "சமையல் முதல் பரிமாறுதல் வரை — அனைத்தையும் நாங்கள் கவனிக்கிறோம்" },
    },
    menuTeaser: {
      heading: "நாங்கள் பரிமாறுவது",
      viewFull: "முழு மெனுவை காண",
    },
    testimonials: {
      heading: "எங்கள் வாடிக்கையாளர்கள் கூறுவது",
      items: [
        { name: "ரமேஷ் அய்யர்", location: "சென்னை", event: "திருமணம்", text: "ஜி.எம். கேட்டரர்ஸ் எங்கள் மகளின் திருமண விருந்தை மிகவும் சிறப்பாக செய்தனர். ஒவ்வொரு விருந்தினரும் உண்மையான சுவையை பாராட்டினர்!" },
        { name: "லக்ஷ்மி நாராயணன்", location: "கோவை", event: "உபநயனம்", text: "உணவிலும் சேவையிலும் கவனம் செலுத்துவது குறிப்பிடத்தக்கது. ஒவ்வொரு சடங்கு தேவையையும் புரிந்துகொண்டனர்." },
        { name: "பிரியா வெங்கடேஷ்", location: "மதுரை", event: "சீமந்தம்", text: "பால் பாயசம் முதல் சாம்பார் வரை, அனைத்தும் வீட்டு சமையல் போல இருந்தது. அருமை!" },
        { name: "சுரேஷ் குமார்", location: "திருச்சி", event: "கிரஹப்ரவேசம்", text: "தொழில்முறை, நேரம் தவறாமை, உணவு அற்புதமாக இருந்தது. ஜி.எம். கேட்டரர்ஸ் சிறப்பு!" },
      ],
    },
    galleryTeaser: {
      heading: "எங்கள் பணி",
      viewFull: "முழு படத்தொகுப்பை காண",
    },
    cta: {
      heading: "உங்கள் விழாவை மறக்கமுடியாததாக ஆக்க தயாரா?",
      book: "முன்பதிவு செய்யுங்கள்",
      call: "அழைக்கவும் 9282117620",
    },
    about: {
      heading: "ஜி.எம். மேரேஜ் கேட்டரர்ஸ் பற்றி",
      sub: "2000 முதல் சுவையின் மரபு",
      story: "2000 ஆம் ஆண்டில் டி. கணேசன் அவர்களால் நிறுவப்பட்ட ஜி.எம். மேரேஜ் கேட்டரர்ஸ், அம்பத்தூர், சென்னையில் எளிமையான தொடக்கத்தில் இருந்து தமிழ்நாட்டின் மிகவும் நம்பகமான பிராமண திருமண உணவு சேவையாக வளர்ந்துள்ளது. 25 ஆண்டுகளுக்கும் மேலான அனுபவமும் 10,000க்கும் மேற்பட்ட விழாக்களும் கொண்ட நாங்கள், ஒவ்வொரு கொண்டாட்டத்திற்கும் உண்மையான தென்னிந்திய சுவைகளை கொண்டு வருகிறோம்.",
      values: {
        tradition: { title: "பாரம்பரியத்தில் வேரூன்றியது", desc: "ஒவ்வொரு சமையல் குறிப்பும் தலைமுறைகளாக கடத்தப்பட்ட முறைகளை பின்பற்றுகிறது" },
        quality: { title: "தரத்தில் சமரசமில்லை", desc: "புதிய பொருட்கள் மற்றும் தூய மசாலாப் பொருட்கள் மட்டுமே" },
        service: { title: "அர்ப்பணிப்பான சேவை", desc: "50க்கும் மேற்பட்ட பயிற்சி பெற்ற நிபுணர்கள் குழு" },
      },
      timeline: [
        { year: "2000", text: "டி. கணேசன் அவர்களால் அம்பத்தூரில் நிறுவப்பட்டது" },
        { year: "2005", text: "சென்னை நகரம் முழுவதும் சேவை விரிவாக்கம்" },
        { year: "2010", text: "2,000+ நிகழ்ச்சிகள் மைல்கல்" },
        { year: "2015", text: "தமிழ்நாடு முழுவதும் செயல்பாடுகள் விரிவாக்கம்" },
        { year: "2020", text: "8,000+ நிகழ்ச்சிகளுடன் 20 ஆண்டுகள் கொண்டாட்டம்" },
        { year: "2025", text: "25+ ஆண்டுகள், 10,000+ விழாக்கள், தொடர்ந்து வளர்ச்சி" },
      ],
    },
    menuPage: {
      heading: "எங்கள் மெனு",
      sub: "பாரம்பரிய தென்னிந்திய பிராமண திருமண விருந்து",
      tabs: { janavaasam: "ஜனவாசம்", muhurtham: "முஹூர்த்த நாள்", kattusatham: "கட்டுச்சாதம்", custom: "தனிப்பயன் மெனு" },
      download: "முழு மெனு PDF பதிவிறக்கம்",
      customize: "உங்கள் மெனுவை தனிப்பயனாக்குங்கள்",
    },
    galleryPage: {
      heading: "எங்கள் படத்தொகுப்பு",
      filters: { all: "அனைத்தும்", food: "உணவு", setup: "நிகழ்வு அமைப்பு", serving: "பரிமாறுதல்", rituals: "சடங்குகள்" },
    },
    bookPage: {
      heading: "உங்கள் நிகழ்வை பதிவு செய்யுங்கள்",
      sub: "உங்கள் கொண்டாட்டத்தை மறக்கமுடியாததாக ஆக்குவோம்",
      form: {
        name: "முழு பெயர்",
        mobile: "மொபைல் எண்",
        email: "மின்னஞ்சல்",
        eventType: "நிகழ்வு வகை",
        eventDate: "நிகழ்வு தேதி",
        venue: "இடம் / நகரம்",
        guests: "விருந்தினர் எண்ணிக்கை",
        services: "கூடுதல் சேவைகள்",
        message: "உங்கள் செய்தி",
        hearAbout: "எங்களைப் பற்றி எப்படி அறிந்தீர்கள்?",
        submit: "விண்ணப்பிக்கவும்",
        success: "நன்றி! 24 மணி நேரத்திற்குள் தொடர்பு கொள்வோம்.",
        selectEvent: "நிகழ்வு வகையைத் தேர்ந்தெடுக்கவும்",
        placeholders: {
          name: "உங்கள் முழு பெயரை உள்ளிடவும்",
          mobile: "+91",
          email: "your.email@example.com",
          venue: "இடம் அல்லது நகரத்தின் பெயரை உள்ளிடவும்",
          guests: "எ.கா., 100",
          message: "உங்கள் தேவைகள், விருப்பத்தேர்வுகள் அல்லது சிறப்பு கோரிக்கைகளைப் பற்றி எங்களிடம் கூறுங்கள்...",
        },
      },
      contact: {
        heading: "தொடர்பு கொள்ளுங்கள்",
        address: "31/4 & 31/5, பழைய பாங்க் ஆஃப் பரோடா தெரு, செக்ரடேரியட் காலனி, அம்பத்தூர், சென்னை - 600 053",
        hours: "திங்கள்–ஞாயிறு: காலை 8:00 – இரவு 9:00",
        whatsapp: "வாட்ஸ்அப்பில் அரட்டை",
      },
    },
    footer: {
      tagline: "2000 முதல் உண்மையான தென்னிந்திய பிராமண திருமண விருந்துகளை வழங்குகிறோம். 25+ ஆண்டுகள் அனுபவமும், தமிழ்நாடு முழுவதும் 10,000+ விழாக்களும் கொண்ட நாங்கள், ஒவ்வொரு கொண்டாட்டத்திற்கும் பாரம்பரிய சுவைகளையும் சிறந்த சேவையையும் கொண்டு வருகிறோம்.",
      quickLinks: "விரைவு இணைப்புகள்",
      contact: "தொடர்பு",
      copyright: "© 2025 ஜி.எம். மேரேஜ் கேட்டரர்ஸ். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
    },
    complements: {
      heading: "துணை சேவைகள்",
      mangalavadhyam: "மங்களவாத்யம்",
      flowers: "பூக்கள் & மாலைகள்",
      sastrigal: "சாஸ்திரிகள்",
      kolam: "கோலம் / ரங்கோலி",
      seerbakshanam: "சீர்பக்ஷணம்",
      thambula: "தாம்பூலப் பை",
      coffee: "ஃபில்டர் காபி",
      buffet: "பஃபே டின்னர்",
      kattusatham: "கட்டுச்சாதம்",
      photoVideo: "புகைப்படம் & வீடியோ",
      music: "இசை நிகழ்ச்சி",
      mehandi: "மெஹந்தி",
    },
    faq: {
      heading: "அடிக்கடி கேட்கப்படும் கேள்விகள்",
      sub: "எங்கள் சேவைகளைப் பற்றி அறிய வேண்டியது அனைத்தும்",
      items: [
        {
          q: "ஜி.எம். கேட்டரர்ஸ் எங்கெல்லாம் சேவை வழங்குகிறது?",
          a: "சென்னை, கோவை, மதுரை, திருச்சி, சேலம் உள்ளிட்ட தமிழ்நாடு முழுவதும் சேவை வழங்குகிறோம். உங்கள் நிகழ்வு எங்கு நடந்தாலும் நாங்கள் வருகிறோம்.",
        },
        {
          q: "எந்த மாதிரியான நிகழ்வுகளுக்கு சேவை வழங்குகிறீர்கள்?",
          a: "திருமணம், நிச்சயதார்த்தம், சீமந்தம், உபநயனம், கிரஹப்ரவேசம், சஷ்டியப்தபூர்த்தி, சதாபிஷேகம், ஆயுஷ்ய ஹோமம், புன்யாஹவசனம், மற்றும் கார்ப்பரேட் நிகழ்வுகளுக்கும் சேவை வழங்குகிறோம்.",
        },
        {
          q: "உங்களுக்கு எத்தனை ஆண்டுகள் அனுபவம் உள்ளது?",
          a: "ஜி.எம். மேரேஜ் கேட்டரர்ஸ் 2000 ஆண்டிலிருந்து சேவையில் உள்ளது. 25+ ஆண்டுகள் அனுபவம், 10,000+ விழாக்கள், ஆண்டுக்கு 500+ நிகழ்வுகள் என்று தமிழ்நாடு முழுவதும் சேவை வழங்கியுள்ளோம்.",
        },
        {
          q: "முழு சேவை தொகுப்பில் என்ன அடங்கும்?",
          a: "மெனு திட்டமிடல், பொருட்கள் கொள்முதல், சமையல், வாழை இலை அமைப்பு, பரிமாறுதல், சுத்தப்படுத்துதல் வரை அனைத்தையும் நாங்கள் கவனிக்கிறோம். உங்கள் குடும்பம் விழாவை முழுமையாக ஆனந்திக்கலாம்.",
        },
        {
          q: "மெனுவை தனிப்பயனாக்கலாமா?",
          a: "ஆம், நிச்சயமாக. ஜனவாசம், முகூர்த்தம், கட்டுச்சாதம், மற்றும் தனிப்பயன் தொகுப்புகள் உள்ளன. உங்கள் குடும்பத்தின் விருப்பமான பாரம்பரிய உணவுகளை சடங்குகளுக்கேற்ப சேர்க்கலாம்.",
        },
        {
          q: "எவ்வளவு முன்கூட்டியே முன்பதிவு செய்ய வேண்டும்?",
          a: "திருமணங்களுக்கு 2–3 மாதங்கள் முன்கூட்டியும், சிறிய நிகழ்வுகளுக்கு 4–6 வாரங்கள் முன்கூட்டியும் முன்பதிவு செய்வது நல்லது. திருமண சீசனில் (ஏப்ரல்–ஜூன், நவம்பர்–பிப்ரவரி) விரைவில் நிரம்பிவிடும்.",
        },
        {
          q: "வாழை இலை விருந்து என்றால் என்ன?",
          a: "வாழை இலை விருந்து என்பது பாரம்பரிய தென்னிந்திய பல்பாண்ட உணவு. சாதம், சாம்பார், ரசம், கூட்டு, பொரியல், அப்பளம், ஊறுகாய், பாயசம் என அனைத்தும் வாழை இலையில் பரிமாறப்படும்.",
        },
        {
          q: "விலை மதிப்பீடு அல்லது முன்பதிவு எப்படி செய்வது?",
          a: "9282117620 அல்லது 9677067620 என்ற எண்ணில் அழைக்கலாம், ganesan@gmmarriagecaterers.com க்கு மின்னஞ்சல் அனுப்பலாம், வாட்ஸ்அப்பில் தொடர்புகொள்ளலாம், அல்லது ஆன்லைன் படிவத்தை பூர்த்தி செய்யலாம். 24 மணி நேரத்தில் பதில் அளிப்போம்.",
        },
      ],
    },
  },
};
