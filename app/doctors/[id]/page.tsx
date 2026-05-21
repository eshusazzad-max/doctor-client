import Image from "next/image";
import Link from "next/link";

const doctors = [

  {
    id: 1,
    name: "Dr. Ayesha Rahman",
    specialist: "Cardiologist",
    image: "/images/doctor1.png",
    description:
      "Highly experienced cardiologist specializing in heart diseases, preventive care, and patient-centered treatment.",
    experience: "10 years experience",
    location: "Dhanmondi, Dhaka",
    rating: "4.9 / 5.0",
    fee: "800",
    hospital: "Labaid Cardiac Hospital",
    availability: ["09:00 AM - 12:00 PM", "04:00 PM - 07:00 PM"],
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
    rating: "4.9 / 5.0",
    fee: "700",
    hospital: "Square Hospital",
    availability: ["10:00 AM - 01:00 PM"],

  },

  {
    id: 3,
    name: "Dr. Sophia Khan",
    specialist: "Dentist",
    image: "/images/doctor3.png",
    description:
      "Professional dentist focused on modern dental care, cosmetic treatments, and healthy confident smiles.",
    experience: "12 years experience",
    location: "Panthapath, Dhaka",
    rating: "4.7 / 5.0",
    fee: "800",
    hospital: "Popular Diagnostic Center",
    availability: ["05:00 PM - 09:00 PM"],

  },

];

const DoctorDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {

  const { id } = await params;

const doctor = doctors.find(

  (item) => item.id.toString() === id

);

  if (!doctor) {

    return (

      <div className="min-h-screen flex items-center justify-center">

        <h1 className="text-4xl font-bold text-red-500">

          Doctor Not Found 

        </h1>

      </div>

    );

  }

  return (

    <div className="min-h-screen bg-[#c1e2ec] px-4 md:px-8 py-16">

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Image */}
        <div className="relative w-full h-[420px] md:h-[500px] rounded-[40px] overflow-hidden shadow-xl">

          <Image
            src={doctor.image}
            alt={doctor.name}
            fill
            className="object-cover"
          />

        </div>

        {/* Content */}
        <div>

           <div className="inline-flex items-center gap-2 bg-[#dff6ff] text-[#1b4965] backdrop-blur-sm px-4 py-2 rounded-full font-semibold">
             <Image
               src="/icons/rating.png"
               alt="rating"
               width={20}
               height={20}
               className="object-contain"
             />

              <span>

               {doctor.rating}

              </span>

            </div>

          <h1 className="text-5xl md:text-6xl font-bold text-[#1b4965] mt-6 leading-tight">

            {doctor.name}

          </h1>

          <p className="text-[#4796aa] text-3xl font-semibold mt-4">

            {doctor.specialist}

          </p>

          <p className="text-[#0e344d] leading-8 text-2xl mt-6">

            {doctor.description}

          </p>

          <div className="mt-8 space-y-4">

            <p className="text-[#0e344d] text-lg font-medium">

              <div className="flex items-center gap-2">

                <Image
                  src="/icons/location.png"
                  alt="location"
                  width={22}
                  height={22}
                />

                <span>

                  {doctor.location}

                </span>

              </div>

            </p>

            <p className="text-[#0e344d] text-lg font-medium">

              <div className="flex items-center gap-2">

                <Image
                  src="/icons/experience.png"
                  alt="experience"
                  width={22}
                  height={22}
                />

                 <span>

                  {doctor.experience}

                </span>

              </div>

            </p>

            <div className="flex items-center text-[#1b4965] text-lg gap-2">

             <Image
               src="/icons/support.png"
               alt="hospital"
               width={22}
               height={22}
             />

               <span>
                 {doctor.hospital}
               </span>

            </div>

            <p className="text-[#1b4965] text-2xl font-bold">

              <div className="flex items-center gap-2">

                <Image
                  src="/icons/taka.png"
                  alt="fee"
                  width={22}
                  height={22}
                 />

                <span>

                  Appointment Fee:  {doctor.fee}
                  

                </span>

              </div>

            </p>

            <div className="mt-6">

              <h3 className="text-[#1b4965] font-semibold mb-3">
                Availability
              </h3>

               <div className="flex flex-wrap gap-3">

                {

                  doctor.availability.map((time: string, index: number) => (

                  <span
                   key={index}
                   className="bg-[#dff6ff] text-[#1b4965] px-4 py-2 rounded-full text-sm font-medium"
                  >

                    {time}

                  </span>

                 ))

                }

               </div>

            </div>

          </div>

          <Link href={`/appointment/${doctor.id}`}>

            <button className="mt-10 bg-[#62b6cb] text-white px-10 py-4 rounded-2xl text-lg font-semibold transition-all duration-500 cursor-pointer hover:bg-[#1b4965] hover:-translate-y-2 hover:scale-105 shadow-lg hover:shadow-2xl">

               Book Appointment

           </button>

         </Link>

        </div>

      </div>

    </div>

  );

};

export default DoctorDetailsPage;