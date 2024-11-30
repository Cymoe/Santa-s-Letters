import React, { useEffect, useRef } from 'react';

interface SectionSnowfallProps {
  density?: number;
  speed?: number;
}

export function SectionSnowfall({ density = 30, speed = 0.5 }: SectionSnowfallProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to match container
    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };
    
    resizeCanvas();
    const resizeObserver = new ResizeObserver(resizeCanvas);
    resizeObserver.observe(container);

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
        this.y = Math.random() * canvas.height;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.02;
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = -10;
        this.size = Math.random() * 2 + 0.5; // Slightly smaller flakes
        this.speedX = (Math.random() - 0.5) * speed;
        this.speedY = Math.random() * speed + speed / 2;
        this.opacity = Math.random() * 0.3 + 0.2; // More subtle opacity
        this.isBlue = Math.random() > 0.6; // 40% chance of being blue
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.rotation += this.rotationSpeed;

        if (this.y > canvas.height || this.x < 0 || this.x > canvas.width) {
          this.reset();
        }
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        
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

        ctx.beginPath();
        ctx.arc(0, 0, this.size / 3, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();

        ctx.restore();
      }
    }

    const snowflakes = Array.from({ length: density }, () => new Snowflake());

    let animationFrame: number;
    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      snowflakes.forEach(snowflake => {
        snowflake.update();
        snowflake.draw();
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
    };
  }, [density, speed]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-50"
        style={{ mixBlendMode: 'screen' }}
      />
    </div>
  );
}
