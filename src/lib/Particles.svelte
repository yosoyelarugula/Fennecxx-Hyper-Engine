<script lang="ts">
    import { onMount } from 'svelte';
  
    let canvas: HTMLCanvasElement;
    let ctx: CanvasRenderingContext2D;
    let particles: Array<{x: number, y: number, size: number, speedX: number, speedY: number}> = [];
    const particleCount = 50;
  
    function createParticle() {
      return {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 2 + 1,
        speedX: Math.random() * 2 - 1,
        speedY: Math.random() * 2 - 1
      };
    }
  
    function animate() {
      if (!ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
  
      particles.forEach((particle, index) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
  
        particle.x += particle.speedX;
        particle.y += particle.speedY;
  
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
      });
  
      requestAnimationFrame(animate);
    }
  
    function handleResize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
  
    onMount(() => {
      ctx = canvas.getContext('2d')!;
      handleResize();
  
      for (let i = 0; i < particleCount; i++) {
        particles.push(createParticle());
      }
  
      window.addEventListener('resize', handleResize);
      animate();
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    });
  </script>
  
  <canvas
    bind:this={canvas}
    class="fixed top-0 left-0 w-full h-full pointer-events-none"
  />