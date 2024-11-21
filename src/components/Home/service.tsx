"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const serviceVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="relative py-16 md:py-24">
      <div
        className="absolute inset-0 bg-[url('/img/service-about-bg.png')] bg-cover bg-center"
        style={{
          backgroundBlendMode: "overlay",
        }}
      />
      <div className="absolute inset-0 bg-black/5" />
      <div className="relative">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.span
            className="text-[#DE2329] font-serif text-3xl sofia"
            variants={headerVariants}
          >
            Our Services
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-black mt-4"
            variants={headerVariants}
          >
            We Provide Top Notch
            <br />
            Services For You
          </motion.h2>
        </motion.div>

        <motion.div
          className="space-y-6 md:space-y-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={serviceVariants}
              className={`group relative overflow-hidden transition-all duration-500 ease-in-out ${
                hoveredService === service.id
                  ? "bg-black/80"
                  : "bg-transparent hover:bg-black/60"
              }`}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-8">
                  <motion.div
                    className="flex items-center justify-center md:justify-start"
                    whileHover={{ scale: 1.02 }}
                  >
                    <h3
                      className={`text-3xl md:text-4xl font-bold transition-colors duration-500 ${
                        hoveredService === service.id
                          ? "text-white"
                          : "text-black"
                      }`}
                    >
                      {service.title}
                    </h3>
                  </motion.div>

                  <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <motion.div
                      className={`relative w-full md:w-[600px] md:ml-[-300px] h-56 md:h-32 rounded-2xl overflow-hidden transition-opacity duration-500 ${
                        hoveredService === service.id
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                      initial={{ scale: 0.9 }}
                      animate={{
                        scale: hoveredService === service.id ? 1 : 0.9,
                        opacity: hoveredService === service.id ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex justify-center items-center w-full h-full">
                        <Image
                          src={service.image}
                          alt={service.title}
                          layout="fill"
                          className="object-cover"
                        />
                      </div>
                    </motion.div>

                    <motion.p
                      className={`transition-colors duration-500 mt-4 md:mt-0 ${
                        hoveredService === service.id
                          ? "text-white"
                          : "text-black"
                      }`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{
                        opacity: hoveredService === service.id ? 1 : 0,
                        x: hoveredService === service.id ? 0 : 20,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {service.description}
                    </motion.p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
