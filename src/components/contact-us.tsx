"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";

export default function ContactUsSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="bg-black text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-2">
          Get a FREE 2hrs consultation by our experts
        </h2>
        <p className="text-xl mb-12">Feel free to reach via contact us form.</p>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="grid grid-cols-3 gap-4 bg-[#E84E36] p-6 rounded-lg">
              <div className="col-span-2 space-y-4">
                <h3 className="text-xl font-semibold">Keep in touch?</h3>
                <p>226010 Gominagar, 1st Floor, Lucknow UP,India</p>
                <div>
                  <h4 className="font-semibold">Toll free customer care?</h4>
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    18 xxxxxxxx
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    18-XXXXXXXX
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">Need live support?</h4>
                  <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    info@yourdomain.com
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    help@yourdomain.com
                  </p>
                </div>
              </div>
              <div className="col-span-1">
                <Image
                  src="/placeholder.svg"
                  alt="Contact us"
                  width={150}
                  height={200}
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium">
                Your name*
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 bg-white text-black rounded-md"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium">
                Your email address*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 bg-white text-black rounded-md"
                placeholder="Your email address"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium"
              >
                Your message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full p-3 bg-white text-black rounded-md"
                placeholder="Your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#E84E36] text-white py-3 px-6 rounded-md hover:bg-[#d64530] transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
