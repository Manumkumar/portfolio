import React, { useEffect, useRef } from 'react';

export default function ProjectsBackgroundCanvas() {
  const canvasRef = useRef(null);
  const isVisibleRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let offset = 0;

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

      offset += 0.4;
      const width = window.innerWidth;
      const height = canvas.parentElement ? canvas.parentElement.offsetHeight : window.innerHeight;

      ctx.clearRect(0, 0, width, height);

      ctx.lineWidth = 1;
      const lines = 12; // Optimized
      for (let i = 0; i < lines; i++) {
        const yBase = ((i * 85 + offset) % (height + 100)) - 50;
        ctx.beginPath();
        ctx.strokeStyle = `rgba(212, 175, 55, ${0.05 + Math.sin(yBase * 0.01) * 0.035})`;
        ctx.moveTo(0, yBase);

        for (let x = 0; x <= width; x += 50) {
          const wave = Math.sin((x + offset * 4) * 0.008 + i) * 14;
          ctx.lineTo(x, yBase + wave);
        }
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
          background: 'linear-gradient(180deg, #08080C 0%, rgba(8, 8, 12, 0.82) 40%, rgba(8, 8, 12, 0.82) 60%, #08080C 100%)',
        }}
      />
    </div>
  );
}
