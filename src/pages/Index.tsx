import StarryBackground from "@/components/StarryBackground";
import CrescentMoon from "@/components/CrescentMoon";
import HangingLanterns from "@/components/HangingLanterns";
import FairyLights from "@/components/FairyLights";
import TopOrnaments from "@/components/TopOrnaments";
import EidGreetingCard from "@/components/EidGreetingCard";
import BottomDecor from "@/components/BottomDecor";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
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
    </div>
  );
};

export default Index;
