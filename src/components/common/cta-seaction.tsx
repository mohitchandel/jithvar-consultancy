import React from "react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      <div className="absolute inset-0 bg-[#001D08]" />

      <div
        className="absolute inset-0 bg-cover bg-center z-0 opacity-30"
        style={{
          backgroundImage: "url('/img/cta-bg.png')",
        }}
      />

      <div className="absolute top-0 left-0 w-full">
        <div
          className="w-full h-40 bg-white"
          style={{
            maskImage: "url('/img/pattern1.svg')",
            WebkitMaskImage: "url('/img/pattern1.svg')",
            maskSize: "cover",
            WebkitMaskSize: "cover",
            maskPosition: "bottom",
            WebkitMaskPosition: "bottom",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
          }}
        />
      </div>

      <div className="relative z-10 h-[600px] container mx-auto px-4 flex flex-col items-center justify-center  text-center py-20">
        <span className="text-[#DE2329] font-medium mb-2 text-2xl sofia">
          Talk to an Expert
        </span>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 max-w-3xl leading-tight">
          Do you have an emergency web design service?
        </h1>

        <p className="text-gray-200 mb-10 text-lg">
          Need any kind Web & Design service,{" "}
          <a href="#contact" className="text-red-500 hover:underline">
            Contact us.
          </a>
        </p>

        <div className="flex flex-col sm:flex-row gap-6 items-center">
          <Button
            variant="destructive"
            className="min-w-[200px] h-12 text-lg bg-red-600 hover:bg-red-700"
          >
            +91 xxxxxxxxx
          </Button>

          <Button
            variant="outline"
            className="min-w-[200px] h-12 text-lg border-2 bg-transparent text-white hover:bg-white/10 transition-colors"
          >
            Request A Quote
          </Button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full rotate-180">
        <div
          className="w-full h-32 bg-white"
          style={{
            maskImage: "url('/img/pattern1.svg')",
            WebkitMaskImage: "url('/img/pattern1.svg')",
            maskSize: "cover",
            WebkitMaskSize: "cover",
            maskPosition: "bottom",
            WebkitMaskPosition: "bottom",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
          }}
        />
      </div>
    </div>
  );
};

export default CTASection;
