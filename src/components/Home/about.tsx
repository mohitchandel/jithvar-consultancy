"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Activity, Users, Building, Trophy, ArrowUpRight } from "lucide-react";

interface StatProps {
  value: string;
  label: string;
  icon: React.ReactNode;
}

const StatCard = ({ value, label, icon }: StatProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="relative rounded-2xl p-6 transition-all duration-300"
  >
    <div className="flex items-center gap-4">
      <div className="flex-shrink-0">
        <div className="p-3 rounded-xl bg-[#FC2B46]/10">
          {React.cloneElement(icon as React.ReactElement, {
            className: "w-6 h-6 text-[#FC2B46]",
          })}
        </div>
      </div>
      <div>
        <div className="text-3xl font-bold tracking-tight text-[#1F2937] font-unbounded">
          {value}
        </div>
        <div className="text-sm text-gray-600 mt-1">{label}</div>
      </div>
    </div>
  </motion.div>
);

const About = () => {
  const stats = [
    { value: "14+", label: "Years of experience", icon: <Activity /> },
    { value: "3k", label: "Projects delivered", icon: <Trophy /> },
    { value: "1k+", label: "Satisfied clients", icon: <Users /> },
    { value: "20", label: "Companies trust us", icon: <Building /> },
  ];

  return (
    <section className="py-24 bg-[#FDFFFC]">
      <div className="container mx-auto px-4">
        <div className="space-y-16 max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block text-[#FC2B46] text-md font-semibold tracking-wider uppercase font-unbounded mb-3">
                About us
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-[#1F2937] leading-tight font-unbounded">
                We help to accelerate your business growth
              </h2>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#FC2B46]/20 to-transparent z-10" />
                <img
                  src="/img/new-bg.jpg"
                  alt="Team collaboration"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-[#FC2B46]/5 rounded-full blur-3xl -z-10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h3 className="text-xl font-semibold text-[#1F2937] capitalize font-unbounded">
                We design disruptive brands for organizations that aspire to
                have a positive social and environmental impact
              </h3>

              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  Seamlessly formulate exceptional &quot;outside the box&quot;
                  thinking business e-commerce. Phasfluorescently engage
                  end-to-end platforms before integrated functionalities.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Seamlessly formulate exceptional &quot;outside the box&quot;
                  thinking business e-commerce. Phasfluorescently engage
                  end-to-end platforms before integrated functionalities.
                </p>
              </div>

              <Button size="lg" className="bg-[#FC2B46]">
                Talk To Expert <ArrowUpRight />
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
