"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";

const menuItems = {
  services: [
    {
      title: "PHP Outsourcing",
      items: [
        { name: "Vanilla PHP", href: "#vanilla-php" },
        { name: "Laravel Framework", href: "#laravel" },
        { name: "Yii Framework", href: "#yii" },
        { name: "Codeigniter Framework", href: "#codeigniter" },
        { name: "CakePHP Framework", href: "#cakephp" },
      ],
    },
    {
      title: "Java Script",
      items: [
        { name: "React Js", href: "#react" },
        { name: "Angular", href: "#angular" },
        { name: "VueJS", href: "#vue" },
        { name: "NodeJS", href: "#node" },
      ],
    },
    {
      title: "CMS Development",
      items: [
        { name: "Wordpress", href: "#wordpress" },
        { name: "WooCommerce", href: "#woocommerce" },
        { name: "Open Cart", href: "#opencart" },
        { name: "Magento/Magento 2", href: "#magento" },
        { name: "Zoho Development", href: "#zoho" },
      ],
    },
    {
      title: "Mobile Applications",
      items: [
        { name: "Android Native", href: "#android" },
        { name: "iOS Native", href: "#ios" },
        { name: "React Native", href: "#react-native" },
        { name: "Flutter", href: "#flutter" },
      ],
    },
    {
      title: "Digital Branding",
      items: [
        { name: "Search Engine Optimisation", href: "#seo" },
        { name: "Graphic Designer", href: "#design" },
        { name: "Content Writer", href: "#content" },
        { name: "Google Adwords", href: "#adwords" },
        { name: "Facebook Ads", href: "#facebook" },
        { name: "Instagram Ads", href: "#instagram" },
        { name: "Personal Assistant", href: "#assistant" },
      ],
    },
  ],
};

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services", hasMegaMenu: true },
  { name: "Blogs", href: "#blogs" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const MegaMenu = () => (
    <div className="fixed left-0 right-0 bg-gray-900 text-white shadow-xl">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-5 gap-8">
          {menuItems.services.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="font-semibold text-lg border-b border-gray-700 pb-2">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Link href={item.href} className="mega-menu-item">
                      <span className="text-gray-300 hover:text-white">
                        {item.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const MobileServices = () => (
    <div className="pl-6 space-y-6 mt-2 bg-gray-900 text-white py-4 rounded-lg">
      {menuItems.services.map((section, index) => (
        <div key={index}>
          <h3 className="font-semibold text-sm border-b border-gray-700 pb-2">
            {section.title}
          </h3>
          <ul className="space-y-2 mt-2">
            {section.items.map((item, itemIndex) => (
              <li key={itemIndex} className="relative overflow-hidden">
                <Link
                  href={item.href}
                  className="group flex items-center text-sm text-gray-300 hover:text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="absolute left-0 w-5 h-px bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-200"></span>
                  <span className="pl-0 group-hover:pl-7 transition-padding duration-200">
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-200 bg-white py-[1rem] ${
        hasScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center">
          <div className="flex-shrink-0">
            <img src="/jithvar-logo.png" alt="Logo" className="h-16" />
          </div>

          <div className="flex md:hidden ml-auto">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          <div className="hidden md:flex flex-grow justify-center">
            <div className="flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <div key={index} className="relative group">
                  {link.hasMegaMenu ? (
                    <div className="relative group">
                      <button className="flex items-center text-md font-medium text-gray-900 group-hover:text-primary py-6">
                        <span>{link.name}</span>
                        <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                      </button>
                      <div className="hidden group-hover:block absolute top-full left-0 w-screen">
                        <MegaMenu />
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-md font-medium text-gray-900 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:block flex-shrink-0 ml-8">
            <Button variant="default">Talk To Experts</Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden border-t mt-2">
            <div className="px-2 pt-2 pb-3 space-y-2">
              {navLinks.map((link, index) => (
                <div key={index}>
                  {link.hasMegaMenu ? (
                    <>
                      <button
                        className="flex items-center w-full px-3 py-2 text-base font-medium text-gray-900 hover:text-primary"
                        onClick={() =>
                          setIsMobileServicesOpen(!isMobileServicesOpen)
                        }
                      >
                        {link.name}
                        <ChevronDown
                          className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                            isMobileServicesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {isMobileServicesOpen && <MobileServices />}
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-primary"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="px-3 py-2">
                <Button variant="default" className="w-full">
                  Talk To Experts
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
