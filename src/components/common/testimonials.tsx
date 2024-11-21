"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Ishant Sharma",
      role: "Web Designer",
      rating: 5,
      feedback:
        "Objectively visualize error-free technology for B2B alignment. Monotonectally harness an expanded array of models via effective collaboration.",
      image: "/img/client.png",
      number: "66",
    },
    {
      id: 2,
      name: "Ishant Sharma",
      role: "Web Designer",
      rating: 5,
      feedback:
        "Objectively visualize error-free technology for B2B alignment. Monotonectally harness an expanded array of models via effective collaboration.",
      image: "/img/client.png",
      number: "67",
    },
    {
      id: 3,
      name: "Ishant Sharma",
      role: "Web Designer",
      rating: 5,
      feedback:
        "Objectively visualize error-free technology for B2B alignment. Monotonectally harness an expanded array of models via effective collaboration.",
      image: "/img/client.png",
      number: "68",
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    hover: {
      y: -5,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="py-16 md:py-32 bg-[url('/img/service-about-bg.png')] bg-cover">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={headerVariants}
        >
          <motion.span
            className="text-[#DE2329] font-serif text-3xl sofia"
            variants={headerVariants}
          >
            Customer Feedback
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-[#002A18] mt-4"
            variants={headerVariants}
          >
            What Happy Clients Says
          </motion.h2>
        </motion.div>

        {/* Mobile View */}
        <div className="md:hidden">
          <Carousel
            opts={{
              align: "center",
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id}>
                  <div className="px-4 text-center">
                    <div className="relative mb-12 mx-auto w-64 h-64">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover rounded-lg"
                      />
                      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#DE2329] rounded-full flex items-center justify-center text-white text-xl font-bold">
                        {testimonial.number}
                      </div>
                    </div>

                    <p className="text-gray-600 mb-8 text-base leading-relaxed text-start">
                      {testimonial.feedback}
                    </p>

                    <div className="space-y-2 flex justify-between text-start">
                      <div>
                        <h3 className="font-bold text-xl text-[#002A18]">
                          {testimonial.name}
                        </h3>
                        <p className="text-gray-600">{testimonial.role}</p>
                      </div>
                      <div className="flex gap-1 justify-center mt-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            size={20}
                            className="fill-[#DE2329] text-[#DE2329]"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Desktop View */}
        <div className="hidden md:block">
          <Carousel
            opts={{
              align: "start",
              dragFree: true,
            }}
            className="w-full p-2"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={testimonial.id} className="pl-4 basis-[45%]">
                  <motion.div
                    className="bg-white p-6 rounded-lg flex gap-6 shadow-sm"
                    initial="hidden"
                    whileInView="visible"
                    whileHover="hover"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={cardVariants}
                    custom={index}
                  >
                    <div className="flex-shrink-0">
                      <div className="relative w-36 h-40">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                        <motion.img
                          src="/icons/testimonial-icon.png"
                          className="absolute -bottom-8 right-[28%] items-center justify-center"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                        />
                      </div>
                    </div>

                    <div className="flex-1">
                      <p className="text-gray-600 mb-6 text-base leading-relaxed">
                        {testimonial.feedback}
                      </p>

                      <div className="border-t border-gray-200 pt-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className="font-bold text-lg">
                              {testimonial.name}
                            </h3>
                            <p className="text-gray-600 text-sm">
                              {testimonial.role}
                            </p>
                          </div>
                          <div className="flex gap-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star
                                key={i}
                                size={16}
                                className="fill-[#DE2329] text-[#DE2329]"
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
