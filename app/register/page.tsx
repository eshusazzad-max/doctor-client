"use client";
import { useContext, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import { AuthContext } from "@/providers/AuthProvider";

const RegisterPage = () => {

  const { createUser, googleLogin, loading } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const handleGoogleLogin = () => {

   googleLogin()

     .then(() => {

       toast.success("Google Register Successful ");
       router.push("/");

     })

     .catch(() => {

       toast.error("Google Register Failed");

     });

 };

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();

    const form = e.currentTarget;

    const name = (form.elements.namedItem("name") as HTMLInputElement).value;

    const email = (form.elements.namedItem("email") as HTMLInputElement).value;

    const password = (form.elements.namedItem("password") as HTMLInputElement).value;

    console.log(name, email, password);

    createUser(email, password, name)

      .then(() => {

        toast.success("Register Successful");
        router.push("/");

      })

      .catch(() => {

        toast.error("Something went wrong");

      });

  };

  return (

    <div className="min-h-screen bg-[#9fbaca] flex items-center justify-center px-4 md:px-6 py-10 md:py-16">

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 bg-[#f2ffff] rounded-[30px] md:rounded-[40px] overflow-hidden shadow-[0_20px_60px_rgba(27,73,101,0.15)]">

        {/* Left Side */}
        <div className="relative hidden lg:block min-h-[750px]">

          <Image
            src="/icons/register.png"
            alt="register"
            fill
            priority
            className="object-cover object-center scale-110"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-white/5"></div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-end pb-24 px-12">

            <h1 className="text-6xl xl:text-7xl font-[Elsie] leading-tight text-[#103753]">

              Join <br />
              With Us

            </h1>

            <p className="mt-6 text-xl leading-8 text-[#082c46] max-w-md font-medium">

              Create your account and start booking appointments
              with trusted doctors anytime.

            </p>

          </div>

        </div>

        {/* Right Side */}
        <div className="px-6 md:px-10 lg:px-14 py-12 md:py-16 flex flex-col justify-center">

          {/* Logo */}
          <div className="flex items-center mb-10 justify-center lg:justify-start">

            <div className="relative w-[60px] h-[60px]">

              <Image
                src="/logo.png"
                alt="logo"
                fill
                className="object-contain"
              />

            </div>

            <h1 className="text-3xl md:text-4xl font-[Elsie] font-bold text-[#1b4965]">

              DocTime

            </h1>

          </div>

          {/* Heading */}
          <div className="text-center lg:text-left">

            <h2 className="text-4xl md:text-5xl font-bold text-[#1b4965]">

              Create Account

            </h2>

            <p className="text-[#2e4355] mt-4 leading-7 md:text-lg">

              Enter your information to create your account.

            </p>

          </div>

          {/* Form */}
          <form
            onSubmit={handleRegister}
            className="mt-10 space-y-6"
          >

            {/* Name */}
            <div>

              <label className="text-[#1b4965] font-semibold">

                Full Name

              </label>

              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                className="w-full mt-3 px-5 py-4 rounded-2xl border border-[#d7e6ef] outline-none focus:border-[#62b6cb] focus:ring-4 focus:ring-[#62b6cb]/20 text-[#153c55] cursor-pointer"
              />

            </div>

            {/* Email */}
            <div>

              <label className="text-[#1b4965] font-semibold">

                Email Address

              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full mt-3 px-5 py-4 rounded-2xl border border-[#d7e6ef] outline-none focus:border-[#62b6cb] focus:ring-4 focus:ring-[#62b6cb]/20 text-[#153c55] cursor-pointer"
              />

            </div>

            {/* Password */}
            <div>

              <label className="text-[#1b4965] font-semibold">

                Password

              </label>

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                className="w-full mt-3 px-5 py-4 rounded-2xl border border-[#d7e6ef] outline-none focus:border-[#62b6cb] focus:ring-4 focus:ring-[#62b6cb]/20 text-[#153c55] cursor-pointer"
              />

              <div className="flex items-center gap-2 mt-3">

               <input
                type="checkbox"
                onChange={(e) => setShowPassword(e.target.checked)}
                className="w-4 h-4 cursor-pointer"
               />

               <p className="text-sm text-[#153e57] font-medium">

                 Show Password

               </p>

              </div>

            </div>

            {/* Register Button */}
            <button
             type="submit"
             disabled={loading}
             className="w-full bg-[#62b6cb] hover:bg-[#1b4965] transition-all duration-300 text-white py-4 rounded-full text-xl font-semibold cursor-pointer disabled:opacity-60"
            >

              {

                loading
                 ? "Creating Account..."
                 : "Register"

              }

            </button>

            {/* Divider */}
            <div className="flex items-center gap-4">

              <div className="flex-1 h-[1px] bg-[#d7e6ef]"></div>

              <p className="text-[#4f6577]">

                OR

              </p>

              <div className="flex-1 h-[1px] bg-[#d7e6ef]"></div>

            </div>

            {/* Google Button */}
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="w-full border border-[#beddf3] py-4 rounded-2xl flex items-center justify-center gap-3 text-[#1b4965] font-semibold hover:bg-[#bedaec] transition-all duration-300 cursor-pointer"
            >

              <Image
                src="/icons/google.png"
                alt="google"
                width={24}
                height={24}
              />

              Continue with Google

            </button>

          </form>

          {/* Bottom Text */}
          <p className="text-[#364a5a] mt-8 text-center">

            Already have an account?{" "}

            <Link
              href="/login"
              className="text-[#62b6cb] font-semibold hover:underline"
            >

              Login

            </Link>

          </p>

        </div>

      </div>

    </div>

  );

};

export default RegisterPage;