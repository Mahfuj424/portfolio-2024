/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
"use client";
import React, { useState } from "react";

import ProjectCard from "../Card";

// Define an array of project categories
const tabArray: string[] = [
  "All",
  "Booking",
  "E-Learning",
  "E-Commerce",
  "Javascript",
  "Landing Page",
  "Portfolio",
  "Service",
];

const Project: React.FC = () => {
  // Ensure activeTab is typed as a string
  const [activeTab, setActiveTab] = useState<string>("All");

  return (
    <div className="w-full mx-auto mt-20 px-6 max-w-7xl">
      <div className="md:text-4xl uppercase text-xl font-bold mb-5">
        Project <span className="text-primary">Skillset</span>
        <p className="w-16 h-[4px] bg-primary" />
      </div>

      {/* Tabs for filtering projects */}
      <div className="flex justify-center gap-5 overflow-x-auto dark:bg-darkModal bg-white shadow-md text-sm md:text-medium w-full rounded-md mx-auto">
        {tabArray.map((tab, index) => (
          <div key={index}>
            <h1
              className={`${
                activeTab === tab
                  ? "text-white bg-primary duration-400 transition-all"
                  : "dark:text-white text-black"
              } md:py-1 px-3 rounded-lg cursor-pointer my-4`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </h1>
          </div>
        ))}
      </div>

      {/* Project cards */}
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {[1, 2, 3, 4, 5, 6].map((_item, index) => (
          <ProjectCard
            key={index}
            description="A brief description of the project and its key features."
            imageUrl="https://i.ibb.co/GPy88Bg/mpi-College.jpg"
            projectUrl="#"
            sourceUrl="#"
            technologies={[]} // Provide the technologies array if available
            title="Gardening platform"
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
