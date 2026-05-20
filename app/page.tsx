import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import TopDoctors from "../components/TopDoctors";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <TopDoctors />
      <WhyChooseUs />
      <Testimonials />

    </div>
  );
}