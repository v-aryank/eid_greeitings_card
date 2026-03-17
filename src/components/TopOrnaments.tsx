import { motion } from "framer-motion";

const strings = [
  { left: "10%", delay: 0 },
  { left: "26%", delay: 0.4 },
  { left: "42%", delay: 0.8 },
  { left: "62%", delay: 1.0 },
  { left: "80%", delay: 1.3 },
];

const TopOrnaments = () => {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 z-20">
      <svg
        className="w-full"
        viewBox="0 0 100 40"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* subtle top border line */}
        <path
          d="M0 4 C20 8 40 2 60 6 C80 10 90 6 100 8"
          fill="none"
          stroke="rgba(245, 208, 96, 0.35)"
          strokeWidth="0.3"
        />
      </svg>

      {strings.map((s, idx) => (
        <motion.div
          key={idx}
          className="absolute flex flex-col items-center"
          style={{ left: s.left, top: 0 }}
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 4 + idx * 0.2, repeat: Infinity, ease: "easeInOut", delay: s.delay }}
        >
          {/* string */}
          <div
            className="w-px"
            style={{
              height: "3.5rem",
              background:
                "linear-gradient(to bottom, rgba(245,208,96,0.0), rgba(245,208,96,0.7))",
            }}
          />
          {/* ornament */}
          <div className="relative">
            <div
              className="rounded-full"
              style={{
                width: 22,
                height: 22,
                background:
                  "radial-gradient(circle at 30% 20%, #FFF9D7 0%, #FDE68A 35%, #D4A017 80%, #1B1306 100%)",
                boxShadow:
                  "0 0 14px rgba(253,230,138,0.65), 0 0 32px rgba(245,208,96,0.35)",
              }}
            />
            {/* small star above ornament */}
            <div
              className="absolute -top-3 left-1/2"
              style={{ transform: "translateX(-50%)" }}
            >
              <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                <path
                  d="M10 1 L11.6 6.4 L17 8 L11.6 9.6 L10 15 L8.4 9.6 L3 8 L8.4 6.4 Z"
                  fill="#FFF9D7"
                />
              </svg>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default TopOrnaments;

