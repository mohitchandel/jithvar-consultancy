import About from "@/components/about";
import BlogNewsSection from "@/components/blogs";
import ContactUsSection from "@/components/contact-us";
import CTASection from "@/components/cta-seaction";
import FAQSection from "@/components/faq-seactions";
import Footer from "@/components/footer";
import Herobanner from "@/components/hero-banner";
import MarqueeSection from "@/components/marquee";
import Navbar from "@/components/navbar";
import Service from "@/components/service";
import ServiceCarousel from "@/components/service-carousel";
import TeamMembersSection from "@/components/team-member";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <Herobanner />
      <MarqueeSection />
      <About />
      <Service />
      <ServiceCarousel />
      <TeamMembersSection />
      <Testimonials />
      <CTASection />
      <FAQSection />
      <ContactUsSection />
      <BlogNewsSection />
      <Footer />
    </>
  );
}
