import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { Mail, Phone, Send, CheckCircle2, MapPin } from 'lucide-react';
import ContactBackgroundCanvas from '../components/ContactBackgroundCanvas';

export default function Contact() {
  const btnRef = useRef(null);
  const [sent, setSent] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleMagneticMove = (e) => {
    const btn = btnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(btn, {
      x: x * 0.35,
      y: y * 0.35,
      duration: 0.3,
      ease: 'power3.out',
    });
  };

  const handleMagneticLeave = () => {
    const btn = btnRef.current;
    if (!btn) return;
    gsap.to(btn, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: 'elastic.out(1, 0.4)',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setFormState({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section
      id="contact"
      style={{
        padding: '130px 0',
        background: '#08080C',
        position: 'relative',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        overflow: 'hidden',
      }}
    >
      <ContactBackgroundCanvas />
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'grid',
          gridTemplateColumns: '1fr 1.1fr',
          gap: '70px',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* Left Info Column */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <span
              style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.15em',
                color: '#D4AF37',
                textTransform: 'uppercase',
              }}
            >
              // GET IN TOUCH
            </span>
            <h2
              className="font-display"
              style={{
                fontSize: 'clamp(2.3rem, 4.2vw, 3.8rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                marginTop: '12px',
                marginBottom: '24px',
              }}
            >
              Let&apos;s engineer your next <span className="gold-gradient-text">AI breakthrough.</span>
            </h2>
            <p
              style={{
                color: '#8E8E9F',
                fontSize: '1.05rem',
                lineHeight: 1.7,
                maxWidth: '480px',
                marginBottom: '40px',
              }}
            >
              Seeking an engineer who excels at Computer Vision, NVIDIA Jetson edge computing, and backend architecture? Reach out to initiate a conversation.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div
              className="glass-card"
              style={{
                padding: '22px 26px',
                display: 'flex',
                alignItems: 'center',
                gap: '18px',
              }}
            >
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: 'rgba(212, 175, 55, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#D4AF37',
                }}
              >
                <Mail size={22} />
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', color: '#8E8E9F' }}>Direct Email</div>
                <div style={{ fontSize: '1.02rem', fontWeight: 600, color: '#F4F4F6' }}>
                  manumkumar6231@gmail.com
                </div>
              </div>
            </div>

            <div
              className="glass-card"
              style={{
                padding: '22px 26px',
                display: 'flex',
                alignItems: 'center',
                gap: '18px',
              }}
            >
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: 'rgba(212, 175, 55, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#D4AF37',
                }}
              >
                <Phone size={22} />
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', color: '#8E8E9F' }}>Direct Phone</div>
                <div style={{ fontSize: '1.02rem', fontWeight: 600, color: '#F4F4F6' }}>
                  +91 623 897 1198
                </div>
              </div>
            </div>

            <div
              className="glass-card"
              style={{
                padding: '22px 26px',
                display: 'flex',
                alignItems: 'center',
                gap: '18px',
              }}
            >
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: 'rgba(212, 175, 55, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#D4AF37',
                }}
              >
                <MapPin size={22} />
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', color: '#8E8E9F' }}>Location</div>
                <div style={{ fontSize: '1.02rem', fontWeight: 600, color: '#F4F4F6' }}>
                  Kerala, India • Available for Opportunities
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form Column */}
        <div
          className="glass-card"
          style={{
            padding: '48px 44px',
          }}
        >
          <h3
            className="font-display"
            style={{
              fontSize: '1.6rem',
              fontWeight: 700,
              color: '#F4F4F6',
              marginBottom: '32px',
            }}
          >
            Send a Message
          </h3>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            <div>
              <label
                style={{
                  display: 'block',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: '#C0C0D0',
                  marginBottom: '10px',
                }}
              >
                YOUR NAME
              </label>
              <input
                type="text"
                required
                placeholder="Your Name"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                style={{
                  width: '100%',
                  padding: '16px 20px',
                  borderRadius: '14px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#F4F4F6',
                  fontSize: '0.95rem',
                  outline: 'none',
                  transition: 'border-color 0.3s ease',
                }}
                onFocus={(e) => (e.target.style.borderColor = '#D4AF37')}
                onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)')}
              />
            </div>

            <div>
              <label
                style={{
                  display: 'block',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: '#C0C0D0',
                  marginBottom: '10px',
                }}
              >
                EMAIL ADDRESS
              </label>
              <input
                type="email"
                required
                placeholder="your.email@example.com"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                style={{
                  width: '100%',
                  padding: '16px 20px',
                  borderRadius: '14px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#F4F4F6',
                  fontSize: '0.95rem',
                  outline: 'none',
                  transition: 'border-color 0.3s ease',
                }}
                onFocus={(e) => (e.target.style.borderColor = '#D4AF37')}
                onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)')}
              />
            </div>

            <div>
              <label
                style={{
                  display: 'block',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: '#C0C0D0',
                  marginBottom: '10px',
                }}
              >
                MESSAGE &amp; PROJECT INQUIRY
              </label>
              <textarea
                rows={4}
                required
                placeholder="Tell me about the opportunity or project..."
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                style={{
                  width: '100%',
                  padding: '16px 20px',
                  borderRadius: '14px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#F4F4F6',
                  fontSize: '0.95rem',
                  outline: 'none',
                  resize: 'none',
                  transition: 'border-color 0.3s ease',
                }}
                onFocus={(e) => (e.target.style.borderColor = '#D4AF37')}
                onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)')}
              />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <button
                ref={btnRef}
                type="submit"
                onMouseMove={handleMagneticMove}
                onMouseLeave={handleMagneticLeave}
                className="btn-gold"
                style={{
                  padding: '16px 36px',
                  fontSize: '1rem',
                  willChange: 'transform',
                }}
              >
                <span>{sent ? 'Message Sent Successfully' : 'Send Message'}</span>
                {sent ? <CheckCircle2 size={18} /> : <Send size={18} />}
              </button>
              {sent && (
                <span style={{ color: '#D4AF37', fontSize: '0.88rem' }}>
                  Thank you! I will respond promptly.
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
