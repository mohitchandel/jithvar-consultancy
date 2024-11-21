import { Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Herobanner() {
  return (
    <div className="w-full min-h-screen bg-white bg-[url('/img/hero-bg.png')] bg-center bg-contain">
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-6 ">
          <div className="space-y-6">
            <span className="text-[#DE2329] sofia text-2xl">
              Welcome To Jithwar
            </span>
            <h1 className="text-4xl font-roboto md:text-5xl lg:text-6xl font-bold text-[#002A18] leading-tight">
              Web Development &<br />
              Designing
            </h1>
            <p className="text-gray-600 max-w-xl mb-8">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <div className="flex gap-4 ">
              <Link
                href="/talk-to-experts"
                className="bg-gradient-to-r from-[#DE2329] to-[#A70909] text-white py-3 px-8 rounded-lg hover:bg-[#DE2329] transition-colors"
              >
                Talk To Experts
              </Link>
              <Link
                href="/discover"
                className="border-2 border-gray-900 text-black px-6 py-3 rounded-md hover:bg-gray-50 transition-colors"
              >
                Discover More
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="relative w-full aspect-[4/3]">
              <Image
                src="/img/hero-video.png"
                alt="Team collaborating"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex justify-center items-center">
                <button className="bg-red-600 p-6 rounded-full text-white shadow-lg hover:bg-red-700 transition-all">
                  <Play
                    className="w-10 h-10 text-white"
                    stroke="white"
                    fill="white"
                  />{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
