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
      image: "/placeholder.svg",
    },
    {
      id: "ui-ux-design",
      title: "UI/UX DESIGN",
      description:
        "Our web design services focus on creating visually engaging, user-friendly websites that embody your brand's essence.",
      image: "/placeholder.svg",
    },
    {
      id: "digital-marketing",
      title: "DIGITAL MARKETING",
      description:
        "Our digital marketing services are designed to help businesses of all sizes increase their online presence, attract more traffic, and generate leads and sales.",
      image: "/placeholder.svg",
    },
    {
      id: "branding",
      title: "BRANDING",
      description:
        "Our web design services focus on creating visually engaging, user-friendly websites that embody your brand's essence.",
      image: "/placeholder.svg",
    },
    {
      id: "graphics-design",
      title: "GRAPHICS DESIGN",
      description:
        "Graphic Designing services that reflects your brand's personality, values, and vision",
      image: "/placeholder.svg",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-16">
        <span className="text-[#E84E36] font-serif text-2xl">Our Services</span>
        <h2 className="text-4xl md:text-5xl font-bold text-[#002A18] mt-4">
          We Provide Top Notch
          <br />
          Services For You
        </h2>
      </div>

      <div className="space-y-px">
        {services.map((service) => (
          <div
            key={service.id}
            className={`group relative overflow-hidden transition-all duration-500 ease-in-out ${
              hoveredService === service.id
                ? "bg-black"
                : "bg-white hover:bg-black/5"
            }`}
            onMouseEnter={() => setHoveredService(service.id)}
            onMouseLeave={() => setHoveredService(null)}
          >
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-8 items-center py-8">
                <div className="flex items-center">
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

                <div className="flex items-center justify-between gap-8">
                  <div
                    className={`relative w-48 h-32 rounded-2xl overflow-hidden transition-opacity duration-500 ${
                      hoveredService === service.id
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p
                    className={`transition-colors duration-500 ${
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
    </section>
  );
}
