import Link from "next/link";
import { Spotlight } from "./ui/spotlight-new";
import { Button } from "./ui/moving-border";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6  bg-black/[0.96] text-white relative overflow-hidden">
      <Spotlight />
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Master the art of music
      </h1>

      <p className="max-w-2xl text-gray-300 text-base md:text-lg mb-8 leading-relaxed">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis ea
        labore a rem debitis rerum accusamus dignissimos, nesciunt dolore vitae.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, ipsa.
      </p>

      <Button borderRadius="1.75rem" className="bg-black">
        <Link
          href="/courses"
          className="inline-block bg-black text-white px-6 py-3 rounded-lg font-medium transition"
        >
          Explore courses
        </Link>
      </Button>
    </section>
  );
};

export default HeroSection;
