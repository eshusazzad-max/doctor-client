import Image from "next/image";

const doctors = [
  {
    id: 1,
    name: "Dr. Ayesha Rahman",
    specialist: "Cardiologist",
    image: "/images/doctor1.png",
    description:
      "Highly experienced cardiologist specializing in heart diseases, preventive care, and patient-centered treatment.",
    experience: "10 years experience",
    location: "Dhaka, Bangladesh",
    rating: "4.9",
    fee: "800",
  },

  {
    id: 2,
    name: "Dr. Imran Hossain",
    specialist: "Neurologist",
    image: "/images/doctor2.png",
    description:
      "Neurology consultant with expertise in stroke care, epilepsy management, and headache disorders.",
    experience: "8 years experience",
    location: "Bashundhara, Dhaka",
    rating: "4.9",
    fee: "700",
  },

  {
    id: 3,
    name: "Dr. Sophia Khan",
    specialist: "Dentist",
    image: "/images/doctor3.png",
    description:
      "Professional dentist focused on modern dental care, cosmetic treatments, and creating healthy, confident smiles for every patient.",
    experience: "12 years experience",
    location: "Panthapath, Dhaka",
    rating: "4.7",
    fee: "800",
  },
];

const TopDoctors = () => {
  return (
    <section className="py-24 bg-[#9fbaca]">

      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}
        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold text-[#1b4965]">
            Top Doctors
          </h2>

          <p className="text-[#2a3b4b] mt-4 text-xl">
            Meet Our Professional & Experienced Doctors
          </p>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {doctors.map((doctor) => (

            <div
              key={doctor.id}
              className="bg-[#dbeaf3] rounded-[30px] overflow-hidden shadow-[0_10px_35px_rgba(27,73,101,0.08)] hover:shadow-[0_18px_50px_rgba(27,73,101,0.15)] hover:-translate-y-2 transition-all duration-300 border border-[#7fa9c4]"
            >

              {/* Doctor Image */}
              <div className="relative h-[400px] w-full overflow-hidden">

                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-cover object-[center_20%]"
                />

                {/* Rating */}
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center gap-1 shadow-md">

                  <Image
                    src="/icons/rating.png"
                    alt="rating"
                    width={14}
                    height={14}
                  />

                  <span className="text-xs font-semibold text-[#1b4965]">
                    {doctor.rating}
                  </span>

                </div>

              </div>

              {/* Content */}
              <div className="p-7">

                {/* Doctor Name */}
                <h3 className="text-[30px] font-bold text-[#1b4965]">
                  {doctor.name}
                </h3>

                {/* Specialist */}
                <p className="text-[#296e81] font-semibold mt-2 text-lg">
                  {doctor.specialist}
                </p>

                {/* Description */}
                <p className="text-[#103753] text-[16px] leading-8 mt-5 font-medium">
                  {doctor.description}
                </p>

                {/* Location */}
                <div className="flex items-center gap-2 mt-6">

                  <Image
                    src="/icons/location.png"
                    alt="location"
                    width={17}
                    height={17}
                  />

                  <p className="text-[#103753] text-sm font-medium">
                    {doctor.location}
                  </p>

                </div>

                {/* Experience */}
                <div className="flex items-center gap-2 mt-3">

                  <Image
                    src="/icons/experience.png"
                    alt="experience"
                    width={17}
                    height={17}
                  />

                  <p className="text-[#103753] text-sm font-medium">
                    {doctor.experience}
                  </p>

                </div>

                {/* Bottom */}
                <div className="flex items-center justify-between border-t border-[#6294ad] mt-7 pt-6">

                  {/* Fee */}
                  <div>

                    <p className="text-[#103753] text-lg">
                      Consultation
                    </p>

                    <div className="flex items-center gap-1 mt-2">

                      <Image
                        src="/icons/taka.png"
                        alt="taka"
                        width={20}
                        height={20}
                      />

                      <span className="text-[#62b6cb] text-3xl font-bold">
                        {doctor.fee}
                      </span>

                    </div>

                  </div>

                  {/* Button */}
                  <button className="bg-[#62b6cb] hover:bg-[#1b4965] text-white text-sm font-semibold px-6 py-3 rounded-full hover:scale-105 transition-all duration-300">

                    View Details

                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default TopDoctors;