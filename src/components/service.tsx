"use client";

import { useState } from "react";
import Image from "next/image";

export default function Service() {
  const [hoveredService, setHoveredService] = useState<string | null>(
    "web-design"
  );

  const services = [
    {
      id: "web-design",
      title: "WEB DESIGN",
      description:
        "Our web design services focus on creating visually engaging, user-friendly websites that embody your brand's essence.",
      image: "/img/service-carousel-1.png",
    },
    {
      id: "ui-ux-design",
      title: "UI/UX DESIGN",
      description:
        "Our web design services focus on creating visually engaging, user-friendly websites that embody your brand's essence.",
      image: "/img/service-carousel-1.png",
    },
    {
      id: "digital-marketing",
      title: "DIGITAL MARKETING",
      description:
        "Our digital marketing services are designed to help businesses of all sizes increase their online presence, attract more traffic, and generate leads and sales.",
      image: "/img/service-carousel-2.png",
    },
    {
      id: "branding",
      title: "BRANDING",
      description:
        "Our web design services focus on creating visually engaging, user-friendly websites that embody your brand's essence.",
      image: "/img/service-carousel-3.png",
    },
    {
      id: "graphics-design",
      title: "GRAPHICS DESIGN",
      description:
        "Graphic Designing services that reflects your brand's personality, values, and vision",
      image: "/img/service-carousel-4.png",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[url('/img/service-about-bg.png')] bg-cover bg-center">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#DE2329] font-serif text-2xl">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#002A18] mt-4">
            We Provide Top Notch
            <br />
            Services For You
          </h2>
        </div>

        <div className="space-y-6 md:space-y-0">
          {services.map((service) => (
            <div
              key={service.id}
              className={`group relative overflow-hidden transition-all duration-500 ease-in-out ${
                hoveredService === service.id
                  ? "bg-black"
                  : "bg-transparent hover:bg-black/5"
              }`}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-8">
                  <div className="flex items-center justify-center md:justify-start">
                    <h3
                      className={`text-3xl md:text-4xl font-bold transition-colors duration-500 ${
                        hoveredService === service.id
                          ? "text-white"
                          : "text-black"
                      }`}
                    >
                      {service.title}
                    </h3>
                  </div>

                  <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div
                      className={`relative w-full md:w-[600px] md:ml-[-300px] h-56 md:h-32 rounded-2xl overflow-hidden transition-opacity duration-500 ${
                        hoveredService === service.id
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                    >
                      <div className="flex justify-center items-center w-full h-full">
                        <Image
                          src={service.image}
                          alt={service.title}
                          layout="fill"
                          className="object-cover"
                        />
                      </div>
                    </div>

                    <p
                      className={`transition-colors duration-500 mt-4 md:mt-0 ${
                        hoveredService === service.id
                          ? "text-white"
                          : "text-gray-600"
                      }`}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
