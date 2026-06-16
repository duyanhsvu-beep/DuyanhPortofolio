import { Project, ServiceDetail, Experience, SkillGroup } from './types';
import eenNieuwBeginImg from './assets/images/EenNieuwBegin.png';
import ontkurktImg from './assets/images/Ontkurkt.jpg';
import heroesOnlyImg from './assets/images/HeroesOnly.png';

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
  text1: "Ik ben een freelance videographer en editor met een passie voor het vertellen van verhalen door beeld. Wat begon met een camera en nieuwsgierigheid groeide uit tot een drang om momenten vast te leggen die mensen raken en bijblijven.",
  text2: "Reizen speelt daarin een grote rol. Nieuwe plekken, verschillende culturen en onverwachte ontmoetingen inspireren mij voortdurend en beïnvloeden de manier waarop ik naar verhalen kijk. Of ik nu door de bergen van Canada trek, een documentaire maak of een evenement film, ik ben altijd op zoek naar echte momenten en authentieke emoties.",
  text3: "Naast reizen werk ik graag op evenementen, festivals en live producties. De energie van een evenement, de mensen achter de schermen en de uitdaging om unieke momenten vast te leggen maken ieder project anders. Van concept tot edit focus ik op beelden die niet alleen mooi zijn, maar ook een verhaal vertellen.",
  text4: "Mijn doel is simpel: video's maken die mensen iets laten voelen."
};

export const CONTACT_LINKS = {
  email: "duyanhsvu@gmail.com",
  instagram: "https://instagram.com/duyanh",
  linkedin: "https://linkedin.com/in/duyanh",
  behance: "https://behance.net/duyanh",
  github: "https://github.com/duyanh"
};
