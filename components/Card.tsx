"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function ProjectCard({ item }: any) {
  // Limit description to 40 characters
  const truncatedDescription =
    item?.description?.length > 40
      ? item.description.substring(0, 40) + "..."
      : item.description;

  return (
    <div className="w-full max-w-sm h-[300px] overflow-hidden relative group rounded-lg shadow-md">
      {/* Project Image */}
      <Image
        alt={`Screenshot of ${item?.name}`}
        className="transition-transform duration-300 ease-in-out group-hover:scale-110"
        layout="fill"
        objectFit="cover"
        src={item?.image}
      />

      {/* Dark overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/0 transition-opacity duration-300 ease-in-out opacity-60 group-hover:opacity-80" />

      {/* Content - hidden by default and shown on hover */}
      <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
        {/* Title and truncated description */}
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-white">{item?.name}</h3>
          <p className="text-white/90">{truncatedDescription}</p>
        </div>

        {/* Buttons for View Project and Source Code */}
        <div className="flex justify-between mt-3">
          <a
            className="inline-flex items-center px-4 py-2 bg-white text-gray-800 text-sm font-medium rounded-md transition-colors duration-300 ease-in-out hover:bg-gray-100"
            href={`/project-details/${item?._id}`} // Use actual project link if available
            rel="noopener noreferrer"
          >
            <FaExternalLinkAlt className="mr-2" />
            View Project
          </a>
          <a
            className="inline-flex items-center px-4 py-2 bg-gray-800 text-white text-sm font-medium rounded-md transition-colors duration-300 ease-in-out hover:bg-gray-700"
            href={`/project-details/${item?._id}`} // Use actual source code link if available
            rel="noopener noreferrer"
          >
            <FaGithub className="mr-2" />
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
}
