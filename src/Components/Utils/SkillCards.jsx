import React from "react";

const SkillCards = ({title,imgSrc}) => {
  return (
    <div className=" p-4 flex bg-cardColor rounded-lg items-center flex-col md:p-5 lg:p-6  hover:scale-95 m-4  transition-all duration-500 hover:border-2 hover:border-rose">
      <div className="h-7 w-7 md:h-8 mx-auto md:w-8 lg:h-10 lg:w-10 m-auto bg-cardColor">
        <img
          className="w-7 h-7 mx-auto object-contain bg-cardColor animate-spin-slow md:animate-pulse"
          src={imgSrc}
          alt=""
        />
      </div>
      <div className="text-center mt-2  bg-cardColor font-semibold text-xs lg:text-lg">
        {" "}
        {title}
      </div>
    </div>
  );
};

export default SkillCards;
