import { motion } from "framer-motion";

interface LanternProps {
  chainLength: number;
  size: number;
  delay: number;
  x: number;
}

const Lantern = ({ chainLength, size, delay, x }: LanternProps) => {
  const id = `lantern-${x}-${size}`;
  return (
    <motion.div
      className="flex flex-col items-center"
      style={{ marginLeft: x }}
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay }}
    >
      {/* Chain */}
      <div
        className="w-px"
        style={{
          height: chainLength,
          background: "linear-gradient(to bottom, rgba(212,175,55,0.1), rgba(212,175,55,0.5))",
        }}
      />
      {/* Lantern SVG */}
      <div className="relative">
        <svg width={size} height={size * 1.7} viewBox="0 0 60 100" fill="none">
          <defs>
            <linearGradient id={`${id}-frame`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FDF5B8" />
              <stop offset="35%" stopColor="#F5D060" />
              <stop offset="70%" stopColor="#D4A017" />
              <stop offset="100%" stopColor="#B8860B" />
            </linearGradient>
            <radialGradient id={`${id}-inner`} cx="50%" cy="45%">
              <stop offset="0%" stopColor="#FFF9D7" stopOpacity="0.9" />
              <stop offset="55%" stopColor="#FDE68A" stopOpacity="0.45" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>
          {/* Finial top */}
          <path d="M28 0 L32 0 L33 4 L27 4 Z" fill="#D4A017" />
          <circle cx="30" cy="6" r="2" fill="#FDF5B8" />
          <ellipse cx="30" cy="10" rx="14" ry="3" fill="none" stroke="#D4A017" strokeWidth="1.4" />

          {/* Dome cap */}
          <path
            d="M18 14 C18 8 23 4 30 4 C37 4 42 8 42 14 L42 20 L18 20 Z"
            fill={`url(#${id}-frame)`}
            stroke="#B8860B"
            strokeWidth="0.7"
          />

          {/* Main body frame with pointed arch windows */}
          <path
            d="M16 20 C14 30 12 44 12 56 C12 72 18 84 30 88 C42 84 48 72 48 56 C48 44 46 30 44 20 Z"
            fill="#1B1306"
            stroke="#B8860B"
            strokeWidth="0.9"
          />

          {/* Inner glowing chamber */}
          <path
            d="M20 22 C19 30 17 40 17 52 C17 65 22 76 30 80 C38 76 43 65 43 52 C43 40 41 30 40 22 Z"
            fill={`url(#${id}-inner)`}
          />

          {/* Twin pointed-arch cutouts */}
          <path
            d="M22 30 C22 26 25 23 30 23 C35 23 38 26 38 30 L38 46 L22 46 Z"
            fill="rgba(12,8,2,0.55)"
          />
          <path
            d="M24 32 C24 29 26 27 30 27 C34 27 36 29 36 32 L36 44 L24 44 Z"
            fill="rgba(253,230,138,0.55)"
          />

          {/* Decorative bands */}
          <line x1="18" y1="50" x2="42" y2="50" stroke="#B8860B" strokeWidth="0.8" />
          <line x1="16" y1="62" x2="44" y2="62" stroke="#B8860B" strokeWidth="0.7" />

          {/* Bottom finial */}
          <path d="M24 82 L30 94 L36 82" stroke="#D4A017" strokeWidth="1.1" fill="none" />
          <line x1="30" y1="94" x2="30" y2="100" stroke="#D4A017" strokeWidth="0.85" />
        </svg>
        {/* Bloom glow */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle, rgba(253,230,138,0.5) 0%, rgba(245,208,96,0.15) 50%, transparent 75%)",
            filter: "blur(15px)",
          }}
          animate={{ opacity: [0.4, 0.75, 0.4] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: delay + 0.3 }}
        />
      </div>
    </motion.div>
  );
};

interface HangingLanternsProps {
  className?: string;
}

const HangingLanterns = ({ className = "" }: HangingLanternsProps) => (
  <div className={`absolute flex items-start ${className}`}>
    <Lantern chainLength={70} size={76} delay={0} x={0} />
    <Lantern chainLength={110} size={88} delay={0.5} x={-14} />
    <Lantern chainLength={45} size={64} delay={1} x={-10} />
  </div>
);

export default HangingLanterns;
