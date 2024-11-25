"use client";
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import {
  Pen,
  TabletSmartphone,
  Code2,
  Monitor,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "../ui/button";

const services = [
  {
    id: "01",
    title: "UI/UX Design Project",
    icon: <Pen className="w-5 h-5" />,
    description:
      "Crafting intuitive and engaging digital experiences that put users first. Our UI/UX design process combines aesthetic excellence with functional simplicity, resulting in interfaces that not only look beautiful but drive meaningful interactions and boost user satisfaction.",
    image: "/img/uiux-proj.png",
    stats: [
      { label: "Projects Completed", value: "150+" },
      { label: "User Satisfaction", value: "98%" },
      { label: "Award-Winning Designs", value: "12" },
    ],
    details: [
      "User Research & Analysis",
      "Wireframing & Prototyping",
      "Interactive Design",
      "Usability Testing",
    ],
  },
  {
    id: "02",
    title: "Mobile Development Project",
    icon: <TabletSmartphone className="w-5 h-5" />,
    description:
      "Creating robust and scalable design systems that ensure consistency across your digital ecosystem. Our systematic approach to design helps organizations maintain brand coherence while accelerating development workflows.",
    image: "/img/mobile-app-proj.png",
    stats: [
      { label: "Components Created", value: "500+" },
      { label: "Design Efficiency", value: "80%" },
      { label: "Team Adoption", value: "100%" },
    ],
    details: [
      "Component Libraries",
      "Style Guidelines",
      "Documentation",
      "Team Workshops",
    ],
  },
  {
    id: "03",
    title: "Software Development Project",
    icon: <Code2 className="w-5 h-5" />,
    description:
      "Transforming ideas into compelling visual stories that capture attention and communicate your brand's essence. From brand identities to marketing materials, we create designs that leave lasting impressions.",
    image: "/img/software-proj.png",
    stats: [
      { label: "Brand Identities", value: "200+" },
      { label: "Client Retention", value: "95%" },
      { label: "Industry Awards", value: "25" },
    ],
    details: [
      "Brand Identity Design",
      "Marketing Collateral",
      "Social Media Graphics",
      "Print Design",
    ],
  },
  {
    id: "04",
    title: "Web Development Project",
    icon: <Monitor className="w-5 h-5" />,
    description:
      "Building powerful, scalable web applications using cutting-edge technologies. Our development team transforms designs into seamless, high-performance digital experiences that drive business growth.",
    image: "/img/web-proj.png",
    stats: [
      { label: "Successful Launches", value: "300+" },
      { label: "Code Quality", value: "99%" },
      { label: "Performance Score", value: "95" },
    ],
    details: [
      "Frontend Development",
      "Backend Integration",
      "Performance Optimization",
      "Maintenance & Support",
    ],
  },
];

function Portfolio() {
  const [hoveredId, setHoveredId] = useState("01");

  return (
    <div className="w-full container mx-auto px-6 py-24">
      <div className="mb-16 max-w-2xl animate-fade-in">
        <h4 className="text-lg mb-2 font-unbounded text-[#FC2B46]">
          Our Portfolio
        </h4>
        <div className="text-sm text-gray-600 mb-2"></div>
        <h2 className="text-4xl font-semibold mb-4 animate-slide-up capitalize font-unbounded">
          See What we can do
        </h2>
      </div>

      <div className="space-y-2">
        {services.map((service, index) => (
          <Card
            key={service.id}
            className={`
              border-[1.5px] border-[#1F2937] bg-[#1F2937] shadow-none transition-all duration-500 ease-in-out
              animate-slide-up
              ${hoveredId === service.id ? "bg-[#FDFFFC]" : "bg-transparent"}
            `}
            style={{
              animationDelay: `${index * 100}ms`,
            }}
            onMouseEnter={() => setHoveredId(service.id)}
          >
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-8">
                  <span className="text-sm font-light">{service.id}</span>
                  <div className="flex items-center gap-3">
                    <span
                      className={`
                      transform transition-transform duration-300
                      ${hoveredId === service.id ? "rotate-12" : ""}
                    `}
                    >
                      {service.icon}
                    </span>
                    <h3 className="text-xl font-semibold font-unbounded">
                      {service.title}
                    </h3>
                  </div>
                </div>
                <Button>
                  See Detail <ArrowUpRight />
                </Button>
              </div>

              <div
                className={`
                transition-all duration-500 ease-in-out overflow-hidden
                ${
                  hoveredId === service.id
                    ? "max-h-[600px] mt-8 opacity-100"
                    : "max-h-0 opacity-0"
                }
              `}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="overflow-hidden rounded-lg">
                      <img
                        src={service.image}
                        alt={`${service.title} Preview`}
                        className={`
                          w-full object-cover h-64 transform transition-transform duration-700
                          ${
                            hoveredId === service.id ? "scale-100" : "scale-110"
                          }
                        `}
                      />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      {service.stats.map((stat, index) => (
                        <div
                          key={index}
                          className={`
                            text-center transform transition-all duration-500 delay-${
                              index * 100
                            }
                            ${
                              hoveredId === service.id
                                ? "translate-y-0 opacity-100"
                                : "translate-y-4 opacity-0"
                            }
                          `}
                        >
                          <div className="text-2xl font-semibold font-unbounded">
                            {stat.value}
                          </div>
                          <div className="text-sm text-gray-600">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-6">
                    <p
                      className={`
                      text-gray-600 leading-relaxed transition-all duration-500
                      ${
                        hoveredId === service.id
                          ? "translate-y-0 opacity-100"
                          : "translate-y-4 opacity-0"
                      }
                    `}
                    >
                      {service.description}
                    </p>
                    <div>
                      <h4 className="text-lg font-semibold mb-4 font-unbounded">
                        What we provide:
                      </h4>
                      <ul className="space-y-2">
                        {service.details.map((detail, index) => (
                          <li
                            key={index}
                            className={`
                              flex items-center gap-2 transition-all duration-500
                              ${
                                hoveredId === service.id
                                  ? "translate-x-0 opacity-100"
                                  : "translate-x-4 opacity-0"
                              }
                            `}
                            style={{ transitionDelay: `${index * 100}ms` }}
                          >
                            <span className="w-1 h-1 bg-black rounded-full"></span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
