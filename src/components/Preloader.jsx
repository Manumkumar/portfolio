import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Cpu, ShieldCheck } from 'lucide-react';

export default function Preloader({ onFinish }) {
  const containerRef = useRef(null);
  const barRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Guaranteed fail-safe: never trap user on loading screen
    const failSafeTimer = setTimeout(() => {
      if (onFinish) onFinish();
    }, 2400);

    let current = 0;
    const interval = setInterval(() => {
      const step = Math.floor(Math.random() * 4) + 3;
      current += step;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
      }
      setProgress(current);
    }, 28);

    return () => {
      clearInterval(interval);
      clearTimeout(failSafeTimer);
    };
  }, [onFinish]);

  useEffect(() => {
    if (progress === 100) {
      const tl = gsap.timeline({
        onComplete: () => {
          if (onFinish) onFinish();
        },
      });

      if (barRef.current) {
        tl.to(barRef.current, {
          width: '100%',
          duration: 0.25,
          ease: 'power2.out',
        });
      }
      if (containerRef.current) {
        tl.to(containerRef.current, {
          yPercent: -100,
          duration: 0.9,
          ease: 'power4.inOut',
          delay: 0.15,
        });
      }
    }
  }, [progress, onFinish]);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        background: '#06060A',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '50px 60px',
        color: '#F4F4F6',
        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Inter", sans-serif',
      }}
    >
      {/* Top Header info */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '0.8rem',
          letterSpacing: '0.15em',
          color: '#8E8E9F',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Cpu size={16} color="#D4AF37" />
          <span>SYSTEM INITIALIZATION // JETPACK 6.2 CUDA PIPELINE</span>
        </div>
        <div>MANU M. KUMAR • EDGE AI STUDIO</div>
      </div>

      {/* Center Digital Percentage Counter */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px',
        }}
      >
        <div
          className="font-display gold-gradient-text"
          style={{
            fontSize: 'clamp(5rem, 14vw, 11rem)',
            fontWeight: 800,
            lineHeight: 0.9,
            letterSpacing: '-0.04em',
          }}
        >
          {progress.toString().padStart(2, '0')}%
        </div>
        <div
          style={{
            fontSize: '0.9rem',
            letterSpacing: '0.2em',
            color: '#D4AF37',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <ShieldCheck size={16} />
          <span>INITIALIZING COMPUTER VISION NEURAL MESH...</span>
        </div>
      </div>

      {/* Bottom Loading Bar */}
      <div style={{ width: '100%' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '0.78rem',
            color: '#707080',
            marginBottom: '10px',
            letterSpacing: '0.1em',
          }}
        >
          <span>LOADING CUDA OPTIMIZED KERNELS</span>
          <span>STATUS: {progress === 100 ? 'READY FOR DEPLOYMENT' : 'PROCESSING'}</span>
        </div>
        <div
          style={{
            width: '100%',
            height: '4px',
            background: 'rgba(255, 255, 255, 0.08)',
            borderRadius: '4px',
            overflow: 'hidden',
          }}
        >
          <div
            ref={barRef}
            style={{
              width: `${progress}%`,
              height: '100%',
              background: 'linear-gradient(90deg, #F3E5AB 0%, #D4AF37 100%)',
              transition: 'width 0.08s linear',
            }}
          />
        </div>
      </div>
    </div>
  );
}
