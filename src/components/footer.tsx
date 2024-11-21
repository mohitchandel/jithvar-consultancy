import Link from "next/link";

export default function Footer() {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Terms", href: "/terms" },
    { name: "Privacy", href: "/privacy" },
    { name: "Policy", href: "/policy" },
    { name: "Contact", href: "/contact" },
  ];

  const usefulLinks = [
    ["Home", "About"],
    ["Services", "Portfolio"],
    ["Contact", "About Us"],
    ["Our Services", "Expert Team"],
    ["Contact Us", "Latest News"],
  ];

  return (
    <footer className="bg-[#1A1A1A] text-white">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:flex md:flex-col md:items-center">
            <div className="flex items-start space-x-3 md:items-center">
              <img
                src="/img/locationIcon.svg"
                alt="Location"
                className="w-5 h-5 mt-1 md:mt-0 md:w-12 md:h-12"
              />
              <div className="">
                <h2 className="text-base font-bold mb-1 ">Find us</h2>
                <p className="text-sm text-gray-400">
                  C-3/81, 2nd Floor, SPA Tower, Vibhuti Khand, Gomti Nagar,
                  Lucknow. 226010
                </p>
              </div>
            </div>
          </div>

          <div className="md:flex md:flex-col md:items-center">
            <div className="flex items-start space-x-3 md:items-center">
              <img
                src="/img/phoneIcon.svg"
                alt="Phone"
                className="w-5 h-5 mt-1 md:mt-0 md:w-12 md:h-12"
              />
              <div className="">
                <h2 className="text-base font-bold mb-1 ">Call us</h2>
                <p className="text-sm text-gray-400">790-5590-238</p>
              </div>
            </div>
          </div>

          <div className="md:flex md:flex-col md:items-center">
            <div className="flex items-start space-x-3 md:items-center">
              <img
                src="/img/emailIcon.svg"
                alt="Email"
                className="w-5 h-5 mt-1 md:mt-0 md:w-12 md:h-12"
              />
              <div className="">
                <h2 className="text-base font-bold mb-1">Mail us</h2>
                <p className="text-sm text-gray-400">Hello@Jithvar.Com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 my-8"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="">
            <Link href="/" className="text-2xl font-bold mb-4 inline-block">
              Logo
            </Link>
            <p className="text-sm text-gray-400 mb-6">
              Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do
              eiusmod tempor incididuntut consec tetur adipisicing elit, Lorem
              ipsum dolor sit amet.
            </p>
            <h3 className="text-lg font-semibold mb-4">Follow us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="40" height="40" rx="20" fill="#3B5998" />
                  <path
                    d="M23.7188 20H21.375V27H18.25V20H15.6875V17.125H18.25V14.9062C18.25 12.4062 19.75 11 22.0312 11C23.125 11 24.2812 11.2188 24.2812 11.2188V13.6875H23C21.75 13.6875 21.375 14.4375 21.375 15.25V17.125H24.1562L23.7188 20Z"
                    fill="white"
                  />
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="40" height="40" rx="20" fill="#55ACEE" />
                  <path
                    d="M26.3438 15.75C26.3438 15.9062 26.3438 16.0312 26.3438 16.1875C26.3438 20.5312 23.0625 25.5 17.0312 25.5C15.1562 25.5 13.4375 24.9688 12 24.0312C12.25 24.0625 12.5 24.0938 12.7812 24.0938C14.3125 24.0938 15.7188 23.5625 16.8438 22.6875C15.4062 22.6562 14.1875 21.7188 13.7812 20.4062C14 20.4375 14.1875 20.4688 14.4062 20.4688C14.6875 20.4688 15 20.4062 15.25 20.3438C13.75 20.0312 12.625 18.7188 12.625 17.125V17.0938C13.0625 17.3438 13.5938 17.4688 14.125 17.5C13.2188 16.9062 12.6562 15.9062 12.6562 14.7812C12.6562 14.1562 12.8125 13.5938 13.0938 13.125C14.7188 15.0938 17.1562 16.4062 19.875 16.5625C19.8125 16.3125 19.7812 16.0625 19.7812 15.8125C19.7812 14 21.25 12.5312 23.0625 12.5312C24 12.5312 24.8438 12.9062 25.4688 13.5625C26.1875 13.4062 26.9062 13.125 27.5312 12.75C27.2812 13.5312 26.7812 14.1562 26.0938 14.5625C26.75 14.5 27.4062 14.3125 27.9688 14.0625C27.5312 14.7188 26.9688 15.2812 26.3438 15.75Z"
                    fill="white"
                  />
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="40" height="40" rx="20" fill="#DE2329" />
                  <path
                    d="M22.0625 18.1562C22.0938 18.4688 22.1562 18.75 22.1562 19.1562C22.1562 22.5938 19.8438 25 16.375 25C13.0625 25 10.375 22.3438 10.375 19C10.375 15.6875 13.0625 13 16.375 13C18 13 19.3438 13.5938 20.4062 14.5938L18.7812 16.1562C18.3438 15.7188 17.5625 15.2188 16.375 15.2188C14.3438 15.2188 12.6562 16.9062 12.6562 19C12.6562 21.125 14.3438 22.8125 16.375 22.8125C18.75 22.8125 19.6562 21.0938 19.7812 20.2188H16.375V18.1562H22.0625ZM27.8438 18.3438H29.5938V20.0938H27.8438V21.8438H26.0938V20.0938H24.3438V18.3438H26.0938V16.625H27.8438V18.3438Z"
                    fill="white"
                  />
                </svg>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">
              Useful Links
              <span className="block w-20 border-b-4 border-[#DE2329] mt-1"></span>
            </h3>
            <div className="grid grid-cols-2 gap-y-2 gap-x-8">
              {usefulLinks.map((row, rowIndex) =>
                row.map((item, colIndex) => (
                  <Link
                    key={`${rowIndex}-${colIndex}`}
                    href="#"
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    {item}
                  </Link>
                ))
              )}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">
              Subscribe
              <span className="block w-20 border-b-4 border-[#DE2329] mt-1"></span>
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Don&apos;t miss to subscribe to our new feeds, kindly fill the
              form below.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-grow bg-[#333333] text-white px-4 py-2 text-sm"
              />
              <button
                type="submit"
                className="bg-[#DE2329] text-white px-4 py-2 text-sm hover:bg-[#d64530] transition-colors"
              >
                <svg
                  width="23"
                  height="24"
                  viewBox="0 0 23 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.8505 4.02992L18.4202 17.9628C18.3053 18.9254 17.734 19.2447 16.8727 18.8599L12.1298 16.0748L10.2514 18.3461C10.022 18.6295 9.86902 18.8183 9.39895 18.8678L9.22648 14.3493L16.616 6.14131C16.9692 5.80175 16.4767 5.63749 16.0425 6.02876L6.62219 13.4133L2.16688 12.5422C1.19531 12.3419 1.0852 11.7054 2.1896 11.114L18.5103 2.78822C19.248 2.40824 19.9812 2.80644 19.8505 4.02992Z"
                    fill="white"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="bg-[#202020] px-4 py-6">
        <div className="container mx-auto">
          <div className="flex flex-col items-center space-y-4 md:flex-row md:justify-between md:space-y-0">
            <p className="text-sm">
              Copyright © 2024, All Right Reserved{" "}
              <span className="text-[#DE2329]">JCS</span>
            </p>
            <nav>
              <ul className="flex flex-wrap justify-center gap-4">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
