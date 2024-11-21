"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function TeamMembersSection() {
  const teamMembers = [
    {
      name: "Jane Doe",
      role: "UI/UX Designer",
      image: "/img/Cards.png",
    },
    {
      name: "John Smith",
      role: "Web Developer",
      image: "/img/Cards_1.png",
    },
    {
      name: "Emily Johnson",
      role: "Graphic Designer",
      image: "/img/Cards_2.png",
    },
    {
      name: "Michael Brown",
      role: "Project Manager",
      image: "/img/Cards_3.png",
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <motion.div
        className="text-center mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.span
          className="text-[#DE2329] font-serif text-3xl sofia"
          variants={headerVariants}
        >
          Team
        </motion.span>
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-[#002A18] mt-4"
          variants={headerVariants}
        >
          Meet our team members
        </motion.h2>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="relative group"
            variants={cardVariants}
          >
            <motion.div
              className="relative rounded-lg overflow-hidden"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={member.image}
                alt={member.name}
                width={300}
                height={300}
                className="transition-transform duration-300 group-hover:scale-110"
                objectFit="cover"
              />
              <motion.div
                className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial="hidden"
                whileHover="visible"
                variants={overlayVariants}
              >
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <motion.h3
                    className="text-xl font-bold mb-1"
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {member.name}
                  </motion.h3>
                  <motion.p
                    className="text-sm"
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    {member.role}
                  </motion.p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
