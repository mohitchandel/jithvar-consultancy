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

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[#DE2329] font-serif text-2xl">FAQs</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#002A18] mt-4">
            Frequently asked questions
          </h2>
        </div>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-full shadow-sm mb-4 relative"
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
                <AccordionTrigger className="text-left text-base px-8 py-4 hover:no-underline ">
                  <span className="pr-8 text-xl">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-8">
                  <p className="text-gray-600 pb-4">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <div className="absolute right-8 top-1/2 -translate-y-1/2 w-2 h-2 bg-red-500 rounded-full" />
          </div>
        ))}
      </div>
    </section>
  );
}
