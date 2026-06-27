import React, { useEffect, useRef } from 'react';

export default function ContactBackgroundCanvas() {
  const canvasRef = useRef(null);
  const isVisibleRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let time = 0;

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

    const render = () => {
      animationFrameId = requestAnimationFrame(render);
      if (!isVisibleRef.current) return;

      time += 0.015;
      const width = window.innerWidth;
      const height = canvas.parentElement ? canvas.parentElement.offsetHeight : window.innerHeight;

      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height * 0.85;

      for (let i = 0; i < 4; i++) {
        const radius = ((time * 45 + i * 130) % 650);
        const alpha = Math.max(0, (1 - radius / 650) * 0.14);

        ctx.strokeStyle = `rgba(212, 175, 55, ${alpha})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(cx, cy, radius, Math.PI * 1.1, Math.PI * 1.9);
        ctx.stroke();
      }
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
          background: 'linear-gradient(180deg, #08080C 0%, rgba(8, 8, 12, 0.78) 50%, #08080C 100%)',
        }}
      />
    </div>
  );
}
