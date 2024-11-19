"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Mail, ChevronRight } from "lucide-react";
import Image from "next/image";

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

  return (
    <section className="bg-[#E84E36] px-4 py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-16">
          <div className="space-y-6  flex">
            <div className="w-2/3">
              <span className="font-serif text-white text-2xl italic">
                Creative Approach
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
                Corporate services
              </h2>
            </div>
            <p className="text-white text-lg">
              We strive to develop real-world web solutions that are ideal for
              small to large projects with bespoke your custom project
              requirements.
            </p>
            <div className="flex gap-4">
              <button
                onClick={prevSlide}
                className="w-14 h-14 rounded-full border-2 border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-all"
                aria-label="Previous slide"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="w-14 h-14 rounded-full border-2 border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-all"
                aria-label="Next slide"
              >
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        <div className="relative">
          <div
            className="flex transition-transform duration-500 ease-in-out gap-6"
            style={{
              transform: `translateX(-${currentSlide * 33.333}%)`,
            }}
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 relative"
                style={{ flex: "0 0 calc(33.333% - 16px)" }}
              >
                <div className="relative overflow-hidden group h-[480px] bg-black/40">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="px-6 py-2 bg-white text-[#E84E36] rounded-full text-sm font-medium">
                      {service.tag}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white bg-gradient-to-t from-black/80 to-transparent pt-24">
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="mb-6 text-white/90 text-lg leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
                <button
                  className="absolute -bottom-7 right-[45%] w-14 h-14 rounded-full bg-[#E84E36] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-[#d14530] shadow-md shadow-gray-200"
                  aria-label="View service details"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 flex items-center justify-center gap-3 text-white">
          <Mail className="w-6 h-6" />
          <p className="text-lg">
            Save your precious time and effort spent for finding a solution.{" "}
            <Link
              href="/contact"
              className="underline hover:text-white/80 font-medium"
            >
              Contact us now
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
