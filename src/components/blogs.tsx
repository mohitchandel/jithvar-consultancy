import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function BlogNewsSection() {
  const blogPosts = [
    {
      title: "5 Ways Technology Has Improved Business Today",
      excerpt:
        "They play a role in making operations more seamless, bridging the gap between authorities, consumers and businesses. ...",
      image: "/placeholder.svg",
      date: "February 28, 2024",
    },
    {
      title: "5 Ways Technology Has Improved Business Today",
      excerpt:
        "They play a role in making operations more seamless, bridging the gap between authorities, consumers and businesses. ...",
      image: "/placeholder.svg",
      date: "February 28, 2024",
    },
  ];

  const recentPosts = [
    "Ideas for High Returns on Investment",
    "How Technology Made Businesses More Efficient",
    "Data Secure on Transitioning to a New Office",
    "The Keys to Persuading Customers Nowadays",
    "Blockchain Technology Effects on Logistics Sector?",
  ];

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col md:flex-row justify-between items-start mb-12">
        <div>
          <span className="text-[#E84E36] font-serif text-2xl">
            Blogs & news
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#002A18] mt-4">
            Interesting articles
            <br />
            updated daily
          </h2>
        </div>
        <div className="mt-4 md:mt-0">
          <ul className="space-y-2">
            {recentPosts.map((post, index) => (
              <li
                key={index}
                className="flex items-center text-gray-600 hover:text-[#E84E36]"
              >
                <ArrowRight className="w-4 h-4 mr-2 text-[#E84E36]" />
                <Link href="#">{post}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden flex"
          >
            <div className="relative w-1/2">
              <Image
                src={post.image}
                alt={post.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="w-1/2 p-6">
              <p className="text-gray-500 text-sm mb-2">{post.date}</p>
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <Link
                href="#"
                className="text-[#E84E36] font-semibold hover:underline flex items-center"
              >
                Read more
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
