import Image from "next/image";

const features = [
  {
    id: 1,
    title: "Expert Doctors",
    description:
      "Experienced specialists providing trusted and personalized healthcare services.",
    icon: "/icons/doctor.png",
  },

  {
    id: 2,
    title: "Easy Appointment",
    description:
      "Book appointments quickly and easily with our smooth online system.",
    icon: "/icons/appointment.png",
  },

  {
    id: 3,
    title: "24/7 Support",
    description:
      "Our support team is always ready to help patients anytime they need.",
    icon: "/icons/support.png",
  },

  {
    id: 4,
    title: "Modern Equipment",
    description:
      "Advanced medical technology ensuring accurate diagnosis and better treatment.",
    icon: "/icons/equipment.png",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-[#9fbaca]">

      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}
        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold text-[#1b4965]">
            Why Choose Us
          </h2>

          <p className="text-[#1f303f] mt-4 text-xl">
            We provide trusted healthcare services with expert doctors and modern facilities.
          </p>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature) => (

            <div
              key={feature.id}
               data-aos="fade-up"
               data-aos-duration="1200"
              className="bg-[#dbeaf3] rounded-[30px] p-8 shadow-[0_10px_35px_rgba(27,73,101,0.08)] hover:shadow-[0_18px_50px_rgba(27,73,101,0.15)] hover:-translate-y-1 transition-all ease-out duration-500 border border-[#7196ac]"
            >

              {/* Icon */}
              <div className="w-[80px] h-[80px] rounded-full bg-[#eef7fb] flex items-center justify-center">

                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={50}
                  height={50}
                />

              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-[#1b4965] mt-8">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-[#223747] text-lg leading-8 mt-4">
                {feature.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default WhyChooseUs;