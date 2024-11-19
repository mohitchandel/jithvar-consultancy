"use client";

export default function Marquee() {
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

  return (
    <div className="bg-black overflow-hidden py-2">
      {/* First row - Left to Right */}
      <div className="relative flex whitespace-nowrap">
        <div className="animate-marquee flex items-center">
          {services.map((service, index) => (
            <span key={index} className="flex items-center">
              <span className="text-[#E84E36] px-4">{service}</span>
              <span className="text-[#E84E36]">◆</span>
            </span>
          ))}
        </div>
        <div className="absolute top-0 flex items-center animate-marquee2">
          {services.map((service, index) => (
            <span key={index} className="flex items-center">
              <span className="text-[#E84E36] px-4">{service}</span>
              <span className="text-[#E84E36]">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* Second row - Right to Left */}
      <div className="relative flex whitespace-nowrap mt-2">
        <div className="animate-marquee-reverse flex items-center">
          {services.map((service, index) => (
            <span key={index} className="flex items-center">
              <span className="text-[#E84E36] px-4">{service}</span>
              <span className="text-[#E84E36]">◆</span>
            </span>
          ))}
        </div>
        <div className="absolute top-0 flex items-center animate-marquee2-reverse">
          {services.map((service, index) => (
            <span key={index} className="flex items-center">
              <span className="text-[#E84E36] px-4">{service}</span>
              <span className="text-[#E84E36]">◆</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
