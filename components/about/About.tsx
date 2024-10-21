/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";

const AboutSection = () => {
  return (
    <div className="container max-w-7xl mx-auto px-6">
      <div className="md:flex justify-between w-full items-center">
        <div className="md:w-2/3 w-full">
          <div className=" md:text-4xl uppercase text-xl font-bold mb-5">
            About <span className="text-primary">Me</span>
            <p className="w-16 h-[4px] bg-primary"></p>
          </div>
          <p className="text-secondary dark:text-gray-400">
            Hello! I’m Mahfuj Alam, a full-stack web developer passionate about
            building dynamic and responsive web applications. I hold a Diploma
            in Engineering in Computer Science, which has provided me with a
            solid foundation in technology. I have a diverse skill set that
            includes: Frontend Technologies: JavaScript, TypeScript, React,
            Next.js Backend Technologies: Node.js, Express.js Database
            Management: MongoDB, Mongoose I thrive on learning new technologies
            and continuously improving my skills to create efficient and
            user-friendly applications. I enjoy collaborating on projects that
            challenge my abilities and allow me to innovate. Feel free to
            connect with me to discuss web development, technology trends, or
            any exciting projects!
          </p>
        </div>
        <div>
          <Image
            alt="profile"
            src="https://i.ibb.co.com/4RmkpQV/aboutus-removebg-preview.png"
            height={900}
            width={900}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
