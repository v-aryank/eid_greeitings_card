import { useEffect, useState } from "react";
import StarryBackground from "@/components/StarryBackground";
import CrescentMoon from "@/components/CrescentMoon";
import HangingLanterns from "@/components/HangingLanterns";
import FairyLights from "@/components/FairyLights";
import TopOrnaments from "@/components/TopOrnaments";
import EidGreetingCard from "@/components/EidGreetingCard";
import BottomDecor from "@/components/BottomDecor";

const Index = () => {
  const [hasPlayed, setHasPlayed] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = document.getElementById('bg-music') as HTMLAudioElement;
    if (!audio) return;

    const playAudio = async () => {
      if (hasPlayed) return;
      try {
        audio.volume = 0.2;
        await audio.play();
        setHasPlayed(true);
        setIsPlaying(true);
        // Fade in
        let vol = 0.2;
        const fadeIn = setInterval(() => {
          if (vol < 0.5) {
            vol += 0.02;
            audio.volume = vol;
          } else {
            clearInterval(fadeIn);
          }
        }, 100);
      } catch (error) {
        console.warn('Autoplay failed:', error);
      }
    };

    const handleInteraction = () => {
      playAudio();
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('scroll', handleInteraction);
    };

    document.addEventListener('click', handleInteraction);
    document.addEventListener('scroll', handleInteraction);

    return () => {
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('scroll', handleInteraction);
    };
  }, [hasPlayed]);

  const toggleMusic = async () => {
    const audio = document.getElementById('bg-music') as HTMLAudioElement;
    if (!audio) return;

    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        await audio.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.warn('Toggle failed:', error);
    }
  };

  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      {/* Audio element */}
      <audio id="bg-music" loop preload="auto">
        <source src="/music/eid.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Layer 1: Stars (background layer) */}
      <StarryBackground />

      {/* Layer 1.5: Fairy lights */}
      <FairyLights />

      {/* Layer 1.75: Top hanging ornaments */}
      <TopOrnaments />

      {/* Layer 2: Moon top-left, large and prominent */}
      <CrescentMoon className="top-0 left-0 sm:top-4 sm:left-4 z-20" size={230} face="left" rotateDeg={5} />

      {/* Layer 2: Hanging lantern cluster top-right */}
      <HangingLanterns className="top-0 right-4 sm:right-12 z-20" />

      {/* Layer 2.5: Bottom anchoring elements */}
      <BottomDecor />

      {/* Layer 3: Card */}
      <div className="relative z-30 flex items-center justify-center min-h-screen px-4">
        <EidGreetingCard />
      </div>

      {/* Music toggle button */}
      <button
        onClick={toggleMusic}
        className="fixed bottom-4 right-4 z-50 bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-colors"
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
      >
        {isPlaying ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z"/>
          </svg>
        )}
      </button>
    </div>
  );
};

export default Index;
