import React from "react";

const Experience = (props) => {
    const {year,
    JobTitle,
    company,
    timeSpan,
    presentCompany,
    description}=props.data
  return (
    <div>
      <div className="container mx-auto flex flex-col justify-center w-fit">
        <div className="flex w-80vw  mx-auto mt-6 lg:w-60vw lg:px-4 ">
          <div className="flex justify-center ">
            <div className="flex-1 w-1/12 hidden md:block text-center lg:px-5 ">
              <div className="border-2 border-rose ">
                <h1 className="text-lg  px-2  lg:px-1">{year}</h1>
              </div>
            </div>
            <div className="flex-1  flex justify-center flex-col items-center">
              <div className="w-4 h-4 rounded-full border-2 border-rose shadow-rose shadow bg-rose"></div>
              <div className="w-10px bg-rose h-full"></div>
            </div>
            <div className="flex-3 w-9/12">
              <div className="text-2xl font-semibold">{JobTitle}</div>
              <div className="text-lg font-semibold flex  items-center gap-1">
                {company}
                <div
                  className={`w-1 h-1 bg-green rounded-full ${
                    presentCompany ? "block" : "hidden"
                  }`}
                ></div>
              </div>
              <div className="text-sm font-medium border-b-2 border-rose pb-1">
                {timeSpan}
              </div>
              <div className="text-base mt-1 text-justify w-full">
                {description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
