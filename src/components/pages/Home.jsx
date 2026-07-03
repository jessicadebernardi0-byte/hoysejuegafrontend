import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import Benefits from "../components/home/Benefits";
import Sports from "../components/home/Sports";
import Featured from "../components/home/Featured";
import HowItWorks from "../components/home/HowItWorks";
import Testimonials from "../components/home/Testimonials";
import Events from "../components/home/Events";
import Locations from "../components/home/Locations";
import Footer from "../components/layout/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Benefits />
      <Sports />
      <Featured />
      <HowItWorks />
      <Testimonials />
      <Events />
      <Locations />
      <Footer />
    </>
  );
}

export default Home;