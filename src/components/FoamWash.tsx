const bubbles = [
  { x: "6%", y: "18%", size: 34, delay: "0s" },
  { x: "16%", y: "62%", size: 22, delay: "0.4s" },
  { x: "27%", y: "30%", size: 46, delay: "0.9s" },
  { x: "9%", y: "80%", size: 18, delay: "1.3s" },
  { x: "38%", y: "12%", size: 26, delay: "0.2s" },
  { x: "46%", y: "70%", size: 40, delay: "1.6s" },
  { x: "58%", y: "40%", size: 20, delay: "0.7s" },
  { x: "64%", y: "16%", size: 32, delay: "1.9s" },
  { x: "73%", y: "58%", size: 48, delay: "0.5s" },
  { x: "82%", y: "26%", size: 24, delay: "1.1s" },
  { x: "90%", y: "68%", size: 30, delay: "1.7s" },
  { x: "94%", y: "40%", size: 18, delay: "0.3s" },
  { x: "22%", y: "48%", size: 16, delay: "1.4s" },
  { x: "54%", y: "84%", size: 22, delay: "0.9s" },
];

export function FoamWash() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {bubbles.map((b, i) => (
        <span
          key={i}
          className="animate-foam absolute rounded-full"
          style={{
            left: b.x,
            top: b.y,
            width: b.size,
            height: b.size,
            animationDelay: b.delay,
            background:
              "radial-gradient(circle at 32% 28%, rgba(255,255,255,0.95), rgba(220,232,255,0.55) 45%, rgba(77,118,255,0.12) 75%, transparent 80%)",
            boxShadow: "0 0 12px rgba(255,255,255,0.15)",
          }}
        />
      ))}

      <div className="animate-water-sweep absolute inset-y-0 left-0 w-2/3">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(100deg, transparent 0%, rgba(180,205,255,0.04) 30%, rgba(255,255,255,0.3) 70%, rgba(255,255,255,0.55) 92%, rgba(255,255,255,0.55) 100%)",
            filter: "blur(2px)",
          }}
        />
        <div
          className="absolute inset-y-0 right-0 w-1"
          style={{
            background: "linear-gradient(180deg, transparent, rgba(255,255,255,0.95), transparent)",
            boxShadow: "0 0 30px 8px rgba(255,255,255,0.55)",
          }}
        />
      </div>
    </div>
  );
}
