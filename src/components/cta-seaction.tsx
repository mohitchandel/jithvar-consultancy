import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative bg-[url('/img/cta-bg.png')] py-20 md:py-32 overflow-hidden bg-center bg-cover bg-no-repeat">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center text-white">
          <span className="text-[#E84E36] font-serif text-2xl">
            Talk to an Expert
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Do you have an emergency web
            <br />
            design service?
          </h2>
          <p className="text-xl mb-8">
            Need any kind Web & Design service,{" "}
            <Link href="/contact" className="text-[#E84E36] hover:underline">
              Contact us
            </Link>
            .
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              href="tel:+91xxxxxxxxxx"
              className="bg-[#E84E36] text-white px-6 py-3 rounded-md hover:bg-[#d64530] transition-colors"
            >
              +91 xxxxxxxxxx
            </Link>
            <Link
              href="/quote"
              className="border border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-[#002A18] transition-colors"
            >
              Request A Quote
            </Link>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-16 bg-contain bg-no-repeat bg-center"
        style={{
          backgroundImage: "url('/placeholder.svg')",
        }}
      />
    </section>
  );
}
