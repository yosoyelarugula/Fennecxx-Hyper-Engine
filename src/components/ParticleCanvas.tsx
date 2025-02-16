"use client";

import React, { useEffect, useRef } from 'react';

const ParticleCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  
  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }

    const canvas: HTMLCanvasElement = canvasRef.current;
    const context = canvas.getContext('2d');

    if (!context) {
      return;
    }

    const ctx: CanvasRenderingContext2D = context;

    // Set actual pixel dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
    }

    // Create simple particles
    const particles: Particle[] = Array.from({ length: 50 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: Math.random() * 1 - 0.5,
      vy: Math.random() * 1 - 0.5,
      radius: Math.random() * 2 + 1
    }));

    let animationFrameId: number;

    const animate = (): void => {
      // Clear the entire canvas with background color
      ctx.fillStyle = '#0a192f';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw particles
      ctx.fillStyle = 'white';
      particles.forEach((particle: Particle) => {
        // Move
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = window.requestAnimationFrame(animate);
    };

    // Handle resize
    const handleResize = (): void => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        background: '#0a192f'
      }}
    />
  );
};

export default ParticleCanvas;