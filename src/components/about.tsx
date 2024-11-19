import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";

export default function About() {
  const circleOneImage = "/img/about-img.png";

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative w-full">
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[600px] mx-auto">
            <div className="w-full h-full rounded-lg overflow-hidden  ">
              <Image
                src={circleOneImage}
                alt="Nature Image"
                width={600}
                height={600}
                className="object-contain w-full h-full"
              />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <span className="text-[#E84E36] font-serif text-2xl">
            About Business
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#002A18] leading-tight">
            Smart and effective business solutions.
          </h2>
          <p className="text-gray-600 text-lg sm:text-xl">
            We are excited for our work and how it positively impacts clients.
            With over 12 years of experience we have been constantly providing
            excellent solutions.
          </p>

          <ul className="space-y-4">
            {[
              "Managed Services and Products",
              "Flexibility and Adaptability",
              "Competitive Advantage",
              "Custom design and branding services",
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#E84E36]/10 flex items-center justify-center">
                  <Check className="w-3 h-3 text-[#E84E36]" />
                </span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex gap-4 pt-4">
            <Link
              href="/services"
              className="bg-[#E84E36] text-white px-6 py-3 rounded-md hover:bg-[#d64530] transition-colors"
            >
              Our services
            </Link>
            <Link
              href="/discover"
              className="border-2 border-gray-200 text-black px-6 py-3 rounded-md hover:bg-gray-50 transition-colors"
            >
              Discover More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
