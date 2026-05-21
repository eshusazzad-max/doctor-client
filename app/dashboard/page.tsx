"use client";

import {
  User,
  updateProfile,
} from "firebase/auth";

import toast from "react-hot-toast";

import { useContext } from "react";

import { AuthContext } from "@/providers/AuthProvider";

import { useEffect, useState } from "react";

import Image from "next/image";

const DashboardPage = () => {

  const [appointments, setAppointments] = useState<any[]>([]);

  const { user } = useContext(AuthContext);

  const [activeTab, setActiveTab] = useState("bookings");

  // Appointment Update States
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const [updatedName, setUpdatedName] = useState("");

  const [updatedPhone, setUpdatedPhone] = useState("");

  const [updatedDate, setUpdatedDate] = useState("");

  const [updatedTime, setUpdatedTime] = useState("");

  const [updatedProblem, setUpdatedProblem] = useState("");

  // Profile Update States
  const [profileModal, setProfileModal] = useState(false);

  const [updatedProfileName, setUpdatedProfileName] = useState(
    user?.displayName || ""
  );

  const [updatedPhoto, setUpdatedPhoto] = useState(
    user?.photoURL || ""
  );

  // Delete Appointment
  const handleDelete = (indexToDelete: number) => {

    const updatedAppointments = appointments.filter(

      (_, index) => index !== indexToDelete

    );

    setAppointments(updatedAppointments);
    toast.success("Appointment Deleted");

    localStorage.setItem(

      "appointments",

      JSON.stringify(updatedAppointments)

    );

  };

  // Open Appointment Update Modal
  const handleUpdate = (indexToUpdate: number) => {

    setEditingIndex(indexToUpdate);

    setUpdatedName(appointments[indexToUpdate].patientName);

    setUpdatedPhone(appointments[indexToUpdate].phone);

    setUpdatedDate(appointments[indexToUpdate].date);

    setUpdatedTime(appointments[indexToUpdate].time);

    setUpdatedProblem(appointments[indexToUpdate].problem);

  };

  // Save Appointment Update
  const handleSaveUpdate = () => {

    if (editingIndex === null) return;

    const updatedAppointments = [...appointments];

    updatedAppointments[editingIndex].patientName =
      updatedName;

    updatedAppointments[editingIndex].phone =
      updatedPhone;

    updatedAppointments[editingIndex].date =
      updatedDate;

    updatedAppointments[editingIndex].time =
      updatedTime;

    updatedAppointments[editingIndex].problem =
      updatedProblem;

    setAppointments(updatedAppointments);

    localStorage.setItem(

      "appointments",

      JSON.stringify(updatedAppointments)

    );

    setEditingIndex(null);
    toast.success("Appointment Updated Successfully");

  };

  // Update Profile
  const handleProfileUpdate = async () => {

    if (!user) return;

    await updateProfile(user, {

      displayName: updatedProfileName,


    });

    setProfileModal(false);
    toast.success("Profile Updated Successfully");

    window.location.reload();

  };

  // Load Appointments
  useEffect(() => {

    const savedAppointments = JSON.parse(

      localStorage.getItem("appointments") || "[]"

    );

    setAppointments(savedAppointments);

  }, []);

  return (

    <div className="min-h-screen bg-[#9fbaca] px-4 md:px-8 py-16">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#1b4965]">

          Dashboard

        </h1>

        {/* Tabs */}
        <div className="flex items-center gap-4 mt-8">

          <button
            onClick={() => setActiveTab("bookings")}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 cursor-pointer ${
              activeTab === "bookings"
                ? "bg-[#62b6cb] text-white"
                : "bg-[#f2ffff] text-[#1b4965]"
            }`}
          >

            My Bookings

          </button>

          <button
            onClick={() => setActiveTab("profile")}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 cursor-pointer ${
              activeTab === "profile"
                ? "bg-[#62b6cb] text-white"
                : "bg-[#f2ffff] text-[#1b4965]"
            }`}
          >

            My Profile

          </button>

        </div>

        {/* BOOKINGS */}
        {

          activeTab === "bookings" && (

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">

              {

                appointments.length > 0 ? (

                  appointments.map((appointment, index) => (

                    <div
                      key={index}
                      className="bg-[#f2ffff] rounded-[30px] p-6 shadow-[0_10px_40px_rgba(27,73,101,0.12)]"
                    >

                      {/* Doctor */}
                      <h2 className="text-2xl font-bold text-[#1b4965]">

                        {appointment.doctor}

                      </h2>

                      {/* Patient */}
                      <div className="flex items-center gap-3 mt-5">

                        <Image
                          src="/icons/patient.png"
                          alt="patient"
                          width={22}
                          height={22}
                        />

                        <p className="text-[#122e41] text-lg">

                          Patient: {appointment.patientName}

                        </p>

                      </div>

                      {/* Date */}
                      <div className="flex items-center gap-3 mt-3">

                        <Image
                          src="/icons/calendar.png"
                          alt="calendar"
                          width={22}
                          height={22}
                        />

                        <p className="text-[#122e41] text-lg">

                          Date: {appointment.date}

                        </p>

                      </div>

                      {/* Time */}
                      <div className="flex items-center gap-3 mt-3">

                        <Image
                          src="/icons/clock.png"
                          alt="clock"
                          width={22}
                          height={22}
                        />

                        <p className="text-[#122e41] text-lg">

                          Time: {appointment.time}

                        </p>

                      </div>

                      {/* Problem */}
                      <div className="flex items-center gap-3 mt-3">

                        <Image
                          src="/icons/problem.png"
                          alt="problem"
                          width={22}
                          height={22}
                        />

                        <p className="text-[#122e41] text-lg">

                          Reason: {appointment.problem}

                        </p>

                      </div>

                      {/* Buttons */}
                      <div className="flex items-center gap-4 mt-8">

                        {/* Update */}
                        <button
                          onClick={() => handleUpdate(index)}
                          className="bg-[#62b6cb] text-white px-5 py-2 rounded-full font-medium hover:bg-[#1b4965] transition-all duration-300 cursor-pointer flex items-center gap-2"
                        >

                          <Image
                            src="/icons/update.png"
                            alt="update"
                            width={18}
                            height={18}
                          />

                          Update

                        </button>

                        {/* Delete */}
                        <button
                          onClick={() => handleDelete(index)}
                          className="bg-red-500 text-white px-5 py-2 rounded-full font-medium hover:bg-red-600 transition-all duration-300 cursor-pointer flex items-center gap-2"
                        >

                          <Image
                            src="/icons/delete.png"
                            alt="delete"
                            width={18}
                            height={18}
                          />

                          Delete

                        </button>

                      </div>

                    </div>

                  ))

                ) : (

                  <div className="col-span-full bg-[#f2ffff] rounded-[30px] py-20 text-center shadow-[0_10px_40px_rgba(27,73,101,0.12)]">

                    <h2 className="text-3xl font-bold text-[#1b4965]">

                      No Appointments Found

                    </h2>

                    <p className="text-[#5c6b75] mt-4 text-lg">

                      You haven&apos;t booked any appointments yet

                    </p>

                  </div>

                )

              }

            </div>

          )

        }

        {/* PROFILE */}
        {

          activeTab === "profile" && (

            <div className="bg-[#f2ffff] rounded-[30px] p-10 shadow-[0_10px_40px_rgba(27,73,101,0.12)] mt-12 max-w-xl">

              <div className="flex items-center gap-5">

                <Image
                  src={user?.photoURL || "/images/default-user.png"}
                  alt="profile"
                  width={90}
                  height={90}
                  className="rounded-full object-cover border-4 border-[#62b6cb]"
                />

                <div>

                  <h2 className="text-3xl font-bold text-[#1b4965]">

                    {user?.displayName || "User"}

                  </h2>

                  <p className="text-[#5c6b75] mt-2">

                    {user?.email}

                  </p>

                </div>

              </div>

              <button
                onClick={() => setProfileModal(true)}
                className="mt-8 w-full bg-[#0ea5c6] text-white py-4 rounded-2xl font-semibold hover:bg-[#1b4965] transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
              >

                <Image
                  src="/icons/update.png"
                  alt="update"
                  width={18}
                  height={18}
                />

                Update Profile

              </button>

            </div>

          )

        }

      </div>

      {/* APPOINTMENT UPDATE MODAL */}
      {

        editingIndex !== null && (

          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">

            <div className="bg-[#ebffff] rounded-[30px] p-8 w-full max-w-xl">

              <h2 className="text-3xl font-bold text-[#1b4965]">

                Update Appointment

              </h2>

              <div className="mt-6 space-y-5">

                <input
                  type="text"
                  value={updatedName}
                  onChange={(e) => setUpdatedName(e.target.value)}
                  placeholder="Patient Name"
                  className="w-full border text-[#0b1c27] text-lg border-[#a8cad6] rounded-2xl px-5 py-4 outline-none"
                />

                <input
                  type="text"
                  value={updatedPhone}
                  onChange={(e) => setUpdatedPhone(e.target.value)}
                  placeholder="Phone"
                  className="w-full border text-[#0b1c27] text-lg border-[#a8cad6] rounded-2xl px-5 py-4 outline-none"
                />

                <input
                  type="date"
                  value={updatedDate}
                  onChange={(e) => setUpdatedDate(e.target.value)}
                  className="w-full border text-[#0b1c27] text-lg border-[#a8cad6] rounded-2xl px-5 py-4 outline-none"
                />

                <select
                  value={updatedTime}
                  onChange={(e) => setUpdatedTime(e.target.value)}
                  className="w-full border text-[#0b1c27] text-lg border-[#a8cad6] rounded-2xl px-5 py-4 outline-none"
                >

                  <option>09:00 AM</option>
                  <option>10:00 AM</option>
                  <option>11:00 AM</option>
                  <option>04:00 PM</option>
                  <option>05:00 PM</option>

                </select>

                <textarea
                  value={updatedProblem}
                  onChange={(e) => setUpdatedProblem(e.target.value)}
                  placeholder="Problem"
                  rows={4}
                  className="w-full border text-[#0b1c27] text-lg border-[#a8cad6] rounded-2xl px-5 py-4 outline-none resize-none"
                ></textarea>

              </div>

              <div className="flex items-center gap-4 mt-8">

                <button
                  onClick={handleSaveUpdate}
                  className="bg-[#62b6cb] text-white px-6 py-3 rounded-full hover:bg-[#1b4965] transition-all duration-300 cursor-pointer"
                >

                  Save Changes

                </button>

                <button
                  onClick={() => setEditingIndex(null)}
                  className="bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-600 transition-all duration-300 cursor-pointer"
                >

                  Cancel

                </button>

              </div>

            </div>

          </div>

        )

      }

      {/* PROFILE UPDATE MODAL */}
      {

        profileModal && (

          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">

            <div className="bg-[#ebffff] rounded-[30px] p-8 w-full max-w-xl">

              <h2 className="text-3xl font-bold text-[#1b4965]">

                Update Profile

              </h2>

              <div className="mt-6 space-y-5">

                <input
                  type="text"
                  value={updatedProfileName}
                  onChange={(e) => setUpdatedProfileName(e.target.value)}
                  placeholder="Your Name"
                  className="w-full border text-[#0b1c27] text-lg border-[#a8cad6] rounded-2xl px-5 py-4 outline-none"
                />

               
              </div>

              <div className="flex items-center gap-4 mt-8">

                <button
                  onClick={handleProfileUpdate}
                  className="bg-[#62b6cb] text-white px-6 py-3 rounded-full hover:bg-[#1b4965] transition-all duration-300 cursor-pointer"
                >

                  Save Changes

                </button>

                <button
                  onClick={() => setProfileModal(false)}
                  className="bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-600 transition-all duration-300 cursor-pointer"
                >

                  Cancel

                </button>

              </div>

            </div>

          </div>

        )

      }

    </div>

  );

};

export default DashboardPage;