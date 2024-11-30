import React, { useEffect, useRef } from 'react';

export function Snowfall() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Snowflake class
    class Snowflake {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      isBlue: boolean;
      rotation: number;
      rotationSpeed: number;

      constructor() {
        this.reset();
        this.y = Math.random() * canvas.height; // Initial random position
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.02;
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = -10;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 1 + 1;
        this.opacity = Math.random() * 0.5 + 0.3;
        this.isBlue = Math.random() > 0.7; // 30% chance of being blue
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.rotation += this.rotationSpeed;

        if (this.y > canvas.height) {
          this.reset();
        }
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        
        // Draw a snowflake
        const color = this.isBlue ? 
          `rgba(173, 216, 230, ${this.opacity})` : // Light blue
          `rgba(255, 255, 255, ${this.opacity})`; // White

        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          ctx.moveTo(0, 0);
          ctx.lineTo(this.size * 2, 0);
          ctx.rotate(Math.PI / 3);
        }
        ctx.strokeStyle = color;
        ctx.lineWidth = this.size / 3;
        ctx.stroke();

        // Add a center dot
        ctx.beginPath();
        ctx.arc(0, 0, this.size / 3, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();

        ctx.restore();
      }
    }

    // Create snowflakes
    const snowflakes = Array.from({ length: 150 }, () => new Snowflake());

    // Animation loop
    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      snowflakes.forEach(snowflake => {
        snowflake.update();
        snowflake.draw();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50 opacity-70"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}
