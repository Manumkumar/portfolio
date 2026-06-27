import React from 'react';
import { Briefcase, GraduationCap, CheckCircle2 } from 'lucide-react';
import AboutBackgroundCanvas from '../components/AboutBackgroundCanvas';

/* Official High-Fidelity Scalable SVG Emblem for Mahatma Gandhi University (MG University) */
const MGUniversityEmblem = ({ size = 76 }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <path id="mgTopArch" d="M 14,48 A 46,46 0 0,1 106,48" />
      <path id="mgBottomArch" d="M 22,96 A 42,42 0 0,0 98,96" />
    </defs>
    {/* Outer Seal Rings */}
    <circle cx="60" cy="60" r="56" stroke="#D4AF37" strokeWidth="2.2" fill="rgba(212, 175, 55, 0.07)" />
    <circle cx="60" cy="60" r="49" stroke="#D4AF37" strokeWidth="1" strokeDasharray="3 2" />
    {/* Arched University Title */}
    <text fill="#D4AF37" fontSize="7.4" fontWeight="800" letterSpacing="0.06em" fontFamily="sans-serif">
      <textPath href="#mgTopArch" startOffset="50%" textAnchor="middle">MAHATMA GANDHI UNIVERSITY</textPath>
    </text>
    {/* Center Academic Shield */}
    <path
      d="M 38 38 H 82 V 64 C 82 78 60 90 60 90 C 60 90 38 78 38 64 V 38 Z"
      fill="rgba(212, 175, 55, 0.16)"
      stroke="#D4AF37"
      strokeWidth="2"
    />
    {/* Open Book of Knowledge */}
    <path
      d="M 44 58 C 50 55 56 56 59 60 V 46 C 56 43 50 44 44 47 V 58 Z M 76 58 C 70 55 64 56 61 60 V 46 C 64 43 70 44 76 47 V 58 Z"
      fill="#D4AF37"
    />
    {/* Lamp Flame of Learning */}
    <path d="M 60 30 C 60 30 55 37 57.5 41 C 59.5 44 60.5 44 62.5 41 C 65 37 60 30 60 30 Z" fill="#F3E5AB" />
    {/* Sanskrit Motto: Vidyayamritamashnute */}
    <text fill="#F3E5AB" fontSize="7.2" fontWeight="700" fontFamily="sans-serif">
      <textPath href="#mgBottomArch" startOffset="50%" textAnchor="middle">विद्ययामृतमश्नुते</textPath>
    </text>
  </svg>
);

