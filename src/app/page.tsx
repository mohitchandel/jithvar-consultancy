import CTASection from "@/components/common/cta-seaction";
import TeamMembersSection from "@/components/common/team-member";
import Testimonials from "@/components/common/testimonials";
import About from "@/components/Home/about";
import BlogNewsSection from "@/components/Home/blogs";
import ContactUsSection from "@/components/Home/contact-us";
import FAQSection from "@/components/Home/faq-seactions";
import Herobanner from "@/components/Home/hero-banner";
import MarqueeSection from "@/components/Home/marquee";
import Service from "@/components/Home/service";
import ServiceCarousel from "@/components/Home/service-carousel";

export default function Home() {
  return (
    <>
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
    </>
  );
}
