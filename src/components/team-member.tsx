import Image from "next/image";

export default function TeamMembersSection() {
  const teamMembers = [
    {
      name: "Jane Doe",
      role: "UI/UX Designer",
      image: "/img/Cards.png",
    },
    {
      name: "John Smith",
      role: "Web Developer",
      image: "/img/Cards_1.png",
    },
    {
      name: "Emily Johnson",
      role: "Graphic Designer",
      image: "/img/Cards_2.png",
    },
    {
      name: "Michael Brown",
      role: "Project Manager",
      image: "/img/Cards_3.png",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-12">
        <span className="text-[#DE2329] font-serif text-2xl">Team</span>
        <h2 className="text-4xl md:text-5xl font-bold text-[#002A18] mt-4">
          Meet our team members
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="relative group">
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src={member.image}
                alt={member.name}
                width={300}
                height={300}
                className="transition-transform duration-300 group-hover:scale-110"
                objectFit="cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
