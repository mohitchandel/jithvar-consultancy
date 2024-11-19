import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  return (
    <header className="container mx-auto px-4 py-4 flex items-center justify-between">
      <Link href="/" className="flex items-center">
        <span className="text-2xl font-bold">Logo</span>
        <span className="text-2xl font-bold text-[#E84E36]">.</span>
      </Link>

      <nav className="hidden md:flex items-center gap-8">
        <Link href="/" className="text-black hover:text-[#E84E36]">
          Home
        </Link>
        <Link href="/about" className="text-black hover:text-[#E84E36]">
          About Us
        </Link>
        <div className="relative group">
          <button className="flex items-center gap-1 text-black hover:text-[#E84E36]">
            Services
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
        <Link href="/testimonials" className="text-black hover:text-[#E84E36]">
          Testimonials
        </Link>
        <div className="relative group">
          <button className="flex items-center gap-1 text-black hover:text-[#E84E36]">
            Blogs
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
        <Link href="/contact" className="text-black hover:text-[#E84E36]">
          Contact
        </Link>
      </nav>

      <Link
        href="/talk-to-experts"
        className="bg-[#E84E36] text-white px-6 py-2 rounded-md hover:bg-[#d64530] transition-colors"
      >
        Talk To Experts
      </Link>
    </header>
  );
}
