/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable padding-line-between-statements */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unescaped-entities */
"use client";
import { useGetAllEducationQuery } from "@/redux/api/education";
import { useGetAllExperienceQuery } from "@/redux/api/experience";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const CareerSection = () => {
  const [activeTab, setActiveTab] = useState("education");
  const { data } = useGetAllEducationQuery({});
  const educationData = data?.data;

  const { data: experience } = useGetAllExperienceQuery({});
  const experienceData = experience?.data;
  return (
    <div className="container max-w-7xl w-full mx-auto mt-20 px-6">
      <div className=" md:text-4xl uppercase text-xl font-bold mb-5">
        Career <span className="text-primary">Progression</span>
        <p className="w-16 h-[4px] bg-primary"></p>
      </div>
      <div className="flex justify-around gap-5 dark:bg-darkModal bg-white shadow-md md:w-1/3 w-full rounded-md mx-auto">
        <h1
          onClick={() => setActiveTab("education")}
          className={` ${activeTab === "education" ? "text-white bg-primary duration-400 transition-all" : "dark:text-white text-black"} py-1 px-3 rounded-lg cursor-pointer  my-4`}
        >
          Education
        </h1>
        <h1
          onClick={() => setActiveTab("experience")}
          className={` ${activeTab === "experience" ? "text-white bg-primary duration-400 transition-all" : "dark:text-white text-black"} py-1 px-3 rounded-lg cursor-pointer  my-4`}
        >
          Experience
        </h1>
      </div>
      <div>
        {activeTab === "education"
          ? educationData?.map((item: any) => (
              <div
                key={item?._id}
                className="dark:bg-darkCard bg-white shadow-sm p-5 gap-5 md:flex justify-between rounded-md mt-5"
              >
                <div className="md:w-1/2 w-full">
                  <h1 className="text-primary text-2xl font-semibold">
                    {item?.educationName}
                  </h1>
                  <h1 className="text-xl dark:text-white my-3 text-black">
                    {item?.instituteName}
                  </h1>
                  <h1 className="text-lg dark:text-white my-3 text-black">
                    {item?.department}
                  </h1>
                  <p className="">{item?.description}</p>
                  <div className="border-2 border-gray-200 p-2 mt-5 w-40 text-center">
                    {item?.duration}
                  </div>
                </div>
                <div className="md:w-1/2 w-full md:mt-0 mt-5">
                  <Image
                    className="rounded-xl"
                    alt="profile"
                    src={item?.image}
                    height={900}
                    width={900}
                  />
                </div>
              </div>
            ))
          : experienceData?.map((item: any) => (
              <div
                key={item?._id}
                className="dark:bg-darkCard bg-white shadow-sm p-5 gap-5 md:flex justify-between rounded-md mt-5"
              >
                <div className="md:w-1/2 w-full">
                  <Link
                    target="_blank"
                    href={"https://www.depthsearch.net"}
                    className="text-primary hover:underline duration-300 text-2xl uppercase font-semibold"
                  >
                    {item?.companyName}
                  </Link>
                  <h1 className="text-xl dark:text-white my-3 text-black">
                    Designation: {item?.designation}
                  </h1>
                  <h1 className="text-lg dark:text-white my-3 text-black">
                    Location: {item?.location}
                  </h1>
                  <p className="">{item?.description}</p>
                  <div className="border-2 border-gray-200 p-2 mt-5 w-72 text-center">
                    {item?.duration}
                  </div>
                </div>
                <div className="md:w-1/2 w-full md:mt-0 mt-5">
                  <img src={item?.image} className="h-full rounded-xl" alt="" />
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default CareerSection;
