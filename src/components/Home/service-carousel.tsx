"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Mail } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ServiceCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
    {
      tag: "Web Designing",
      title: "Custom website development",
      description:
        "We create custom websites that are tailored to meet the specific needs of our clients.",
      image: "/img/service-carousel-1.png",
    },
    {
      tag: "Graphics Design",
      title: "Custom website development",
      description:
        "We create custom websites that are tailored to meet the specific needs of our clients.",
      image: "/img/service-carousel-2.png",
    },
    {
      tag: "Logo Design",
      title: "Custom website development",
      description:
        "We create custom websites that are tailored to meet the specific needs of our clients.",
      image: "/img/service-carousel-3.png",
    },
    {
      tag: "UI/UX Design",
      title: "Custom website development",
      description:
        "We create custom websites that are tailored to meet the specific needs of our clients.",
      image: "/img/service-carousel-4.png",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <section className="bg-[#DE2329]">
      {/* Mobile View */}
      <div className="md:hidden px-4 pt-8 pb-16">
        <span className="font-serif text-white text-2xl sofia block">
          Creative Approach
        </span>
        <div className="flex justify-between items-start mt-2 mb-6">
          <h2 className="text-2xl font-bold text-white leading-tight">
            Corporate services
          </h2>
          <div className="flex gap-3">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white"
              aria-label="Previous slide"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white"
              aria-label="Next slide"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        <p className="text-white/90 text-sm mb-8">
          We strive to develop real-world web solutions that are ideal for small
          to large projects with bespoke your custom project requirements.
        </p>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {services.map((service, index) => (
              <div key={index} className="w-full flex-shrink-0 relative">
                <div className="relative h-[400px] bg-black/40">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover opacity-80"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-1.5 bg-white text-[#DE2329] rounded-full text-sm">
                      {service.tag}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-black/80 to-transparent pt-16">
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-white/90 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
                <img
                  className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-8 h-8"
                  src="/icons/arrow-icon.png"
                  alt="arrow"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex items-start gap-3 text-white">
          <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
          <div className="text-sm">
            <p className="mb-1">
              Save your precious time and effort spent for finding a solution.
            </p>
            <Link href="/contact" className="underline font-medium">
              Contact us now
            </Link>
          </div>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:block px-4 py-16 md:py-24 relative overflow-hidden">
        <motion.div
          className="container mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-between mb-16 gap-8">
            <motion.div
              className="flex items-center gap-8 flex-1"
              variants={headerVariants}
            >
              <div>
                <motion.span
                  className="font-serif text-white text-3xl sofia block mb-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  Creative Approach
                </motion.span>
                <motion.h2
                  className="text-4xl md:text-5xl font-semibold text-white leading-tight"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  Corporate services
                </motion.h2>
              </div>
              <motion.p
                className="text-white text-lg max-w-xl"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                We strive to develop real-world web solutions that are ideal for
                small to large projects with bespoke your custom project
                requirements.
              </motion.p>
            </motion.div>
            <div className="flex gap-4 ml-8">
              <motion.button
                onClick={prevSlide}
                className="w-14 h-14 rounded-full border-2 border-white/20 flex items-center justify-center text-white"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                aria-label="Previous slide"
              >
                <ArrowLeft className="w-6 h-6" />
              </motion.button>

              <motion.button
                onClick={nextSlide}
                className="w-14 h-14 rounded-full border-2 border-white/20 flex items-center justify-center text-white"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                aria-label="Next slide"
              >
                <ArrowRight className="w-6 h-6" />
              </motion.button>
            </div>
          </div>

          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="flex gap-6"
              animate={{
                x: `-${currentSlide * 33.333}%`,
              }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
              }}
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="w-full flex-shrink-0 relative"
                  style={{ flex: "0 0 calc(33.333% - 16px)" }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <motion.div
                    className="relative overflow-hidden group h-[480px] bg-black/40"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                    />
                    <motion.div
                      className="absolute top-6 left-6"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      <span className="px-6 py-2 bg-white text-[#DE2329] rounded-full text-sm font-medium">
                        {service.tag}
                      </span>
                    </motion.div>
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 p-8 text-white bg-gradient-to-t from-black/80 to-transparent pt-24"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                    >
                      <h3 className="text-2xl font-bold mb-3">
                        {service.title}
                      </h3>
                      <p className="mb-6 text-white/90 text-lg leading-relaxed">
                        {service.description}
                      </p>
                    </motion.div>
                  </motion.div>
                  <motion.img
                    className="absolute -bottom-10 right-[45%] rounded-full"
                    src="/icons/arrow-icon.png"
                    alt="arrow"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-24 flex items-center justify-center gap-3 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Mail className="w-6 h-6" />
            <p className="text-xl">
              Save your precious time and effort spent for finding a solution.{" "}
              <motion.span whileHover={{ opacity: 0.8 }}>
                <Link
                  href="/contact"
                  className="underline hover:text-white/80 font-medium"
                >
                  Contact us now
                </Link>
              </motion.span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
