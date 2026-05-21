"use client";

import toast from "react-hot-toast";

import { useRouter } from "next/navigation";

const AppointmentPage = () => {

 const router = useRouter();

 const handleAppointment = (e: React.FormEvent<HTMLFormElement>) => {

  e.preventDefault();

  const form = e.currentTarget;

  const doctor =
    (form.elements.namedItem("doctor") as HTMLSelectElement).value;

  const patientName =
    (form.elements.namedItem("patientName") as HTMLInputElement).value;

  const gender =
    (form.elements.namedItem("gender") as HTMLSelectElement).value;

  const phone =
    (form.elements.namedItem("phone") as HTMLInputElement).value;

  const date =
    (form.elements.namedItem("date") as HTMLInputElement).value;

  const time =
    (form.elements.namedItem("time") as HTMLSelectElement).value;

  const problem =
    (form.elements.namedItem("problem") as HTMLTextAreaElement).value;

  const appointmentData = {

    doctor,

    patientName,

    gender,

    phone,

    date,

    time,

    problem,

    status: "Pending",

  };

  const oldAppointments = JSON.parse(

    localStorage.getItem("appointments") || "[]"

  );

  oldAppointments.push(appointmentData);

  localStorage.setItem(

    "appointments",

    JSON.stringify(oldAppointments)

  );

  toast.success("Appointment Booked Successfully");

  router.push("/appointments");

};

  return (

    <div className="min-h-screen bg-[#9fbaca] px-4 md:px-8 py-16">

      <div className="max-w-3xl mx-auto bg-[#f2ffff] rounded-[35px] shadow-[0_10px_40px_rgba(27,73,101,0.12)] p-6 md:p-10">

        {/* Heading */}
        <div className="text-center">

          <h1 className="text-4xl md:text-5xl font-bold text-[#1b4965]">

            Book Appointment

          </h1>

          <p className="text-[#1f3d52] text-2xl md:text-xl mt-4">

            Fill up the form to confirm your appointment

          </p>

        </div>

        {/* Form */}
        <form
          onSubmit={handleAppointment}
          className="mt-10 space-y-6"
        >

            {/* Doctor Selection */}
           <div>

            <label className="text-[#1b4965] font-semibold">
             Select Doctor
            </label>

          <select
            name="doctor"
            required
            className="w-full h-[62px] mt-2 border text-[#0b1c27] text-lg border-[#a8cad6] rounded-2xl px-5 outline-none focus:border-[#62b6cb]"
           >

            <option value="">
              Choose Doctor
            </option>

            <option>
              Dr. Ayesha Rahman
            </option>

            <option>
              Dr. Imran Hossain
            </option>

            <option>
              Dr. Sophia Khan
            </option>

          </select>

           </div>

         {/* Patient Name */}
        <div>

          <label className="text-[#1b4965] font-semibold">
            Patient Name
          </label>

            <input
              type="text"
              name="patientName"
              placeholder="Enter patient name"
              required
              className="w-full mt-2 border text-[#0b2231] text-lg border-[#a8cad6] rounded-2xl px-5 py-4 outline-none focus:border-[#62b6cb]"
            />

        </div>

       {/* Gender + Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5"> 

          {/* Gender */}
          <div>

            <label className="text-[#1b4965] font-semibold">
              Gender
            </label>

            <select
              name="gender"
              required
              className="w-full  mt-2 border text-[#162d3b] text-lg border-[#a8cad6] rounded-2xl px-5 py-4 outline-none focus:border-[#62b6cb]"
             >

              <option value="">
               Select Gender
              </option>

              <option value="Male">
               Male
              </option>

              <option value="Female">
               Female
              </option>

            </select>

          </div>

          {/* Phone */}
          <div>

            <label className="text-[#1b4965] font-semibold">
              Phone Number
            </label>

            <input
             type="tel"
             name="phone"
             placeholder="Enter phone number"
             required
             className="w-full mt-2 border text-[#0b1c27] text-lg border-[#a8cad6] rounded-2xl px-5 py-4   outline-none focus:border-[#62b6cb]"
            />

          </div>

        </div>

          {/* Date + Time */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* Date */}
          <div>

            <label className="text-[#1b4965] font-semibold">
              Appointment Date
            </label>

            <input
              type="date"
              name="date"
              required
              className="w-full  h-[62px] mt-2 border text-[#162d3b] text-lg  border-[#a8cad6] rounded-2xl px-5 outline-none focus:border-[#62b6cb]"
            />

          </div>

          {/* Time */}
          <div>

           <label className="text-[#1b4965] font-semibold">
             Appointment Time
           </label>

           <select
            name="time"
            required
            className="w-full  h-[62px] mt-2 border text-[#162d3b] text-lg border-[#a8cad6] rounded-2xl px-5 outline-none focus:border-[#62b6cb]"
           >

            <option value="">
              Select Time
            </option>

            <option>
              09:00 AM
            </option>

            <option>
              10:00 AM
            </option>

            <option>
              11:00 AM
            </option>

            <option>
              04:00 PM
            </option>

            <option>
             05:00 PM
            </option>

           </select>

          </div>

        </div>

        

          {/* Problem */}
          <div>

            <label className="text-[#1b4965]  font-semibold">

              Describe Your Problem

            </label>

            <textarea
              name="problem"
              rows={3}
              placeholder="Write your problem..."
              className="w-full mt-2 border text-[#162d3b] text-lg border-[#a8cad6] rounded-2xl px-5 py-4 outline-none resize-none focus:border-[#62b6cb]"
            ></textarea>

          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-[#62b6cb] text-white py-4 rounded-2xl text-lg font-semibold hover:bg-[#1b4965] hover:-translate-y-1 transition-all duration-500 cursor-pointer"
          >

            Confirm Appointment

          </button>

        </form>

      </div>

    </div>

  );

};

export default AppointmentPage;