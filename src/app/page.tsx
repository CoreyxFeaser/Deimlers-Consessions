import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import About from "@/components/About";
import Menu from "@/components/Menu";
import FindUs from "@/components/FindUs";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <SocialProof />
        <About />
        <Menu />
        <FindUs />
        <Booking />
      </main>
      <Footer />
    </>
  );
}
