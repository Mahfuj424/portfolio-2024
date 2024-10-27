/* eslint-disable padding-line-between-statements */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unescaped-entities */
"use client";
import { useGetAllTechSkillsQuery } from "@/redux/api/skills";
import React from "react";

const SkillsSection = () => {
  const { data } = useGetAllTechSkillsQuery({});
  const skillsData = data?.data;
  return (
    <div className="container max-w-7xl w-full mx-auto mt-20 px-6">
      <div className=" md:text-4xl uppercase text-xl font-bold mb-5">
        Professional <span className="text-primary">Skillset</span>
        <p className="w-16 h-[4px] bg-primary"></p>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10 lg:grid-cols-4 mx-auto justify-center">
          {skillsData?.map((item: any) => (
            <div
              key={item?._id}
              className="text-center mx-2 dark:bg-darkBg dark:border border-gray-400 bg-white shadow-md rounded-md hover:scale-105 duration-300 transition-all w-60 py-3"
            >
              <div className="flex justify-center">
                <img alt="vscode" height="48" src={item?.image} width="48" />
              </div>
              <br />
              {item?.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
