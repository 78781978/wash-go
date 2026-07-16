const foamBubble = (radial: string) => ({
  background: `radial-gradient(circle at 32% 28%, rgba(255,255,255,0.95), rgba(220,232,255,0.6) 45%, rgba(77,118,255,${radial}) 75%, transparent 82%)`,
  boxShadow: "0 0 10px rgba(255,255,255,0.18), inset -3px -3px 6px rgba(77,118,255,0.15)",
});

const clusterShape = [
  { dx: 0, dy: 0, s: 30 },
  { dx: -19, dy: 8, s: 20 },
  { dx: 17, dy: 10, s: 22 },
  { dx: -7, dy: -16, s: 18 },
  { dx: 12, dy: -14, s: 16 },
  { dx: 25, dy: -3, s: 13 },
  { dx: -25, dy: -5, s: 13 },
  { dx: 2, dy: 15, s: 15 },
];

const clusters = [
  { x: "8%", y: "20%", scale: 1, delay: "0s" },
  { x: "24%", y: "62%", scale: 0.8, delay: "0.6s" },
  { x: "40%", y: "14%", scale: 0.7, delay: "1.1s" },
  { x: "18%", y: "42%", scale: 0.55, delay: "1.6s" },
  { x: "58%", y: "58%", scale: 0.9, delay: "0.3s" },
  { x: "70%", y: "24%", scale: 0.75, delay: "1.4s" },
  { x: "85%", y: "50%", scale: 1, delay: "0.8s" },
  { x: "92%", y: "18%", scale: 0.6, delay: "1.9s" },
  { x: "50%", y: "80%", scale: 0.65, delay: "1.2s" },
];

const drops = [
  { x: "5%", delay: "0s", duration: "1.8s", size: 14 },
  { x: "13%", delay: "0.6s", duration: "2.1s", size: 10 },
  { x: "22%", delay: "1.2s", duration: "1.6s", size: 16 },
  { x: "31%", delay: "0.3s", duration: "2s", size: 11 },
  { x: "40%", delay: "1.5s", duration: "1.7s", size: 13 },
  { x: "49%", delay: "0.8s", duration: "2.2s", size: 10 },
  { x: "58%", delay: "0.1s", duration: "1.9s", size: 15 },
  { x: "67%", delay: "1.7s", duration: "1.6s", size: 12 },
  { x: "76%", delay: "0.4s", duration: "2.1s", size: 11 },
  { x: "84%", delay: "1.1s", duration: "1.8s", size: 14 },
  { x: "91%", delay: "0.9s", duration: "2s", size: 10 },
  { x: "97%", delay: "1.4s", duration: "1.7s", size: 13 },
];

export function FoamWash() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {clusters.map((c, ci) => (
        <div
          key={ci}
          className="animate-foam absolute"
          style={{ left: c.x, top: c.y, animationDelay: c.delay }}
        >
          {clusterShape.map((b, bi) => (
            <span
              key={bi}
              className="absolute rounded-full"
              style={{
                left: b.dx * c.scale,
                top: b.dy * c.scale,
                width: b.s * c.scale,
                height: b.s * c.scale,
                ...foamBubble(bi % 2 === 0 ? "0.1" : "0.16"),
              }}
            />
          ))}
        </div>
      ))}

      {drops.map((d, i) => (
        <span
          key={i}
          className="animate-rain absolute top-0 rounded-full"
          style={{
            left: d.x,
            width: d.size * 0.32,
            height: d.size,
            animationDelay: d.delay,
            animationDuration: d.duration,
            background: "linear-gradient(180deg, rgba(255,255,255,0.9), rgba(180,205,255,0.35) 60%, transparent)",
            boxShadow: "0 0 6px rgba(180,205,255,0.4)",
          }}
        />
      ))}
    </div>
  );
}
