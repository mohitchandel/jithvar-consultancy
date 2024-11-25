"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, StarIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Item } from "@radix-ui/react-accordion";

interface Testimonial {
  id: number;
  author: string;
  role: string;
  content: string;
  avatar: string;
}

const Testimonials = () => {
  const [currentPair, setCurrentPair] = useState(0);
  const [direction, setDirection] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      author: "Ishant Sharma",
      role: "Web Designer",
      content:
        "Jitvhar transformed our outdated website into a modern, user-friendly platform that perfectly represents our brand. Their attention to detail and seamless development process exceeded our expectations. Highly recommend their services!",
      avatar: "/api/placeholder/32/32",
    },
    {
      id: 2,
      author: "Ishant Sharma",
      role: "Web Designer",
      content:
        "Working with Jitvhar was a game-changer for our business. Their team delivered a beautifully designed and fully functional website that has significantly improved our customer engagement. Truly a pleasure to work with!",
      avatar: "/api/placeholder/32/32",
    },
    {
      id: 3,
      author: "Sarah Johnson",
      role: "Marketing Director",
      content:
        "The team at Jitvhar went above and beyond our expectations. They not only delivered a stunning website but also provided valuable insights that helped improve our overall digital strategy. Their expertise is unmatched!",
      avatar: "/api/placeholder/32/32",
    },
    {
      id: 4,
      author: "Michael Chen",
      role: "Startup Founder",
      content:
        "As a startup, we needed a partner who could understand our vision and bring it to life. Jitvhar did exactly that and more. Their innovative approach and attention to user experience helped us launch with confidence.",
      avatar: "/api/placeholder/32/32",
    },
    {
      id: 5,
      author: "Emma Wilson",
      role: "E-commerce Manager",
      content:
        "The e-commerce solution provided by Jitvhar revolutionized our online presence. Our sales have increased by 150% since launch, and customer feedback has been overwhelmingly positive. They're truly masters of their craft!",
      avatar: "/api/placeholder/32/32",
    },
    {
      id: 6,
      author: "David Martinez",
      role: "Product Owner",
      content:
        "What sets Jitvhar apart is their commitment to excellence and their collaborative approach. They took the time to understand our complex requirements and delivered a solution that exceeded our expectations in every way.",
      avatar: "/api/placeholder/32/32",
    },
  ];

  const nextTestimonials = () => {
    setDirection(1);
    setCurrentPair((prev) => (prev + 2 >= testimonials.length ? 0 : prev + 2));
  };

  const prevTestimonials = () => {
    setDirection(-1);
    setCurrentPair((prev) =>
      prev - 2 < 0 ? Math.floor((testimonials.length - 1) / 2) * 2 : prev - 2
    );
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <div className="w-full container mx-auto px-4 py-24">
      <span className="inline-block text-[#FC2B46] text-md font-semibold tracking-wider uppercase font-unbounded mb-3">
        Testimonials
      </span>
      <motion.h1
        className="text-4xl font-bold mb-8 font-unbounded"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        What Happy Clients Say
      </motion.h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div
          className=" bg-[#1F2937] rounded-3xl text-white p-12 flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-[72px] font-bold mb-4">4.8</div>
          <div className="flex gap-1 text-yellow-400 mb-4 text-xl">
            <motion.span
              className="flex"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ staggerChildren: 0.1 }}
            >
              {[1, 2, 3, 4, 5].map((Item) => {
                return <StarIcon key={Item} />;
              })}
            </motion.span>
          </div>
          <div className="text-sm text-gray-400 mb-8">(100+ REVIEWS)</div>
          <p className="text-center text-xl font-medium max-w-md">
            Empowering World-Class Companies With Innovative Development
            Solutions
          </p>
          <div className="flex gap-4 mt-12">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevTestimonials}
              className="p-4 rounded-full border border-gray-800 hover:bg-gray-800 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextTestimonials}
              className="p-4 rounded-full bg-red-600 hover:bg-red-700 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </motion.div>

        <div className="lg:col-span-2 bg-[#1F2937] rounded-3xl text-white p-12 overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentPair}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12"
            >
              {testimonials
                .slice(currentPair, currentPair + 2)
                .map((testimonial) => (
                  <motion.div
                    key={testimonial.id}
                    className="flex flex-col h-full"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="text-4xl font-serif mb-6">
                      <Quote size={64} />
                    </div>
                    <p className="text-gray-100 text-lg mb-8 flex-grow">
                      {testimonial.content}
                    </p>
                    <motion.div
                      className="flex items-center mt-auto"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <div className="font-medium text-lg">
                          {testimonial.author}
                        </div>
                        <div className="text-gray-400">{testimonial.role}</div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
