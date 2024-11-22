"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Plus, Minus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQ {
  question: string;
  answer: string;
  category?: string;
}

export default function FAQSection() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const faqs: FAQ[] = [
    {
      question: "What services does your agency provide?",
      answer:
        "Our agency offers a comprehensive suite of digital services including web design, development, digital marketing, and branding. We create custom solutions tailored to each client's unique requirements and business goals.",
      category: "Services",
    },
    {
      question: "How long does a typical project take to complete?",
      answer:
        "Project timelines vary based on complexity and scope. A typical website project takes 6-8 weeks, while larger applications may take 3-4 months. We'll provide a detailed timeline during our initial consultation.",
      category: "Process",
    },
    {
      question: "What is your pricing structure?",
      answer:
        "We offer flexible pricing models tailored to your needs. This includes project-based pricing, retainer arrangements, and milestone-based payment plans. Each quote is customized based on project requirements.",
      category: "Pricing",
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer:
        "Yes, we offer comprehensive post-launch support and maintenance packages. This includes regular updates, security monitoring, performance optimization, and technical support.",
      category: "Support",
    },
    {
      question: "What makes your agency different from others?",
      answer:
        "We combine technical expertise with creative innovation, delivering solutions that drive real business results. Our collaborative approach and commitment to excellence set us apart.",
      category: "Company",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gray-50/50">
        <div className="absolute inset-0 bg-[linear-gradient(30deg,#DE2329_12%,transparent_12.5%,transparent_87%,#DE2329_87.5%,#DE2329_100%)] bg-[length:60px_60px] opacity-5" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          className="max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <motion.span
              className="inline-block text-[#DE2329] font-serif text-2xl relative mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              FAQs
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
              Frequently Asked Questions
            </motion.h2>
            <motion.p
              className="text-gray-600 text-lg max-w-2xl mx-auto"
              variants={itemVariants}
            >
              Find answers to common questions about our services, process, and
              solutions
            </motion.p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={itemVariants} className="group">
                <Accordion
                  type="single"
                  collapsible
                  className="w-full"
                  value={openItem || undefined}
                  onValueChange={(value) => setOpenItem(value)}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="border-none"
                  >
                    <motion.div
                      className={`
                        relative rounded-2xl bg-white shadow-sm 
                        ${
                          openItem === `item-${index}`
                            ? "bg-gradient-to-r from-[#DE2329]/5 to-transparent"
                            : ""
                        }
                        transition-all duration-300 ease-in-out
                      `}
                      whileHover={{ y: -2 }}
                    >
                      <AccordionTrigger className="w-full text-left hover:no-underline px-8 py-6">
                        <div className="flex items-center justify-between w-full pr-8">
                          <div className="flex-1">
                            {faq.category && (
                              <motion.span
                                className="text-sm text-[#DE2329] mb-2 block"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                              >
                                {faq.category}
                              </motion.span>
                            )}
                            <motion.span
                              className={`text-xl font-medium transition-colors duration-300
                                ${
                                  openItem === `item-${index}`
                                    ? "text-[#DE2329]"
                                    : "text-gray-900"
                                }
                              `}
                            >
                              {faq.question}
                            </motion.span>
                          </div>
                          <motion.div
                            initial={false}
                            animate={{
                              rotate: openItem === `item-${index}` ? 45 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                            className={`
                              flex items-center justify-center w-8 h-8 rounded-full
                              ${
                                openItem === `item-${index}`
                                  ? "bg-[#DE2329] text-white"
                                  : "bg-gray-100 text-gray-500"
                              }
                              transition-colors duration-300
                            `}
                          >
                            {openItem === `item-${index}` ? (
                              <Minus className="w-5 h-5" />
                            ) : (
                              <Plus className="w-5 h-5" />
                            )}
                          </motion.div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-8">
                        <AnimatePresence>
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <motion.p
                              className="text-gray-600 pb-6 pr-8"
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              {faq.answer}
                            </motion.p>
                          </motion.div>
                        </AnimatePresence>
                      </AccordionContent>
                    </motion.div>
                  </AccordionItem>
                </Accordion>
              </motion.div>
            ))}
          </div>

          <motion.div className="text-center mt-12" variants={itemVariants}>
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <motion.button
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#DE2329] text-white rounded-full font-medium hover:bg-[#DE2329]/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
              <ChevronDown className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
