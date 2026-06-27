import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ExternalLink } from 'lucide-react';
import ProjectsBackgroundCanvas from '../components/ProjectsBackgroundCanvas';
import { projectsData } from '../data/projectsData';

gsap.registerPlugin(ScrollTrigger);

export default function Projects({ onSelectProject }) {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(
          card,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
            delay: index * 0.12,
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      style={{
        position: 'relative',
        padding: '130px 0',
        background: '#06060A',
        overflow: 'hidden',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      }}
    >
      {/* Animated Topographic Background Canvas */}
      <ProjectsBackgroundCanvas />

      {/* Main Content Container */}
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 24px',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* Section Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: '24px',
            marginBottom: '70px',
          }}
        >
          <div>
            <span
              style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.15em',
                color: '#D4AF37',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '10px',
              }}
            >
              // FEATURED CASE STUDIES
            </span>
            <h2
              className="font-display"
              style={{
                fontSize: 'clamp(2.2rem, 4.2vw, 3.6rem)',
                fontWeight: 800,
                color: '#F4F4F6',
                lineHeight: 1.12,
              }}
            >
              Real-World AI &amp; IoT Deployments
            </h2>
          </div>
        </div>

        {/* Perfectly Aligned Featured Projects Stack */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '50px',
          }}
        >
          {projectsData.map((project, idx) => {
            const isReverse = idx % 2 === 1;

            return (
              <div
                key={project.id}
                ref={(el) => (cardsRef.current[idx] = el)}
                onClick={() => onSelectProject && onSelectProject(project)}
                className="glass-card"
                style={{
                  padding: '36px',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
                  gap: '40px',
                  alignItems: 'center',
                  cursor: 'pointer',
                  position: 'relative',
                  transform: 'translate3d(0, 0, 0)',
                  willChange: 'transform, opacity',
                }}
              >
                {/* Image Showcase Container */}
                <div
                  style={{
                    order: isReverse ? 2 : 1,
                    width: '100%',
                    height: '380px',
                    borderRadius: '18px',
                    overflow: 'hidden',
                    position: 'relative',
                    border: '1px solid rgba(255, 255, 255, 0.09)',
                    background: '#0A0A12',
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />

                  {/* Top Left Category Badge */}
                  <div
                    className="glass-pill"
                    style={{
                      position: 'absolute',
                      top: '16px',
                      left: '16px',
                      padding: '6px 16px',
                      borderRadius: '100px',
                      fontSize: '0.74rem',
                      fontWeight: 700,
                      color: '#F3E5AB',
                      letterSpacing: '0.08em',
                    }}
                  >
                    {project.category}
                  </div>
                </div>

                {/* Right / Left Text Information Column */}
                <div
                  style={{
                    order: isReverse ? 1 : 2,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    gap: '20px',
                  }}
                >
                  {/* Project Number Watermark Tag */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                    }}
                  >
                    <span
                      className="font-display gold-gradient-text"
                      style={{
                        fontSize: '1.25rem',
                        fontWeight: 800,
                        letterSpacing: '0.08em',
                      }}
                    >
                      PROJECT // {project.numId}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="font-display"
                    style={{
                      fontSize: 'clamp(1.5rem, 2.4vw, 2.1rem)',
                      fontWeight: 800,
                      color: '#F4F4F6',
                      lineHeight: 1.2,
                    }}
                  >
                    {project.title}
                  </h3>

                  {/* Summary */}
                  <p
                    style={{
                      color: '#9E9EB2',
                      fontSize: '1.02rem',
                      lineHeight: 1.7,
                    }}
                  >
                    {project.summary}
                  </p>

                  {/* Tech Tags */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '8px',
                      marginTop: '4px',
                    }}
                  >
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="glass-pill"
                        style={{
                          padding: '6px 14px',
                          borderRadius: '100px',
                          fontSize: '0.78rem',
                          fontWeight: 600,
                          color: '#E0E0F0',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div style={{ marginTop: '10px' }}>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProject && onSelectProject(project);
                      }}
                      className="btn-gold"
                      style={{
                        padding: '13px 26px',
                        fontSize: '0.9rem',
                      }}
                    >
                      <span>Explore Case Study</span>
                      <ExternalLink size={16} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
