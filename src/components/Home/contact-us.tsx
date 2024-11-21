"use client";

import { useState } from "react";
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
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <p className="text-[#DE2329] text-2xl sofia">Contact us</p>
        </div>

        <h2 className="text-5xl font-bold  text-center">
          Get a FREE 2hrs consultation by our experts
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-8xl mx-auto mt-[5%]">
          <div className="grid bg-[#DE2329] grid-cols-4 gap-4">
            <div className="col-span-2">
              <img
                src="/img/contact-img.png"
                alt="Contact us"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="col-span-2 bg-[#DE2329] p-6 rounded-lg space-y-4 flex flex-col justify-center">
              <h3 className="text-xl font-semibold text-white underline">
                Keep in touch?
              </h3>
              <p className="text-xl text-[#f6c1af]">
                226010 Gominagar, 1st Floor, Lucknow UP,India
              </p>

              <div className="space-y-1">
                <h4 className="text-xl font-semibold text-white underline mt-2">
                  Toll free customer care?
                </h4>
                <p className="flex items-center gap-2 text-xl text-[#f6c1af]">
                  <Phone className="w-4 h-4" />
                  18 xxxxxxxx
                </p>
                <p className="flex items-center gap-2 text-xl text-[#f6c1af]">
                  <Phone className="w-4 h-4" />
                  18-XXXXXXXX
                </p>
              </div>

              <div className="space-y-1">
                <h4 className="text-xl font-semibold text-white underline">
                  Need live support?
                </h4>
                <p className="flex text-xl items-center gap-2 text-[#f6c1af]">
                  <Mail className="w-4 h-4" />
                  info@yourdomain.com
                </p>
                <p className="flex text-xl items-center gap-2 text-[#f6c1af]">
                  <Mail className="w-4 h-4" />
                  help@yourdomain.com
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <p className="text-4xl font-bold mb-12 ">
              Feel free to reach via contact us form.
            </p>
            <div>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-4 bg-white border border-white/20 rounded-lg text-gray-800"
                placeholder="Your name*"
              />
            </div>
            <div>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-4 bg-white border border-white/20 rounded-lg text-gray-800"
                placeholder="Your email address*"
              />
            </div>
            <div>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full p-4 bg-white border border-white/20 rounded-lg text-gray-800"
                placeholder="Your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-[#DE2329] to-[#A70909] text-white py-3 px-8 rounded-lg hover:bg-[#DE2329] transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
