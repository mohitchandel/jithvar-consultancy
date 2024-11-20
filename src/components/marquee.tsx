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
    <div className="overflow-hidden">
      <div className="relative flex items-center bg-[#DE2329] text-black w-full h-[40px]">
        <div className="marquee animate-marquee">
          {services.map((service, index) => (
            <span key={index} className="flex items-center mr-10">
              <span className="px-4">{service}</span>
              <span>◆</span>
            </span>
          ))}
          {services.map((service, index) => (
            <span
              key={index + services.length}
              className="flex items-center mr-10"
            >
              <span className="px-4">{service}</span>
              <span>◆</span>
            </span>
          ))}
        </div>
      </div>

      <div className="relative flex items-center bg-black w-full h-[40px]">
        <div className="marquee animate-marquee">
          {services.map((service, index) => (
            <span key={index} className="flex items-center mr-10">
              <span className="text-[#DE2329] px-4">{service}</span>
              <span className="text-[#DE2329]">◆</span>
            </span>
          ))}
          {services.map((service, index) => (
            <span
              key={index + services.length}
              className="flex items-center mr-10"
            >
              <span className="text-[#DE2329] px-4">{service}</span>
              <span className="text-[#DE2329]">◆</span>
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 20s linear infinite;
        }

        .marquee {
          display: flex;
          white-space: nowrap;
        }
      `}</style>
    </div>
  );
}
