import Image from "next/image";

export default function TeamMembersSection() {
  const teamMembers = [
    {
      name: "Jane Doe",
      role: "UI/UX Designer",
      image: "/placeholder.svg",
    },
    {
      name: "John Smith",
      role: "Web Developer",
      image: "/placeholder.svg",
    },
    {
      name: "Emily Johnson",
      role: "Graphic Designer",
      image: "/placeholder.svg",
    },
    {
      name: "Michael Brown",
      role: "Project Manager",
      image: "/placeholder.svg",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-12">
        <span className="text-[#E84E36] font-serif text-2xl">Team</span>
        <h2 className="text-4xl md:text-5xl font-bold text-[#002A18] mt-4">
          Meet our team members
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="relative group">
            <div className="relative aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
              <Image
                src={member.image}
                alt={member.name}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-sm">{member.role}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
