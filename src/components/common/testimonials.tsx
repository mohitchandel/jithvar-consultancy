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
    },
    {
      id: 2,
      name: "Ishant Sharma",
      role: "Web Designer",
      rating: 5,
      feedback:
        "Objectively visualize error-free technology for B2B alignment. Monotonectally harness an expanded array of models via effective collaboration.",
      image: "/img/client.png",
    },
    {
      id: 3,
      name: "Ishant Sharma",
      role: "Web Designer",
      rating: 5,
      feedback:
        "Objectively visualize error-free technology for B2B alignment. Monotonectally harness an expanded array of models via effective collaboration.",
      image: "/img/client.png",
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  const starsVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const starItemVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
      },
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
                    <motion.div
                      className="relative w-36 h-40"
                      variants={imageVariants}
                    >
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
                    </motion.div>
                  </div>

                  <div className="flex-1">
                    <motion.p
                      className="text-gray-600 mb-6 text-base leading-relaxed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {testimonial.feedback}
                    </motion.p>

                    <motion.div
                      className="border-t border-gray-200 pt-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="flex justify-between items-center">
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 }}
                        >
                          <h3 className="font-bold text-lg">
                            {testimonial.name}
                          </h3>
                          <p className="text-gray-600 text-sm">
                            {testimonial.role}
                          </p>
                        </motion.div>
                        <motion.div
                          className="flex gap-1"
                          variants={starsVariants}
                          initial="hidden"
                          animate="visible"
                        >
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <motion.div key={i} variants={starItemVariants}>
                              <Star
                                size={16}
                                className="fill-[#DE2329] text-[#DE2329]"
                              />
                            </motion.div>
                          ))}
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
