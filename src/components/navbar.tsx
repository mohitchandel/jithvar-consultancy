"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <nav className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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
              <a
                href="#home"
                className="text-sm font-medium hover:text-primary"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-sm font-medium hover:text-primary"
              >
                About Us
              </a>
              <div className="relative">
                <button
                  className="flex items-center text-sm font-medium hover:text-primary"
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
                            <a
                              href="#web"
                              className="text-sm hover:text-primary"
                            >
                              Web Development
                            </a>
                          </li>
                          <li>
                            <a
                              href="#mobile"
                              className="text-sm hover:text-primary"
                            >
                              Mobile Development
                            </a>
                          </li>
                          <li>
                            <a
                              href="#cloud"
                              className="text-sm hover:text-primary"
                            >
                              Cloud Solutions
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-4">Design</h3>
                        <ul className="space-y-2">
                          <li>
                            <a
                              href="#ui"
                              className="text-sm hover:text-primary"
                            >
                              UI Design
                            </a>
                          </li>
                          <li>
                            <a
                              href="#ux"
                              className="text-sm hover:text-primary"
                            >
                              UX Design
                            </a>
                          </li>
                          <li>
                            <a
                              href="#branding"
                              className="text-sm hover:text-primary"
                            >
                              Branding
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-4">Consulting</h3>
                        <ul className="space-y-2">
                          <li>
                            <a
                              href="#strategy"
                              className="text-sm hover:text-primary"
                            >
                              Digital Strategy
                            </a>
                          </li>
                          <li>
                            <a
                              href="#tech"
                              className="text-sm hover:text-primary"
                            >
                              Tech Consulting
                            </a>
                          </li>
                          <li>
                            <a
                              href="#audit"
                              className="text-sm hover:text-primary"
                            >
                              Technical Audit
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <a
                href="#testimonials"
                className="text-sm font-medium hover:text-primary"
              >
                Testimonials
              </a>
              <a
                href="#blogs"
                className="text-sm font-medium hover:text-primary"
              >
                Blogs
              </a>
              <a
                href="#contact"
                className="text-sm font-medium hover:text-primary"
              >
                Contact
              </a>
            </div>
          </div>

          <div className="hidden md:block flex-shrink-0">
            <Button variant="destructive">Talk To Experts</Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <a
                href="#home"
                className="block px-3 py-2 text-base font-medium hover:text-primary"
              >
                Home
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-base font-medium hover:text-primary"
              >
                About Us
              </a>
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
                        <a
                          href="#web"
                          className="block px-3 py-2 text-sm hover:text-primary"
                        >
                          Web Development
                        </a>
                        <a
                          href="#mobile"
                          className="block px-3 py-2 text-sm hover:text-primary"
                        >
                          Mobile Development
                        </a>
                        <a
                          href="#cloud"
                          className="block px-3 py-2 text-sm hover:text-primary"
                        >
                          Cloud Solutions
                        </a>
                      </div>
                      <div>
                        <h3 className="px-3 py-2 font-semibold">Design</h3>
                        <a
                          href="#ui"
                          className="block px-3 py-2 text-sm hover:text-primary"
                        >
                          UI Design
                        </a>
                        <a
                          href="#ux"
                          className="block px-3 py-2 text-sm hover:text-primary"
                        >
                          UX Design
                        </a>
                        <a
                          href="#branding"
                          className="block px-3 py-2 text-sm hover:text-primary"
                        >
                          Branding
                        </a>
                      </div>
                      <div>
                        <h3 className="px-3 py-2 font-semibold">Consulting</h3>
                        <a
                          href="#strategy"
                          className="block px-3 py-2 text-sm hover:text-primary"
                        >
                          Digital Strategy
                        </a>
                        <a
                          href="#tech"
                          className="block px-3 py-2 text-sm hover:text-primary"
                        >
                          Tech Consulting
                        </a>
                        <a
                          href="#audit"
                          className="block px-3 py-2 text-sm hover:text-primary"
                        >
                          Technical Audit
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <a
                href="#testimonials"
                className="block px-3 py-2 text-base font-medium hover:text-primary"
              >
                Testimonials
              </a>
              <a
                href="#blogs"
                className="block px-3 py-2 text-base font-medium hover:text-primary"
              >
                Blogs
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-base font-medium hover:text-primary"
              >
                Contact
              </a>
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
