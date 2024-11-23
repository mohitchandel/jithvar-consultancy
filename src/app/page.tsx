import CTASection from "@/components/common/cta-seaction";
import TeamMembersSection from "@/components/common/team-member";
import Testimonials from "@/components/common/testimonials";
import About from "@/components/Home/about";
import BlogNewsSection from "@/components/Home/blogs";
import ContactUsSection from "@/components/Home/contact-us";
import FAQSection from "@/components/Home/faq-seactions";
import Herobanner from "@/components/Home/hero-banner";
import MarqueeSection from "@/components/Home/marquee";
import PortFolio from "@/components/Home/portfolio";
import Service from "@/components/Home/service";

export default function Home() {
  return (
    <>
      <Herobanner />
      <MarqueeSection />
      <About />
      <Service />
      <PortFolio />
      <TeamMembersSection />
      <Testimonials />
      <CTASection />
      <FAQSection />
      <ContactUsSection />
      <BlogNewsSection />
    </>
  );
}
