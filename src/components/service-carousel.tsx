"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, MoveRight, Mail } from "lucide-react";

export default function ServiceCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
    {
      tag: "Web Designing",
      title: "Custom website development",
      description:
        "We create custom websites that are tailored to meet the specific needs of our clients.",
      image: "/placeholder.svg",
    },
    {
      tag: "Graphics Design",
      title: "Custom website development",
      description:
        "We create custom websites that are tailored to meet the specific needs of our clients.",
      image: "/placeholder.svg",
    },
    {
      tag: "Logo Design",
      title: "Custom website development",
      description:
        "We create custom websites that are tailored to meet the specific needs of our clients.",
      image: "/placeholder.svg",
    },
    {
      tag: "UI/UX Design",
      title: "Custom website development",
      description:
        "We create custom websites that are tailored to meet the specific needs of our clients.",
      image: "/placeholder.svg",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <section className="bg-[#E84E36] px-4 py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex justify-between items-start mb-16">
          <div className="space-y-4">
            <span className="font-serif text-white text-2xl">
              Creative Approach
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-black">
              Corporate services
            </h2>
            <p className="text-white max-w-2xl">
              We strive to develop real-world web solutions that are ideal for
              small to large projects with bespoke your custom project
              requirements.
            </p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              aria-label="Previous slide"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              aria-label="Next slide"
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 px-2"
                style={{ flex: "0 0 33.333%" }}
              >
                <div className="relative bg-black rounded-lg overflow-hidden group">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-1 bg-white rounded-full text-sm">
                      {service.tag}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                    <p className="mb-4 text-white/80">{service.description}</p>
                    <button className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors group-hover:bg-white group-hover:text-black">
                      <MoveRight className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 flex items-center justify-center gap-2 text-white">
          <Mail className="w-6 h-6" />
          <p>
            Save your precious time and effort spent for finding a solution.{" "}
            <Link href="/contact" className="underline hover:text-white/80">
              Contact us now
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
