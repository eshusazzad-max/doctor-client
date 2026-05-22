"use client";

import { useContext, useEffect } from "react";

import { useRouter } from "next/navigation";

import LoadingSpinner from "./LoadingSpinner";

import { AuthContext } from "@/providers/AuthProvider";

const PrivateRoute = ({
  children,
}: {
  children: React.ReactNode;
}) => {

  const { user, loading } =
    useContext(AuthContext);

  const router = useRouter();

  useEffect(() => {

    if (!loading && !user) {

      router.push("/login");

    }

  }, [user, loading, router]);

  if (loading) {

    return <LoadingSpinner />;

  }

  if (!user) {

    return null;

  }

  return children;

};

export default PrivateRoute;