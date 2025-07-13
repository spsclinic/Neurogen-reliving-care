import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Facility from "./components/Facility";
import Servicelist from "./components/Serviceslist";
import Blogs from "./components/Blogs";
import Testimonial from "./components/Testimonial";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Facility />
      <Servicelist />
      <Banner />
      <Blogs />
      <Testimonial />
      <Footer />
    </div>
  );
}