/* Official High-Fidelity Scalable SVG Emblem for University of Kerala (Exact Match to Official Crest) */
const KeralaUniversityEmblem = ({ size = 76 }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <path id="keralaTopArch" d="M 12,46 A 48,48 0 0,1 108,46" />
      <path id="keralaBottomArch" d="M 18,94 A 44,44 0 0,0 102,94" />
    </defs>
    {/* Subtle Gold Aura Ring */}
    <circle cx="60" cy="60" r="56" stroke="#D4AF37" strokeWidth="1.8" fill="rgba(212, 175, 55, 0.06)" />

    {/* Top Arched Title: UNIVERSITY OF KERALA */}
    <text fill="#D4AF37" fontSize="8" fontWeight="800" letterSpacing="0.08em" fontFamily="sans-serif">
      <textPath href="#keralaTopArch" startOffset="50%" textAnchor="middle">UNIVERSITY OF KERALA</textPath>
    </text>

    {/* Blooming Lotus Flower Silhouette (Outer & Base Petals) */}
    <path
      d="M 60 22 C 48 30 28 42 22 62 C 28 78 44 86 60 86 C 76 86 92 78 98 62 C 92 42 72 30 60 22 Z"
      fill="rgba(212, 175, 55, 0.12)"
      stroke="#D4AF37"
      strokeWidth="2.2"
      strokeLinejoin="round"
    />
    {/* Layered Lotus Petals at Bottom Base */}
    <path
      d="M 28 68 C 36 78 48 84 60 84 C 72 84 84 78 92 68 M 34 76 C 42 84 50 88 60 88 C 70 88 78 84 86 76"
      stroke="#D4AF37"
      strokeWidth="1.6"
      strokeLinecap="round"
    />

    {/* Top Center: Sacred Conch Shell (Shankha) */}
    <g transform="translate(60, 42)">
      {/* Conch Spire & Spiral Body */}
      <path
        d="M 0 -11 C -4 -7 -6 -2 -5 4 C -5 9 -2 13 0 15 C 2 13 5 9 5 4 C 6 -2 4 -7 0 -11 Z"
        fill="#F3E5AB"
        stroke="#D4AF37"
        strokeWidth="1.5"
      />
      {/* Conch Flared Opening & Ornaments */}
      <path d="M -5 -2 C -8 -2 -9 1 -7 3 M 5 -2 C 8 -2 9 1 7 3" stroke="#D4AF37" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="0" cy="2" r="1.8" fill="#D4AF37" />
    </g>

    {/* Center Below Conch: Palm Leaf Manuscript on Crossed Stand (Thaliyola & Peedham) */}
    <g transform="translate(60, 68)">
      {/* Crossed Wooden Book Stand (Peedham X-Stand) */}
      <path d="M -12 8 L -5 -3 M 12 8 L 5 -3 M -8 8 L 8 -3 M 8 8 L -8 -3" stroke="#D4AF37" strokeWidth="2.2" strokeLinecap="round" />
      {/* Palm Leaf Manuscript Bundle (Thaliyola Book) */}
      <rect x="-18" y="-7" width="36" height="6" rx="2" fill="#D4AF37" stroke="#F3E5AB" strokeWidth="1.2" />
      {/* Hanging Manuscript Ribbon */}
      <path d="M 2 0 L 5 9 L 0 7 L -5 9 L -2 0" fill="#F3E5AB" />
    </g>

    {/* Bottom Sanskrit Motto Arch: कर्मणि व्यज्यते प्रज्ञा (Karmani Vyajyate Prajna) */}
    <text fill="#F3E5AB" fontSize="7.8" fontWeight="700" fontFamily="sans-serif">
      <textPath href="#keralaBottomArch" startOffset="50%" textAnchor="middle">कर्मणि व्यज्यते प्रज्ञा</textPath>
    </text>
  </svg>
);

