import { motion } from "framer-motion";

interface CrescentMoonProps {
  className?: string;
  size?: number;
  rotateDeg?: number;
  face?: "left" | "right";
}

const CrescentMoon = ({
  className = "",
  size = 200,
  rotateDeg = -45,
  face = "left",
}: CrescentMoonProps) => {
  const id = `moon-${size}-${Math.random().toString(36).slice(2, 6)}`;
  const flipX = face === "right" ? -1 : 1;

  return (
    <motion.div
      className={`absolute ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
      transition={{ 
        opacity: { duration: 1.5 },
        scale: { duration: 1.5 },
        y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
      }}
    >
      <div
        className="relative"
        style={{
          width: size,
          height: size,
          transform: `rotate(${rotateDeg}deg) scaleX(${flipX})`,
          transformOrigin: "50% 50%",
        }}
      >
        <svg width={size} height={size} viewBox="0 0 300 300" fill="none">
          <defs>
            {/* Rich metallic gold gradient */}
            <linearGradient id={`${id}-gold`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F5D060" />
              <stop offset="20%" stopColor="#E8B830" />
              <stop offset="40%" stopColor="#FDE68A" />
              <stop offset="60%" stopColor="#D4A017" />
              <stop offset="80%" stopColor="#F5D060" />
              <stop offset="100%" stopColor="#B8860B" />
            </linearGradient>

            {/* Inner glow */}
            <radialGradient id={`${id}-innerGlow`} cx="45%" cy="40%">
              <stop offset="0%" stopColor="#FDE68A" stopOpacity="0.55" />
              <stop offset="50%" stopColor="#F5D060" stopOpacity="0.25" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>

            {/* Edge highlight */}
            <linearGradient id={`${id}-edge`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FEF3C7" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#FDE68A" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#D4A017" stopOpacity="0.8" />
            </linearGradient>

            {/* Ornate pattern */}
            <pattern id={`${id}-pattern`} width="24" height="24" patternUnits="userSpaceOnUse" patternTransform="rotate(10)">
              <path
                d="M12 0 L14 10 L24 12 L14 14 L12 24 L10 14 L0 12 L10 10 Z"
                fill="none"
                stroke="#B8860B"
                strokeWidth="0.5"
                opacity="0.6"
              />
              <path
                d="M12 4 L16 12 L12 20 L8 12 Z"
                fill="none"
                stroke="#D4A017"
                strokeWidth="0.3"
                opacity="0.4"
              />
              <circle cx="12" cy="12" r="1.4" fill="#D4A017" opacity="0.35" />
            </pattern>

            {/* Smooth crescent mask */}
            <mask id={`${id}-crescentMask`}>
              <rect width="300" height="300" fill="black" />
              <circle cx="150" cy="150" r="120" fill="white" />
              <circle cx="190" cy="135" r="112" fill="black" />
            </mask>
          </defs>

          {/* Crescent body with mask */}
          <g mask={`url(#${id}-crescentMask)`}>
            <circle cx="150" cy="150" r="122" fill={`url(#${id}-gold)`} />
            <circle cx="150" cy="150" r="122" fill={`url(#${id}-pattern)`} opacity="0.75" />
            <circle cx="150" cy="150" r="122" fill={`url(#${id}-innerGlow)`} />

            {/* Central eight-pointed star */}
            <path
              d="M170 120 L176 136 L194 136 L180 146 L186 162 L170 152 L154 162 L160 146 L146 136 L164 136 Z"
              fill="#FFF7D6"
              opacity="0.95"
            />
            <path
              d="M170 124 L174 136 L188 136 L178 143 L182 155 L170 148 L158 155 L162 143 L152 136 L166 136 Z"
              fill="#F5D060"
              opacity="0.95"
            />

            {/* Rim and inner accents */}
            <circle
              cx="150"
              cy="150"
              r="121"
              fill="none"
              stroke={`url(#${id}-edge)`}
              strokeWidth="1.6"
            />
            <path
              d="M150 26 C206 30 254 70 254 145 C254 220 206 264 150 274"
              fill="none"
              stroke="#FDE68A"
              strokeWidth="0.9"
              opacity="0.4"
            />
          </g>
        </svg>
      </div>
    </motion.div>
  );
};

export default CrescentMoon;
