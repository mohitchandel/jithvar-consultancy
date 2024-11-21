"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const CTASection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const scaleIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const buttonHover = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <motion.div
      className="relative h-[600px] w-full overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="absolute inset-0 bg-[#001D08]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />

      <motion.div
        className="absolute inset-0 bg-cover bg-center z-0 opacity-30"
        style={{
          backgroundImage: "url('/img/cta-bg.png')",
        }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
      />

      <div className="absolute top-0 left-0 w-full">
        <div
          className="w-full h-40 bg-white"
          style={{
            maskImage: "url('/img/pattern1.svg')",
            WebkitMaskImage: "url('/img/pattern1.svg')",
            maskSize: "cover",
            WebkitMaskSize: "cover",
            maskPosition: "bottom",
            WebkitMaskPosition: "bottom",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
          }}
        />
      </div>

      <motion.div
        className="relative z-10 h-[600px] container mx-auto px-4 flex flex-col items-center justify-center text-center py-20"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.span
          className="text-[#DE2329] font-medium mb-2 text-2xl sofia"
          variants={fadeInUp}
        >
          Talk to an Expert
        </motion.span>

        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 max-w-3xl leading-tight"
          variants={scaleIn}
        >
          Do you have an emergency web design service?
        </motion.h1>

        <motion.p className="text-gray-200 mb-10 text-lg" variants={fadeInUp}>
          Need any kind Web & Design service,{" "}
          <motion.a
            href="#contact"
            className="text-red-500 hover:underline"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact us.
          </motion.a>
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 items-center"
          variants={fadeInUp}
        >
          <motion.div variants={buttonHover} whileHover="hover" whileTap="tap">
            <Button
              variant="destructive"
              className="min-w-[200px] h-12 text-lg bg-red-600 hover:bg-red-700"
            >
              +91 xxxxxxxxx
            </Button>
          </motion.div>

          <motion.div variants={buttonHover} whileHover="hover" whileTap="tap">
            <Button
              variant="outline"
              className="min-w-[200px] h-12 text-lg border-2 bg-transparent text-white hover:bg-white/10 transition-colors"
            >
              Request A Quote
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full rotate-180">
        <div
          className="w-full h-40 bg-white"
          style={{
            maskImage: "url('/img/pattern1.svg')",
            WebkitMaskImage: "url('/img/pattern1.svg')",
            maskSize: "cover",
            WebkitMaskSize: "cover",
            maskPosition: "0 98%",
            WebkitMaskPosition: "0 98%",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
          }}
        />
      </div>
    </motion.div>
  );
};

export default CTASection;
