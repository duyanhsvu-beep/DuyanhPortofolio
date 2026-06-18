import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import VideoLightbox from './components/VideoLightbox';
import { Project } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Dynamic intersection observer to coordinate active nav highlight on scroll
  useEffect(() => {
    const sections = ["hero", "projects", "about", "contact"];
    const scrollObserver = () => {
      const scrollPosition = window.scrollY + 250; // offset benchmark for natural section trigger

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', scrollObserver);
    // Initial call
    scrollObserver();

    return () => window.removeEventListener('scroll', scrollObserver);
  }, []);

  const handleSelectProject = (project: Project) => {
    if (project.id === 'een-nieuw-begin') {
      window.open('https://www.youtube.com/watch?v=Dnc5SRf_lG4', '_blank', 'noopener,noreferrer');
    } else if (project.id === 'heroes-only') {
      window.open('https://www.linkedin.com/feed/update/urn:li:ugcPost:7209485825414213632/', '_blank', 'noopener,noreferrer');
    } else if (project.id === 'ontkurkt') {
      setSelectedProject(project);
    }
  };

  const handleHeaderNavigate = (id: string) => {
    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-black text-white font-sans overflow-x-hidden selection:bg-white selection:text-black">
      {/* Absolute high-end paper grain ambient overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-50 opacity-[0.015] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15),rgba(0,0,0,0.9))] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Transparent Sticky Navigation Header */}
      <Header activeSection={activeSection} onNavigate={handleHeaderNavigate} />

      {/* Full-Screen Main Pages */}
      <main className="relative flex flex-col w-full">
        {/* Hero Section */}
        <Hero />

        {/* Projects (Mijn projecten) Section */}
        <Projects onSelectProject={handleSelectProject} />

        {/* About (Over mij) Section */}
        <About />

        {/* Contact (Contact) Section */}
        <Contact />
      </main>

      {/* Footer Baseline metadata panel */}
      <Footer />

      {/* Lightbox video modal for Ontkurkt */}
      <AnimatePresence>
        {selectedProject && selectedProject.videoUrl && (
          <VideoLightbox
            videoUrl={selectedProject.videoUrl}
            posterUrl={selectedProject.image}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
