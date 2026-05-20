import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />

      <div className="p-10">
        <h1 className="text-5xl font-bold">
          Find Your Best Doctor
        </h1>

        <p className="mt-4 text-lg">
          Book appointments with trusted doctors easily.
        </p>
      </div>
    </div>
  );
}