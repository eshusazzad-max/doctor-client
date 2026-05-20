"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Hero = () => {
  return (
    <div className="w-full h-[90vh]">

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop={true}
        className="w-full h-full"
      >

        {/* Slide 1 */}
        <SwiperSlide>

          <div className="relative w-full h-[90vh]">

            <Image
              src="/images/hero1.png"
              alt="hero"
              fill
              className="object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-start">

              <div className="w-full pl-20 md:pl-32 text-white">

                <p className="border border-[#62b6cb] inline-block px-4 py-2 rounded-full mb-6 text-sm">
                  VERIFIED HEALTHCARE
                </p>

                <h1 className="text-7xl font-[Elsie] leading-tight max-w-2xl">
                  Your Health, <br />
                  Our Priority
                </h1>

                <p className="mt-6 text-xl max-w-2xl text-gray-200">
                  Book appointments with trusted doctors
                  and get quality healthcare anytime.
                </p>

                {/* Buttons */}
                <div className="flex items-center gap-5 mt-10">

                  <button className="bg-[#62b6cb] px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition duration-300">
                    Book Appointment
                  </button>

                  <button className="border border-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-[#1b4965] hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                    Browse Doctors
                  </button>

                </div>

              </div>

            </div>

          </div>

        </SwiperSlide>





        {/* Slide 2 */}
        <SwiperSlide>

          <div className="relative w-full h-[90vh]">

            <Image
              src="/images/hero2.png"
              alt="hero"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/50"></div>

            <div className="absolute inset-0 flex items-center justify-start">

              <div className="w-full pl-20 md:pl-32 text-white">

                <h1 className="text-7xl font-[Elsie] leading-tight max-w-2xl">
                  Expert Doctors <br />
                  You Can Trust
                </h1>

                <p className="mt-6 text-xl max-w-2xl text-gray-200">
                  Connect with experienced specialists
                  and receive world-class medical support.
                </p>

              </div>

            </div>

          </div>

        </SwiperSlide>






        {/* Slide 3 */}
        <SwiperSlide>

          <div className="relative w-full h-[90vh]">

            <Image
              src="/images/hero3.png"
              alt="hero"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/50"></div>

            <div className="absolute inset-0 flex items-center justify-start">

              <div className="w-full pl-20 md:pl-32 text-white">

                <h1 className="text-7xl font-[Elsie] leading-tight max-w-2xl">
                  Modern Care <br />
                  For Every Patient
                </h1>

                <p className="mt-6 text-xl max-w-2xl text-gray-200">
                  Experience seamless healthcare booking
                  with advanced medical technology.
                </p>

              </div>

            </div>

          </div>

        </SwiperSlide>

      </Swiper>

    </div>
  );
};

export default Hero;