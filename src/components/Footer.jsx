import React from 'react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '60px 0 40px',
        background: '#06060A',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '40px',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '20px',
          }}
        >
          <div>
            <h3
              className="font-display"
              style={{
                fontSize: '1.5rem',
                fontWeight: 800,
                letterSpacing: '0.08em',
                color: '#F4F4F6',
              }}
            >
              MANU M. KUMAR<span style={{ color: '#D4AF37' }}>.</span>
            </h3>
            <p style={{ color: '#8E8E9F', fontSize: '0.95rem', marginTop: '6px' }}>
              Software Developer • Computer Vision, Edge AI &amp; Machine Learning Engineer.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="btn-outline"
            style={{
              padding: '12px 24px',
              fontSize: '0.85rem',
            }}
          >
            ↑ Back to Top
          </button>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            paddingTop: '24px',
            fontSize: '0.85rem',
            color: '#707080',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <span>© {new Date().getFullYear()} Manu M Kumar. All rights reserved.</span>
          <div style={{ display: 'flex', gap: '24px' }}>
            <a
              href="mailto:manumkumar6231@gmail.com"
              style={{ color: '#8E8E9F', textDecoration: 'none' }}
            >
              Email
            </a>
            <a
              href="tel:+916238971198"
              style={{ color: '#8E8E9F', textDecoration: 'none' }}
            >
              Phone (+91 623 897 1198)
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
