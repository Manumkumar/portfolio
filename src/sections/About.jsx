import React from 'react';
import { Briefcase, GraduationCap, CheckCircle2 } from 'lucide-react';
import AboutBackgroundCanvas from '../components/AboutBackgroundCanvas';

/* Official High-Fidelity Scalable SVG Logo for RIOD LOGIC PVT LTD (Exact Match to Uploaded Company Wordmark) */
const RIODCompanyLogo = ({ size = 116 }) => (
  <svg width={size} height={size} viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Subtle Outer Glow Frame */}
    <rect x="8" y="24" width="124" height="92" rx="16" stroke="rgba(212, 175, 55, 0.25)" strokeWidth="1.2" fill="rgba(212, 175, 55, 0.04)" />

    {/* BOLD STYLIZED WORDMARK: RIOD */}
    <g transform="translate(18, 48)">
      {/* Letter R with Iconic Top Slash Disconnection */}
      <path
        d="M 0 0 H 14 L 20 8 L 14 14 H 7 V 26 H 0 V 0 Z M 16 16 L 24 30 H 16 L 10 17 H 16 Z"
        fill="#D4AF37"
      />
      {/* Letter I */}
      <rect x="30" y="0" width="8" height="30" fill="#D4AF37" />
      {/* Letter O */}
      <path
        d="M 54 15 C 54 6 60 0 70 0 C 80 0 86 6 86 15 C 86 24 80 30 70 30 C 60 30 54 24 54 15 Z M 62 15 C 62 20 65 23 70 23 C 75 23 78 20 78 15 C 78 10 75 7 70 7 C 65 7 62 10 62 15 Z"
        fill="#D4AF37"
      />
      {/* Letter D */}
      <path
        d="M 94 0 H 108 C 117 0 122 7 122 15 C 122 23 117 30 108 30 H 94 V 0 Z M 102 7 V 23 H 107 C 111 23 114 19 114 15 C 114 11 111 7 107 7 H 102 Z"
        fill="#D4AF37"
      />
    </g>

    {/* SUBTITLE TAGLINE: RUGGED INTERNET OF DEVICES */}
    <text
      x="70"
      y="98"
      fill="#F3E5AB"
      fontSize="5.2"
      fontWeight="700"
      letterSpacing="0.14em"
      textAnchor="middle"
      fontFamily="-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif"
    >
      RUGGED INTERNET OF DEVICES
    </text>
  </svg>
);

