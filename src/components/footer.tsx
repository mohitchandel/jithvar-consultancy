import Link from "next/link";
import { Facebook, Twitter, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Terms", href: "/terms" },
    { name: "Privacy", href: "/privacy" },
    { name: "Policy", href: "/policy" },
    { name: "Contact", href: "/contact" },
  ];
  return (
    <footer className="bg-[#1A1A1A] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="flex flex-col items-start justify-center">
            <h2 className="text-2xl font-bold text-white  mt-4">Find Us</h2>
            <div className="flex items-center">
              <MapPin className="w-6 h-6 text-[#E84E36] mr-2" />
              <p className="text-sm">
                C-3/81, 2nd Floor, SPA Tower, Vibhuti Khand, Gomti Nagar,
                Lucknow. 226010
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold text-white mt-4 ">Call Us</h2>
            <div className="flex items-center">
              <Phone className="w-6 h-6 text-[#E84E36] mr-2" />
              <p className="text-sm">790-5590-238</p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold text-white mt-[20px]">Mail Us</h2>
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-[#E84E36] mr-2" />
              <p className="text-sm">Hello@Jithvar.Com</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-bold mb-4 inline-block">
              Logo
            </Link>
            <p className="text-sm text-gray-400 mb-4">
              Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do
              eiusmod tempor incididuntut consec tetur adipisicing elit,Lorem
              ipsum dolor sit amet.
            </p>
            <h3 className="text-xl font-semibold text-white mt-4">Follow us</h3>
            <div className="flex mt-4 space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Facebook className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter className="w-6 h-6" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">
              Useful Links
              <span className="block w-[80px] border-b-4 border-[#E84E36]"></span>
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {[
                "Home",
                "About",
                "Services",
                "Portfollo",
                "Contact",
                "About us",
                "Our Services",
                "Expert Team",
                "Contact Us",
                "Latest News",
              ].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">
              Subscribe
              <span className="block w-[80px] border-b-4 border-[#E84E36]"></span>
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Don&lsquo;t miss to subscribe to our new feeds, kindly fill the
              form below.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-grow bg-[#333333] text-white px-4 py-2 text-sm"
              />
              <button
                type="submit"
                className="bg-[#E84E36] text-white px-4 py-2 text-sm hover:bg-[#d64530] transition-colors"
              >
                <Mail className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="mx-auto px-4 py-6 bg-[#202020] ">
        <div className="flex flex-col max-w-7xl md:flex-row justify-between items-center gap-4 mx-auto">
          <div>
            <p className="text-sm">
              Copyright © 2024, All Right Reserved{" "}
              <span className="text-[#E84E36]">JCS</span>
            </p>
          </div>

          <nav>
            <ul className="flex items-center gap-6">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
