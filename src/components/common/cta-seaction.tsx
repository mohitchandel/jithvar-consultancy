import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

function CTASection() {
  return (
    <section className="relative bg-[#1F2937] min-h-[400px] flex items-center justify-center overflow-hidden py-24">
      <div className="relative max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight font-unbounded">
          Begin Your Journey
          <br />
          With Jitvhar
        </h2>

        <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
          Unlock the power of innovative design and seamless development. At
          Jitvhar, we bring your ideas to life with creativity, precision, and a
          commitment to excellence.
        </p>

        <Button size="lg">
          Get In Touch
          <ArrowUpRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
}

export default CTASection;
