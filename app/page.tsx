import Hero from "../components/Hero";
import TopDoctors from "../components/TopDoctors";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Hero/>
      <TopDoctors />
      <WhyChooseUs />
      <Testimonials />
      <Footer/>

    </div>
  );
}