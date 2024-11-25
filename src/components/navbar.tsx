"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";

const menuItems = {
  services: [
    {
      title: "Development",
      description: "Custom software solutions for your business needs",
      icon: "🚀",
      items: [
        {
          name: "Web Development",
          href: "#web",
          description: "Modern, responsive websites",
        },
        {
          name: "Mobile Development",
          href: "#mobile",
          description: "iOS and Android apps",
        },
        {
          name: "Cloud Solutions",
          href: "#cloud",
          description: "Scalable cloud infrastructure",
        },
      ],
    },
    {
      title: "Design",
      description: "Create beautiful and functional experiences",
      icon: "🎨",
      items: [
        {
          name: "UI Design",
          href: "#ui",
          description: "Intuitive user interfaces",
        },
        {
          name: "UX Design",
          href: "#ux",
          description: "Seamless user experiences",
        },
        {
          name: "Branding",
          href: "#branding",
          description: "Memorable brand identity",
        },
      ],
    },
    {
      title: "Consulting",
      description: "Expert guidance for your digital journey",
      icon: "💡",
      items: [
        {
          name: "Digital Strategy",
          href: "#strategy",
          description: "Strategic digital planning",
        },
        {
          name: "Tech Consulting",
          href: "#tech",
          description: "Technology advisory services",
        },
        {
          name: "Technical Audit",
          href: "#audit",
          description: "In-depth system analysis",
        },
      ],
    },
    {
      title: "Additional Services",
      description: "Comprehensive digital solutions",
      icon: "🔧",
      items: [
        {
          name: "SEO Optimization",
          href: "#seo",
          description: "Improve search visibility",
        },
        {
          name: "Content Creation",
          href: "#content",
          description: "Engaging digital content",
        },
        {
          name: "Digital Marketing",
          href: "#marketing",
          description: "Results-driven campaigns",
        },
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
    <div className="fixed left-0 right-0 bg-white shadow-xl border-t">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 gap-8">
          {menuItems.services.map((section, index) => (
            <div
              key={index}
              className="p-4 hover:bg-gray-50 rounded-lg transition-all duration-200"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="text-primary text-lg">{section.icon}</div>
                <h3 className="font-semibold text-lg text-gray-900">
                  {section.title}
                </h3>
              </div>
              <p className="text-sm text-gray-500 mb-4">
                {section.description}
              </p>
              <div className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <Link
                    key={itemIndex}
                    href={item.href}
                    className="block group"
                  >
                    <div className="text-primary font-medium">{item.name}</div>
                    <div className="text-sm text-gray-500">
                      {item.description}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const MobileServices = () => (
    <div className="pl-6 space-y-6 mt-2 bg-gray-50 py-4 rounded-lg">
      {menuItems.services.map((section, index) => (
        <div key={index}>
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-xl">{section.icon}</span>
            <h3 className="font-semibold text-sm">{section.title}</h3>
          </div>
          <ul className="space-y-2 pl-4">
            {section.items.map((item, itemIndex) => (
              <li key={itemIndex}>
                <Link
                  href={item.href}
                  className="block text-sm text-gray-600 hover:text-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
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
                      <div className="hidden group-hover:block absolute top-full left-0 w-full">
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
