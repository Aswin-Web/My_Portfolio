import React from "react";
import Experience from "./experience";

const ExperienceData = [
  {
    year: 2023,
    JobTitle: "Full Stack Developer",
    company: "Akidev Corporation",
    timeSpan: "July 2023 - Present",
    presentCompany: true,
    description: `My Responsibilities include working with designs, development. 
    Working simultaneously in frontend development and backend development.
    It includes frameworks like React, TailwindCSS, Redux, Material UI, Chakra UI, Framer-Motion, ExpressJS, Mongoose, MongoDb.
    Using this technologies to build react functional components, caching the data using Redux, Using of Prebuilded Components from Material UI and Chakra UI. Added one time login using Google, Microsoft authentication, writing backend endpoints etc... `,
  },
  {
    year: 2023,
    JobTitle: "Full Stack Developer",
    company: "JourneyAnalytics.io",
    timeSpan: "June 2023",
    presentCompany: false,
    description:  `My Responsibilities include working with designs, development. 
    Working simultaneously in frontend development and backend development.
    It includes frameworks like React, TailwindCSS, Redux, Material UI, Chakra UI, Framer-Motion, ExpressJS, Mongoose, MongoDb.
    Using this technologies to build react functional components, caching the data using Redux, Using of Prebuilded Components from Material UI and Chakra UI. Added one time login using Google, Microsoft authentication, writing backend endpoints etc.. https://journeyanalytics.netlify.app was the product that our team(Two developers along with me) build. `,
  },
  {
    year: 2023,
    JobTitle: "Full Stack Developer",
    company: "I-Bacus-Tech",
    timeSpan: "February 2023 - May 2023",
    presentCompany: false,
    description: 
    `My Responsibilities include working with designs, development. 
    Working simultaneously in frontend development and backend development.
    It includes frameworks like React, TailwindCSS, Redux, Material UI, Chakra UI, Framer-Motion, ExpressJS, Mongoose, MongoDb.
    Using this technologies to build react functional components, caching the data using Redux, Using of Prebuilded Components from Material UI and Chakra UI. Added one time login using Google authentication, writing backend endpoints and mail alerts using nodemailer etc.. https://careersheets.netlify.app was the product that our team(Two developers along with me) build. `,
  
  },
  {
    year: 2022,
    JobTitle: "Full Stack Developer (Internship)",
    company: "DevTown (EduTech - Platform) (Online Mode)",
    timeSpan: "December 2022 - February 2023",
    presentCompany: false,
    description: "This was an EduTech Internship where they taught about the Industrial standards of developing an web app. They taught about MERN stack along with tailwind, Redux with Industrial best practices. ",
  },
  {
    year: 2022,
    JobTitle: "Full Stack Developer (Internship)",
    company: "ExposysData Labs (Online Mode)",
    timeSpan: "February 2022 - March 2022",
    presentCompany: false,
    description: " This was an online mode Internship where the team leaders has assigned tasks. The assigned works to create an Food delivery User interface using ReactJS and for backend they have asked to create an CRUD app using the technologies like ExpressJS, MongoDB and EJS Templates.",
  },
];

const main = () => {
  return (
    <div>
      <div className="container mx-auto flex flex-col justify-center w-fit">
        <h1 className="text-2xl  mx-auto font-semibold tracking-wider md:text-3xl lg:text-4xl lg:font-bold border-b-4 pb-2 border-rose lg:mt-3">
          Experience
        </h1>
      </div>
      {ExperienceData.map((item) => (
        <Experience data={item} />
      ))}
    </div>
  );
};

export default main;
