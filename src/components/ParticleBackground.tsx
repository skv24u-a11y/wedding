import { useEffect, useRef } from 'react';

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      type: 'circle' | 'petal';
      color: string;
      rotation: number;
      rotationSpeed: number;
    }> = [];

    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
      const isPetal = Math.random() > 0.6;
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: isPetal ? Math.random() * 6 + 3 : Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: isPetal ? Math.random() * 0.3 - 0.5 : (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2,
        type: isPetal ? 'petal' : 'circle',
        color: isPetal
          ? (Math.random() > 0.5 ? 'rgba(255, 153, 51, ' : 'rgba(201, 169, 110, ')
          : 'rgba(201, 169, 110, ',
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 2,
      });
    }

    let animationFrameId: number;

    function drawPetal(
      x: number,
      y: number,
      size: number,
      rotation: number,
      color: string,
      opacity: number
    ) {
      if (!ctx) return;

      ctx.save();
      ctx.translate(x, y);
      ctx.rotate((rotation * Math.PI) / 180);

      ctx.beginPath();
      ctx.moveTo(0, -size);
      ctx.quadraticCurveTo(size * 0.7, -size * 0.5, size * 0.5, 0);
      ctx.quadraticCurveTo(size * 0.7, size * 0.5, 0, size);
      ctx.quadraticCurveTo(-size * 0.7, size * 0.5, -size * 0.5, 0);
      ctx.quadraticCurveTo(-size * 0.7, -size * 0.5, 0, -size);
      ctx.closePath();

      ctx.fillStyle = color + opacity + ')';
      ctx.fill();

      ctx.restore();
    }

    function animate() {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        if (particle.type === 'petal') {
          drawPetal(
            particle.x,
            particle.y,
            particle.size,
            particle.rotation,
            particle.color,
            particle.opacity
          );
          particle.rotation += particle.rotationSpeed;
        } else {
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = particle.color + particle.opacity + ')';
          ctx.fill();
        }

        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
      });

      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
}
