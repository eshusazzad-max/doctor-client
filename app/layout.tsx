import AuthProvider from "../providers/AuthProvider";
import { Toaster } from "react-hot-toast";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import "aos/dist/aos.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DocTime",
  description: "Doctor Appointment Booking Website",

  icons: {

    icon: "/favicon.png",

  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >

      <head>

        {/* AOS CSS */}
        <link
          rel="stylesheet"
          href="https://unpkg.com/aos@2.3.4/dist/aos.css"
        />

      </head>

      <body className="min-h-full flex flex-col">

         <AuthProvider>
          <Toaster position="top-right" />
          <Navbar />

          {children}

         </AuthProvider>

        {/* AOS Script */}
       <script src="https://unpkg.com/aos@2.3.4/dist/aos.js" async></script>

        {/* AOS Initialize */}
        <script
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `
              AOS.init({
                once: true,
              });
            `,
          }}
        />

      </body>

    </html>
  );
}