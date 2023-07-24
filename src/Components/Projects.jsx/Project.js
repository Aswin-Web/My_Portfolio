import React from "react";
import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <div>
      <div className="container mx-auto ">
        <div className="mx-auto text-center">
          <h2 className="text-4xl font-semibold border-b-2 pb-2 lg:mt-5 border-rose tracking-wider inline-block">
            {" "}
            Projects{" "}
          </h2>
        </div>

        <div className="m-7 px-4 ">
          <h2 className="text-xl md:text-2xl font-semibold border-b-2 pb-1 lg:mt-5 border-rose tracking-wider inline-block">
            {" "}
            Full Stack Projects{" "}
          </h2>
          <div>
            <ProjectCard />
          </div>
        </div>
        <div className="m-7 px-4 ">
          <h2 className="text-2xl font-semibold border-b-2 pb-1 lg:mt-5 border-rose tracking-wider inline-block">
            {" "}
            Frontend Projects{" "}
          </h2>
          <div>
            <ProjectCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
