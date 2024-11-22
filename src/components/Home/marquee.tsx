import React from "react";
import Marquee from "@/components/ui/marquee";

// Defining the services array with a type
const services: string[] = [
  "App Design",
  "Website design",
  "App Development",
  "No-code Development",
  "Digital Marketing",
  "Graphics Design",
  "Branding Promotion",
  "Software Development",
];

const MarqueeSection: React.FC = () => {
  return (
    <div className="relative flex flex-col w-full overflow-hidden">
      <Marquee
        pauseOnHover={true}
        className="[--duration:70s] text-white font-medium bg-black h-[100px]"
      >
        {services.map((service, index) => (
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
