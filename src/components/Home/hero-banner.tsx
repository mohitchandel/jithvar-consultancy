"use client";
import { Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Herobanner() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const scaleIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="w-full min-h-screen bg-white bg-[url('/img/hero-bg.png')] bg-center bg-contain">
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.span
              className="text-[#DE2329] sofia text-3xl"
              variants={fadeIn}
            >
              Welcome To Jithwar
            </motion.span>

            <motion.h1
              className="text-4xl font-roboto md:text-5xl lg:text-6xl font-bold text-[#002A18] leading-tight"
              variants={fadeIn}
            >
              Web Development &<br />
              Designing
            </motion.h1>

            <motion.p className="text-gray-600 max-w-xl mb-8" variants={fadeIn}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </motion.p>

            <motion.div className="flex gap-4" variants={fadeIn}>
              <Link
                href="/talk-to-experts"
                className="bg-gradient-to-r from-[#DE2329] to-[#A70909] text-white py-3 px-8 rounded-lg hover:bg-[#DE2329] transition-colors"
              >
                Talk To Experts
              </Link>
              <Link
                href="/discover"
                className="border-2 border-gray-900 text-black px-6 py-3 rounded-md hover:bg-gray-50 transition-colors"
              >
                Discover More
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleIn}
          >
            <div className="relative w-full aspect-[4/3]">
              <Image
                src="/img/hero-video.png"
                alt="Team collaborating"
                fill
                className="object-cover"
              />
              <motion.div
                className="absolute inset-0 flex justify-center items-center"
                whileHover={{ scale: 1.1 }}
              >
                <button className="bg-red-600 p-6 rounded-full text-white shadow-lg hover:bg-red-700 transition-all">
                  <Play
                    className="w-10 h-10 text-white"
                    stroke="white"
                    fill="white"
                  />
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
