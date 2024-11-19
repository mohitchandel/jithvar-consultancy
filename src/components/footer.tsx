import Link from "next/link";
import { Facebook, Twitter, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="flex items-center">
            <MapPin className="w-6 h-6 text-[#E84E36] mr-2" />
            <p className="text-sm">
              C-3/81, 2nd Floor, SPA Tower, Vibhuti Khand, Gomti Nagar, Lucknow.
              226010
            </p>
          </div>
          <div className="flex items-center">
            <Phone className="w-6 h-6 text-[#E84E36] mr-2" />
            <p className="text-sm">790-5590-238</p>
          </div>
          <div className="flex items-center">
            <Mail className="w-6 h-6 text-[#E84E36] mr-2" />
            <p className="text-sm">Hello@Jithvar.Com</p>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-bold mb-4 inline-block">
              Logo
            </Link>
            <p className="text-sm text-gray-400 mb-4">
              Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do
              eiusmod tempor incididuntut consec tetur adipisicing elit,Lorem
              ipsum dolor sit amet.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Facebook className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter className="w-6 h-6" />
              </Link>
              {/* Add Google+ icon here if needed */}
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {[
                "Home",
                "Services",
                "Contact",
                "Our Services",
                "Contact Us",
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

          {/* Subscribe */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
            <p className="text-sm text-gray-400 mb-4">
              Don't miss to subscribe to our new feeds, kindly fill the form
              below.
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
    </footer>
  );
}
