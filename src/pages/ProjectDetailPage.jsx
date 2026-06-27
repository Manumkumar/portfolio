import React, { useEffect } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, Cpu, Layers, ShieldCheck, Zap } from 'lucide-react';

export default function ProjectDetailPage({ project, onBack, onSelectProject, allProjects }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [project]);

  if (!project) return null;

  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#08080C',
        color: '#F4F4F6',
        position: 'relative',
        zIndex: 50,
        paddingBottom: '120px',
      }}
    >
      {/* Top Sticky Glass Navigation */}
      <header
        className="glass-header"
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 60,
          padding: '18px 24px',
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <button
            onClick={onBack}
            className="btn-outline"
            style={{
              padding: '10px 22px',
              fontSize: '0.88rem',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <ArrowLeft size={16} />
            <span>Back to Portfolio</span>
          </button>

          <div
            style={{
              fontSize: '0.82rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              color: '#D4AF37',
              textTransform: 'uppercase',
            }}
          >
            CASE STUDY // {project.numId}
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main
        style={{
          maxWidth: '1140px',
          margin: '0 auto',
          padding: '60px 24px 0',
        }}
      >
        {/* Project Header */}
        <div style={{ marginBottom: '46px' }}>
          <span
            className="glass-pill"
            style={{
              display: 'inline-block',
              padding: '6px 18px',
              borderRadius: '100px',
              fontSize: '0.78rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              color: '#F3E5AB',
              marginBottom: '20px',
            }}
          >
            {project.category}
          </span>

          <h1
            className="font-display"
            style={{
              fontSize: 'clamp(2.4rem, 5vw, 4.2rem)',
              fontWeight: 800,
              lineHeight: 1.08,
              marginBottom: '24px',
              color: '#F4F4F6',
            }}
          >
            {project.title}
          </h1>

          <p
            style={{
              fontSize: '1.2rem',
              color: '#C8C8D6',
              lineHeight: 1.7,
              maxWidth: '860px',
            }}
          >
            {project.summary}
          </p>
        </div>

        {/* Key KPI Stats Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
            gap: '20px',
            marginBottom: '54px',
          }}
        >
          {project.stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '24px 20px',
                textAlign: 'center',
              }}
            >
              <div
                className="font-display gold-gradient-text"
                style={{
                  fontSize: '2rem',
                  fontWeight: 800,
                  marginBottom: '4px',
                }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: '0.85rem', color: '#8E8E9F', fontWeight: 500 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Project Architecture Showcase Image */}
        <div
          className="glass-card"
          style={{
            padding: '16px',
            marginBottom: '70px',
            overflow: 'hidden',
          }}
        >
          <img
            src={project.image}
            alt={project.title}
            style={{
              width: '100%',
              maxHeight: '520px',
              objectFit: 'cover',
              borderRadius: '16px',
              display: 'block',
              border: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          />
        </div>

        {/* Engineering Executive Overview Section */}
        <section style={{ marginBottom: '70px' }}>
          <h2
            className="font-display"
            style={{
              fontSize: '1.8rem',
              fontWeight: 700,
              marginBottom: '20px',
              color: '#F4F4F6',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <Cpu size={24} color="#D4AF37" />
            <span>Engineering &amp; Architectural Overview</span>
          </h2>
          <div
            className="glass-card"
            style={{
              padding: '36px 38px',
              fontSize: '1.08rem',
              lineHeight: 1.8,
              color: '#D0D0E0',
            }}
          >
            {project.overview}
          </div>
        </section>

        {/* System Architecture Pipeline Workflow */}
        <section style={{ marginBottom: '70px' }}>
          <h2
            className="font-display"
            style={{
              fontSize: '1.8rem',
              fontWeight: 700,
              marginBottom: '28px',
              color: '#F4F4F6',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <Layers size={24} color="#D4AF37" />
            <span>System Pipeline &amp; Workflow Architecture</span>
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '24px',
            }}
          >
            {project.architecture.map((stepItem, index) => (
              <div
                key={index}
                className="glass-card"
                style={{
                  padding: '30px 26px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span
                    style={{
                      fontSize: '1.4rem',
                      fontWeight: 800,
                      color: '#D4AF37',
                    }}
                  >
                    STEP {stepItem.step}
                  </span>
                  <Zap size={18} color="#D4AF37" />
                </div>
                <h3
                  className="font-display"
                  style={{
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: '#F4F4F6',
                  }}
                >
                  {stepItem.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.92rem',
                    color: '#9E9EB2',
                    lineHeight: 1.65,
                  }}
                >
                  {stepItem.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Hardware & Software Technology Stack */}
        <section style={{ marginBottom: '70px' }}>
          <h2
            className="font-display"
            style={{
              fontSize: '1.8rem',
              fontWeight: 700,
              marginBottom: '24px',
              color: '#F4F4F6',
            }}
          >
            Core Technology &amp; Hardware Stack
          </h2>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '14px',
            }}
          >
            {project.techStack.map((tech, idx) => (
              <div
                key={idx}
                className="glass-pill"
                style={{
                  padding: '12px 24px',
                  borderRadius: '100px',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: '#F3E5AB',
                }}
              >
                {tech}
              </div>
            ))}
          </div>
        </section>

        {/* Resolved Engineering Challenges */}
        <section style={{ marginBottom: '80px' }}>
          <h2
            className="font-display"
            style={{
              fontSize: '1.8rem',
              fontWeight: 700,
              marginBottom: '24px',
              color: '#F4F4F6',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <ShieldCheck size={24} color="#D4AF37" />
            <span>Key Engineering Achievements &amp; Outcomes</span>
          </h2>

          <div
            className="glass-card"
            style={{
              padding: '36px 38px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}
          >
            {project.challengesResolved.map((item, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '16px',
                }}
              >
                <CheckCircle2
                  size={22}
                  color="#D4AF37"
                  style={{ flexShrink: 0, marginTop: '2px' }}
                />
                <span style={{ fontSize: '1.03rem', color: '#D0D0E0', lineHeight: 1.65 }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom Case Study Navigation */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '20px',
            paddingTop: '40px',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          <button
            onClick={onBack}
            className="btn-outline"
            style={{ padding: '14px 28px' }}
          >
            <ArrowLeft size={18} />
            <span>Return to All Projects</span>
          </button>

          <button
            onClick={() => onSelectProject(nextProject)}
            className="btn-gold"
            style={{ padding: '14px 32px' }}
          >
            <span>Next Case Study: {nextProject.title.split(':')[0]}</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </main>
    </div>
  );
}
