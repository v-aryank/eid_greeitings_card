import { motion } from "framer-motion";

const DecorativeBorder = ({ children }: { children: React.ReactNode }) => {
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 2.5, ease: "easeInOut" as const },
    },
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* SVG decorative border */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 600 800"
        preserveAspectRatio="none"
        fill="none"
      >
        {/* Outer border */}
        <motion.rect
          x="4" y="4" width="592" height="792" rx="12"
          stroke="hsl(43, 72%, 52%)"
          strokeWidth="1.5"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
        />
        {/* Inner border */}
        <motion.rect
          x="14" y="14" width="572" height="772" rx="8"
          stroke="hsl(43, 72%, 52%)"
          strokeWidth="0.5"
          opacity="0.5"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
        />
        {/* Corner ornaments */}
        {[
          "M4 40 L4 4 L40 4",
          "M560 4 L596 4 L596 40",
          "M596 760 L596 796 L560 796",
          "M40 796 L4 796 L4 760",
        ].map((d, i) => (
          <motion.path
            key={i}
            d={d}
            stroke="hsl(45, 93%, 76%)"
            strokeWidth="2.5"
            strokeLinecap="round"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1 + i * 0.2 }}
          />
        ))}
        {/* Diamond ornaments at midpoints */}
        {[
          { cx: 300, cy: 4 },
          { cx: 300, cy: 796 },
          { cx: 4, cy: 400 },
          { cx: 596, cy: 400 },
        ].map((pos, i) => (
          <motion.path
            key={`d-${i}`}
            d={`M${pos.cx} ${pos.cy - 6} L${pos.cx + 6} ${pos.cy} L${pos.cx} ${pos.cy + 6} L${pos.cx - 6} ${pos.cy} Z`}
            fill="hsl(43, 72%, 52%)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 2 + i * 0.15, duration: 0.4 }}
          />
        ))}
      </svg>

      {/* Content */}
      <div className="relative z-10 p-8 sm:p-12">
        {children}
      </div>
    </div>
  );
};

export default DecorativeBorder;
