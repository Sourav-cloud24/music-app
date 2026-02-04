import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";
import webniers from "@/data/upcoming_webniers.json";
import Link from "next/link";

const UpcomingWebinars = () => {
  return (
    <div className="py-10 bg-gray-900">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center gap-3">
          <h2 className="text-teal-600 font-semibold tracking-wide">
            FEATURED WEBINARS
          </h2>
          <p className="text-4xl font-semibold text-white">
            Enhance Your Musical Journey
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <HoverEffect items={webniers.webinars} />
      </div>
      <div className="mt-20 text-center">
        <Link
          className="px-4 py-3.5 text-neutral-800 hover:bg-gray-100 transition bg-white"
          href="/"
        >
          View All Webinars
        </Link>
      </div>
    </div>
  );
};

export default UpcomingWebinars;
