import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Briefcase, Cpu, GraduationCap, ArrowRight } from 'lucide-react';
import AboutBackgroundCanvas from '../components/AboutBackgroundCanvas';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const getScrollAmount = () => {
        const trackWidth = track.scrollWidth;
        return -(trackWidth - window.innerWidth + 120);
      };

      const tween = gsap.to(track, {
        x: getScrollAmount,
        ease: 'none',
      });

      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: () => `+=${track.scrollWidth - window.innerWidth + 500}`,
        pin: true,
        animation: tween,
        scrub: 1,
        invalidateOnRefresh: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const timelineItems = [
    {
      type: 'CAREER EXPERIENCE',
      icon: <Briefcase size={26} color="#D4AF37" />,
      title: 'Software Developer • Full-time',
      organization: 'RIOD LOGIC PVT LTD',
      period: '03/2025 – Present',
      badge: 'Current Role',
      desc: 'Specializing in building robust backend architecture, high-throughput APIs, and data integrations. Experienced in writing efficient code, optimizing database performance, and ensuring system security and uptime to support large-scale industrial IoT applications.',
      skills: ['Backend Engineering', 'REST APIs', 'Database Optimization', 'System Security'],
    },
    {
      type: 'ENGINEERING FOUNDATION',
      icon: <Cpu size={26} color="#D4AF37" />,
      title: 'Production Engineer • Internship',
      organization: 'RIOD LOGIC PVT LTD',
      period: 'Internship Track',
      badge: 'Industrial IoT',
      desc: 'Foundational experience in electronics assembly, edge hardware diagnostics, and device troubleshooting. Assisted in streamlining production processes, testing industrial IoT edge gateways, and supporting data-driven predictive maintenance initiatives.',
      skills: ['Hardware Diagnostics', 'Electronics Assembly', 'Predictive Maintenance', 'IoT Gateways'],
    },
    {
      type: 'POST-GRADUATE DEGREE',
      icon: <GraduationCap size={26} color="#D4AF37" />,
      title: 'MSc | Computer Science',
      organization: 'SAS SNDP Yogam College • Pathanamthitta, Kerala',
      period: '09/2021 – 08/2023',
      badge: 'GPA: 3.5 / 5',
      desc: 'Advanced research and coursework specializing in algorithmic complexity, computer vision fundamentals, distributed systems, and modern database structures.',
      skills: ['Computer Science MSc', 'Algorithms', 'Advanced Databases', 'System Design'],
    },
    {
      type: 'UNDERGRADUATE DEGREE',
      icon: <GraduationCap size={26} color="#D4AF37" />,
      title: 'BSc | Electronics',
      organization: 'College Of Applied Science • Alappuzha, Kerala',
      period: '08/2018 – 08/2021',
      badge: 'GPA: 7.7 / 10',
      desc: 'Comprehensive engineering degree covering embedded microcontroller architectures, digital signal processing, circuit design, and sensor telemetry networks.',
      skills: ['Electronics BSc', 'Embedded Systems', 'Digital Signal Processing', 'Sensor Telemetry'],
    },
    {
      type: 'CERTIFICATIONS & LEADERSHIP',
      icon: <Award size={26} color="#D4AF37" />,
      title: 'Industry Certifications & Service',
      organization: 'Udemy • Accenture • NSS Leadership',
      period: 'Professional Development',
      badge: 'Distinguished Track',
      desc: 'Completed advanced industry certifications including Computer Vision Masterclass (Udemy) and Accenture Virtual Job Simulation, alongside dedicated leadership in the National Service Scheme (NSS).',
      skills: ['Computer Vision Masterclass', 'Accenture Simulation', 'Team Leadership', 'NSS Volunteer'],
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        position: 'relative',
        height: '100vh',
        background: '#08080C',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <AboutBackgroundCanvas />

      {/* Fixed Section Header Container */}
      <div
        style={{
          position: 'absolute',
          top: '40px',
          left: '0',
          width: '100%',
          zIndex: 20,
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <div>
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.15em',
                color: '#D4AF37',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '6px',
              }}
            >
              // CAREER TRACK RECORD &amp; ACADEMIC ACADEMY
            </span>
            <h2
              className="font-display"
              style={{
                fontSize: 'clamp(1.7rem, 3.2vw, 2.5rem)',
                fontWeight: 800,
                color: '#F4F4F6',
              }}
            >
              Engineering Intelligence From <span className="gold-gradient-text">Edge to Cloud.</span>
            </h2>
          </div>
        </div>
      </div>

      {/* GSAP Horizontal Scrolling Cards Track */}
      <div
        ref={trackRef}
        style={{
          display: 'flex',
          gap: '44px',
          paddingLeft: 'max(24px, calc((100vw - 1280px) / 2 + 24px))',
          paddingRight: '120px',
          willChange: 'transform',
          alignItems: 'center',
        }}
      >
        {timelineItems.map((item, idx) => (
          <div
            key={idx}
            className="glass-card"
            style={{
              flexShrink: 0,
              width: 'clamp(440px, 42vw, 540px)',
              height: '440px',
              padding: '38px 36px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              zIndex: 10,
            }}
          >
            {/* Top Row: Icon, Type & Badge */}
            <div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '24px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '14px',
                      background: 'rgba(212, 175, 55, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {item.icon}
                  </div>
                  <span
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      letterSpacing: '0.12em',
                      color: '#D4AF37',
                      textTransform: 'uppercase',
                    }}
                  >
                    {item.type}
                  </span>
                </div>

                <span
                  className="glass-pill"
                  style={{
                    padding: '6px 14px',
                    borderRadius: '100px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: '#F3E5AB',
                  }}
                >
                  {item.badge}
                </span>
              </div>

              {/* Title & Organization */}
              <h3
                className="font-display"
                style={{
                  fontSize: '1.6rem',
                  fontWeight: 800,
                  color: '#F4F4F6',
                  marginBottom: '6px',
                  lineHeight: 1.2,
                }}
              >
                {item.title}
              </h3>
              <div
                style={{
                  color: '#D4AF37',
                  fontWeight: 600,
                  fontSize: '0.98rem',
                  marginBottom: '6px',
                }}
              >
                {item.organization}
              </div>
              <div style={{ color: '#8E8E9F', fontSize: '0.85rem', marginBottom: '20px' }}>
                {item.period}
              </div>

              {/* Description */}
              <p
                style={{
                  color: '#A0A0B2',
                  fontSize: '0.94rem',
                  lineHeight: 1.68,
                }}
              >
                {item.desc}
              </p>
            </div>

            {/* Bottom Row: Skill Tags */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                paddingTop: '16px',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              {item.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  style={{
                    padding: '5px 14px',
                    borderRadius: '100px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    fontSize: '0.76rem',
                    color: '#C8C8D6',
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
