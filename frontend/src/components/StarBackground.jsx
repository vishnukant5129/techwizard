import { useEffect, useRef } from 'react';

const StarBackground = () => {
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);
  const starsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let canvasWidth = canvas.width;
    let canvasHeight = canvas.height;

    // Set initial dimensions
    const resizeCanvas = () => {
      if (!canvas) return;
      canvasWidth = window.innerWidth;
      canvasHeight = window.innerHeight;
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Star class with optimized methods
    class Star {
      constructor() {
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        this.size = Math.random() * 2 + 0.5;
        this.speed = Math.random() * 0.5 + 0.1;
        this.opacity = Math.random() * 0.8 + 0.2;
        this.twinkleSpeed = Math.random() * 0.02 + 0.01;
        this.twinkleDir = Math.random() > 0.5 ? 1 : -1;
      }

      update() {
        this.y += this.speed;
        if (this.y > canvasHeight) {
          this.y = 0;
          this.x = Math.random() * canvasWidth;
        }

        this.opacity += this.twinkleSpeed * this.twinkleDir;
        if (this.opacity > 1 || this.opacity < 0.2) {
          this.twinkleDir *= -1;
        }
      }

      draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.fill();

        if (this.size > 1.5) {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity * 0.3})`;
          ctx.fill();
        }
      }
    }

    // Initialize stars
    const starCount = Math.floor((canvasWidth * canvasHeight) / 4000);
    starsRef.current = Array.from({ length: starCount }, () => new Star());

    // Animation loop
    const animate = () => {
      if (!ctx) return;
      
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);

      // Draw gradient background
      const gradient = ctx.createRadialGradient(
        canvasWidth / 2, canvasHeight / 2, 0,
        canvasWidth / 2, canvasHeight / 2, canvasWidth
      );
      gradient.addColorStop(0, 'rgba(0, 20, 40, 0.3)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 1)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);

      // Update and draw stars
      starsRef.current.forEach(star => {
        star.update();
        star.draw(ctx);
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0"
      style={{ background: 'radial-gradient(ellipse at center, #0a0a1a 0%, #000000 100%)' }}
    />
  );
};

export default StarBackground;

