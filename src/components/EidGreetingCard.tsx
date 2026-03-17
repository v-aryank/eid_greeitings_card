import { motion } from "framer-motion";
import { useState } from "react";
import DecorativeBorder from "./DecorativeBorder";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: "easeOut" as const },
});

const EidGreetingCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <DecorativeBorder>
      <motion.div className="text-center py-8 sm:py-16" {...fadeUp(1.8)}>
        {/* Decorative top */}
        <motion.p {...fadeUp(2)} className="text-accent text-sm tracking-[0.3em] uppercase font-body mb-6 opacity-70">
          ✦ ✦ ✦
        </motion.p>

        {/* Main Title with hover-up effect */}
        <motion.h1
          className="font-display text-5xl sm:text-6xl lg:text-8xl text-gold-gradient leading-tight cursor-default select-none"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          animate={{
            y: isHovered ? -12 : 0,
            filter: isHovered
              ? "drop-shadow(0 0 24px rgba(253,230,138,0.7)) drop-shadow(0 0 60px rgba(245,208,96,0.4))"
              : "drop-shadow(0 0 12px rgba(253,230,138,0.4)) drop-shadow(0 0 40px rgba(245,208,96,0.2))",
          }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          EID MUBARAK
        </motion.h1>

        <motion.div {...fadeUp(2.2)} className="mt-6 mb-8">
          <p className="text-accent text-base sm:text-lg tracking-[0.25em] uppercase font-body font-light">
            "Stay Blessed"
          </p>
        </motion.div>

        {/* Decorative dots */}
        <motion.div {...fadeUp(2.4)} className="flex items-center justify-center gap-3 mb-8">
          {[0, 1, 2, 3, 4].map((i) => (
            <span key={i} className="w-1 h-1 rounded-full bg-primary animate-glow-pulse" style={{ animationDelay: `${i * 0.25}s` }} />
          ))}
        </motion.div>

        {/* Greeting message */}
        <motion.p {...fadeUp(2.6)} className="text-foreground/70 font-body text-sm sm:text-base leading-relaxed max-w-md mx-auto italic">
          May this blessed occasion bring peace, happiness, and prosperity to you...
        </motion.p>

        <motion.p {...fadeUp(2.8)} className="mt-8 text-muted-foreground text-xs font-body tracking-widest uppercase">
          Wishing you joy & blessings 🌙
        </motion.p>
      </motion.div>
    </DecorativeBorder>
  );
};

export default EidGreetingCard;
