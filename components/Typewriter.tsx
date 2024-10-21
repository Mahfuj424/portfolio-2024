"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

const TypewriterComponent = () => {
  return (
    <div>
      <span className="text-primary font-bold">
        {" "}
        {/* Apply red text color */}
        <Typewriter
          words={[
            "MERN Stack Developer",
            "Full Stack Developer",
            "I love coding!",
          ]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={50}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </span>
    </div>
  );
};

export default TypewriterComponent;
