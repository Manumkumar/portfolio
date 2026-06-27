import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HeroBackgroundCanvas() {
  const canvasRef = useRef(null);
  const scrollProgressRef = useRef(0);
  const mouseRef = useRef({ x: 0.5, y: 0.5, targetX: 0.5, targetY: 0.5 });
  const isVisibleRef = useRef(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationFrameId;

    // Pause rendering when section scrolls off-screen
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    if (canvas.parentElement) observer.observe(canvas.parentElement);

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.35);
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const st = ScrollTrigger.create({
      trigger: canvas.parentElement,
      start: 'top top',
      end: 'bottom top',
      scrub: 0.4,
      onUpdate: (self) => {
        scrollProgressRef.current = self.progress;
      },
    });

    const handleMouseMove = (e) => {
      mouseRef.current.targetX = e.clientX / window.innerWidth;
      mouseRef.current.targetY = e.clientY / window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const nodesCount = 50; // Optimized from 70
    const nodes = Array.from({ length: nodesCount }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.0006,
      vy: (Math.random() - 0.5) * 0.0006,
      radius: Math.random() * 2 + 1,
      isGold: Math.random() > 0.3,
    }));

    const render = () => {
      animationFrameId = requestAnimationFrame(render);
      if (!isVisibleRef.current) return; // Skip CPU/GPU rendering when offscreen

      const progress = scrollProgressRef.current;
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.07;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.07;

      const width = window.innerWidth;
      const height = window.innerHeight;

      ctx.clearRect(0, 0, width, height);

      // 1. Subtle matrix grid
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.025)';
      ctx.lineWidth = 1;
      const gridSize = 70;
      for (let x = 0; x <= width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y <= height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // 2. Full-Screen Scroll-Controlled Laser Scanner Beam
      const scanY = (progress * 1.3 - 0.1) * height;
      const scanGrad = ctx.createLinearGradient(0, scanY - 60, 0, scanY + 10);
      scanGrad.addColorStop(0, 'rgba(212, 175, 55, 0)');
      scanGrad.addColorStop(0.7, 'rgba(212, 175, 55, 0.12)');
      scanGrad.addColorStop(1, 'rgba(212, 175, 55, 0.8)');
      ctx.fillStyle = scanGrad;
      ctx.fillRect(0, Math.max(0, scanY - 60), width, 70);

      ctx.strokeStyle = 'rgba(212, 175, 55, 0.9)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(0, scanY);
      ctx.lineTo(width, scanY);
      ctx.stroke();

      // 3. Neural Synapses & Point Cloud
      nodes.forEach((node, i) => {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0 || node.x > 1) node.vx *= -1;
        if (node.y < 0 || node.y > 1) node.vy *= -1;

        const nx = node.x * width;
        const ny = node.y * height;

        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dist = Math.hypot((n2.x - node.x) * width, (n2.y - node.y) * height);
          if (dist < 140) {
            ctx.strokeStyle = `rgba(212, 175, 55, ${(1 - dist / 140) * 0.11})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(nx, ny);
            ctx.lineTo(n2.x * width, n2.y * height);
            ctx.stroke();
          }
        }

        ctx.fillStyle = node.isGold ? 'rgba(212, 175, 55, 0.6)' : 'rgba(124, 77, 255, 0.5)';
        ctx.beginPath();
        ctx.arc(nx, ny, node.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // 4. Mouse Reticle
      const mx = mouseRef.current.x * width;
      const my = mouseRef.current.y * height;
      ctx.strokeStyle = 'rgba(212, 175, 55, 0.35)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(mx, my, 20, 0, Math.PI * 2);
      ctx.stroke();
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      observer.disconnect();
      st.kill();
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
          background: 'radial-gradient(circle at center, transparent 30%, rgba(8, 8, 12, 0.85) 90%)',
        }}
      />
    </div>
  );
}
