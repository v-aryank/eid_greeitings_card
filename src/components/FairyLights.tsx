import { useEffect, useRef } from "react";

const FairyLights = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Create swooping fairy light strings
    const strings: { points: { x: number; y: number }[]; bulbs: { t: number; phase: number }[] }[] = [];

    const createString = (startX: number, endX: number, y: number, sag: number, bulbCount: number) => {
      const points: { x: number; y: number }[] = [];
      const bulbs: { t: number; phase: number }[] = [];
      for (let i = 0; i <= 60; i++) {
        const t = i / 60;
        const x = startX + (endX - startX) * t;
        const sagY = y + sag * Math.sin(Math.PI * t);
        points.push({ x, y: sagY });
      }
      for (let i = 0; i < bulbCount; i++) {
        bulbs.push({ t: (i + 0.5) / bulbCount, phase: Math.random() * Math.PI * 2 });
      }
      return { points, bulbs };
    };

    const buildStrings = () => {
      strings.length = 0;
      const w = canvas.width;
      // Multiple swooping strings across the top
      strings.push(createString(-20, w * 0.35, 30, 45, 8));
      strings.push(createString(w * 0.3, w * 0.7, 20, 55, 9));
      strings.push(createString(w * 0.65, w + 20, 25, 40, 7));
      // Lower strings
      strings.push(createString(-10, w * 0.45, w > 600 ? 90 : 70, 35, 7));
      strings.push(createString(w * 0.55, w + 10, w > 600 ? 85 : 65, 38, 6));
    };
    buildStrings();

    let frame: number;
    const draw = (t: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const str of strings) {
        // Draw wire
        ctx.beginPath();
        ctx.moveTo(str.points[0].x, str.points[0].y);
        for (let i = 1; i < str.points.length; i++) {
          ctx.lineTo(str.points[i].x, str.points[i].y);
        }
        ctx.strokeStyle = "rgba(212, 175, 55, 0.15)";
        ctx.lineWidth = 0.8;
        ctx.stroke();

        // Draw bulbs
        for (const bulb of str.bulbs) {
          const idx = Math.floor(bulb.t * (str.points.length - 1));
          const pt = str.points[idx];
          const flicker = 0.5 + 0.5 * Math.sin(t * 0.002 + bulb.phase);
          const brightness = 0.4 + 0.6 * flicker;

          // Glow
          const grad = ctx.createRadialGradient(pt.x, pt.y + 4, 0, pt.x, pt.y + 4, 12);
          grad.addColorStop(0, `rgba(253, 230, 138, ${brightness * 0.6})`);
          grad.addColorStop(1, "transparent");
          ctx.fillStyle = grad;
          ctx.fillRect(pt.x - 12, pt.y - 8, 24, 24);

          // Bulb
          ctx.beginPath();
          ctx.arc(pt.x, pt.y + 4, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(253, 230, 138, ${brightness})`;
          ctx.fill();
        }
      }
      frame = requestAnimationFrame(draw);
    };
    frame = requestAnimationFrame(draw);

    const onResize = () => {
      resize();
      buildStrings();
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
};

export default FairyLights;
