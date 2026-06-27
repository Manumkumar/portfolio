import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import Header from './components/Header';
import Footer from './components/Footer';

import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Services from './sections/Services';
import Contact from './sections/Contact';

import ProjectDetailPage from './pages/ProjectDetailPage';
import { projectsData } from './data/projectsData';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    // Check initial hash for direct project link
    const hash = window.location.hash;
    if (hash && hash.startsWith('#/project/')) {
      const pId = hash.replace('#/project/', '');
      const found = projectsData.find((p) => p.id === pId);
      if (found) setSelectedProject(found);
    }

    const lenis = new Lenis({
      duration: 1.05,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.1,
      smoothTouch: false,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const raf = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);

  const handleSelectProject = (project) => {
    setSelectedProject(project);
    window.location.hash = `/project/${project.id}`;
  };

  const handleBackToPortfolio = () => {
    setSelectedProject(null);
    window.location.hash = '#projects';
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: '#08080C' }}>
      {!loadingComplete && <Preloader onFinish={() => setLoadingComplete(true)} />}
      <CustomCursor />

      {selectedProject ? (
        <ProjectDetailPage
          project={selectedProject}
          onBack={handleBackToPortfolio}
          onSelectProject={handleSelectProject}
          allProjects={projectsData}
        />
      ) : (
        <>
          <Header />
          <main>
            <Hero />
            <About />
            <Projects onSelectProject={handleSelectProject} />
            <Services />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}
