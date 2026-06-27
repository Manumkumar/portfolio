import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Header() {
  const headerRef = useRef(null);
  const lastScrollYRef = useRef(0);
  const isHiddenRef = useRef(false);

  useEffect(() => {
    // Initial entrance animation
    gsap.fromTo(
      headerRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'power4.out', delay: 0.3 }
    );

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const lastScrollY = lastScrollYRef.current;
      const header = headerRef.current;
      if (!header) return;

      // Scrolling Down & past threshold -> Hide navbar
      if (currentScrollY > lastScrollY && currentScrollY > 90) {
        if (!isHiddenRef.current) {
          isHiddenRef.current = true;
          gsap.to(header, {
            yPercent: -120,
            duration: 0.35,
            ease: 'power3.out',
          });
        }
      }
      // Scrolling Up -> Show navbar
      else if (currentScrollY < lastScrollY) {
        if (isHiddenRef.current) {
          isHiddenRef.current = false;
          gsap.to(header, {
            yPercent: 0,
            duration: 0.35,
            ease: 'power3.out',
          });
        }
      }

      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      ref={headerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 100,
        padding: '20px 0',
        willChange: 'transform',
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
        }}
      >
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => scrollToSection(e, 'hero')}
          style={{
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <span
            className="font-display"
            style={{
              fontSize: '1.35rem',
              fontWeight: 800,
              letterSpacing: '0.1em',
              color: '#F4F4F6',
            }}
          >
            MANU M. KUMAR
          </span>
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#D4AF37',
              boxShadow: '0 0 12px rgba(212, 175, 55, 0.8)',
              display: 'inline-block',
            }}
          />
        </a>

        {/* Navigation Bar */}
        <nav
          className="glass-header"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '30px',
            padding: '10px 28px',
            borderRadius: '100px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          {[
            { label: 'Experience', id: 'about' },
            { label: 'Projects', id: 'projects' },
            { label: 'Capabilities', id: 'services' },
            { label: 'Contact', id: 'contact' },
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => scrollToSection(e, item.id)}
              style={{
                color: '#C0C0D0',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: 500,
                letterSpacing: '0.04em',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#D4AF37')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#C0C0D0')}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <a
          href="#contact"
          onClick={(e) => scrollToSection(e, 'contact')}
          className="btn-outline"
          style={{
            padding: '10px 22px',
            fontSize: '0.85rem',
          }}
        >
          Get in Touch
        </a>
      </div>
    </header>
  );
}
