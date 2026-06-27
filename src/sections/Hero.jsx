import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Radio } from 'lucide-react';
import HeroBackgroundCanvas from '../components/HeroBackgroundCanvas';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      tl.fromTo(
        titleRef.current.querySelectorAll('.hero-line'),
        { y: 110, opacity: 0, skewY: 4 },
        { y: 0, opacity: 1, skewY: 0, duration: 1.3, stagger: 0.12 }
      )
        .fromTo(
          subRef.current,
          { y: 26, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          '-=0.85'
        )
        .fromTo(
          ctaRef.current,
          { y: 26, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          '-=0.7'
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '150px',
        paddingBottom: '110px',
        overflow: 'hidden',
      }}
    >
      {/* Full-Screen Computer Vision Neural Background Animation */}
      <HeroBackgroundCanvas />

      {/* Clean Apple-Grade Foreground Typography */}
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 24px',
          width: '100%',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <div style={{ maxWidth: '860px' }}>
          {/* Top Pill Badge */}
          <div
            className="glass-pill"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 20px',
              borderRadius: '100px',
              marginBottom: '32px',
              fontSize: '0.82rem',
              fontWeight: 600,
              letterSpacing: '0.06em',
              color: '#F3E5AB',
            }}
          >
            <Radio size={14} color="#D4AF37" />
            <span>SOFTWARE DEVELOPER • COMPUTER VISION &amp; EDGE AI</span>
          </div>

          {/* Main Title (Apple iPhone Pro Style Typography) */}
          <h1
            ref={titleRef}
            className="font-display"
            style={{
              fontSize: 'clamp(2.4rem, 6.2vw, 5.4rem)',
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: '-0.035em',
              marginBottom: '32px',
              textShadow: '0 12px 36px rgba(0, 0, 0, 0.85)',
            }}
          >
            <div style={{ overflow: 'hidden' }}>
              <div className="hero-line" style={{ color: '#F4F4F6' }}>
                Manu M. Kumar.
              </div>
            </div>
            <div style={{ overflow: 'hidden' }}>
              <div className="hero-line gold-gradient-text">
                Computer Vision &amp;
              </div>
            </div>
            <div style={{ overflow: 'hidden' }}>
              <div className="hero-line" style={{ color: '#E8E8F0' }}>
                Edge AI Engineer.
              </div>
            </div>
          </h1>

          {/* Subtitle Paragraph */}
          <p
            ref={subRef}
            style={{
              fontSize: '1.22rem',
              color: '#C8C8D6',
              maxWidth: '660px',
              marginBottom: '48px',
              lineHeight: 1.7,
              letterSpacing: '-0.01em',
              fontWeight: 400,
              textShadow: '0 4px 16px rgba(0, 0, 0, 0.9)',
            }}
          >
            Results-driven Software Developer specializing in Computer Vision, Edge AI, and Machine Learning. Proven track record of developing high-accuracy object detection pipelines with NVIDIA Jetson hardware, CUDA acceleration, and seamless edge-to-cloud IoT architectures.
          </p>

          {/* CTA Buttons */}
          <div ref={ctaRef} style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <a href="#projects" className="btn-gold">
              <span>View AI &amp; IoT Showcase</span>
              <ArrowUpRight size={18} />
            </a>
            <a href="#about" className="btn-outline">
              <span>Experience &amp; Education</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
