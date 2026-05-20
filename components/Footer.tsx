import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#1f363d] text-white pt-20 pb-8 ">

      <div className="max-w-7xl mx-auto px-5">

        {/* Top Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 items-start">

          {/* Logo & Description */}
          <div className="flex flex-col justify-start">

            <div className="flex items-center gap-2 mb-6 mt-2">

              <div className="relative w-[55px] h-[55px]">

                <Image
                  src="/logo.png"
                  alt="logo"
                  fill
                  className="object-contain"
                />

              </div>

              <h1 className="text-3xl md:text-4xl leading-none font-[Elsie] font-bold">

                DocTime

              </h1>

            </div>

            <p className="text-[#d7e6ef] leading-8 ">

              Trusted healthcare platform connecting patients
              with experienced doctors and seamless appointment booking.

            </p>

          </div>

          {/* Quick Links */}
          <div className="pt-4">

            <h2 className="text-xl md:text-2xl font-bold mb-6">

              Quick Links

            </h2>

            <ul className="space-y-4 text-[#d7e6ef]">

              <li className="hover:text-[#62b6cb] transition duration-300">

                <Link href="/">Home</Link>

              </li>

              <li className="hover:text-[#62b6cb] transition duration-300">

                <Link href="/appointments">

                  All Appointment

                </Link>

              </li>

              <li className="hover:text-[#62b6cb] transition duration-300">

                <Link href="/dashboard">

                  Dashboard

                </Link>

              </li>

            </ul>

          </div>

          {/* Contact Info */}
          <div className="pt-4">

            <h2 className="text-xl md:text-2xl font-bold mb-6">
              Contact Info
            </h2>

            <div className="space-y-4 text-[#d7e6ef]">

              <p>
                eshusazzad@gmail.com
              </p>

              <p>
                +880 1737-456789
              </p>

              <p>
                Dhaka, Bangladesh
              </p>

            </div>

          </div>

          {/* Social Links */}
          <div className="pt-4">

            <h2 className="text-xl md:text-2xl font-bold mb-6">

              Follow Us

            </h2>

            <div className="flex items-center gap-5">

              <Link
                href="/"
                className="w-[50px] h-[50px] rounded-full bg-white/50 flex items-center justify-center hover:bg-[#62b6cb] hover:-translate-y-2 transition-all duration-500"
              >

                <Image
                  src="/icons/facebook.png"
                  alt="facebook"
                  width={24}
                  height={24}
                />

              </Link>

              <Link
                href="/"
                className="w-[50px] h-[50px] rounded-full bg-white/50 flex items-center justify-center hover:bg-[#62b6cb] hover:-translate-y-2 transition-all duration-500"
              >

                <Image
                  src="/icons/instagram.png"
                  alt="instagram"
                  width={24}
                  height={24}
                />

              </Link>

              <Link
                href="/"
                className="w-[50px] h-[50px] rounded-full bg-white/50 flex items-center justify-center hover:bg-[#62b6cb] hover:-translate-y-2 transition-all duration-500"
              >

                <Image
                  src="/icons/twitter.png"
                  alt="twitter"
                  width={24}
                  height={24}
                />

              </Link>

              <Link
                href="/"
                className="w-[50px] h-[50px] rounded-full bg-white/50 flex items-center justify-center hover:bg-[#62b6cb] hover:-translate-y-2 transition-all duration-500"
              >

                <Image
                  src="/icons/linkedin.png"
                  alt="linkedin"
                  width={24}
                  height={24}
                />

              </Link>
              

            </div>

          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/50 mt-16 pt-8 text-center">

          <p className="text-[#d7e6ef]">

             &copy; {new Date().getFullYear()} DocTime. All Rights Reserved.

          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;