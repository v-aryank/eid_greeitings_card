import { motion } from "framer-motion";

interface FloatingLanternProps {
  className?: string;
  delay?: number;
  size?: number;
}

const FloatingLantern = ({ className = "", delay = 0, size = 48 }: FloatingLanternProps) => (
  <motion.div
    className={`absolute ${className}`}
    animate={{ y: [0, -14, 0] }}
    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay }}
  >
    <div className="relative flex flex-col items-center">
      {/* Chain */}
      <div className="w-px h-6 bg-gradient-to-b from-transparent to-primary" />
      {/* Lantern body */}
      <div className="relative">
        <svg width={size} height={size * 1.4} viewBox="0 0 48 67" fill="none">
          {/* Top cap */}
          <rect x="18" y="0" width="12" height="4" rx="1" fill="hsl(43, 72%, 52%)" />
          {/* Top ring */}
          <path d="M14 4 C14 4 24 8 34 4" stroke="hsl(43, 72%, 52%)" strokeWidth="1.5" fill="none" />
          {/* Body */}
          <path
            d="M12 10 C12 10 8 20 8 33 C8 46 14 56 24 56 C34 56 40 46 40 33 C40 20 36 10 36 10 Z"
            fill="hsl(43, 72%, 20%)"
            stroke="hsl(43, 72%, 52%)"
            strokeWidth="1"
          />
          {/* Inner glow */}
          <path
            d="M16 14 C16 14 13 24 13 33 C13 42 18 50 24 50 C30 50 35 42 35 33 C35 24 32 14 32 14 Z"
            fill="hsl(45, 93%, 76%)"
            opacity="0.25"
          />
          {/* Cross bars */}
          <line x1="12" y1="22" x2="36" y2="22" stroke="hsl(43, 72%, 52%)" strokeWidth="0.7" />
          <line x1="10" y1="33" x2="38" y2="33" stroke="hsl(43, 72%, 52%)" strokeWidth="0.7" />
          <line x1="12" y1="44" x2="36" y2="44" stroke="hsl(43, 72%, 52%)" strokeWidth="0.7" />
          {/* Bottom */}
          <path d="M18 56 L24 63 L30 56" stroke="hsl(43, 72%, 52%)" strokeWidth="1" fill="none" />
        </svg>
        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gold-glow"
          style={{ filter: "blur(20px)", opacity: 0.3 }}
          animate={{ opacity: [0.2, 0.45, 0.2] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: delay + 0.5 }}
        />
      </div>
    </div>
  </motion.div>
);

export default FloatingLantern;
