"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  Mail,
} from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio?: string;
  email?: string;
  socialLinks: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
}

export default function TeamMembersSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  const teamMembers: TeamMember[] = [
    {
      name: "Josephine Makus",
      role: "Creative Director",
      bio: "10+ years of experience in creative direction and brand strategy",
      email: "josephine@company.com",
      image: "/img/Cards.png",
      socialLinks: {
        facebook: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      name: "John Smith",
      role: "Lead Developer",
      bio: "Full-stack developer with expertise in React and Node.js",
      email: "john@company.com",
      image: "/img/Cards_1.png",
      socialLinks: {
        facebook: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      name: "Emily Johnson",
      role: "UX Designer",
      bio: "Passionate about creating intuitive and accessible user experiences",
      email: "emily@company.com",
      image: "/img/Cards_2.png",
      socialLinks: {
        facebook: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      name: "Michael Brown",
      role: "Product Manager",
      bio: "Strategic thinker with a focus on user-centered product development",
      email: "michael@company.com",
      image: "/img/Cards_3.png",
      socialLinks: {
        facebook: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  const socialIconVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  };

  const SocialButton: React.FC<{ icon: React.ReactNode; delay: number }> = ({
    icon,
    delay,
  }) => (
    <motion.button
      className="rounded-full p-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
      variants={socialIconVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay }}
    >
      {icon}
    </motion.button>
  );

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#DE2329_0.2%,transparent_0.4%,transparent_99.6%,#DE2329_99.8%)] bg-[length:60px_60px] opacity-5" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-block text-[#DE2329] font-serif text-2xl relative mb-4"
            variants={itemVariants}
          >
            Our Team
            <motion.div
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-[#DE2329]"
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              transition={{ duration: 0.6 }}
            />
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            variants={itemVariants}
          >
            Meet Our Expert Team
          </motion.h2>
          <motion.p
            className="max-w-2xl mx-auto text-gray-600 text-lg"
            variants={itemVariants}
          >
            Our talented team of professionals is dedicated to delivering
            exceptional results
          </motion.p>
        </motion.div>

        <div className="md:hidden">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={teamMembers[currentSlide].image}
                alt={teamMembers[currentSlide].name}
                width={400}
                height={500}
                className="w-full h-[700px] object-cover"
              />
            </motion.div>

            <motion.div
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/50 to-transparent p-8"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="text-white">
                <h3 className="text-3xl font-bold mb-2">
                  {teamMembers[currentSlide].name}
                </h3>
                <p className="text-xl mb-2 text-white/90">
                  {teamMembers[currentSlide].role}
                </p>
                <p className="text-white/80 mb-6">
                  {teamMembers[currentSlide].bio}
                </p>
                <div className="flex gap-4">
                  <SocialButton
                    icon={<FacebookIcon className="w-5 h-5 text-white" />}
                    delay={0.2}
                  />
                  <SocialButton
                    icon={<InstagramIcon className="w-5 h-5 text-white" />}
                    delay={0.3}
                  />
                  <SocialButton
                    icon={<LinkedinIcon className="w-5 h-5 text-white" />}
                    delay={0.4}
                  />
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              onClick={() =>
                setCurrentSlide((prev) =>
                  prev === 0 ? teamMembers.length - 1 : prev - 1
                )
              }
              className="w-12 h-12 rounded-full border-2 border-[#DE2329] flex items-center justify-center text-[#DE2329] hover:bg-[#DE2329] hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="w-5 h-5" />
            </motion.button>
            <motion.button
              onClick={() =>
                setCurrentSlide((prev) =>
                  prev === teamMembers.length - 1 ? 0 : prev + 1
                )
              }
              className="w-12 h-12 rounded-full border-2 border-[#DE2329] flex items-center justify-center text-[#DE2329] hover:bg-[#DE2329] hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        <motion.div
          className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="relative group rounded-2xl overflow-hidden shadow-lg"
              variants={itemVariants}
              onHoverStart={() => setHoveredMember(index)}
              onHoverEnd={() => setHoveredMember(null)}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={500}
                  className="w-full h-[400px] object-cover"
                />
              </motion.div>

              <AnimatePresence>
                {hoveredMember === index && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent p-6 flex flex-col justify-end"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-white">
                      <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                      <p className="text-lg text-white/90 mb-2">
                        {member.role}
                      </p>
                      <p className="text-sm text-white/80 mb-4">{member.bio}</p>

                      <div className="flex items-center gap-3 mb-4">
                        <motion.button
                          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Mail className="w-4 h-4 text-white" />
                        </motion.button>
                        <div className="h-4 w-px bg-white/20" />
                        <div className="flex gap-2">
                          {Object.entries(member.socialLinks).map(
                            ([platform], i) => (
                              <motion.a
                                key={platform}
                                href="#"
                                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                {platform === "facebook" && (
                                  <FacebookIcon className="w-4 h-4 text-white" />
                                )}
                                {platform === "instagram" && (
                                  <InstagramIcon className="w-4 h-4 text-white" />
                                )}
                                {platform === "linkedin" && (
                                  <LinkedinIcon className="w-4 h-4 text-white" />
                                )}
                              </motion.a>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
