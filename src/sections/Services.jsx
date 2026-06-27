import React, { useRef } from 'react';
import gsap from 'gsap';
import { Cpu, Server, Radio, Binary } from 'lucide-react';
import ServicesBackgroundCanvas from '../components/ServicesBackgroundCanvas';
import InteractivePythonConsole from '../components/InteractivePythonConsole';

export default function Services() {
  const cardsRef = useRef([]);

  const services = [
    {
      icon: <Cpu size={28} color="#D4AF37" />,
      title: 'Computer Vision & Edge AI',
      desc: 'High-accuracy object detection models and industrial OCR pipelines engineered directly on hardware acceleration devices.',
      deliverables: ['NVIDIA Jetson & JetPack 6.2', 'CUDA-Accelerated OpenCV', 'Real-time Video Processing', 'Advantech AI Cameras'],
    },
    {
      icon: <Server size={28} color="#D4AF37" />,
      title: 'Backend Engineering & APIs',
      desc: 'Robust backend architecture, high-throughput APIs, and data integrations designed to power large-scale applications.',
      deliverables: ['Scalable Backend Architecture', 'REST API Integration', 'Database Optimization', 'Enterprise Security & Uptime'],
    },
    {
      icon: <Radio size={28} color="#D4AF37" />,
      title: 'Industrial IoT & Diagnostics',
      desc: 'Remote Diagnostic & Predictive Maintenance Systems (RDPMS) monitoring critical infrastructure via edge computing gateways.',
      deliverables: ['High-Frequency IoT Telemetry', 'Time-Domain Feature Extraction', 'Hybrid Rule-Based/ML Logic', 'Hardware Diagnostics'],
    },
    {
      icon: <Binary size={28} color="#D4AF37" />,
      title: 'Machine Learning & Analytics',
      desc: 'End-to-end classification models and predictive algorithms trained on complex environmental and sensor time-series data.',
      deliverables: ['Python & SQL Expertise', 'Scikit-Learn Classification', 'Feature Engineering', 'Geospatial Data Modeling'],
    },
  ];

  const handleMouseMove = (e, index) => {
    const card = cardsRef.current[index];
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    gsap.to(card, {
      rotateX,
      rotateY,
      scale: 1.02,
      boxShadow: '0 18px 50px rgba(212, 175, 55, 0.28), 0 0 30px rgba(212, 175, 55, 0.18)',
      borderColor: 'rgba(212, 175, 55, 0.55)',
      duration: 0.3,
      ease: 'power2.out',
      transformPerspective: 1000,
    });
  };

  const handleMouseLeave = (index) => {
    const card = cardsRef.current[index];
    if (!card) return;
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
      borderColor: 'rgba(255, 255, 255, 0.08)',
      duration: 0.6,
      ease: 'power3.out',
    });
  };

  return (
    <section
      id="services"
      style={{
        padding: '130px 0',
        background: '#08080C',
        position: 'relative',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        overflow: 'hidden',
      }}
    >
      <ServicesBackgroundCanvas />
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 24px',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            marginBottom: '70px',
          }}
        >
          <span
            style={{
              fontSize: '0.8rem',
              fontWeight: 700,
              letterSpacing: '0.15em',
              color: '#D4AF37',
              textTransform: 'uppercase',
              marginBottom: '12px',
            }}
          >
            // CORE DOMAINS &amp; TECHNICAL STACK
          </span>
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(2.3rem, 4.5vw, 3.6rem)',
              fontWeight: 800,
              lineHeight: 1.15,
            }}
          >
            Specialized in <span className="gold-gradient-text">Edge AI</span> &amp; robust engineering.
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
            gap: '30px',
          }}
        >
          {services.map((srv, idx) => (
            <div
              key={idx}
              ref={(el) => (cardsRef.current[idx] = el)}
              onMouseMove={(e) => handleMouseMove(e, idx)}
              onMouseLeave={() => handleMouseLeave(idx)}
              className="glass-card"
              style={{
                padding: '38px 32px',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                willChange: 'transform',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
                cursor: 'pointer',
              }}
            >
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '16px',
                  background: 'rgba(212, 175, 55, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(212, 175, 55, 0.2)',
                }}
              >
                {srv.icon}
              </div>

              <div>
                <h3
                  className="font-display"
                  style={{
                    fontSize: '1.35rem',
                    fontWeight: 700,
                    color: '#F4F4F6',
                    marginBottom: '10px',
                  }}
                >
                  {srv.title}
                </h3>
                <p style={{ color: '#8E8E9F', fontSize: '0.94rem', lineHeight: 1.6 }}>
                  {srv.desc}
                </p>
              </div>

              <div
                style={{
                  borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                  paddingTop: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                }}
              >
                {srv.deliverables.map((item, iIdx) => (
                  <div
                    key={iIdx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      fontSize: '0.85rem',
                      color: '#C0C0D0',
                    }}
                  >
                    <span style={{ color: '#D4AF37', fontWeight: 800 }}>✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Live Interactive Python AI Engineering Console */}
        <div style={{ marginTop: '80px' }}>
          <InteractivePythonConsole />
        </div>
      </div>
    </section>
  );
}
