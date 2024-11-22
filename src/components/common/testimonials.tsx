"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  rating: number;
  feedback: string;
  image: string;
  company?: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  isMobile?: boolean;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  isMobile = false,
}) => (
  <motion.div
    className={`bg-white rounded-2xl overflow-hidden ${
      isMobile ? "p-6" : "p-8"
    } shadow-lg relative group h-full`}
    variants={itemVariants}
    whileHover={{ y: -5, transition: { duration: 0.3 } }}
  >
    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#DE2329]/5 to-transparent rounded-bl-full" />
    <Quote className="absolute top-6 right-6 w-8 h-8 text-[#DE2329]/10" />

    <div className="flex flex-col h-full">
      <div className="flex items-start gap-6 mb-6">
        <div className="relative flex-shrink-0">
          <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl overflow-hidden relative">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              fill
              className="object-cover"
            />
          </div>
          <motion.div
            className="absolute -bottom-3 -right-3 bg-[#DE2329] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
          >
            {String(testimonial.id).padStart(2, "0")}
          </motion.div>
        </div>

        <div className="flex gap-1">
          {[...Array(testimonial.rating)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * i }}
            >
              <Star size={16} className="fill-[#DE2329] text-[#DE2329]" />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="flex-1">
        <motion.p
          className="text-gray-600 text-lg leading-relaxed mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          &quot;{testimonial.feedback}&quot;
        </motion.p>
      </div>

      <div className="border-t border-gray-100 pt-4 mt-auto">
        <motion.h3
          className="font-bold text-lg text-gray-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {testimonial.name}
        </motion.h3>
        <motion.div
          className="text-sm text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <p>{testimonial.role}</p>
          {testimonial.company && (
            <p className="text-[#DE2329]">{testimonial.company}</p>
          )}
        </motion.div>
      </div>
    </div>
  </motion.div>
);

const Testimonials: React.FC = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = useState(0);

  React.useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setActiveIndex(api.selectedScrollSnap());
    });
  }, [api]);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Ishant Sharma",
      role: "Web Designer",
      company: "Tech Solutions Inc.",
      rating: 5,
      feedback:
        "Objectively visualize error-free technology for B2B alignment. Monotonectally harness an expanded array of models via effective collaboration.",
      image: "/img/client.png",
    },
    {
      id: 2,
      name: "Priya Patel",
      role: "UI/UX Designer",
      company: "Creative Studios",
      rating: 5,
      feedback:
        "The team's attention to detail and creative approach helped transform our vision into reality. Their work exceeded our expectations.",
      image: "/img/client.png",
    },
    {
      id: 3,
      name: "Rajesh Kumar",
      role: "Product Manager",
      company: "Innovation Labs",
      rating: 5,
      feedback:
        "Outstanding service and exceptional results. They truly understand client needs and deliver solutions that make a real impact.",
      image: "/img/client.png",
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/img/service-about-bg.png')] bg-cover opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white/40" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.span
            className="inline-block text-[#DE2329] font-serif text-2xl mb-4 relative"
            variants={itemVariants}
          >
            Customer Feedback
            <motion.div
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-[#DE2329]"
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              transition={{ duration: 0.6 }}
            />
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900"
            variants={itemVariants}
          >
            What Our Happy Clients Say
          </motion.h2>
        </motion.div>

        <div className="md:hidden">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id}>
                  <div className="h-full">
                    <TestimonialCard
                      testimonial={testimonial}
                      isMobile={true}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <div className="hidden md:block">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="pl-4 basis-1/2">
                  <div className="h-full">
                    <TestimonialCard testimonial={testimonial} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-end gap-4 mt-8">
              <CarouselPrevious className="position-static rounded-full w-12 h-12 border-2 border-[#DE2329] text-[#DE2329] hover:bg-[#DE2329] hover:text-white transition-colors" />
              <CarouselNext className="position-static rounded-full w-12 h-12 border-2 border-[#DE2329] text-[#DE2329] hover:bg-[#DE2329] hover:text-white transition-colors" />
            </div>
          </Carousel>
        </div>

        <motion.div
          className="hidden md:flex justify-center mt-8 gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {testimonials.map((_, index) => (
            <motion.div
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === activeIndex ? "bg-[#DE2329]" : "bg-gray-300"
              }`}
              animate={{
                scale: index === activeIndex ? 1.5 : 1,
              }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
