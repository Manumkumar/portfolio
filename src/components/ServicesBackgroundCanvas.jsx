import React, { useEffect, useRef } from 'react';

export default function ServicesBackgroundCanvas() {
  const canvasRef = useRef(null);
  const isVisibleRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    if (canvas.parentElement) observer.observe(canvas.parentElement);

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.25);
      const width = window.innerWidth;
      const height = canvas.parentElement ? canvas.parentElement.offsetHeight : window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const count = 30; // Optimized
    const particles = Array.from({ length: count }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.0004,
      vy: (Math.random() - 0.5) * 0.0004,
      radius: Math.random() * 2 + 1,
      isGold: Math.random() > 0.35,
    }));

    const render = () => {
      animationFrameId = requestAnimationFrame(render);
      if (!isVisibleRef.current) return;

      const width = window.innerWidth;
      const height = canvas.parentElement ? canvas.parentElement.offsetHeight : window.innerHeight;

      ctx.clearRect(0, 0, width, height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > 1) p.vx *= -1;
        if (p.y < 0 || p.y > 1) p.vy *= -1;

        const px = p.x * width;
        const py = p.y * height;

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot((p2.x - p.x) * width, (p2.y - p.y) * height);
          if (dist < 130) {
            ctx.strokeStyle = `rgba(212, 175, 55, ${(1 - dist / 130) * 0.09})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(px, py);
            ctx.lineTo(p2.x * width, p2.y * height);
            ctx.stroke();
          }
        }

        ctx.fillStyle = p.isGold ? 'rgba(212, 175, 55, 0.45)' : 'rgba(124, 77, 255, 0.4)';
        ctx.beginPath();
        ctx.arc(px, py, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        transform: 'translateZ(0)',
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at center, transparent 20%, rgba(8, 8, 12, 0.88) 90%)',
        }}
      />
    </div>
  );
}
