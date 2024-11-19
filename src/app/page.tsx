import About from "@/components/about";
import Footer from "@/components/footer";
import Herobanner from "@/components/hero-banner";
import Navbar from "@/components/navbar";
import ServiceCarousel from "@/components/service-carousel";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <Herobanner />
      <About />
      <ServiceCarousel />
      <Testimonials />
      <Footer />
    </>
  );
}
