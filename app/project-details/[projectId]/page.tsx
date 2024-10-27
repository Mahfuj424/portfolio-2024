"use client";
import { useGetSingleProjectQuery } from "@/redux/api/project";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

const technologyStackColors: { [key: string]: string } = {
  React: "bg-blue-500",
  "Node.js": "bg-green-500",
  MongoDB: "bg-green-700",
  "Tailwind CSS": "bg-cyan-500",
};

const ProjectDetails = ({ params }: any) => {
  const projectId = params?.projectId;

  const { data, isLoading, error } = useGetSingleProjectQuery(projectId);
  const projectData = data?.data;

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading project details.</p>;

  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 my-20 dark:text-white p-6 rounded-lg shadow-lg max-w-7xl mx-auto">
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-3xl font-bold text-primary">{projectData?.name}</h2>
        <a
          href={projectData?.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-green-600 transition-colors"
        >
          Live Site
        </a>
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        {projectData?.description}
      </p>

      {/* Key Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2 flex items-center">
            <span className="mr-2">📋</span> Key Features
          </h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
            {projectData?.features?.map((feature: string, index: number) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        <div>
          {/* Technology Stack */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2 flex items-center">
              <span className="mr-2">🛠️</span> Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {projectData?.technologyStack?.map((tech: string) => (
                <span
                  key={tech}
                  className={`${technologyStackColors[tech] || "bg-gray-600 dark:bg-gray-800"} px-3 py-1 text-white rounded-full text-sm`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Source Code Links */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2 flex items-center">
              <FaGithub className="mr-2" /> Source Code
            </h3>
            <div className="flex gap-4">
              <a
                href={projectData?.clientRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors flex items-center"
              >
                <FaGithub className="mr-2" /> Client Side
              </a>
              <a
                href={projectData?.serverRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-500 dark:bg-pink-700 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-pink-600 dark:hover:bg-pink-600 transition-colors flex items-center"
              >
                <FaGithub className="mr-2" /> Server Side
              </a>
            </div>
          </div>
        </div>

        {/* Project Screenshot */}
        <div>
          <h3 className="text-xl font-semibold mb-2 flex items-center">
            <span className="mr-2">🖼️</span> Project Screenshots
          </h3>
          <div className="bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden">
            <Image
              src={projectData?.image}
              alt="Project Screenshot"
              width={500}
              height={300}
              layout="responsive"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
