import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HeroVisionCanvas() {
  const canvasRef = useRef(null);
  const scrollProgressRef = useRef(0);
  const mouseRef = useRef({ x: 0.5, y: 0.5, targetX: 0.5, targetY: 0.5 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationFrameId;
    let time = 0;

    // Set up retina display scaling
    const resizeCanvas = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // ScrollTrigger to scrub scrollProgress from 0 to 1 across Hero section
    const st = ScrollTrigger.create({
      trigger: canvas.parentElement,
      start: 'top top',
      end: 'bottom top',
      scrub: 0.5,
      onUpdate: (self) => {
        scrollProgressRef.current = self.progress;
      },
    });

    // Mouse movement tracking for interactive crosshair
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.targetX = (e.clientX - rect.left) / rect.width;
      mouseRef.current.targetY = (e.clientY - rect.top) / rect.height;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Generate neural point cloud nodes
    const nodesCount = 45;
    const nodes = Array.from({ length: nodesCount }, () => ({
      x: Math.random(),
      y: Math.random(),
      z: Math.random() * 0.8 + 0.2,
      vx: (Math.random() - 0.5) * 0.0008,
      vy: (Math.random() - 0.5) * 0.0008,
      radius: Math.random() * 2 + 1.5,
    }));

    // Computer Vision simulated targets
    const visionTargets = [
      { id: 'ADV-ICAM-540 #1', label: 'KEG COUNTER CAMERA', baseConfidence: 99.4, x: 0.28, y: 0.35, w: 0.22, h: 0.25 },
      { id: 'JETPACK-6.2-CUDA', label: 'NVIDIA AGX ORIN NODE', baseConfidence: 99.8, x: 0.56, y: 0.25, w: 0.26, h: 0.28 },
      { id: 'IOT-SENSOR-GATEWAY', label: 'RDPMS TELEMETRY HUB', baseConfidence: 98.9, x: 0.38, y: 0.62, w: 0.32, h: 0.22 },
    ];

    const drawHUDCorner = (x, y, size, color = '#D4AF37') => {
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.beginPath();
      // Top-left corner bracket
      ctx.moveTo(x + size, y);
      ctx.lineTo(x, y);
      ctx.lineTo(x, y + size);
      ctx.stroke();
    };

    const render = () => {
      time += 0.016;
      const progress = scrollProgressRef.current; // 0 to 1 based on scroll

      // Smooth mouse interpolation
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.08;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.08;

      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      ctx.clearRect(0, 0, width, height);

      // 1. Draw sleek obsidian tech background grid
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
      ctx.lineWidth = 1;
      const gridSize = 45;
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

      // 2. Scroll-Controlled Laser Scanner Line (moves down and scans targets based on scroll)
      const scanY = (progress * 1.3 - 0.15) * height;
      const scanGradient = ctx.createLinearGradient(0, scanY - 40, 0, scanY + 10);
      scanGradient.addColorStop(0, 'rgba(212, 175, 55, 0)');
      scanGradient.addColorStop(0.8, 'rgba(212, 175, 55, 0.25)');
      scanGradient.addColorStop(1, 'rgba(212, 175, 55, 0.9)');
      ctx.fillStyle = scanGradient;
      ctx.fillRect(0, Math.max(0, scanY - 40), width, 50);

      // Laser scan horizontal beam
      ctx.strokeStyle = '#D4AF37';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(0, scanY);
      ctx.lineTo(width, scanY);
      ctx.stroke();

      // 3. Render Neural Network Nodes & Connections
      nodes.forEach((node, i) => {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0 || node.x > 1) node.vx *= -1;
        if (node.y < 0 || node.y > 1) node.vy *= -1;

        const nx = node.x * width;
        const ny = node.y * height;

        // Connect nearby nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dx = (n2.x - node.x) * width;
          const dy = (n2.y - node.y) * height;
          const dist = Math.hypot(dx, dy);
          if (dist < 110) {
            ctx.strokeStyle = `rgba(212, 175, 55, ${(1 - dist / 110) * 0.18})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(nx, ny);
            ctx.lineTo(n2.x * width, n2.y * height);
            ctx.stroke();
          }
        }

        ctx.fillStyle = node.z > 0.6 ? '#D4AF37' : '#7C4DFF';
        ctx.beginPath();
        ctx.arc(nx, ny, node.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // 4. Render Scroll-Activated AI Computer Vision Bounding Boxes
      visionTargets.forEach((t, idx) => {
        // Parallax slight offset based on scroll progress and mouse
        const tx = (t.x + (mouseRef.current.x - 0.5) * 0.04) * width;
        const ty = (t.y + (progress - 0.3) * -0.1) * height;
        const tw = t.w * width;
        const th = t.h * height;

        // Determine if scanner has passed over this target
        const isScanned = scanY >= ty;
        const boxColor = isScanned ? '#D4AF37' : 'rgba(142, 142, 159, 0.35)';

        // Draw 4 corner brackets around object detection box
        const cs = 16;
        ctx.strokeStyle = boxColor;
        ctx.lineWidth = 2;

        // Top-Left
        ctx.beginPath();
        ctx.moveTo(tx + cs, ty);
        ctx.lineTo(tx, ty);
        ctx.lineTo(tx, ty + cs);
        ctx.stroke();

        // Top-Right
        ctx.beginPath();
        ctx.moveTo(tx + tw - cs, ty);
        ctx.lineTo(tx + tw, ty);
        ctx.lineTo(tx + tw, ty + cs);
        ctx.stroke();

        // Bottom-Left
        ctx.beginPath();
        ctx.moveTo(tx + cs, ty + th);
        ctx.lineTo(tx, ty + th);
        ctx.lineTo(tx, ty + th - cs);
        ctx.stroke();

        // Bottom-Right
        ctx.beginPath();
        ctx.moveTo(tx + tw - cs, ty + th);
        ctx.lineTo(tx + tw, ty + th);
        ctx.lineTo(tx + tw, ty + th - cs);
        ctx.stroke();

        // Fill subtle glass backdrop inside active bounding box
        if (isScanned) {
          ctx.fillStyle = 'rgba(212, 175, 55, 0.04)';
          ctx.fillRect(tx, ty, tw, th);
        }

        // Draw Target Header Tag
        const tagHeight = 22;
        ctx.fillStyle = isScanned ? 'rgba(212, 175, 55, 0.88)' : 'rgba(30, 30, 45, 0.8)';
        ctx.fillRect(tx, ty - tagHeight - 4, 210, tagHeight);

        ctx.fillStyle = isScanned ? '#08080C' : '#8E8E9F';
        ctx.font = 'bold 10px "Poppins", sans-serif';
        const confidence = (t.baseConfidence + Math.sin(time * 3 + idx) * 0.3).toFixed(1);
        ctx.fillText(`[${t.id}] ${confidence}%`, tx + 8, ty - tagHeight / 2);

        // Sublabel below box
        ctx.fillStyle = isScanned ? '#F4F4F6' : '#606070';
        ctx.font = '600 11px "Poppins", sans-serif';
        ctx.fillText(t.label, tx + 4, ty + th + 18);
      });

      // 5. Draw Live Edge AI HUD Telemetry Overlay (Bottom Left & Top Right)
      ctx.fillStyle = 'rgba(14, 14, 22, 0.85)';
      ctx.strokeStyle = 'rgba(212, 175, 55, 0.3)';
      ctx.lineWidth = 1;

      // Bottom Telemetry Bar
      ctx.fillRect(16, height - 52, 290, 36);
      ctx.strokeRect(16, height - 52, 290, 36);

      ctx.fillStyle = '#D4AF37';
      ctx.font = 'bold 11px "Poppins", sans-serif';
      ctx.fillText('NVIDIA JETPACK 6.2 EDGE PIPELINE', 28, height - 33);
      ctx.fillStyle = '#8E8E9F';
      ctx.font = '10px "Poppins", sans-serif';
      const fps = (59.8 + Math.sin(time * 2) * 0.2).toFixed(1);
      ctx.fillText(`CUDA INFERENCE: 1.1ms • FPS: ${fps}`, 28, height - 20);

      // Top Right Scroll Progress Indicator
      ctx.fillStyle = 'rgba(14, 14, 22, 0.85)';
      ctx.fillRect(width - 180, 16, 164, 34);
      ctx.strokeRect(width - 180, 16, 164, 34);

      ctx.fillStyle = '#7C4DFF';
      ctx.font = 'bold 10px "Poppins", sans-serif';
      ctx.fillText('SCROLL HUD SCRUBBER', width - 168, 31);

      ctx.fillStyle = '#F4F4F6';
      ctx.font = '11px "Poppins", sans-serif';
      ctx.fillText(`SCAN DEPTH: ${(progress * 100).toFixed(0)}%`, width - 168, 44);

      // 6. Interactive Mouse Crosshair Reticle
      const cx = mouseRef.current.x * width;
      const cy = mouseRef.current.y * height;

      ctx.strokeStyle = 'rgba(212, 175, 55, 0.45)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(cx, cy, 18, 0, Math.PI * 2);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(cx - 24, cy);
      ctx.lineTo(cx - 10, cy);
      ctx.moveTo(cx + 10, cy);
      ctx.lineTo(cx + 24, cy);
      ctx.moveTo(cx, cy - 24);
      ctx.lineTo(cx, cy - 10);
      ctx.moveTo(cx, cy + 10);
      ctx.lineTo(cx, cy + 24);
      ctx.stroke();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      st.kill();
    };
  }, []);

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        borderRadius: '32px',
        overflow: 'hidden',
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
          background: '#07070B',
        }}
      />
    </div>
  );
}
