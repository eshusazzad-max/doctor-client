"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const doctors = [

  {
    id: 1,
    name: "Dr. Ayesha Rahman",
    specialist: "Cardiologist",
    description:
      "Highly experienced cardiologist specializing in heart diseases, preventive care, and patient-centered treatment.",
    hospital: "Labaid Cardiac Hospital",
    experience: "10 Years",
    rating: "4.9",
    fee: "800",
    image: "/images/doctor1.png",
  },

  {
    id: 2,
    name: "Dr. Imran Hossain",
    specialist: "Neurologist",
    description:
      "Neurology consultant with expertise in stroke care, epilepsy management, and headache disorders.",
    hospital: "Square Hospital",
    experience: "8 Years",
    rating: "4.9",
    fee: "700",
    image: "/images/doctor2.png",
  },

  {
    id: 3,
    name: "Dr. Sophia Khan",
    specialist: "Dentist",
    description:
      "Professional dentist focused on modern dental care, cosmetic treatments, and healthy confident smiles.",
    hospital: "Popular Diagnostic Center",
    experience: "12 Years",
    rating: "4.7",
    fee: "800",
    image: "/images/doctor3.png",
  },

];

const AllAppointmentsPage = () => {

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredDoctors = doctors.filter((doctor) => {

  const matchesSearch = doctor.name
    .toLowerCase()
    .includes(search.toLowerCase());

  const matchesCategory =

    selectedCategory === "All" ||

    doctor.specialist === selectedCategory;

  return matchesSearch && matchesCategory;

});

  return (

    <div className="min-h-screen bg-[#9fbaca] px-4 md:px-8 py-16">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center">

          <h1 className="text-5xl md:text-6xl font-bold text-[#1b4965]">

            Find Your Doctor

          </h1>

          <p className="text-[#24485e] text-2xl mt-5">

            Book appointments with trusted doctors easily

          </p>

        </div>

        {/* Search */}
        <div className="mt-12 flex justify-center">

          <input
            type="text"
            placeholder="Search doctor name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-2xl bg-[#e9f5fd] border text-[#0d2b3b] text-lg border-[#c8edf7] rounded-full px-8 py-5 outline-none shadow-[0_10px_40px_rgba(27,73,101,0.10)]"
          />

        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">

         {/* All */}
         <button
           onClick={() => setSelectedCategory("All")}
           className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 cursor-pointer ${
             selectedCategory === "All"
               ? "bg-[#62b6cb] text-white"
               : "bg-[#e9f5fd] text-[#1b4965]"
           }`}
         >

           All

         </button>

         {/* Cardiologist */}
         <button
           onClick={() => setSelectedCategory("Cardiologist")}
           className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 cursor-pointer ${
             selectedCategory === "Cardiologist"
               ? "bg-[#62b6cb] text-white"
               : "bg-[#e9f5fd] text-[#1b4965]"
           }`}
         >

           Cardiologist

         </button>

         {/* Neurologist */}
         <button
           onClick={() => setSelectedCategory("Neurologist")}
           className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 cursor-pointer ${
             selectedCategory === "Neurologist"
               ? "bg-[#62b6cb] text-white"
               : "bg-[#e9f5fd] text-[#1b4965]"
           }`}
         >

           Neurologist

         </button>

         {/* Dentist */}
         <button
           onClick={() => setSelectedCategory("Dentist")}
           className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 cursor-pointer ${
             selectedCategory === "Dentist"
               ? "bg-[#62b6cb] text-white"
               : "bg-[#e9f5fd] text-[#1b4965]"
           }`}
         >

           Dentist

         </button>

        </div>

        {/* Doctor Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-16">

          {

            filteredDoctors.map((doctor) => (

              <div
                key={doctor.id}
                className="bg-[#e9f5fd] rounded-[35px] overflow-hidden shadow-[0_15px_50px_rgba(27,73,101,0.12)] hover:-translate-y-2 transition-all duration-300"
              >

                {/* Image */}
                <div className="relative h-[400px] w-full overflow-hidden">

                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    width={500}
                    height={500}
                    className="object-cover object-[center_20%]"
                  />

                  {/* Rating */}
                  <div className="absolute top-5 left-5 bg-white px-4 py-2 rounded-full flex items-center gap-2 shadow-md">

                    <Image
                      src="/icons/rating.png"
                      alt="rating"
                      width={18}
                      height={18}
                    />

                    <span className="font-semibold text-[#1b4965]">

                      {doctor.rating}

                    </span>

                  </div>

                </div>

                {/* Content */}
                <div className="p-7">

                  {/* Name */}
                  <h2 className="text-3xl font-bold text-[#1b4965]">

                    {doctor.name}

                  </h2>

                  {/* Specialist */}
                  <p className="text-[#62b6cb] text-xl font-semibold mt-3">

                    {doctor.specialist}

                  </p>

                  {/* Description */}
                  <p className="text-[#0c3247] text-lg mt-5 leading-8">

                    {doctor.description}

                  </p>

                  {/* Info */}
                  <div className="mt-7 space-y-4">

                    {/* Hospital */}
                    <div className="flex items-center gap-3">

                      <Image
                        src="/icons/equipment.png"
                        alt="hospital"
                        width={22}
                        height={22}
                      />

                      <p className="text-[#0c3247] text-lg">

                        {doctor.hospital}

                      </p>

                    </div>

                    {/* Experience */}
                    <div className="flex items-center gap-3">

                      <Image
                        src="/icons/experience.png"
                        alt="experience"
                        width={22}
                        height={22}
                      />

                      <p className="text-[#0c3247] text-lg">

                        {doctor.experience}

                      </p>

                    </div>

                    {/* Fee */}
                    <div className="flex items-center gap-3">

                      <Image
                        src="/icons/taka.png"
                        alt="fee"
                        width={22}
                        height={22}
                      />

                      <p className="text-[#16384c] font-semibold">

                        Appointment Fee:{doctor.fee}

                      </p>

                    </div>

                  </div>

                  {/* Button */}
                  <Link href={`/appointment/${doctor.id}`}>

                    <button className="w-full mt-8 bg-[#62b6cb] hover:bg-[#1b4965] text-white py-4 rounded-full font-semibold text-lg transition-all duration-300 cursor-pointer">

                      Book Appointment

                    </button>

                  </Link>

                </div>

              </div>

            ))

          }

        </div>

      </div>

    </div>

  );

};

export default AllAppointmentsPage;