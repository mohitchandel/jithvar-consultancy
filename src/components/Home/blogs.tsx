"use client";

import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const blogPosts = [
  {
    date: "March 26, 2024",
    category: "Branding",
    title: "Everything You Should Know About Return",
    image: "/img/blog-1.png?height=400&width=600",
    href: "#",
  },
  {
    date: "March 26, 2024",
    category: "Branding",
    title: "6 Big Commerce Design Tips For Big Results",
    image: "/img/blog-2.png?height=400&width=600",
    href: "#",
  },
  {
    date: "March 26, 2024",
    category: "Branding",
    title: "Four Steps to Conduct a Successful Usability",
    image: "/img/blog-1.png?height=400&width=600",
    href: "#",
  },
];

function BlogNewsSection() {
  return (
    <section className="py-24 px-4 bg-[#FDFFFC]">
      <div className="container mx-auto">
        <h4 className="text-lg mb-2 font-unbounded text-[#FC2B46]">Blogs</h4>
        <motion.h2
          className="text-4xl font-bold text-[#1F2937] mb-16 font-unbounded"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Read Our Articles and News
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Link href={post.href} className="block group">
                <Card className="border-0 bg-transparent overflow-hidden">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-[#1F2937] mb-3">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.category}</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-[#1F2937] mb-4 group-hover:text-[#FC2B46]  transition-colors font-unbounded">
                      {post.title}
                    </h3>
                    <div className="flex items-center text-[#1F2937]  transition-colors">
                      <span className="text-sm font-medium mr-2">
                        READ MORE
                      </span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogNewsSection;
