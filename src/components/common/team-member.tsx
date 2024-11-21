"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
} from "lucide-react";

export default function TeamMembersSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const buttonVariants = {
    hover: {
      scale: 1.1,
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.95 },
  };

  const teamMembers = [
    {
      name: "Josephine makus",
      role: "Company role",
      image: "/img/Cards.png",
      socialLinks: ["facebook", "instagram", "linkedin"],
    },
    {
      name: "John Smith",
      role: "Company role",
      image: "/img/Cards_1.png",
      socialLinks: ["facebook", "instagram", "linkedin"],
    },
    {
      name: "Emily Johnson",
      role: "Company role",
      image: "/img/Cards_2.png",
      socialLinks: ["facebook", "instagram", "linkedin"],
    },
    {
      name: "Michael Brown",
      role: "Company role",
      image: "/img/Cards_3.png",
      socialLinks: ["facebook", "instagram", "linkedin"],
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));
  };

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-8">
        <span className="text-[#DE2329] font-serif text-3xl sofia">Team</span>
        <h2 className="text-3xl font-bold ">Meet our team members</h2>
        <div className="flex justify-end items-center mt-6">
          <div className="flex gap-4 md:hidden">
            <motion.button
              onClick={prevSlide}
              className="w-20 h-20 rounded-full border-2 border-black flex items-center justify-center text-black"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              aria-label="Previous slide"
            >
              <ArrowLeft className="w-12 h-12" />
            </motion.button>
            <motion.button
              onClick={nextSlide}
              className="w-20 h-20 rounded-full border-2 border-black flex items-center justify-center text-black"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              aria-label="Next slide"
            >
              <ArrowRight className="w-12 h-12" />
            </motion.button>
          </div>
        </div>
      </div>

      <div className="md:hidden">
        <div className="relative rounded-3xl overflow-hidden">
          <Image
            src={teamMembers[currentSlide].image}
            alt={teamMembers[currentSlide].name}
            width={400}
            height={500}
            className="w-full h-[700px] object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/30 via-black/20 to-transparent backdrop-blur-lg p-6 rounded-2xl">
            <h3 className="text-3xl font-semibold text-black">
              {teamMembers[currentSlide].name}
            </h3>
            <p className="text-xl my-3">{teamMembers[currentSlide].role}</p>
            <div className="flex gap-4">
              <div className="rounded-full p-4 bg-black">
                <FacebookIcon stroke="white" fill="white" className="w-6 h-6" />
              </div>
              <div className="rounded-full p-4 bg-black">
                <InstagramIcon stroke="white" className="w-6 h-6" />
              </div>
              <div className="rounded-full p-4 bg-black">
                <LinkedinIcon stroke="white" fill="white" className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative group rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src={member.image}
              alt={member.name}
              width={300}
              height={300}
              className="w-full h-[300px] object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
