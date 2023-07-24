import React from "react";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <div>
      {/* Parent */}
      <div className="container mx-auto   md:flex lg:h-60vh overflow-hidden ">
        {/* Left Panel */}

        <div className="w-full  items-center justify-start tracking-widest px-7 pt-7 pb-4 lg:flex lg:flex-2 ">
          <div className="">
            <h1 className="text-3xl tracking-wider  space-y-7 my-1 leading-8 lg:leading-normal lg:text-5xl">
              I'm Ashwin,
            </h1>
            <span className="text-lg tracking-wider leading-4 md:text-2xl lg:leading-none lg:text-5xl">
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed once, initially
                  "an Full Stack Developer.",
                  2000,
                  "an MERN Stack Developer.",
                  2000,
                  "an NodeJS Developer.",
                  2000,
                  "an Frontend Developer.",
                  2000,
                  "an Backend Developer.",
                  2000,
                ]}
                speed={30}
                style={{
                  fontWeight: "bolder",
                  color: "#ec05cc",
                  background: "transparent",
                }}
                repeat={Infinity}
              />
            </span>
            <div className="mt-4 ">
              <button className="transition-all hover:duration-500 text-base   border-2 border-solid border-rose font-medium px-2 py-1 hover:text-rose hover:border-white">
                Contact Me
              </button>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="hidden md:flex md:flex-1"> hello</div>
      </div>
    </div>
  );
};

export default HeroSection;
