"use client";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

export default function FAQSection() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const faqs = [
    {
      question: "What services does your agency provide?",
      answer:
        "Our agency offers a wide range of services including web design, web development, digital marketing, branding, and graphic design. We specialize in creating custom solutions tailored to each client's unique needs.",
    },
    {
      question: "What services does your agency provide?",
      answer:
        "Our agency offers comprehensive digital services tailored to your needs.",
    },
    {
      question: "What services does your agency provide?",
      answer:
        "Our agency offers comprehensive digital services tailored to your needs.",
    },
    {
      question: "What services does your agency provide?",
      answer:
        "Our agency offers comprehensive digital services tailored to your needs.",
    },
    {
      question: "What services does your agency provide?",
      answer:
        "Our agency offers comprehensive digital services tailored to your needs.",
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

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    hover: {
      scale: 1.02,
      transition: { duration: 0.2 },
    },
  };

  const dotVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
      },
    },
  };

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <motion.div
        className="max-w-3xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.div className="text-center mb-12" variants={headerVariants}>
          <motion.span
            className="text-[#DE2329] font-serif text-3xl sofia"
            variants={headerVariants}
          >
            FAQs
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-[#002A18] mt-4"
            variants={headerVariants}
          >
            Frequently asked questions
          </motion.h2>
        </motion.div>
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-full shadow-sm mb-4 relative"
            variants={itemVariants}
            whileHover="hover"
          >
            <Accordion
              type="single"
              collapsible
              className="w-full"
              value={openItem || undefined}
              onValueChange={(value) => setOpenItem(value)}
            >
              <AccordionItem
                value={`item-${index}`}
                className="rounded-xl border-[1px] border-black"
              >
                <motion.div
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <AccordionTrigger className="text-left text-base px-8 py-4 hover:no-underline">
                    <motion.span
                      className="pr-8 text-xl"
                      initial={false}
                      animate={{
                        color:
                          openItem === `item-${index}` ? "#DE2329" : "#000000",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {faq.question}
                    </motion.span>
                  </AccordionTrigger>
                </motion.div>
                <AccordionContent className="px-8">
                  <motion.p
                    className="text-gray-600 pb-4"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {faq.answer}
                  </motion.p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <motion.div
              className="absolute right-8 top-[40%] -translate-y-1/2 w-4 h-4 bg-red-500 rounded-full"
              variants={dotVariants}
              initial={false}
              animate={{
                scale: openItem === `item-${index}` ? 1.2 : 1,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
