interface GlowOrb {
  top: string;
  left: string;
  size: number;
  opacity: number;
}

const orbs: GlowOrb[] = [
  { top: "3%", left: "70%", size: 500, opacity: 0.07 },
  { top: "22%", left: "-8%", size: 420, opacity: 0.05 },
  { top: "48%", left: "80%", size: 460, opacity: 0.06 },
  { top: "68%", left: "5%", size: 380, opacity: 0.05 },
  { top: "88%", left: "55%", size: 440, opacity: 0.06 },
];

export function BackgroundGlow() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      {orbs.map((orb, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: orb.top,
            left: orb.left,
            width: orb.size,
            height: orb.size,
            borderRadius: "50%",
            backgroundColor: "var(--color-accent)",
            opacity: orb.opacity,
            filter: "blur(120px)",
          }}
        />
      ))}
    </div>
  );
}
