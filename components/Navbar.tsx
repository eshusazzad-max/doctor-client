import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-[#1f363d] px-8 py-5 shadow-md font-[Elsie]">
      <div className="flex items-center justify-around">

        {/* Logo Section */}
        <div className="flex items-center">

          <div className="w-[80px] h-[80px] relative">
            <Image
              src="/logo.png"
              alt="logo"
              fill
              className="object-contain"
            />
          </div>

          <h1 className="text-4xl font-extrabold text-white">
            DocTime
          </h1>

        </div>

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

        {/* Login Button */}
        <div className="flex items-center gap-5">

         <button className="relative group px-5 py-2 text-white font-semibold overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:text-[#bee9e8] cursor-pointer">

          <span className="relative z-10">
           Login
          </span>

          <span className="absolute left-0 bottom-0 h-[2px] w-full bg-[#62b6cb] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>

         </button>

         {/* Register Button */}
         <button className="relative group px-5 py-2 text-white font-semibold overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:text-[#bee9e8] cursor-pointer">

          <span className="relative z-10">
           Register
          </span>

          <span className="absolute left-0 bottom-0 h-[2px] w-full bg-[#62b6cb] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>

         </button>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;