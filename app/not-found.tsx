import Link from "next/link";

const NotFoundPage = () => {

  return (

    <div className="min-h-screen flex flex-col items-center justify-center bg-[#d8e6ef] px-4">

      <h1 className="text-7xl font-bold text-[#0e344d]">

        404

      </h1>

      <p className="text-2xl font-semibold text-[#0e344d] mt-4">

        Page Not Found

      </p>

      <p className="text-gray-600 mt-2 text-center max-w-md">

        Sorry, the page you are looking for does not exist.

      </p>

      <Link href="/">

        <button className="mt-6 bg-[#6bc6e8] text-white px-6 py-3 rounded-full hover:bg-[#54b6da] transition">

          Back To Home

        </button>

      </Link>

    </div>

  );

};

export default NotFoundPage;