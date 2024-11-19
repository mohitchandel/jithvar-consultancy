import Image from "next/image";
import Link from "next/link";

export default function Herobanner() {
  return (
    <div className="w-full min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <span className="text-[#E84E36] font-serif text-2xl">
              Welcome To Jithwar
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#002A18] leading-tight">
              Web Development &<br />
              Designing
            </h1>
            <p className="text-gray-600 max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <div className="flex gap-4">
              <Link
                href="/talk-to-experts"
                className="bg-[#E84E36] text-white px-6 py-3 rounded-md hover:bg-[#d64530] transition-colors"
              >
                Talk To Experts
              </Link>
              <Link
                href="/discover"
                className="border-2 border-gray-200 text-black px-6 py-3 rounded-md hover:bg-gray-50 transition-colors"
              >
                Discover More
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="relative w-full aspect-[4/3]">
              <Image
                src="/placeholder.svg"
                alt="Team collaborating"
                fill
                className="object-cover"
                style={{
                  clipPath: "polygon(0% 0%, 100% 0%, 100% 85%, 0% 100%)",
                  maskImage:
                    "url('data:image/svg+xml,%3Csvg width='100%' height='100%' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%' y1='0%' x2='100%' y2='100%'%3E%3Cstop offset='0%' style='stop-color:white;stop-opacity:1' /%3E%3Cstop offset='100%' style='stop-color:white;stop-opacity:0' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%' height='100%' fill='url(%23grad)' /%3E%3C/svg%3E')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
