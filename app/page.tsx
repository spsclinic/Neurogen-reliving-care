import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Facility from "./components/Facility";
import Servicelist from "./components/Serviceslist";
import Blogs from "./components/Blogs";
export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Facility></Facility>
      <Servicelist></Servicelist>
      <Blogs></Blogs>
    </div>
  );
}
