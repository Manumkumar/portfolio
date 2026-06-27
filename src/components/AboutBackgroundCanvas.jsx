import React, { useEffect, useRef } from 'react';

export default function AboutBackgroundCanvas() {
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

    const streamCount = 20; // Optimized
    const streams = Array.from({ length: streamCount }, () => ({
      x: Math.random(),
      y: Math.random(),
      speed: (Math.random() * 0.0015 + 0.0005),
      length: Math.random() * 80 + 40,
      isGold: Math.random() > 0.4,
      opacity: Math.random() * 0.35 + 0.1,
    }));

    const render = () => {
      animationFrameId = requestAnimationFrame(render);
      if (!isVisibleRef.current) return;

      const width = window.innerWidth;
      const height = canvas.parentElement ? canvas.parentElement.offsetHeight : window.innerHeight;

      ctx.clearRect(0, 0, width, height);

      streams.forEach((st) => {
        st.y += st.speed;
        if (st.y > 1.1) st.y = -0.1;

        const x = st.x * width;
        const y = st.y * height;

        const grad = ctx.createLinearGradient(x, y - st.length, x, y);
        const colorBase = st.isGold ? '212, 175, 55' : '124, 77, 255';
        grad.addColorStop(0, `rgba(${colorBase}, 0)`);
        grad.addColorStop(0.8, `rgba(${colorBase}, ${st.opacity})`);
        grad.addColorStop(1, `rgba(${colorBase}, ${st.opacity * 1.5})`);

        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(x, y - st.length);
        ctx.lineTo(x, y);
        ctx.stroke();

        ctx.fillStyle = `rgba(${colorBase}, ${st.opacity * 1.8})`;
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
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
          background: 'linear-gradient(180deg, #08080C 0%, rgba(8, 8, 12, 0.75) 50%, #08080C 100%)',
        }}
      />
    </div>
  );
}