/* Official High-Fidelity Scalable SVG Emblem for Mahatma Gandhi University Kottayam (Exact Match to Uploaded Official Crest) */
const MGUniversityEmblem = ({ size = 116 }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      {/* Precision Arches for Circular Ring Title */}
      <path id="mgTopArchExact" d="M 21,50 A 39,39 0 0,1 99,50" />
      <path id="mgBottomArchExact" d="M 26,50 A 34,34 0 0,0 94,50" />
    </defs>

    {/* CIRCULAR SEAL RING */}
    <circle cx="60" cy="50" r="44" stroke="#D4AF37" strokeWidth="2.4" fill="rgba(212, 175, 55, 0.08)" />
    <circle cx="60" cy="50" r="33" stroke="#D4AF37" strokeWidth="1.8" />

    {/* ARCHED INSCRIPTION: MAHATMA GANDHI UNIVERSITY • KOTTAYAM • */}
    <text fill="#D4AF37" fontSize="6.4" fontWeight="800" letterSpacing="0.05em" fontFamily="-apple-system, sans-serif">
      <textPath href="#mgTopArchExact" startOffset="50%" textAnchor="middle">MAHATMA GANDHI UNIVERSITY</textPath>
    </text>
    <text fill="#D4AF37" fontSize="6.2" fontWeight="800" letterSpacing="0.08em" fontFamily="-apple-system, sans-serif">
      <textPath href="#mgBottomArchExact" startOffset="50%" textAnchor="middle">• KOTTAYAM •</textPath>
    </text>

    {/* CENTER: 8-SPOKED OCTAGON / CHARKHA WHEEL OF PROGRESS */}
    <g transform="translate(60, 50)">
      {/* Outer Octagon Frame */}
      <polygon
        points="0,-26 18,-18 26,0 18,18 0,26 -18,18 -26,0 -18,-18"
        stroke="#D4AF37"
        strokeWidth="2"
        fill="rgba(212, 175, 55, 0.12)"
      />
      {/* Radiating Wheel Spokes */}
      <line x1="0" y1="-26" x2="0" y2="26" stroke="#D4AF37" strokeWidth="1.8" />
      <line x1="-26" y1="0" x2="26" y2="0" stroke="#D4AF37" strokeWidth="1.8" />
      <line x1="-18" y1="-18" x2="18" y2="18" stroke="#D4AF37" strokeWidth="1.8" />
      <line x1="18" y1="-18" x2="-18" y2="18" stroke="#D4AF37" strokeWidth="1.8" />

      {/* CENTER OIL LAMP (Diya / Nilavilakku Bowl & Flame) */}
      <path d="M -6 1 C -6 4 6 4 6 1 Z" fill="#D4AF37" stroke="#F3E5AB" strokeWidth="1" />
      <path d="M 0 -7 C -3 -3 -3 0 0 1 C 3 0 3 -3 0 -7 Z" fill="#F3E5AB" />
    </g>

    {/* BOTTOM PEDESTAL SCRIPTURE BOOK WITH SANSKRIT MOTTO */}
    <g transform="translate(60, 103)">
      {/* 3D Book Pedestal Frame */}
      <path
        d="M -42 -9 L 42 -9 L 45 4 L -45 4 Z"
        fill="rgba(212, 175, 55, 0.16)"
        stroke="#D4AF37"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      {/* Book Bottom Pages Layer */}
      <path d="M -45 4 L 45 4 L 44 8 L -44 8 Z" fill="#D4AF37" />

      {/* Inscribed Devanagari Sanskrit Motto across Book Face: विद्यया अमृतमश्नुते */}
      <text
        x="0"
        y="-1"
        fill="#F3E5AB"
        fontSize="7.2"
        fontWeight="800"
        textAnchor="middle"
        fontFamily="sans-serif"
      >
        विद्यया अमृतमश्नुते
      </text>
    </g>
  </svg>
);

