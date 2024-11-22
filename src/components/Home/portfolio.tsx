"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Portfolio() {
  const [hoveredPortfolio, setHoveredPortfolio] = useState<string | null>(null);

  const portfolios = [
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
      image: "/img/service-carousel-2.png",
    },
    {
      id: "digital-marketing",
      title: "DIGITAL MARKETING",
      description:
        "Our digital marketing services are designed to help businesses of all sizes increase their online presence, attract more traffic, and generate leads and sales.",
      image: "/img/service-carousel-3.png",
    },
    {
      id: "branding",
      title: "BRANDING",
      description:
        "Our web design services focus on creating visually engaging, user-friendly websites that embody your brand's essence.",
      image: "/img/service-carousel-4.png",
    },
    {
      id: "graphics-design",
      title: "GRAPHICS DESIGN",
      description:
        "Graphic Designing services that reflects your brand's personality, values, and vision",
      image: "/img/service-carousel-1.png",
    },
  ];

  return (
    <div className="w-full">
      <div className="text-center mb-16">
        <h4 className="text-primary text-lg mb-2">Our Portfolio</h4>
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
          Crafting Lorem Ispum Dolor
        </h2>
        <h2 className="text-3xl md:text-4xl font-bold text-black">
          Design & Development Excellence
        </h2>
      </div>
      {portfolios.map((portfolio) => (
        <div
          key={portfolio.id}
          className="relative border-b border-gray-200 cursor-pointer"
          onMouseEnter={() => setHoveredPortfolio(portfolio.id)}
          onMouseLeave={() => setHoveredPortfolio(null)}
        >
          <div
            className={`absolute inset-0 bg-[#DE2329] transition-opacity duration-300 ${
              hoveredPortfolio === portfolio.id ? "opacity-100" : "opacity-0"
            }`}
          />

          <div className="container mx-auto px-6">
            <div className="py-8">
              {hoveredPortfolio === portfolio.id ? (
                <div className="flex justify-between items-start relative z-10">
                  <div className="flex flex-col gap-4">
                    <h3 className="text-3xl font-bold text-white">
                      {portfolio.title}
                    </h3>
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-white max-w-xl"
                    >
                      {portfolio.description}
                    </motion.p>
                  </div>

                  <motion.div
                    className="relative w-48 h-32 rounded-lg overflow-hidden flex-shrink-0"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={portfolio.image}
                      alt={portfolio.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </motion.div>
                </div>
              ) : (
                <div className="flex justify-between items-center relative z-10">
                  <h3 className="text-3xl font-bold text-black">
                    {portfolio.title}
                  </h3>
                  <p className="text-sm text-black max-w-md text-right ml-auto">
                    {portfolio.description}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
