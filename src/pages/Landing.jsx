import Hero from "../components/Hero";
import PublicNavbar from "../components/PublicNavbar";
import Testimonials from "../components/Testimonials";
import About from "../components/About";
import Features from "../components/Features";
import Footer from "../components/Footer";

const Landing = () => {
  return (
    <div>
      <PublicNavbar />
      <Hero />
      <About/>
      <Features/>
      <Footer/>
    </div>
  );
};

export default Landing;