/* Official High-Fidelity Scalable SVG Emblem for University of Kerala (Exact Match to Uploaded Official Crest) */
const KeralaUniversityEmblem = ({ size = 116 }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      {/* Precision Arches matching exact reference curvature */}
      <path id="keralaTopArchExact" d="M 14,40 A 48,48 0 0,1 106,40" />
      <path id="keralaBottomArchExact" d="M 18,93 A 44,44 0 0,0 102,93" />
    </defs>

    {/* Top Arched Inscription: UNIVERSITY OF KERALA */}
    <text fill="#D4AF37" fontSize="7.8" fontWeight="800" letterSpacing="0.07em" fontFamily="-apple-system, sans-serif">
      <textPath href="#keralaTopArchExact" startOffset="50%" textAnchor="middle">UNIVERSITY OF KERALA</textPath>
    </text>

    {/* BLOOMING LOTUS FLOWER SILHOUETTE (Exact Crown Profile from Uploaded Logo) */}
    {/* Central Sharp Top Peak & Flared Outer Wing Petals */}
    <path
      d="M 60 26 L 46 38 C 30 40 18 50 16 64 C 20 78 38 86 60 86 C 82 86 100 78 104 64 C 102 50 90 40 74 38 L 60 26 Z"
      fill="rgba(212, 175, 55, 0.12)"
      stroke="#D4AF37"
      strokeWidth="2.2"
      strokeLinejoin="round"
    />
    {/* Inner Layered Cup Petals */}
    <path
      d="M 24 58 C 32 68 44 74 60 74 C 76 74 88 68 96 58"
      stroke="#D4AF37"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    {/* 7 Layered Lotus Base Petals Fan (Symmetrical Bottom Fan) */}
    <path
      d="M 22 66 C 26 72 32 76 38 78 M 32 74 C 38 80 46 84 54 85 M 60 86 L 60 76 M 66 85 C 74 84 82 80 88 74 M 82 78 C 88 76 94 72 98 66"
      stroke="#D4AF37"
      strokeWidth="1.8"
      strokeLinecap="round"
    />

    {/* TOP CENTER: SACRED SHANKHA CONCH SHELL (Valampiri Shankha with Spire) */}
    <g transform="translate(60, 42)">
      {/* Decorative Top Spire Flame */}
      <path d="M 0 -11 L -2.5 -7 L 0 -8.5 L 2.5 -7 Z" fill="#F3E5AB" />
      {/* Coiled Shankha Body */}
      <path
        d="M 0 -8 C -5 -4 -7 1 -6 6 C -5 11 -2 15 0 17 C 2 15 5 11 6 6 C 7 1 5 -4 0 -8 Z"
        fill="rgba(243, 229, 171, 0.28)"
        stroke="#D4AF37"
        strokeWidth="1.6"
      />
      {/* Conch Opening & Internal Coils */}
      <path d="M -3 -1 C -5 2 -4 6 0 8 C 4 6 5 2 3 -1" stroke="#F3E5AB" strokeWidth="1.2" fill="none" />
    </g>

    {/* CENTER: PALM LEAF MANUSCRIPT ON CROSSED STAND (Thaliyola Book & Peedham) */}
    <g transform="translate(60, 64)">
      {/* Crossed Wooden X-Stand Legs (Peedham) */}
      <path d="M -13 11 L -5 -1 M 13 11 L 5 -1 M -8 11 L 8 -1 M 8 11 L -8 -1" stroke="#D4AF37" strokeWidth="2.3" strokeLinecap="round" />
      {/* 3D Palm Leaf Manuscript Bundle (Thaliyola) */}
      <path
        d="M -22 -4 L 20 -6 L 22 0 L -20 2 Z"
        fill="#D4AF37"
        stroke="#F3E5AB"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      {/* Hanging Book Ribbon / Bookmark */}
      <path d="M 1 1 L 4 11 L 0 9 L -4 11 L -1 1 Z" fill="#F3E5AB" />
    </g>

    {/* BOTTOM SANSKRIT MOTTO ARCH: कर्मणि व्यज्यते प्रज्ञा (Karmani Vyajyate Prajna) */}
    <text fill="#F3E5AB" fontSize="7.6" fontWeight="700" fontFamily="sans-serif">
      <textPath href="#keralaBottomArchExact" startOffset="50%" textAnchor="middle">कर्मणि व्यज्यते प्रज्ञा</textPath>
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
      LogoComponent: RIODCompanyLogo,
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
      LogoComponent: RIODCompanyLogo,
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

          <div className="about-grid">
            {experiences.map((exp, idx) => {
              const Logo = exp.LogoComponent;
              return (
                <div
                  key={idx}
                  className="glass-card"
                  style={{
                    padding: '36px clamp(20px, 4vw, 40px)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    borderRadius: '24px',
                    border: '1px solid rgba(212, 175, 55, 0.18)',
                  }}
                >
                  <div>
                    {/* Top Header with Company Logo */}
                    <div className="about-card-header">
                      {Logo && (
                        <div className="about-logo-box">
                          <Logo size={116} />
                        </div>
                      )}

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
                        <div
                          style={{
                            display: 'inline-block',
                            marginTop: '10px',
                            padding: '5px 14px',
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
                          fontWeight: 500,
                        }}
                      >
                        <CheckCircle2 size={15} color="#D4AF37" style={{ flexShrink: 0 }} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
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

          <div className="about-grid">
            {educations.map((edu, idx) => {
              const Logo = edu.LogoComponent;
              return (
                <div
                  key={idx}
                  className="glass-card"
                  style={{
                    padding: '36px clamp(20px, 4vw, 42px)',
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
                    <div className="about-card-header">
                      <div className="about-logo-box">
                        <Logo size={116} />
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
