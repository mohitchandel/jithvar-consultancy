"use client";

import { useState } from "react";
import { Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactUsSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const contactInfoVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const formVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
    focus: {
      scale: 1.02,
      transition: { duration: 0.2 },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={headerVariants}
        >
          <motion.p
            className="text-[#DE2329] text-2xl sofia"
            variants={headerVariants}
          >
            Contact us
          </motion.p>
        </motion.div>

        <motion.h2
          className="text-5xl font-bold text-center"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Get a FREE 2hrs consultation by our experts
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-8xl mx-auto mt-[5%]">
          <motion.div
            className="grid bg-[#DE2329] grid-cols-4 gap-4"
            variants={contactInfoVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="col-span-2"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/img/contact-img.png"
                alt="Contact us"
                className="object-cover w-full h-full"
              />
            </motion.div>
            <div className="col-span-2 bg-[#DE2329] p-6 rounded-lg space-y-4 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="md:text-xl text-sm font-semibold text-white underline">
                  Keep in touch?
                </h3>
                <motion.p
                  className="md:text-xl text-sm text-[#f6c1af]"
                  whileHover={{ x: 5 }}
                >
                  226010 Gominagar, 1st Floor, Lucknow UP,India
                </motion.p>
              </motion.div>

              <motion.div
                className="space-y-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <h4 className="md:text-xl text-sm font-semibold text-white underline mt-2">
                  Toll free customer care?
                </h4>
                <motion.p
                  className="flex items-center gap-2 md:text-xl text-sm text-[#f6c1af]"
                  whileHover={{ x: 5 }}
                >
                  <Phone className="w-4 h-4" />
                  18 xxxxxxxx
                </motion.p>
                <motion.p
                  className="flex items-center gap-2 md:text-xl text-sm text-[#f6c1af]"
                  whileHover={{ x: 5 }}
                >
                  <Phone className="w-4 h-4" />
                  18-XXXXXXXX
                </motion.p>
              </motion.div>

              <motion.div
                className="space-y-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <h4 className="md:text-xl text-sm font-semibold text-white underline">
                  Need live support?
                </h4>
                <motion.p
                  className="flex md:text-xl text-sm items-center gap-2 text-[#f6c1af]"
                  whileHover={{ x: 5 }}
                >
                  <Mail className="w-4 h-4" />
                  info@yourdomain.com
                </motion.p>
                <motion.p
                  className="flex md:text-xl text-sm items-center gap-2 text-[#f6c1af]"
                  whileHover={{ x: 5 }}
                >
                  <Mail className="w-4 h-4" />
                  help@yourdomain.com
                </motion.p>
              </motion.div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p
              className="text-4xl font-bold mb-12"
              variants={headerVariants}
            >
              Feel free to reach via contact us form.
            </motion.p>
            <motion.div variants={inputVariants}>
              <motion.input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-4 bg-white border border-white/20 rounded-lg text-gray-800"
                placeholder="Your name*"
                whileFocus="focus"
              />
            </motion.div>
            <motion.div variants={inputVariants}>
              <motion.input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-4 bg-white border border-white/20 rounded-lg text-gray-800"
                placeholder="Your email address*"
                whileFocus="focus"
              />
            </motion.div>
            <motion.div variants={inputVariants}>
              <motion.textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full p-4 bg-white border border-white/20 rounded-lg text-gray-800"
                placeholder="Your message"
                whileFocus="focus"
              />
            </motion.div>
            <motion.button
              type="submit"
              className="bg-gradient-to-r from-[#DE2329] to-[#A70909] text-white py-3 px-8 rounded-lg hover:bg-[#DE2329] transition-colors"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
