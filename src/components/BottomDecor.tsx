import { motion } from "framer-motion";

const BottomDecor = () => {
  // A more professional, brushed gold gradient
  const realisticGold = (id) => (
    <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="#785213" /> 
      <stop offset="25%" stopColor="#D4AF37" /> {/* Authentic Gold */}
      <stop offset="50%" stopColor="#F9E076" /> {/* Shimmer highlight */}
      <stop offset="75%" stopColor="#D4AF37" /> {/* Authentic Gold */}
      <stop offset="100%" stopColor="#996515" /> {/* Deep shadow */}
    </linearGradient>
  );

  return (
    <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none h-[300px] overflow-hidden">
      
      {/* LEFT SIDE: Grand Dome & Tall Minaret */}
      <motion.div
        className="absolute bottom-[-20px] left-[-30px] md:left-0 scale-110 origin-bottom-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5,ease: "easeOut" }}
      >
       <svg width="500" height="320" viewBox="0 0 450 320" fill="none"
        className="drop-shadow-[0_-10px_30px_rgba(212,175,55,0.25)]">

        <defs>{realisticGold("gold-left")}</defs>

        {/* Large Dome */}
        <path d="M60 300 L60 200 C60 140 120 100 170 100 C220 100 280 140 280 200 L280 300"
        stroke="url(#gold-left)"
        strokeWidth="3"
        fill="none"/>
        
        {/* Dome Boundary Rings */}
        <path d="M59 210 C140 175 200 175 279 210"
        stroke="url(#gold-left)"
        strokeWidth="1.5"
        opacity="0.8"/>
        
        <path d="M79 192 C150 155 197 160 259 192"
        stroke="url(#gold-left)"
        strokeWidth="1"
        opacity="0.7"/>

        {/* Dome Finial */}
        <line x1="170" y1="100" x2="170" y2="70" stroke="url(#gold-left)" strokeWidth="2"/>
        <circle cx="170.5" cy="65" r="3" fill="url(#gold-left)"/>
          
        {/* Finial Rod */}
        <line x1="170" y1="100" x2="170.5" y2="68" 
        stroke="url(#gold-left)" 
        strokeWidth="4"/>

        {/* Finial Orb */}
        <circle cx="170.5" cy="58.5" r="3" 
        stroke="url(#gold-left)" 
        strokeWidth="2"
        fill="none"
        style={{filter:"drop-shadow(0 0 6px rgba(212,175,55,0.6))"}}/>

        {/* Crescent */}
        <path d="M170 54 
        a5 6 0 1 0 0 -12
        a5 4 0 1 1 0 12"
        stroke="url(#gold-left)"
        strokeWidth="2"
        fill="none"
        transform="rotate(30 172 47)"
        style={{filter:"drop-shadow(0 0 6px rgba(212,175,55,0.6))"}}/>
        
        {/* Star Ornament */}
        <path d="M170 160 L172 165 L178 165 L173 168 L175 174 L170 170 L165 174 L167 168 L162 165 L168 165 Z"
        stroke="url(#gold-left)"
        strokeWidth="1"
        fill="none"
        opacity="0.8"/>
         
        {/* Secondary Dome */}
        <path d="M10 300 L10 220 C10 180 40 160 70 160 C100 160 130 180 130 220 L130 300"
        stroke="url(#gold-left)"
        strokeWidth="2"
        fill="none"/>
        
        {/* Secondary Dome Boundary Rings */}
        <path d="M10 230 C25 220 45 205 67 205 C95 205 105 210 130 230"
        stroke="url(#gold-left)"
        strokeWidth="1.5"
        fill="none"
        opacity="0.8"/>

        {/* Secondary Finial Rod */}
        <line x1="70" y1="160" x2="71" y2="135"
        stroke="url(#gold-left)" 
        strokeWidth="2"/>

        {/* Finial Orb */}
        <circle cx="71" cy="132" r="2.5"
        stroke="url(#gold-left)" 
        strokeWidth="2"
        fill="none"
        style={{filter:"drop-shadow(0 0 6px rgba(212,175,55,0.6))"}}/>
        {/* Crescent */}
        <path d="M70 125
        a4 5 0 1 0 0 -10
        a3 3 0 1 1 0 10"
        stroke="url(#gold-left)"
        strokeWidth="1.5"
        fill="none"
        transform="rotate(30 65 120)"
        style={{filter:"drop-shadow(0 0 6px rgba(212,175,55,0.6))"}}/>

        {/* Tall Minaret */}
        <g transform="translate(320,40)">
        <rect x="7" y="80" width="10" height="240"
        stroke="url(#gold-left)" strokeWidth="2" fill="none"/>
        
        <rect x="2" y="100" width="20" height="6"
        stroke="url(#gold-left)" strokeWidth="2" fill="none"/>

        <rect x="8" y="40" width="8" height="60"
        stroke="url(#gold-left)" strokeWidth="2" fill="none"/>

        <path d="M2 40 L23 40 L12 17 Z"
        stroke="url(#gold-left)" strokeWidth="2" fill="none"/>

        <circle cx="12" cy="13" r="3" fill="url(#gold-left)"/>
        </g>
      </svg>
      </motion.div>

      {/* RIGHT SIDE: Multiple Layered Mosque Spires */}
      <motion.div
        className="absolute bottom-[-20px] right-[-30px] md:right-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
      >
        <svg width="450" height="320" viewBox="0 0 450 320" fill="none"
        className="drop-shadow-[0_-10px_30px_rgba(212,175,55,0.25)]">
        <defs>{realisticGold("gold-right")}</defs>

        {/* Main Grand Dome */}
        <path d="M120 320 L120 200 C120 130 190 90 240 90 C290 90 360 130 360 200 L360 320"
        stroke="url(#gold-right)"
        strokeWidth="3"
        fill="none"/>

        {/* Dome boundary rings */}
        <path d="M120 210 C180 170 300 170 360 210"
        stroke="url(#gold-right)"
        strokeWidth="1.5"
        fill="none"/>

        <path d="M140 190 C200 150 280 150 340 190"
        stroke="url(#gold-right)"
        strokeWidth="1"
        fill="none"
        opacity="0.7"/>

        {/* Dome Finial */}
        <line x1="240" y1="90" x2="240" y2="60"
        stroke="url(#gold-right)" strokeWidth="2"/>
        <circle cx="240.5" cy="55" r="3" fill="url(#gold-right)"/>
        
        {/* Finial Rod */}
        <line x1="240" y1="90" x2="240.5" y2="58" 
        stroke="url(#gold-right)" 
        strokeWidth="4"/>
        
        {/* Orb */}
        <circle cx="240.5" cy="50" r="3" 
        stroke="url(#gold-right)" 
        strokeWidth="2"
        fill="none"
        style={{filter:"drop-shadow(0 0 6px rgba(212,175,55,0.6))"}}/>

        {/* Crescent */}
        <path d="M239 45
        a5 6 0 1 0 0 -12
        a5 4 0 1 1 1 12"
        stroke="url(#gold-right)"
        strokeWidth="2"
        fill="none"
        transform="rotate(30 240 39)"
        style={{filter:"drop-shadow(0 0 6px rgba(212,175,55,0.6))"}}/>

        {/* Star Ornament */}
        <path d="M239 160 L241 165 L247 165 L242 168 L244 174 L239 170 L234 174 L236 168 L231 165 L237 165 Z"
        stroke="url(#gold-right)"
        strokeWidth="1"
        fill="none"
        opacity="0.8"/>
         
        {/* Right Small Dome */}
        <path d="M310 320 L310 230
        C310 190 340 170 370 170
        C400 170 430 190 430 230
        L430 320"
        stroke="url(#gold-right)"
        strokeWidth="2"
        fill="none"/>

        {/* Right Small Dome Finial Rod */}
        <line x1="370" y1="170" x2="371" y2="145"
        stroke="url(#gold-right)"
        strokeWidth="2"/>
        {/* Right Finial Orb */}
        <circle cx="371" cy="141" r="2.5"
        stroke="url(#gold-right)"
        strokeWidth="2"
        fill="none"
        style={{filter:"drop-shadow(0 0 6px rgba(212,175,55,0.6))"}}/>
        {/* Right Crescent */}
        <path d="M370 135
        a4 5 0 1 0 0 -10
        a3 3 0 1 1 0 10"
        stroke="url(#gold-right)"
        strokeWidth="1.5"
        fill="none"
        transform="rotate(30 367 130)"
        style={{filter:"drop-shadow(0 0 6px rgba(212,175,55,0.6))"}}/>

        {/* Left Small Dome */}
        <path d="M60 320 L60 230
        C60 190 90 170 120 170
        C150 170 180 190 180 230
        L180 320"
        stroke="url(#gold-right)"
        strokeWidth="2"
        fill="none"/>
        
        {/* Left Small Dome Finial Rod */}
        <line x1="120" y1="170" x2="121" y2="145"
        stroke="url(#gold-right)"
        strokeWidth="2"/>

        {/* Left Finial Orb */}
        <circle cx="121" cy="142" r="2.5"
        stroke="url(#gold-right)"
        strokeWidth="2"
        fill="none"
        style={{filter:"drop-shadow(0 0 6px rgba(212,175,55,0.6))"}}/>

        {/* Left Crescent */}
        <path d="M120 135
        a4 5 0 1 0 0 -10
        a3 3 0 1 1 0 10"
        stroke="url(#gold-right)"
        strokeWidth="1.5"
        fill="none"
        transform="rotate(30 115 133)"
        style={{filter:"drop-shadow(0 0 6px rgba(212,175,55,0.6))"}}/>
        
        {/* Tallest Minaret */}
        <g transform="translate(40,20)">
        <rect x="10" y="100" width="10" height="220"
        stroke="url(#gold-right)" strokeWidth="2" fill="none"/>

        <rect x="3" y="120" width="25" height="6"
        stroke="url(#gold-right)" strokeWidth="2" fill="none"/>

        <rect x="11" y="60" width="8" height="60"
        stroke="url(#gold-right)" strokeWidth="2" fill="none"/>

        <path d="M5 60 L25 60 L15 37 Z"
        stroke="url(#gold-right)" strokeWidth="2" fill="none"/>

        <circle cx="15" cy="33" r="3" fill="url(#gold-right)"/>
        
        <path d="M08 220
        a4 5 0 1 0 0 -10
        a3 3 0 1 1 0 10"
        stroke="url(#gold-right)"
        strokeWidth="1.5"
        fill="none"
        transform="rotate(30 367 130)"
        style={{filter:"drop-shadow(0 0 6px rgba(212,175,55,0.6))"}}/>

        </g>
        

        {/* Second Minaret */}
        <g transform="translate(380,40)">
        <rect x="6" y="120" width="6" height="200"
        stroke="url(#gold-right)" strokeWidth="2" fill="none"/>

        <path d="M0 120 L18 120 L9 100 Z"
        stroke="url(#gold-right)" strokeWidth="2" fill="none"/>

        <circle cx="9" cy="98" r="2" fill="url(#gold-right)"/>
        
        <path d="M02 155
        a4 5 0 1 0 0 -10
        a3 3 0 1 1 0 10"
        stroke="url(#gold-right)"
        strokeWidth="1.5"
        fill="none"
        transform="rotate(30 115 133)"
        style={{filter:"drop-shadow(0 0 6px rgba(212,175,55,0.6))"}}/>
        
        </g>
       </svg>
      </motion.div>

      {/* Atmospheric Soft Light (Minimalist Bokeh) */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-yellow-900/20 to-transparent" />
      
      {/* Subtle floating particles (Realistic dust) */}
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-yellow-200/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: `${Math.random() * 100}px`,
            }}
            animate={{ 
              y: [0, -40, 0],
              opacity: [0, 0.5, 0] 
            }}
            transition={{ 
              duration: 4 + Math.random() * 4, 
              repeat: Infinity,
              delay: Math.random() * 5 
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default BottomDecor;