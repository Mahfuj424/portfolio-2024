/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable padding-line-between-statements */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const CareerSection = () => {
  const [activeTab, setActiveTab] = useState("education");
  return (
    <div className="container max-w-7xl w-full mx-auto mt-20 px-6">
      <div className=" md:text-4xl uppercase text-xl font-bold mb-5">
        Career <span className="text-primary">Progression</span>
        <p className="w-16 h-[4px] bg-primary"></p>
      </div>
      <div className="flex justify-around gap-5 dark:bg-darkModal bg-gray-200 md:w-1/3 w-full rounded-md mx-auto">
        <h1
          onClick={() => setActiveTab("education")}
          className={` ${activeTab === "education" ? "text-white bg-primary duration-400 transition-all" : "dark:text-white text-black"} py-1 px-3 rounded-lg cursor-pointer  my-2`}
        >
          Education
        </h1>
        <h1
          onClick={() => setActiveTab("experience")}
          className={` ${activeTab === "experience" ? "text-white bg-primary duration-400 transition-all" : "dark:text-white text-black"} py-1 px-3 rounded-lg cursor-pointer  my-2`}
        >
          Experience
        </h1>
      </div>
      <div>
        {activeTab === "education" ? (
          <div className="dark:bg-darkCard bg-gray-100 p-5 gap-5 md:flex justify-between rounded-md mt-5">
            <div className="md:w-1/2 w-full">
              <h1 className="text-primary text-2xl font-semibold">
                Diploma In Engineering
              </h1>
              <h1 className="text-xl dark:text-white my-3 text-black">
                Moulvibazar Polytechnic Institute
              </h1>
              <h1 className="text-lg dark:text-white my-3 text-black">
                Department of Computer Science
              </h1>
              <p className="">
                I completed a Diploma in Engineering from Moulvibazar
                Polytechnic Institute, gaining skills in: Web Development: HTML,
                CSS, JavaScript, React, and Node.js for building responsive
                websites. Apps Development: Cross-platform mobile apps using
                Flutter. Networking: LAN setup, router configuration, and
                networking protocols. Graphics Design: Adobe Photoshop and
                Illustrator for creating visual content. Robotics: Basics of
                microcontroller programming and automation. These skills have
                prepared me for multiple technical roles.
              </p>
              <div className="border-2 border-gray-200 p-2 mt-5 w-40 text-center">
                2020 - 2024
              </div>
            </div>
            <div className="md:w-1/2 w-full md:mt-0 mt-5">
              <Image
                className="rounded-xl"
                alt="profile"
                src="https://i.ibb.co.com/GPy88Bg/mpi-College.jpg"
                height={900}
                width={900}
              />
            </div>
          </div>
        ) : (
          <div className="dark:bg-darkCard bg-gray-100 p-5 gap-5 md:flex justify-between rounded-md mt-5">
            <div className="md:w-1/2 w-full">
              <Link
                target="_blank"
                href={"https://www.depthsearch.net"}
                className="text-primary hover:underline duration-300 text-2xl uppercase font-semibold"
              >
                Depth Search
              </Link>
              <h1 className="text-xl dark:text-white my-3 text-black">
                Designation: Frontend Developer
              </h1>
              <h1 className="text-lg dark:text-white my-3 text-black">
                Location: Rajshahi, Bangladesh
              </h1>
              <p className="">
                I worked as a Frontend Web Developer at Depth Search for 6
                months, where I focused on: Building responsive and
                user-friendly web applications with HTML, CSS, JavaScript, and
                React. Collaborating closely with designers and backend teams to
                integrate APIs and deliver consistent, functional designs.
                Optimizing web performance, ensuring fast load times, and
                debugging to enhance user experience across devices.
                Implementing best practices in frontend development for clean
                and efficient code. This role significantly improved my skills
                in modern web development and effective team collaboration.
              </p>
              <div className="border-2 border-gray-200 p-2 mt-5 w-72 text-center">
                NOV 2020 - APR 2024
              </div>
            </div>
            <div className="md:w-1/2 w-full md:mt-0 mt-5">
              <img
                src="https://i.ibb.co.com/Rpq9gJQ/Screenshot-2024-10-21-222728.png"
                className="h-full rounded-xl"
                alt=""
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CareerSection;
