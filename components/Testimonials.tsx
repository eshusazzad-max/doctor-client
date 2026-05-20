import Image from "next/image";

const reviews = [
  {
    id: 1,
    name: "Rahim Uddin",
    review:
      "Booking was seamless and the doctor was incredibly attentive. Highly recommend DocTime!",
  },

  {
    id: 2,
    name: "Maria Akter",
    review:
      "Found the perfect specialist within minutes. The platform saved me so much time.",
  },

  {
    id: 3,
    name: "Sajjad Hossain",
    review:
      "Great experience overall. Loved the clean interface and quick confirmation.",
  },

  {
    id: 4,
    name: "Nusrat Jahan",
    review:
      "My pediatrician was wonderful with my son. Will definitely book again.",
  },

  {
    id: 5,
    name: "Tariq Aziz",
    review:
      "Trusted doctors, transparent fees, and zero hassle. Five stars.",
  },

  {
    id: 6,
    name: "Lamia Chowdhury",
    review:
      "Easy to use and very reliable. Made managing appointments effortless.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-[#9fbaca]">

      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}
        <div className="text-center mb-16">

          <h2 className="text-3xl md:text-5xl font-bold text-[#1b4965]">
            What Patients Say
          </h2>

          <p className="text-[#2a3c4b] mt-4 text-xl">
            Real reviews from people who trust DocTime.
          </p>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {reviews.map((review) => (

            <div
              key={review.id}
              className="bg-[#dbeaf3] rounded-[26px] p-5 md:p-7 border border-[#6e8ea1] shadow-[0_10px_35px_rgba(27,73,101,0.08)] hover:-translate-y-2 hover:shadow-[0_18px_50px_rgba(27,73,101,0.15)] transition-all ease-out duration-500"
            >

              {/* Stars */}
              <div className="flex items-center gap-1">

               {[...Array(5)].map((_, index) => (

                <Image
                  key={index}
                  src="/icons/rating.png"
                  alt="star"
                  width={18}
                  height={18}
                />

               ))}

              </div>

              {/* Review */}
              <p className="text-[#4f6577] leading-7 md:leading-8 mt-5 font-medium min-h-[100px]">

               {review.review}

               </p>

              {/* Name */}
              <div className="mt-6 flex items-center gap-3">

                <div className="w-10 h-[2px] bg-[#62b6cb]"></div>

                <p className="text-sm md:text-xl text-[#074161]">
                  {review.name}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Testimonials;