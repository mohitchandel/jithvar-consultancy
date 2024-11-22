"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { motion } from "framer-motion";

interface BlogPost {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime?: string;
  category?: string;
}

export default function BlogNewsSection() {
  const blogPosts: BlogPost[] = [
    {
      title: "5 Ways Technology Has Improved Business Today",
      excerpt:
        "They play a role in making operations more seamless, bridging the gap between authorities, consumers and businesses...",
      image: "/img/blog-2.png",
      date: "February 28, 2024",
      readTime: "5 min read",
      category: "Technology",
    },
    {
      title: "The Future of Digital Transformation",
      excerpt:
        "They play a role in making operations more seamless, bridging the gap between authorities, consumers and businesses...",
      image: "/img/blog-1.png",
      date: "February 28, 2024",
      readTime: "4 min read",
      category: "Innovation",
    },
  ];

  const recentPosts = [
    "Ideas for High Returns on Investment",
    "How Technology Made Businesses More Efficient",
    "Data Secure on Transitioning to a New Office",
    "The Keys to Persuading Customers Nowadays",
    "Blockchain Technology Effects on Logistics Sector?",
  ];

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardHoverVariants = {
    rest: { scale: 1 },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="bg-gray-50 py-20 h-screen flex justify-center items-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div
            className="lg:w-1/3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="mb-10" variants={fadeInUpVariants}>
              <span className="text-[#DE2329] font-serif text-2xl block mb-3">
                Blogs & news
              </span>
              <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                Interesting articles
                <br />
                updated daily
              </h2>
            </motion.div>

            <motion.div
              className="space-y-6"
              variants={staggerContainerVariants}
            >
              {recentPosts.map((post, index) => (
                <motion.div
                  key={index}
                  className="group flex items-center gap-4 bg-white p-4 rounded-xl transition-all duration-300 hover:shadow-lg"
                  variants={fadeInUpVariants}
                  whileHover={{
                    x: 10,
                    backgroundColor: "rgba(222, 35, 41, 0.02)",
                  }}
                >
                  <span className="text-[#DE2329] font-bold opacity-60">
                    0{index + 1}
                  </span>
                  <Link
                    href="#"
                    className="text-gray-800 group-hover:text-[#DE2329] transition-colors duration-300 font-medium"
                  >
                    {post}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:w-2/3 grid md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainerVariants}
          >
            {blogPosts.map((post, index) => (
              <motion.article
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg"
                variants={cardHoverVariants}
                initial="rest"
                whileHover="hover"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                  {post.category && (
                    <span className="absolute top-4 left-4 bg-[#DE2329] text-white px-4 py-1 rounded-full text-sm">
                      {post.category}
                    </span>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    {post.readTime && (
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    )}
                  </div>

                  <h3 className="text-xl font-bold mb-3 line-clamp-2 hover:text-[#DE2329] transition-colors duration-300">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <Link
                    href="#"
                    className="inline-flex items-center text-[#DE2329] font-medium group"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-2" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
