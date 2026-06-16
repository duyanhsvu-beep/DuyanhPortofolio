import { Project, ServiceDetail, Experience, SkillGroup } from './types';
import eenNieuwBeginImg from './assets/images/eennieuwbegin.png';
import ontkurktImg from './assets/images/ontkurkt.jpg';
import heroesOnlyImg from './assets/images/heroesonly.png';

export const HERO_TEXT = {
  name: "Duyanh",
  title: "Freelance Videographer & Editor",
  subtitle: "Samenbrengen van verhalen in licht, frame en montage.",
  tagline: "Gespecialiseerd in high-end sfeerverslagen, brand films en cinematische montage met een sterke visuele identiteit.",
  location: "Amsterdam, NL",
  coordinates: "52.3676° N, 4.9041° E"
};

export const PROJECTS: Project[] = [
  {
    id: "een-nieuw-begin",
    title: "Een Nieuw Begin",
    category: "VIDEOGRAFIE",
    description: "Een cinematische documentaire die de transitie naar een vernieuwde, pure creatieve studio-omgeving belicht.",
    fullDescription: "Dit filmwerk documenteert de evolutie van een creatieve workspace. Gefilmd met extreme precisie en een passie voor schaduw en natuurlijk invallend licht, vertelt 'Een Nieuw Begin' het verhaal van de rust en ruimtelijkheid die nodig zijn om authentiek werk te produceren. Het is de ultieme expressie van onze minimalistische filosofie.",
    year: "2026",
    services: ["Art Direction", "Cinematography", "Visual Editing"],
    client: "Duyanh Vu",
    image: eenNieuwBeginImg,
    role: "Director of Photography",
    deliverables: ["4K Cinematic Master", "Social Trailer Campaign", "Visual Stills Gallery"],
    gallery: [eenNieuwBeginImg],
    link: "https://duyanh.design/een-nieuw-begin"
  },
  {
    id: "ontkurkt",
    title: "Ontkurkt",
    category: "VIDEOGRAFIE",
    description: "Een intieme, verticale sfeervideo van Wijnfestival Ontkurkt, ontworpen voor mobiele platformen en high-end sfeerverslaggeving.",
    fullDescription: "Ontkurkt brengt de zintuiglijke ervaring van een exclusief wijnfestival in beeld. Specifiek gecureerd voor een verticaal mobiel frame, legt deze video de nadruk op fijne interacties, ambachtelijke branding op hout en de levendige, warme sfeer van bijeenkomsten. De close-ups en macro-frames creëren een tastbare ervaring.",
    year: "2025",
    services: ["Vertical Video", "Dynamic Color Grading", "Macro Cinematography"],
    client: "Wijnfestival Ontkurkt",
    image: ontkurktImg,
    role: "Cinematographer & Colorist",
    deliverables: ["Vertical 9:16 Social Masters", "Festival Recap Cut", "Color Grading Project"],
    gallery: [ontkurktImg],
    link: "https://duyanh.design/ontkurkt"
  },
  {
    id: "heroes-only",
    title: "Heroes Only",
    category: "VIDEOGRAFIE",
    description: "Een asymmetrisch, strak geënsceneerd debatconcept in een rauwe, industriële kantooromgeving.",
    fullDescription: "Gefilmd voor 'Heroes Only', combineert deze sfeer- en debatproductie hoogvlakte belichting met scherpe personage-focus. De asymmetrische compositie weerspiegelt de meningsverschillen en dynamiek aan tafel, terwijl de minimalistische kleurstelling zorgt dat de fysieke expressie en het narratief volledig de boventoon voeren.",
    year: "2025",
    services: ["Multi-Cam Production", "Lighting Design", "Interview Curation"],
    client: "Heroes Only",
    image: heroesOnlyImg,
    role: "Lead Editor & Camera Operator",
    deliverables: ["Full Interview Episodes", "Teaser Cuts", "B-Roll Portfolio Reel"],
    gallery: [heroesOnlyImg],
    link: "https://duyanh.design/heroes-only"
  },
  {
    id: "amsterdam-nocturne",
    title: "Amsterdam Nocturne",
    category: "FOTOGRAFIE",
    description: "Een diepgaand visueel onderzoek naar het contrast tussen kunstlicht en schaduw in de nachtelijke straten van Amsterdam.",
    fullDescription: "Dit langlopende project documenteert de nachtelijke rust van de stad. Geïnspireerd door classic film-noir en sfeerbelichting, is de nadruk gelegd op hoog contrast, diepe schaduwen en minimalistische geometrische composities in de stedelijke architectuur. Elk frame vertelt een eigen, stilzwijgend verhaal over eenzaamheid en schoonheid.",
    year: "2025",
    services: ["Street Photography", "High-Contrast Editing", "Print Curation"],
    client: "Persoonlijk Project",
    image: "https://images.unsplash.com/photo-1498036882173-b41c28a8ba34?auto=format&fit=crop&q=80&w=1200&sat=-100",
    role: "Fotograaf & Visual Editor",
    deliverables: ["Limited Edition Fotoboek", "Expositie Prints", "Digitale Archieven"],
    gallery: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200&sat=-100",
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&q=80&w=1200&sat=-100"
    ],
    link: "https://duyanh.design/nocturne"
  }
];

