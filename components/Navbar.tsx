"use client";

import Link from "next/link";

import Image from "next/image";

import { useState, useContext } from "react";

import { useRouter } from "next/navigation";

import toast from "react-hot-toast";

import { AuthContext } from "@/providers/AuthProvider";

const Navbar = () => {

  const { user, logoutUser } =
    useContext(AuthContext);

  const router = useRouter();

  const [menuOpen, setMenuOpen] =
    useState(false);

  const handleLogout = () => {

    logoutUser()

      .then(() => {

        localStorage.removeItem("token");

        toast.success("Logout Successful");

        router.push("/");

      })

      .catch(() => {

        toast.error("Logout Failed");

      });

  };

  return (
    <nav className="bg-[#1f363d] px-5 md:px-8 py-4 shadow-md font-[Elsie] relative z-50">

      <div className="flex items-center justify-between max-w-7xl mx-auto">

        {/* Logo Section */}
        <div className="flex items-center">

          <div className="w-[65px] h-[65px] md:w-[80px] md:h-[80px] relative">

            <Image
              src="/logo.png"
              alt="logo"
              fill
              className="object-contain"
            />

          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-white">

            DocTime

          </h1>

        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">

          {/* Nav Links */}
          <ul className="flex items-center gap-10 text-white font-semibold text-lg">

            <li className="relative group cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:text-[#bee9e8]">

              <Link href="/">Home</Link>

              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#62b6cb] transition-all duration-300 group-hover:w-full"></span>

            </li>

            <li className="relative group cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:text-[#bee9e8]">

              <Link href="/appointments">

                All Appointment

              </Link>

              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#62b6cb] transition-all duration-300 group-hover:w-full"></span>

            </li>

            <li className="relative group cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:text-[#bee9e8]">

              <Link href="/dashboard">

                Dashboard

              </Link>

              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#62b6cb] transition-all duration-300 group-hover:w-full"></span>

            </li>

          </ul>

          {/* Buttons */}
          <div className="flex items-center gap-5">

           {

             user ? (

               <button
                 onClick={handleLogout}
                 className="relative group px-5 py-2 text-white font-semibold overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:text-[#bee9e8] cursor-pointer"
               >

                 <span className="relative z-10">

                   Logout

                 </span>

                 <span className="absolute left-0 bottom-0 h-[2px] w-full bg-[#62b6cb] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>

               </button>

              ) : (

               <>

                 {/* Login Button */}
                <button className="relative group px-5 py-2 text-white font-semibold overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:text-[#bee9e8] cursor-pointer">

                   <span className="relative z-10">

                     <Link href="/login">

                      Login

                     </Link>

                   </span>

                   <span className="absolute left-0 bottom-0 h-[2px] w-full bg-[#62b6cb] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>

                </button>

                 {/* Register Button */}
                <button className="relative group px-5 py-2 text-white font-semibold overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:text-[#bee9e8] cursor-pointer">

                 <span className="relative z-10">

                    <Link href="/register">

                      Register

                    </Link>

                 </span>

                 <span className="absolute left-0 bottom-0 h-[2px] w-full bg-[#62b6cb] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>

                </button>

              </>

             )

           }

          </div>

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white text-3xl"
        >

          <Image
            src="/icons/menu.png"
            alt="menu"
            width={34}
            height={34}
            className="cursor-pointer"
          />

        </button>

      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-[#1f363d] overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-[500px] py-6" : "max-h-0"
        }`}
      >

        <ul className="flex flex-col items-center gap-8 text-white font-semibold text-lg">

          <li>

            <Link href="/">Home</Link>

          </li>

          <li>

            <Link href="/appointments">

              All Appointment

            </Link>

          </li>

          <li>

            <Link href="/dashboard">

              Dashboard

            </Link>

          </li>

        </ul>

        {/* Mobile Buttons */}
        <div className="flex flex-col items-center gap-5 mt-8">

          <button className="bg-[#62b6cb] px-8 py-3 rounded-full text-white font-semibold">

            Login

          </button>

          <button className="border border-white px-8 py-3 rounded-full text-white font-semibold">

            Register

          </button>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;