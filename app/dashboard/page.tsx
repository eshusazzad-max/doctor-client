"use client";

import PrivateRoute from "@/routes/PrivateRoute";

const DashboardPage = () => {

  return (

    <PrivateRoute>

      <div className="min-h-screen flex items-center justify-center bg-[#f2ffff]">

        <h1 className="text-5xl font-bold text-[#1b4965]">

          Welcome To Dashboard

        </h1>

      </div>

    </PrivateRoute>

  );

};

export default DashboardPage;