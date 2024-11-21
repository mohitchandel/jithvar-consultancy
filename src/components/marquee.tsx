import React from "react";
import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

const services = [
  "App Design",
  "Website design",
  "App Development",
  "No-code Development",
  "Digital Marketing",
  "Graphics Design",
  "Branding Promotion",
  "Software Development",
];

const MarqueeSection = () => {
  return (
    <div className="relative flex flex-col w-full overflow-hidden  py-2">
      <Marquee
        pauseOnHover
        className="[--duration:20s] text-white font-medium bg-[#DE2329]"
      >
        {services.map((service, index) => (
          <div key={index} className="flex items-center gap-4">
            <span className="text-lg whitespace-nowrap">{service}</span>
            <span className="text-2xl mx-2">♦</span>
          </div>
        ))}
      </Marquee>
      <Marquee
        reverse
        pauseOnHover
        className="[--duration:20s] font-medium bg-black text-[#DE2329]"
      >
        {services
          .slice()
          .reverse()
          .map((service, index) => (
            <div key={index} className="flex items-center gap-4">
              <span className="text-lg whitespace-nowrap">{service}</span>
              <span className="text-2xl mx-2">♦</span>
            </div>
          ))}
      </Marquee>
    </div>
  );
};

export default MarqueeSection;
