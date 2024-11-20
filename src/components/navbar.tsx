import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  return (
    <header className="container mx-auto px-4 py-4 flex items-center justify-between">
      <Link href="/" className="flex items-center">
        <span className="text-2xl font-bold">Logo</span>
        <span className="text-2xl font-bold text-[#DE2329]">.</span>
      </Link>

      <nav className="hidden md:flex items-center gap-8">
        <Link href="/" className="text-black hover:text-[#DE2329]">
          Home
        </Link>
        <Link href="/about" className="text-black hover:text-[#DE2329]">
          About Us
        </Link>
        <div className="relative group">
          <button className="flex items-center gap-1 text-black hover:text-[#DE2329]">
            Services
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
        <Link href="/testimonials" className="text-black hover:text-[#DE2329]">
          Testimonials
        </Link>
        <div className="relative group">
          <button className="flex items-center gap-1 text-black hover:text-[#DE2329]">
            Blogs
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
        <Link href="/contact" className="text-black hover:text-[#DE2329]">
          Contact
        </Link>
      </nav>

      <Link
        href="/talk-to-experts"
        className="bg-gradient-to-r from-[#DE2329] to-[#A70909] text-white py-3 px-8 rounded-lg hover:bg-[#DE2329] transition-colors"
      >
        Talk To Experts
      </Link>
    </header>
  );
}
