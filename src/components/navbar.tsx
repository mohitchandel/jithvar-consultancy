"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-200 ${
        hasScrolled
          ? " bg-white bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex h-16 items-center">
          <div className="flex-shrink-0">
            <img src="/jithvar-logo.png" alt="Logo" className="h-12" />
          </div>
          <div className="flex md:hidden ml-auto">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md hover:bg-gray-100"
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
              <Link
                href="#home"
                className="text-md font-medium hover:text-primary"
              >
                Home
              </Link>
              <Link
                href="#about"
                className="text-md font-medium hover:text-primary"
              >
                About Us
              </Link>
              <div className="relative">
                <button
                  className="flex items-center text-md font-medium hover:text-primary"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>

                {isServicesOpen && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-screen max-w-4xl bg-white rounded-lg shadow-lg mt-2 p-6">
                    <div className="grid grid-cols-3 gap-8">
                      <div>
                        <h3 className="font-semibold mb-4">Development</h3>
                        <ul className="space-y-2">
                          <li>
                            <Link
                              href="#web"
                              className="text-md hover:text-primary"
                            >
                              Web Development
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#mobile"
                              className="text-md hover:text-primary"
                            >
                              Mobile Development
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#cloud"
                              className="text-md hover:text-primary"
                            >
                              Cloud Solutions
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-4">Design</h3>
                        <ul className="space-y-2">
                          <li>
                            <Link
                              href="#ui"
                              className="text-md hover:text-primary"
                            >
                              UI Design
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#ux"
                              className="text-md hover:text-primary"
                            >
                              UX Design
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#branding"
                              className="text-md hover:text-primary"
                            >
                              Branding
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-4">Consulting</h3>
                        <ul className="space-y-2">
                          <li>
                            <Link
                              href="#strategy"
                              className="text-md hover:text-primary"
                            >
                              Digital Strategy
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#tech"
                              className="text-md hover:text-primary"
                            >
                              Tech Consulting
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#audit"
                              className="text-md hover:text-primary"
                            >
                              Technical Audit
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <Link
                href="#testimonials"
                className="text-md font-medium hover:text-primary"
              >
                Testimonials
              </Link>
              <Link
                href="#blogs"
                className="text-md font-medium hover:text-primary"
              >
                Blogs
              </Link>
              <Link
                href="#contact"
                className="text-md font-medium hover:text-primary"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="hidden md:block flex-shrink-0">
            <Button variant="destructive">Talk To Experts</Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <Link
                href="#home"
                className="block px-3 py-2 text-base font-medium hover:text-primary"
              >
                Home
              </Link>
              <Link
                href="#about"
                className="block px-3 py-2 text-base font-medium hover:text-primary"
              >
                About Us
              </Link>
              <div>
                <button
                  className="flex items-center w-full px-3 py-2 text-base font-medium hover:text-primary"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  Services
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transform transition-transform ${
                      isServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isServicesOpen && (
                  <div className="pl-6 pb-2">
                    <div className="space-y-4">
                      <div>
                        <h3 className="px-3 py-2 font-semibold">Development</h3>
                        <Link
                          href="#web"
                          className="block px-3 py-2 text-sm hover:text-primary"
                        >
                          Web Development
                        </Link>
                        <Link
                          href="#mobile"
                          className="block px-3 py-2 text-sm hover:text-primary"
                        >
                          Mobile Development
                        </Link>
                        <Link
                          href="#cloud"
                          className="block px-3 py-2 text-sm hover:text-primary"
                        >
                          Cloud Solutions
                        </Link>
                      </div>
                      <div>
                        <h3 className="px-3 py-2 font-semibold">Design</h3>
                        <Link
                          href="#ui"
                          className="block px-3 py-2 text-sm hover:text-primary"
                        >
                          UI Design
                        </Link>
                        <Link
                          href="#ux"
                          className="block px-3 py-2 text-sm hover:text-primary"
                        >
                          UX Design
                        </Link>
                        <Link
                          href="#branding"
                          className="block px-3 py-2 text-sm hover:text-primary"
                        >
                          Branding
                        </Link>
                      </div>
                      <div>
                        <h3 className="px-3 py-2 font-semibold">Consulting</h3>
                        <Link
                          href="#strategy"
                          className="block px-3 py-2 text-sm hover:text-primary"
                        >
                          Digital Strategy
                        </Link>
                        <Link
                          href="#tech"
                          className="block px-3 py-2 text-sm hover:text-primary"
                        >
                          Tech Consulting
                        </Link>
                        <Link
                          href="#audit"
                          className="block px-3 py-2 text-sm hover:text-primary"
                        >
                          Technical Audit
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <Link
                href="#testimonials"
                className="block px-3 py-2 text-base font-medium hover:text-primary"
              >
                Testimonials
              </Link>
              <Link
                href="#blogs"
                className="block px-3 py-2 text-base font-medium hover:text-primary"
              >
                Blogs
              </Link>
              <Link
                href="#contact"
                className="block px-3 py-2 text-base font-medium hover:text-primary"
              >
                Contact
              </Link>
              <div className="px-3 py-2">
                <Button variant="destructive" className="w-full">
                  Talk To Experts
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      {(isServicesOpen || isMobileMenuOpen) && (
        <div
          className="fixed inset-0 bg-transparent"
          onClick={closeMobileMenu}
        />
      )}
    </nav>
  );
};

export default Navbar;
