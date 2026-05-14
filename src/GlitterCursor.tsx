import { useEffect, useRef } from "react";

const MAX_DOTS = 50;

type Dot = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  decay: number;
  size: number;
  el: HTMLDivElement;
};

export default function GlitterCursor() {
  const dotsRef = useRef<Dot[]>([]);
  const mouse = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const container = document.createElement("div");
    Object.assign(container.style, {
      position: "fixed",
      inset: "0",
      pointerEvents: "none",
      zIndex: "9999",
    });
    document.body.appendChild(container);

    const spawnDot = (x: number, y: number, vx = 0, vy = 0) => {
      const el = document.createElement("div");
      el.className = "glitter-dot";

      container.appendChild(el);

      const size = 4 + Math.random() * 10;

      dotsRef.current.push({
        x,
        y,
        vx: vx + (Math.random() - 0.5) * 2,
        vy: vy + (Math.random() - 0.5) * 2,
        life: 1,
        decay: 0.015 + Math.random() * 0.01,
        size,
        el,
      });

      if (dotsRef.current.length > MAX_DOTS) {
        const old = dotsRef.current.shift();
        old?.el.remove();
      }
    };

    let lastX = 0;
    let lastY = 0;

    const onMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      const vx = e.clientX - lastX;
      const vy = e.clientY - lastY;

      lastX = e.clientX;
      lastY = e.clientY;

      const speed = Math.min(6, Math.sqrt(vx * vx + vy * vy) * 0.2);

      for (let i = 0; i < 3; i++) {
        spawnDot(e.clientX, e.clientY, vx * 0.1, vy * 0.1);

        // burst feel when moving fast
        if (speed > 2) {
          spawnDot(
            e.clientX + (Math.random() - 0.5) * 10,
            e.clientY + (Math.random() - 0.5) * 10,
            vx * 0.2,
            vy * 0.2
          );
        }
      }
    };

    const animate = () => {
      const cx = mouse.current.x;
      const cy = mouse.current.y;

      const arr = dotsRef.current;

      for (let i = arr.length - 1; i >= 0; i--) {
        const d = arr[i];

        // easing toward cursor (soft attraction)
        d.vx += (cx - d.x) * 0.0005;
        d.vy += (cy - d.y) * 0.0005;

        d.x += d.vx;
        d.y += d.vy;

        d.vx *= 0.96;
        d.vy *= 0.96;

        d.life -= d.decay;

        const fade = Math.max(0, d.life);
        const scale = fade * (d.size / 8);

        d.el.style.transform = `translate(-50%, -50%) scale(${scale})`;
        d.el.style.left = `${d.x}px`;
        d.el.style.top = `${d.y}px`;
        d.el.style.opacity = String(fade);

        if (d.life <= 0) {
          d.el.remove();
          arr.splice(i, 1);
        }
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      container.remove();
      dotsRef.current = [];
    };
  }, []);

  return null;
}