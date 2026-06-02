import { Project, ServiceDetail, Experience, SkillGroup } from './types';

export const HERO_TEXT = {
  name: "Duyanh",
  title: "Digital Designer",
  subtitle: "Samenbrengen van verhalen in licht, frame en code.",
  tagline: "Specialist in high-end fotografie, videografie en minimalistisch webdesign.",
  location: "Amsterdam, NL",
  coordinates: "52.3676° N, 4.9041° E"
};

export const PROJECTS: Project[] = [
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
  },
  {
    id: "silent-flow",
    title: "Silent Flow",
    category: "VIDEOGRAFIE",
    description: "Een poëtische, korte sfeerfilm die de verstilde beweging en sfeer van mist en water bij zonsopgang verkent.",
    fullDescription: "Silent Flow is een experimentele cinematografische reis die de grens tussen rust en beweging opzoekt. Gecureerd met trage tracking shots en een minimalistisch Sound design, vangt dit project de emotionele impact van landschappen in de vroege ochtend. Het daagt de toeschouwer uit om te vertragen en de subtiele veranderingen in natuurlijke belichting waar te nemen.",
    year: "2024",
    services: ["Cinematography", "Color Grading", "Sound Design"],
    client: "Ethereal Film Festival",
    image: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&q=80&w=1200&sat=-100",
    role: "Director of Photography & Editor",
    deliverables: ["4K Cinematic Cut", "Screener", "Soundtrack LP Vinyl Case Design"],
    gallery: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=80&w=1200&sat=-100",
      "https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&q=80&w=1200&sat=-100"
    ],
    link: "https://vimeo.com/duyanh/silentflow"
  },
  {
    id: "monolith-studios",
    title: "Monolith Studios",
    category: "WEBDESIGN",
    description: "Ontwerp en front-end ontwikkeling van een digitaal exhibition-platform voor een onafhankelijk architecten-collectief.",
    fullDescription: "Voor Monolith Studios ontwikkelden we een digitale ervaring die de brutalistische, pure filosofie van hun architectuur reflecteert. Het resultaat is een onconventioneel grid-systeem met asymmetrische navigatie, gedurfde typografie en vloeiende paginatransities die aanvoelen als het wandelen door een betonnen museum.",
    year: "2025",
    services: ["UI/UX Design", "Creative Coding", "WebGL Interactions"],
    client: "Monolith Collective",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200&sat=-100",
    role: "Creative Director & Lead Developer",
    deliverables: ["Web Application Design System", "React Framework Integratie", "Smooth Scroll Modules"],
    gallery: [
      "https://images.unsplash.com/photo-1512403754473-27855f33d4fc?auto=format&fit=crop&q=80&w=1200&sat=-100",
      "https://images.unsplash.com/photo-1541462608141-27b297b15575?auto=format&fit=crop&q=80&w=1200&sat=-100"
    ],
    link: "https://monolith-studios.co"
  },
  {
    id: "tactile-light",
    title: "Tactile Light",
    category: "VISUAL ART",
    description: "Een multidisciplinaire transitie-studie die fysieke materialen vertaalt naar interactieve WebGL-shading patronen.",
    fullDescription: "Tactile Light verkent de grens tussen het tastbare en het ontastbare. Dit conceptuele project combineert macro-fotografie van ruwe grondstoffen (zoals steen, water en vloeibaar glas) met digitale interacties. Door middel van muisbewegingen en scroll-intensiteit veranderen de texturen dynamisch op het scherm, wat resulteert in een rustgevende, interactieve canvas-ervaring.",
    year: "2024",
    services: ["Creative Direction", "3D Shading", "Interactive Prototyping"],
    client: "Neo-Digital Agency",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=1200&sat=-100",
    role: "Interaction Designer",
    deliverables: ["Shader Library", "Interactief Concept", "Social Media Campaign Visuals"],
    gallery: [
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=1200&sat=-100",
      "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&q=80&w=1200&sat=-100"
    ],
    link: "https://lab.duyanh.design/tactile-light"
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
