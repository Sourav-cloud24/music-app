import FeatureSection from "@/components/FeatureSection";
import HeroSection from "@/components/HeroSection";
import TestimonialCards from "@/components/TestimonialCards";
import { Spotlight } from "@/components/ui/spotlight-new";
import WhyChooseUs from "@/components/WhyChooseUs";
import UpcomingWebinars from "@/components/UpcomingWebinars";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <HeroSection/>
      <FeatureSection/>
      <WhyChooseUs/>
      <TestimonialCards/>
      <UpcomingWebinars/>
    </div>
  );
}
