import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";

export default function About() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="relative w-[500px] h-[500px]">
            <div className="absolute inset-0 z-0">
              <svg
                viewBox="0 0 500 500"
                className="w-full h-full fill-[#E84E36]/20"
              >
                <path d="M500,250c0,138.071-111.929,250-250,250S0,388.071,0,250S111.929,0,250,0S500,111.929,500,250z">
                  <animate
                    attributeName="d"
                    dur="10s"
                    repeatCount="indefinite"
                    values="M500,250c0,138.071-111.929,250-250,250S0,388.071,0,250S111.929,0,250,0S500,111.929,500,250z;
                            M500,250c0,138.071-161.929,200-300,200S0,388.071,0,250S111.929,50,250,50S500,111.929,500,250z;
                            M500,250c0,138.071-111.929,250-250,250S0,388.071,0,250S111.929,0,250,0S500,111.929,500,250z"
                  />
                </path>
              </svg>
            </div>

            <div className="absolute top-0 left-0 w-96 h-96 rounded-full overflow-hidden border-8 border-white shadow-lg">
              <Image
                src="/placeholder.svg"
                alt="Business meeting"
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute bottom-20 right-20 w-72 h-72 rounded-full overflow-hidden border-8 border-white shadow-lg">
              <Image
                src="/placeholder.svg"
                alt="Team collaboration"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <span className="text-[#E84E36] font-serif text-2xl">
            About Business
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#002A18] leading-tight">
            Smart and effective business solutions.
          </h2>
          <p className="text-gray-600 text-lg">
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
