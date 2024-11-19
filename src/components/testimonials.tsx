"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Ishant Sharma",
      role: "Web Designer",
      rating: 5,
      feedback:
        "Objectively visualize error-free technology for B2B alignment. Monotonectally harness an expanded array of models via effective collaboration.",
      image: "/placeholder.svg",
    },
    {
      id: 2,
      name: "Ishant Sharma",
      role: "Web Designer",
      rating: 5,
      feedback:
        "Objectively visualize error-free technology for B2B alignment. Monotonectally harness an expanded array of models via effective collaboration.",
      image: "/placeholder.svg",
    },
    {
      id: 3,
      name: "Ishant Sharma",
      role: "Web Designer",
      rating: 5,
      feedback:
        "Objectively visualize error-free technology for B2B alignment. Monotonectally harness an expanded array of models via effective collaboration.",
      image: "/placeholder.svg",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-16">
        <span className="text-[#E84E36] font-serif text-2xl">
          Customer Feedback
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-[#002A18] mt-4">
          What Happy Clients Says
        </h2>
      </div>

      <Carousel
        opts={{
          align: "start",
          dragFree: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-6">
          {testimonials.map((testimonial) => (
            <CarouselItem
              key={testimonial.id}
              className="pl-6 md:basis-1/2 lg:basis-1/3"
            >
              <div className="bg-white p-6 rounded-lg shadow-lg flex">
                <div className="relative w-1/3 mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={100}
                    height={100}
                    className="object-cover rounded-lg"
                  />
                  <div className="absolute -bottom-3 -right-3 w-10 h-10 rounded-full bg-[#E84E36] flex items-center justify-center text-white font-bold text-sm">
                    66
                  </div>
                </div>
                <div className="w-2/3">
                  <p className="text-gray-600 mb-4 text-sm">
                    {testimonial.feedback}
                  </p>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#E84E36] text-[#E84E36]"
                      />
                    ))}
                  </div>
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
