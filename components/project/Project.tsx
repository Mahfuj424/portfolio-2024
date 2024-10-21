import React from "react";
import ProjectCard from "../Card";

const Project = () => {
  return (
    <div className="container max-w-7xl w-full mx-auto mt-20 px-6">
      <div className=" md:text-4xl uppercase text-xl font-bold mb-5">
        Project <span className="text-primary">Skillset</span>
        <p className="w-16 h-[4px] bg-primary"></p>
      </div>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {[1, 2, 3, 4, 5, 6].map((item, index) => (
          <ProjectCard
            key={index}
            projectUrl="#"
            technologies={[]}
            sourceUrl="#"
            title={"Gardening platform"}
            description="A brief description of the project and its key features."
            imageUrl="https://i.ibb.co.com/GPy88Bg/mpi-College.jpg"
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
