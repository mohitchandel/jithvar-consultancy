"use client";

import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const circleOneImage = "/img/about-img.png";

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          className="relative w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInLeft}
        >
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[600px] mx-auto">
            <motion.div
              className="w-full h-full rounded-lg overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={circleOneImage}
                alt="Nature Image"
                width={600}
                height={600}
                className="object-contain w-full h-full"
              />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="space-y-6 bg-[url('/img/service-about-bg.png')] bg-no-repeat bg-cover bg-center p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInRight}
        >
          <motion.span
            className="text-[#DE2329] font-serif text-2xl sofia"
            variants={fadeInUp}
          >
            About Business
          </motion.span>

          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#002A18] leading-tight"
            variants={fadeInUp}
          >
            Smart and effective business solutions.
          </motion.h2>

          <motion.p
            className="text-gray-600 text-lg sm:text-xl"
            variants={fadeInUp}
          >
            We are excited for our work and how it positively impacts clients.
            With over 12 years of experience we have been constantly providing
            excellent solutions.
          </motion.p>

          <motion.ul className="space-y-4" variants={containerVariants}>
            {[
              "Managed Services and Products",
              "Flexibility and Adaptability",
              "Competitive Advantage",
              "Custom design and branding services",
            ].map((item, index) => (
              <motion.li
                key={index}
                className="flex items-center gap-3"
                variants={listItemVariants}
              >
                <motion.span
                  className="flex-shrink-0 w-5 h-5 rounded-full bg-[#DE2329]/10 flex items-center justify-center"
                  whileHover={{ scale: 1.2 }}
                >
                  <Check className="w-3 h-3 text-[#DE2329]" />
                </motion.span>
                <span className="text-gray-700">{item}</span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div className="flex gap-4 pt-4" variants={fadeInUp}>
            <Link
              href="/services"
              className="bg-gradient-to-r from-[#DE2329] to-[#A70909] text-white py-3 px-8 rounded-lg hover:bg-[#DE2329] transition-colors"
            >
              Our services
            </Link>
            <Link
              href="/discover"
              className="border-2 border-gray-200 text-black px-6 py-3 rounded-md hover:bg-gray-50 transition-colors"
            >
              Discover More
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