export default function About() {
  const experiences = [
    {
      role: 'Software Developer • Full-time',
      company: 'RIOD LOGIC PVT LTD',
      period: '03/2025 – Present',
      badge: 'Current Position',
      description:
        'Specializing in engineering resilient backend architectures, high-throughput REST APIs, and industrial data integrations. Architected scalable database pipelines and ensured real-time telemetry security across mission-critical edge deployments.',
      deliverables: [
        'Scalable Backend Architecture & REST APIs',
        'TimescaleDB & PostgreSQL Query Optimization',
        'Enterprise Security & Real-Time Telemetry',
        'Industrial IoT System Integration',
      ],
    },
    {
      role: 'Production Engineer • Internship Track',
      company: 'RIOD LOGIC PVT LTD',
      period: 'Foundational Engineering Experience',
      badge: 'Industrial IoT',
      description:
        'Engineered hardware-level diagnostics, electronics assembly workflows, and edge device verification protocols. Streamlined production testing for industrial IoT gateways and supported predictive analytics deployments.',
      deliverables: [
        'Edge Gateway Testing & Diagnostics',
        'Electronics Assembly & QC Verification',
        'Predictive Maintenance Telemetry Checks',
        'Hardware-in-the-loop Validation',
      ],
    },
  ];

  const educations = [
    {
      institution: 'Mahatma Gandhi University',
      location: 'Kottayam, Kerala • MG University',
      degree: 'Master of Science (M.Sc.)',
      field: 'Computer Science & Engineering Fundamentals',
      period: '2021 – 2023',
      badge: 'MG University Emblem',
      LogoComponent: MGUniversityEmblem,
      description:
        'Advanced post-graduate coursework emphasizing modern algorithmic complexity, neural networks, computer vision fundamentals, and distributed database systems.',
      coursework: ['Advanced Algorithms', 'Computer Vision & AI', 'Distributed Systems', 'Database Optimization'],
    },
    {
      institution: 'University of Kerala',
      location: 'Thiruvananthapuram, Kerala • Kerala University',
      degree: 'Bachelor of Science (B.Sc.)',
      field: 'Electronics & Applied Computer Science',
      period: '2018 – 2021',
      badge: 'GPA: 7.7 / 10',
      LogoComponent: KeralaUniversityEmblem,
      description:
        'Comprehensive undergraduate degree focused on embedded microcontroller architecture, digital signal processing, software engineering, and sensor telemetry networks.',
      coursework: ['Embedded Systems', 'Digital Signal Processing', 'Software Engineering', 'Sensor Networks'],
    },
  ];

  return (
    <section
      id="about"
      style={{
        position: 'relative',
        padding: '130px 0',
        background: '#08080C',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        overflow: 'hidden',
      }}
    >
      <AboutBackgroundCanvas />

      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 24px',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* SECTION HEADER */}
        <div style={{ marginBottom: '70px' }}>
          <span
            style={{
              fontSize: '0.8rem',
              fontWeight: 700,
              letterSpacing: '0.15em',
              color: '#D4AF37',
              textTransform: 'uppercase',
            }}
          >
            // CAREER TRACK RECORD & ACADEMIC ACADEMY
          </span>
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(2.3rem, 4.2vw, 3.8rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              marginTop: '12px',
            }}
          >
            Professional Experience &amp; <span className="gold-gradient-text">Academic Credentials.</span>
          </h2>
          <p
            style={{
              color: '#8E8E9F',
              fontSize: '1.05rem',
              maxWidth: '640px',
              marginTop: '16px',
              lineHeight: 1.7,
            }}
          >
            A clear separation of industrial software engineering track record and accredited university education from Kerala&apos;s leading institutions.
          </p>
        </div>

        {/* PART 1: PROFESSIONAL WORK EXPERIENCE */}
        <div style={{ marginBottom: '90px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '32px',
            }}
          >
            <Briefcase size={22} color="#D4AF37" />
            <h3
              className="font-display"
              style={{
                fontSize: '1.6rem',
                fontWeight: 800,
                color: '#F4F4F6',
                letterSpacing: '0.04em',
              }}
            >
              PROFESSIONAL WORK EXPERIENCE
            </h3>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(440px, 1fr))',
              gap: '30px',
            }}
          >
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '38px 40px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: '24px',
                  border: '1px solid rgba(212, 175, 55, 0.18)',
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      marginBottom: '20px',
                    }}
                  >
                    <div>
                      <span
                        style={{
                          fontSize: '0.78rem',
                          fontWeight: 700,
                          letterSpacing: '0.12em',
                          color: '#D4AF37',
                          textTransform: 'uppercase',
                        }}
                      >
                        {exp.company}
                      </span>
                      <h4
                        className="font-display"
                        style={{
                          fontSize: '1.45rem',
                          fontWeight: 800,
                          color: '#F4F4F6',
                          marginTop: '6px',
                        }}
                      >
                        {exp.role}
                      </h4>
                    </div>

                    <div
                      style={{
                        padding: '6px 14px',
                        borderRadius: '999px',
                        background: 'rgba(212, 175, 55, 0.12)',
                        border: '1px solid rgba(212, 175, 55, 0.28)',
                        color: '#D4AF37',
                        fontSize: '0.78rem',
                        fontWeight: 700,
                      }}
                    >
                      {exp.period}
                    </div>
                  </div>

                  <p
                    style={{
                      color: '#9E9EB2',
                      fontSize: '0.96rem',
                      lineHeight: 1.7,
                      marginBottom: '26px',
                    }}
                  >
                    {exp.description}
                  </p>
                </div>

                <div
                  style={{
                    borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                    paddingTop: '20px',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '12px',
                  }}
                >
                  {exp.deliverables.map((item, dIdx) => (
                    <div
                      key={dIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontSize: '0.84rem',
                        color: '#D8D8E6',
                      }}
                    >
                      <CheckCircle2 size={16} color="#D4AF37" style={{ flexShrink: 0 }} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PART 2: UNIVERSITY EDUCATION & INSTITUTIONAL CREST LOGOS */}
        <div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '32px',
            }}
          >
            <GraduationCap size={24} color="#D4AF37" />
            <h3
              className="font-display"
              style={{
                fontSize: '1.6rem',
                fontWeight: 800,
                color: '#F4F4F6',
                letterSpacing: '0.04em',
              }}
            >
              UNIVERSITY EDUCATION &amp; INSTITUTION LOGOS
            </h3>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(480px, 1fr))',
              gap: '32px',
            }}
          >
            {educations.map((edu, idx) => {
              const Logo = edu.LogoComponent;
              return (
                <div
                  key={idx}
                  className="glass-card"
                  style={{
                    padding: '42px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    borderRadius: '24px',
                    border: '1px solid rgba(212, 175, 55, 0.22)',
                    background: 'linear-gradient(145deg, rgba(20, 20, 32, 0.65) 0%, rgba(12, 12, 20, 0.85) 100%)',
                  }}
                >
                  <div>
                    {/* Top Header with Institutional Crest Logo */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '20px',
                        marginBottom: '26px',
                      }}
                    >
                      <div
                        style={{
                          width: '76px',
                          height: '76px',
                          borderRadius: '18px',
                          background: 'rgba(212, 175, 55, 0.12)',
                          border: '1px solid rgba(212, 175, 55, 0.35)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <Logo size={56} />
                      </div>

                      <div>
                        <span
                          style={{
                            fontSize: '0.8rem',
                            fontWeight: 700,
                            letterSpacing: '0.12em',
                            color: '#D4AF37',
                            textTransform: 'uppercase',
                          }}
                        >
                          {edu.location}
                        </span>
                        <h4
                          className="font-display"
                          style={{
                            fontSize: '1.5rem',
                            fontWeight: 800,
                            color: '#F4F4F6',
                            marginTop: '4px',
                          }}
                        >
                          {edu.institution}
                        </h4>
                        <div
                          style={{
                            fontSize: '0.9rem',
                            color: '#B0B0C4',
                            fontWeight: 600,
                            marginTop: '4px',
                          }}
                        >
                          {edu.degree} — <span style={{ color: '#F3E5AB' }}>{edu.field}</span>
                        </div>
                      </div>
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        marginBottom: '20px',
                      }}
                    >
                      <span
                        style={{
                          padding: '5px 14px',
                          borderRadius: '999px',
                          background: 'rgba(212, 175, 55, 0.15)',
                          color: '#D4AF37',
                          fontSize: '0.78rem',
                          fontWeight: 700,
                        }}
                      >
                        {edu.period}
                      </span>
                      <span
                        style={{
                          fontSize: '0.84rem',
                          color: '#A0A0B2',
                          fontWeight: 600,
                        }}
                      >
                        {edu.badge}
                      </span>
                    </div>

                    <p
                      style={{
                        color: '#9E9EB2',
                        fontSize: '0.96rem',
                        lineHeight: 1.7,
                        marginBottom: '24px',
                      }}
                    >
                      {edu.description}
                    </p>
                  </div>

                  <div
                    style={{
                      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                      paddingTop: '20px',
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '10px',
                    }}
                  >
                    {edu.coursework.map((course, cIdx) => (
                      <span
                        key={cIdx}
                        style={{
                          padding: '6px 14px',
                          borderRadius: '10px',
                          background: 'rgba(255, 255, 255, 0.04)',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                          fontSize: '0.82rem',
                          color: '#E0E0EC',
                          fontWeight: 500,
                        }}
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
