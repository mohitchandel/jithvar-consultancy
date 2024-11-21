import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export default function BlogNewsSection() {
  const blogPosts = [
    {
      title: "5 Ways Technology Has Improved Business Today",
      excerpt:
        "They play a role in making operations more seamless, bridging the gap between authorities, consumers and businesses. ...",
      image: "/img/blog-2.png",
      date: "February 28, 2024",
    },
    {
      title: "5 Ways Technology Has Improved Business Today",
      excerpt:
        "They play a role in making operations more seamless, bridging the gap between authorities, consumers and businesses. ...",
      image: "/img/blog-1.png",
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
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/3">
          <div className="mb-8">
            <span className="text-[#DE2329] font-serif text-2xl sofia">
              - Blogs & news
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">
              Interesting articles
              <br />
              updated daily
            </h2>
          </div>

          <div className="space-y-4">
            {recentPosts.map((post, index) => (
              <div key={index} className="flex items-center group">
                <ArrowRight className="w-4 h-4 mr-2 text-[#DE2329] flex-shrink-0" />
                <Link
                  href="#"
                  className="text-black hover:text-[#DE2329] transition-colors duration-200 text-xl"
                >
                  {post}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full md:w-2/3">
          <div className="grid grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md">
                <div className="flex flex-col h-full">
                  <div className="relative h-48 w-full">
                    <Image
                      src={post.image}
                      alt={post.title}
                      className="rounded-t-lg object-cover"
                      fill
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-gray-500 text-sm flex items-center gap-1">
                      <Calendar size={16} />
                      {post.date}
                    </p>
                    <h3 className="text-xl font-semibold mt-2 mb-3">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                    <Link
                      href="#"
                      className="inline-flex items-center text-[#DE2329] text-sm font-semibold"
                    >
                      Read more
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
