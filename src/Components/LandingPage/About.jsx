import React from "react";

const About = () => {
  return (
    <div>
      <div className="container mx-auto px-5 md:px-7 ">
        <h1 className="text-3xl pt-3 pb-1 font-semibold  tracking-wider inline-block border-b-4 border-rose">
          About Me
        </h1>
        <h6 className="px-1 text-lg  pt-3 text-justify md:px-4 md:text-xl tracking-wider">
          <span className="pl-7 "> I</span> am a passionate and experienced
          <span className="text-rose font-semibold">
            &nbsp;Full stack Developer{" "}
          </span>{" "}
          with a strong focus on delivering high-quality, scalable, and
          user-friendly web applications. With a solid background in both
          front-end and back-end development, I strive to create innovative
          solutions that meet the unique needs of each project.
        </h6>
      </div>
    </div>
  );
};

export default About;
