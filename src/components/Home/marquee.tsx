import React from "react";
import Marquee from "@/components/ui/marquee";
import { Cross } from "lucide-react";

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
            <span className="text-2xl font-bold whitespace-nowrap font-unbounded">
              {service}
            </span>
            <span className="text-2xl mx-2">
              <Cross className="text-primary fill-primary" />
            </span>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeSection;
