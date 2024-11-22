import React from "react";
import {
  Monitor,
  Code,
  Megaphone,
  BarChart,
  Pen,
  Smartphone,
  LucideIcon,
} from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
}) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white/10 p-6 transition-all duration-300 hover:bg-white/20 hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-4">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-[#DE2329]">
          <Icon className="h-6 w-6" />
        </div>
      </div>
      <h3 className="mb-3 text-xl font-bold text-white">{title}</h3>
      <p className="text-white/80">{description}</p>
      <div className="mt-4">
        <button className="text-white hover:text-white/80 transition-colors duration-300 text-sm font-semibold">
          Read more
        </button>
      </div>
    </div>
  );
};

interface ServiceType {
  icon: LucideIcon;
  title: string;
  description: string;
}

const Services: React.FC = () => {
  const services: ServiceType[] = [
    {
      icon: Monitor,
      title: "Website Development",
      description:
        "We Take Responsibility Of Your Best Online Presence By Our Unique Website Development Methods.",
    },
    {
      icon: Code,
      title: "Software Development",
      description:
        "We Are Master Of Our Work. We Know What Solution Best Suits Your Business For Less Efforts And Max Productivity.",
    },
    {
      icon: Megaphone,
      title: "Branding Promotion",
      description:
        "We Design Perfect Marketing Material For Your Email And Make Sure Their Inbox Delivery.",
    },
    {
      icon: BarChart,
      title: "Digital Marketing",
      description:
        "Our Digital Marketing Services Are Designed To Help Businesses Of All Sizes Increase Their Online Presence, Attract More Traffic.",
    },
    {
      icon: Pen,
      title: "UI/UX & Graphics Design",
      description:
        "Our UI/UX And Graphics Designing Services That Reflects Your Brand's Personality, Values, And Vision",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Best Mobile App Development Company In Lucknow Providing Various Application Development Services To Its Customers.",
    },
  ];

  return (
    <section className="bg-black px-4 py-16 md:py-24">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h4 className="text-white/90 text-lg mb-2">Our Services</h4>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Crafting Digital Experiences with
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Design & Development Excellence
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
