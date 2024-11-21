"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export default function BlogNewsSection() {
  const blogPosts = [
    {
      title: "5 Ways Technology Has Improved Business Today",
      excerpt:
        "They play a role in making operations more seamless, bridging the gap between authorities, consumers and businesses. ...",
      image: "/img/blog-2.png",
      date: "February 28, 2024",
    },
    {
      title: "5 Ways Technology Has Improved Business Today",
      excerpt:
        "They play a role in making operations more seamless, bridging the gap between authorities, consumers and businesses. ...",
      image: "/img/blog-1.png",
      date: "February 28, 2024",
    },
  ];

  const recentPosts = [
    "Ideas for High Returns on Investment",
    "How Technology Made Businesses More Efficient",
    "Data Secure on Transitioning to a New Office",
    "The Keys to Persuading Customers Nowadays",
    "Blockchain Technology Effects on Logistics Sector?",
  ];

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const postListVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const postItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  const blogCardVariants = {
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
      y: -10,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 300,
      },
    },
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row gap-8">
        <motion.div
          className="w-full md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="mb-8" variants={headerVariants}>
            <motion.span
              className="text-[#DE2329] font-serif text-2xl sofia"
              variants={headerVariants}
            >
              - Blogs & news
            </motion.span>
            <motion.h2
              className="text-3xl font-bold text-gray-900 mt-2"
              variants={headerVariants}
            >
              Interesting articles
              <br />
              updated daily
            </motion.h2>
          </motion.div>

          <motion.div className="space-y-4" variants={postListVariants}>
            {recentPosts.map((post, index) => (
              <motion.div
                key={index}
                className="flex items-center group"
                variants={postItemVariants}
                whileHover={{ x: 10 }}
              >
                <motion.div
                  initial={{ x: 0 }}
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  <ArrowRight className="w-4 h-4 mr-2 text-[#DE2329] flex-shrink-0" />
                </motion.div>
                <Link
                  href="#"
                  className="text-black hover:text-[#DE2329] transition-colors duration-200 text-xl"
                >
                  {post}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="w-full md:w-2/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={postListVariants}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md"
                variants={blogCardVariants}
                whileHover="hover"
              >
                <div className="flex flex-col h-full">
                  <motion.div
                    className="relative h-48 w-full"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={post.image}
                      alt={post.title}
                      className="rounded-t-lg object-cover"
                      fill
                    />
                  </motion.div>
                  <motion.div
                    className="p-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <motion.p
                      className="text-gray-500 text-sm flex items-center gap-1"
                      variants={headerVariants}
                    >
                      <Calendar size={16} />
                      {post.date}
                    </motion.p>
                    <motion.h3
                      className="text-xl font-semibold mt-2 mb-3"
                      variants={headerVariants}
                    >
                      {post.title}
                    </motion.h3>
                    <motion.p
                      className="text-gray-600 text-sm mb-4"
                      variants={headerVariants}
                    >
                      {post.excerpt}
                    </motion.p>
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link
                        href="#"
                        className="inline-flex items-center text-[#DE2329] text-sm font-semibold"
                      >
                        Read more
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            repeatType: "reverse",
                          }}
                        >
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </motion.div>
                      </Link>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
