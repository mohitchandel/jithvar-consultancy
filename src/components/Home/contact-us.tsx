"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactUsSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 3000);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      title: "Our Location",
      content: "226010 Gominagar, 1st Floor, Lucknow UP, India",
      icon: MapPin,
    },
    {
      title: "Customer Support",
      content: ["18 xxxxxxxx", "18-XXXXXXXX"],
      icon: Phone,
    },
    {
      title: "Email Us",
      content: ["info@yourdomain.com", "help@yourdomain.com"],
      icon: Mail,
    },
  ];

  return (
    <section className="bg-black text-white min-h-screen relative py-20 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(30deg,#DE2329_12%,transparent_12.5%,transparent_87%,#DE2329_87.5%,#DE2329_100%)] bg-[length:300px_300px]" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="text-[#DE2329] text-2xl block mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Contact us
          </motion.span>
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Get a FREE 2hrs consultation
            <br />
            by our experts
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#DE2329] to-[#961216] rounded-3xl overflow-hidden"
          >
            <div className="p-8 md:p-12">
              <div className="grid grid-cols-2 gap-6 mb-12">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="col-span-2 md:col-span-1"
                >
                  <img
                    src="/img/contact-img.png"
                    alt="Contact us"
                    className="w-full h-48 object-cover rounded-2xl"
                  />
                </motion.div>
                <div className="col-span-2 md:col-span-1 flex items-center">
                  <h3 className="text-2xl font-bold">
                    Let&apos;s discuss your project and make something
                    incredible together.
                  </h3>
                </div>
              </div>

              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-white/10 p-3 rounded-xl group-hover:bg-white/20 transition-colors">
                        <info.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2">
                          {info.title}
                        </h4>
                        {Array.isArray(info.content) ? (
                          info.content.map((item, i) => (
                            <motion.p
                              key={i}
                              className="text-white/80 hover:text-white transition-colors cursor-pointer"
                              whileHover={{ x: 5 }}
                            >
                              {item}
                            </motion.p>
                          ))
                        ) : (
                          <motion.p
                            className="text-white/80 hover:text-white transition-colors cursor-pointer"
                            whileHover={{ x: 5 }}
                          >
                            {info.content}
                          </motion.p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6 bg-white/5 p-8 md:p-12 rounded-3xl backdrop-blur-sm border border-white/10"
            >
              <h3 className="text-3xl font-bold mb-8">Send us a message</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative group"
                >
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-[#DE2329] transition-colors"
                    placeholder="Your name"
                    required
                  />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative group"
                >
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-[#DE2329] transition-colors"
                    placeholder="Your email"
                    required
                  />
                </motion.div>
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative group"
              >
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-[#DE2329] transition-colors"
                  placeholder="Subject"
                  required
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative group"
              >
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-[#DE2329] transition-colors resize-none"
                  placeholder="Your message"
                  required
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="relative w-full bg-gradient-to-r from-[#DE2329] to-[#961216] text-white py-4 px-8 rounded-xl font-medium
                          hover:opacity-90 transition-all duration-300 disabled:opacity-70"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <AnimatePresence mode="wait">
                  {isSubmitting ? (
                    <motion.span
                      key="submitting"
                      className="flex items-center justify-center gap-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </motion.span>
                  ) : isSuccess ? (
                    <motion.span
                      key="success"
                      className="flex items-center justify-center gap-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <CheckCircle className="w-5 h-5" />
                      Message Sent!
                    </motion.span>
                  ) : (
                    <motion.span
                      key="default"
                      className="flex items-center justify-center gap-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <Send className="w-5 h-5" />
                      Send Message
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
