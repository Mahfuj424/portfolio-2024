import React from "react";
import Github from "../Github";

const DaysCode = () => {
  return (
    <div className="container max-w-7xl w-full mx-auto mt-20 px-6">
      <div className=" md:text-4xl uppercase text-xl font-bold mb-5">
        Days <span className="text-primary">I Code</span>
        <p className="w-16 h-[4px] bg-primary"></p>
      </div>
      <div className="mt-5">
        <Github />
      </div>
    </div>
  );
};

export default DaysCode;
