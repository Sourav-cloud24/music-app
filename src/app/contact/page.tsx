"use client";

import { CardContainer, CardItem } from "@/components/ui/3d-card";
import { Spotlight } from "@/components/ui/spotlight-new";

const page = () => {
  return (
    <div className="min-h-screen relative w-full overflow-hidden bg-slate-900 flex items-center justify-center">
      {/* Background overlay */}
      <Spotlight />
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      {/* Contact Card */}
      <CardContainer className="relative z-30">
        <CardItem
          translateZ={50}
          className="w-[90vw] max-w-md rounded-2xl bg-slate-800/80 backdrop-blur-xl p-6 shadow-2xl"
        >
          <h1 className="text-3xl font-bold text-white text-center">
            Contact Us
          </h1>

          <p className="text-sm text-neutral-300 text-center mt-2">
            Have a question or want to work together? Fill out the form below 👇
          </p>

          <form className="mt-6 space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-lg bg-slate-900 border border-slate-700 px-4 py-2 text-white outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-lg bg-slate-900 border border-slate-700 px-4 py-2 text-white outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full rounded-lg bg-slate-900 border border-slate-700 px-4 py-2 text-white outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <button
              type="submit"
              className="w-full rounded-lg bg-indigo-600 hover:bg-indigo-700 transition text-white py-2 font-semibold"
            >
              Send Message 🚀
            </button>
          </form>
        </CardItem>
      </CardContainer>
    </div>
  );
};

export default page;
