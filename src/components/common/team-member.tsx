import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Linkedin, ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function TeamMembersSection() {
  const teamMembers = [
    {
      name: "Ishant Sharma",
      role: "Web Designer",
      image: "/img/team-one.png",
    },
    {
      name: "Ishant Sharma",
      role: "Web Designer",
      image: "/img/team-two.png",
    },
    {
      name: "Ishant Sharma",
      role: "Web Designer",
      image: "/img/team-three.png",
    },
    {
      name: "Ishant Sharma",
      role: "Web Designer",
      image: "/img/team-four.png",
    },
    {
      name: "Ishant Sharma",
      role: "Web Designer",
      image: "/img/team-one.png",
    },
    {
      name: "Ishant Sharma",
      role: "Web Designer",
      image: "/img/team-two.png",
    },
  ];

  return (
    <section className="relative min-h-screen px-6 py-24">
      <div className="absolute inset-0 bg-[url('/img/team-bg.png')] bg-contain bg-center bg-no-repeat"></div>
      <div className="absolute inset-0 bg-[#1F2937] opacity-90"></div>
      <div className="relative z-10">
        <div className="grid lg:grid-cols-[1fr,2fr] gap-12 container mx-auto">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight font-unbounded">
              Meet our team
            </h2>
            <p className="text-gray-400 text-md leading-relaxed max-w-md">
              Meet the passionate minds behind Jitvar! Our team of skilled
              designers, developers, and strategists is dedicated to bringing
              your ideas to life with creativity, precision, and innovation.
            </p>
            <Button>
              Join Us Today <ArrowUpRight />
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="space-y-4">
                <div className="aspect-square relative overflow-hidden rounded-lg">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-white text-xl font-semibold font-unbounded">
                    {member.name}
                  </h3>
                  <p className="text-[#FDFFFC]">{member.role}</p>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="text-[#FDFFFC] hover:text-white transition-colors"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="text-[#FDFFFC] hover:text-white transition-colors"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="text-[#FDFFFC] hover:text-white transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
