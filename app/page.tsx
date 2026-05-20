import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import TopDoctors from "../components/TopDoctors";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <TopDoctors />

    </div>
  );
}