export const SERVICES: ServiceDetail[] = [
  {
    id: "photography",
    title: "High-End Fotografie",
    description: "Het vangen van het onzichtbare door middel van doordachte composities, natuurlijk licht, en diepe contrasten. Gespecialiseerd in architectuur, straatbeeld en editoriale portretten.",
    tools: ["Sony A7RV", "Prime Lenses (35mm, 50mm, 85mm)", "Adobe Lightroom Classic", "Capture One"],
    tag: "STILLNESS"
  },
  {
    id: "videography",
    title: "Cinematische Videografie",
    description: "Verhalen vertellen met ritme, beweging en klank. Vanaf het initiële storyboard tot en met de uiteindelijke color grading, gefocust op pure beeldkracht en meeslepende narratieven.",
    tools: ["Sony FX3", "Anamorphic Lenses", "DaVinci Resolve Studio", "Adobe Premiere Pro"],
    tag: "MOTION"
  },
  {
    id: "webdesign",
    title: "Minimalistisch Webdesign",
    description: "Websites die ademen. De perfecte synthese tussen esthetiek en techniek. Altijd asymmetrisch gebalanceerd, snel ladend, en voorzien van geraffineerde micro-interacties.",
    tools: ["Figma Design", "React", "Tailwind CSS", "Motion / Framer Motion", "Vite"],
    tag: "STRUCTURE"
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "ONTWERP & CONCEPT",
    skills: ["Art Direction", "UI/UX Design", "Wireframing", "Branding", "Visual Storytelling", "Cinematografie"]
  },
  {
    category: "SOFTWARE & TOOLS",
    skills: ["Figma", "Adobe Lightroom", "Adobe Premiere Pro", "DaVinci Resolve", "Photoshop", "After Effects"]
  },
  {
    category: "TECHNOLOGIE",
    skills: ["HTML5 / CSS3", "Tailwind CSS Layouts", "JavaScript (ES6+)", "TypeScript Modules", "React JS", "Motion Frame Animations"]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    period: "2023 - HEDEN",
    role: "Freelance Creative Designer & Visual Artist",
    company: "Duyanh Design",
    description: "Ontwerpen van premium digitale producten, editorial fotoshoots en cinematic video-edits voor geselecteerde creatieve studio's en merken."
  },
  {
    period: "2021 - 2023",
    role: "Digital Designer & Cinematographer",
    company: "Aura Creative Studio",
    description: "Verantwoordelijk voor high-fidelity UI designs en de productie van video-campagnes. Samengewerkt met toonaangevende architectencollectieven."
  },
  {
    period: "2019 - 2021",
    role: "Junior Interactive Designer",
    company: "Pulse Digital Agency",
    description: "Opzetten van UI component bibliotheken en productfotografie voor e-commerce merken met focus op strakke esthetiek."
  }
];

export const BIOGRAPHY = {
  text1: "Ik ben Duyanh, een digital designer met een scherp oog voor detail en een onvoorwaardelijke passie voor minimalistische creaties. Ik geloof dat grote ontwerpen krachtig zijn door wat je weglaat, niet door wat je toevoegt.",
  text2: "Door de werelden van fotografie, videografie en softwareontwikkeling met elkaar te verbinden, creëer ik digitale sferen waarin content en code elkaar versterken. Mijn werk kenmerkt zich door een monochrome esthetiek, gedurfde typografie en verfijnde interacties die rust uitstralen.",
  text3: "Geïnspireerd door asymmetrische brutalistische lay-outs en de kalmte van de analoge fotografie, streef ik ernaar om de perfecte balans te vinden tussen functionaliteit en esthetische perfectie."
};

export const CONTACT_LINKS = {
  email: "duyanhsvu@gmail.com",
  instagram: "https://instagram.com/duyanh",
  linkedin: "https://linkedin.com/in/duyanh",
  behance: "https://behance.net/duyanh",
  github: "https://github.com/duyanh"
};
