"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, Variants } from "framer-motion";
import { Phone, Mail, ChevronRight, Sparkles, Clock } from "lucide-react";

const CTASection = () => {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  const particles = Array.from({ length: 20 });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const particleVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 0.5,
      scale: [0, 1.5, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  };

  const textVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  interface Feature {
    title: string;
    description: string;
  }

  const features: Feature[] = [
    {
      title: "24/7 Support",
      description: "Round-the-clock emergency assistance",
    },
    {
      title: "Quick Response",
      description: "Get a response within 30 minutes",
    },
    {
      title: "Expert Team",
      description: "Experienced designers ready to help",
    },
  ];

  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#1A1A1A] to-[#0A0A0A] overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(circle at 20% 20%, #DE2329 0%, transparent 50%)",
              "radial-gradient(circle at 80% 80%, #DE2329 0%, transparent 50%)",
              "radial-gradient(circle at 20% 20%, #DE2329 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        {particles.map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            variants={particleVariants}
            initial="hidden"
            animate="visible"
          />
        ))}
      </div>

      <div
        className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent"
        style={{
          maskImage: 'url("/img/wave-mask.svg")',
          WebkitMaskImage: 'url("/img/wave-mask.svg")',
          maskSize: "100% 100%",
          WebkitMaskSize: "100% 100%",
        }}
      />

      <div className="relative container mx-auto px-4 py-32">
        <motion.div
          className="max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm mb-6"
              variants={textVariants}
            >
              <Clock className="w-4 h-4 text-[#DE2329]" />
              <span className="text-white/80 text-sm">
                24/7 Emergency Support Available
              </span>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
              variants={textVariants}
            >
              Need Urgent Web Design
              <span className="relative inline-block mx-3">
                Service?
                <motion.span
                  className="absolute -top-6 -right-8"
                  animate={{
                    rotate: [0, 20, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  <Sparkles className="w-8 h-8 text-[#DE2329]" />
                </motion.span>
              </span>
            </motion.h2>

            <motion.p
              className="text-xl text-white/80 mb-12 max-w-2xl mx-auto"
              variants={textVariants}
            >
              Get immediate assistance from our expert team for your urgent web
              design needs. We&apos;re here to help you 24/7.
            </motion.p>

            <motion.div
              className="flex flex-col md:flex-row gap-6 justify-center items-center"
              variants={textVariants}
            >
              <motion.div
                onHoverStart={() => setHoveredButton("call")}
                onHoverEnd={() => setHoveredButton(null)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="relative group bg-[#DE2329] hover:bg-[#DE2329]/90 text-white px-8 py-6 text-lg rounded-2xl overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#DE2329]/0 via-white/20 to-[#DE2329]/0"
                    animate={{
                      x: hoveredButton === "call" ? ["-100%", "200%"] : "-100%",
                    }}
                    transition={{
                      duration: 1,
                      repeat: hoveredButton === "call" ? Infinity : 0,
                    }}
                  />
                  <div className="relative flex items-center gap-3">
                    <Phone className="w-5 h-5" />
                    <span>+91 xxxxxxxxx</span>
                  </div>
                </Button>
              </motion.div>

              <motion.div
                onHoverStart={() => setHoveredButton("quote")}
                onHoverEnd={() => setHoveredButton(null)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="relative group border-2 border-white/20 hover:border-white/30 bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white px-8 py-6 text-lg rounded-2xl">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    animate={{
                      x:
                        hoveredButton === "quote" ? ["-100%", "200%"] : "-100%",
                    }}
                    transition={{
                      duration: 1,
                      repeat: hoveredButton === "quote" ? Infinity : 0,
                    }}
                  />
                  <div className="relative flex items-center gap-3">
                    <Mail className="w-5 h-5" />
                    <span>Request A Quote</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Button>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            className="grid md:grid-cols-3 gap-6 mt-16"
            variants={containerVariants}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                variants={textVariants}
                whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.1)" }}
              >
                <h3 className="text-white text-lg font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-white/70">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent transform rotate-180"
        style={{
          maskImage: 'url("/img/wave-mask.svg")',
          WebkitMaskImage: 'url("/img/wave-mask.svg")',
          maskSize: "100% 100%",
          WebkitMaskSize: "100% 100%",
        }}
      />
    </section>
  );
};

export default CTASection;
