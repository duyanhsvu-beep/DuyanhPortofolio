import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetailModal from './components/ProjectDetailModal';
import { Project } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Dynamic intersection observer to coordinate active nav highlight on scroll
  useEffect(() => {
    const sections = ["hero", "about", "projects", "contact"];
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
      <Header activeSection={activeSection} />

      {/* Full-Screen Main Pages */}
      <main className="relative flex flex-col w-full">
        {/* Hero Section */}
        <Hero />

        {/* About (Over mij) Section */}
        <About />

        {/* Projects (Mijn projecten) Section */}
        <Projects onSelectProject={(p) => setSelectedProject(p)} />

        {/* Contact (Contact) Section */}
        <Contact />
      </main>

      {/* Footer Baseline metadata panel */}
      <Footer />

      {/* Floating immersive project case-studies overlay modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
