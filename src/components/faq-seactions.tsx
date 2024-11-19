"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const faqs = [
    {
      question: "What services does your agency provide?",
      answer:
        "Our agency offers a wide range of services including web design, web development, digital marketing, branding, and graphic design. We specialize in creating custom solutions tailored to each client's unique needs.",
    },
    {
      question: "How long does it typically take to complete a project?",
      answer:
        "Project timelines can vary depending on the scope and complexity of the work. A simple website might take 4-6 weeks, while a more complex web application could take 3-6 months. We provide detailed timelines during our initial consultation.",
    },
    {
      question: "Do you offer ongoing support and maintenance?",
      answer:
        "Yes, we offer ongoing support and maintenance packages for all our projects. This includes regular updates, security patches, and technical support to ensure your digital assets remain up-to-date and secure.",
    },
    {
      question: "What is your pricing structure?",
      answer:
        "Our pricing is project-based and depends on the specific requirements of each client. We provide detailed quotes after our initial consultation where we discuss your needs and objectives.",
    },
    {
      question: "Can you help with improving an existing website?",
      answer:
        "We offer website audits and improvement services. We can enhance your existing website's design, functionality, and performance to better meet your current business needs.",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-12">
        <span className="text-[#E84E36] font-serif text-2xl">FAQs</span>
        <h2 className="text-4xl md:text-5xl font-bold text-[#002A18] mt-4">
          Frequently asked questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger
              className="text-left text-lg font-semibold hover:no-underline"
              onClick={() =>
                setOpenItem(
                  openItem === `item-${index}` ? null : `item-${index}`
                )
              }
            >
              {faq.question}
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-gray-600">{faq.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
