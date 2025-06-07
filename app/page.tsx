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
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Facility></Facility>
      <Servicelist></Servicelist>
      <Banner></Banner>
      <Blogs></Blogs>
      <Testimonial></Testimonial>
      <Footer></Footer>
    </div>
  );
}
