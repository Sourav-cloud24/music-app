import FeatureSection from "@/components/FeatureSection";
import HeroSection from "@/components/HeroSection";
import { Spotlight } from "@/components/ui/spotlight-new";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <HeroSection/>
      <FeatureSection/>
      <WhyChooseUs/>
    </div>
  );
}
