"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  projectUrl: string;
  sourceUrl: string;
}

export default function ProjectCard({
  title,
  description,
  technologies = ["React", "Next.js", "Tailwind CSS"],
  imageUrl,
  projectUrl = "#",
  sourceUrl = "#",
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-full max-w-sm h-[300px] overflow-hidden relative group rounded-lg shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={imageUrl}
        alt={`Screenshot of ${title}`}
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-300 ease-in-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/0 transition-opacity duration-300 ease-in-out opacity-60 group-hover:opacity-80" />
      <div className="absolute inset-0 p-6 flex flex-col justify-between">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-white">{title}</h3>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs font-semibold text-white bg-white/20 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div
          className={`transition-opacity duration-300 ease-in-out ${isHovered ? "opacity-100" : "opacity-0"}`}
        >
          <p className="text-white/90 mb-4">{description}</p>
          <div className="flex justify-between">
            <a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-white text-gray-800 text-sm font-medium rounded-md transition-colors duration-300 ease-in-out hover:bg-gray-100"
            >
              <FaExternalLinkAlt className="mr-2" />
              View Project
            </a>
            <a
              href={sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-gray-800 text-white text-sm font-medium rounded-md transition-colors duration-300 ease-in-out hover:bg-gray-700"
            >
              <FaGithub className="mr-2" />
              Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
