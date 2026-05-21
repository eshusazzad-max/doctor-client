"use client";

import { useContext, useEffect } from "react";

import { useRouter } from "next/navigation";

import { AuthContext } from "@/providers/AuthProvider";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {

  const { user, loading } = useContext(AuthContext);

  const router = useRouter();

  useEffect(() => {

    if (!loading && !user) {

      router.push("/login");

    }

  }, [user, loading, router]);

  if (loading) {

    return <p className="text-center mt-20">Loading...</p>;

  }

  if (user) {

    return children;

  }

};

export default PrivateRoute;