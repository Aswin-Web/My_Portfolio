import React from "react";
import SkillCards from "../Utils/SkillCards";

// ICONS
import next from "../../images/skills/nextjs-icon.png";
import react from "../../images/skills/react.png";
import redux from "../../images/skills/redux.png";
import tailwind from "../../images/skills/tailwind.png";
import mui from "../../images/skills/materialui.png";
import fm from "../../images/skills/framer-motion.svg";
import express from "../../images/skills/express.png"
import flask from "../../images/skills/flask.png"
import jwt from "../../images/skills/JWT.png"
import mongo from "../../images/skills/mongodb.png"
import ibmdb from "../../images/skills/ibmdb.png"
import docker from "../../images/skills/docker.png"
import nodejs from "../../images/skills/nodejs.png"
import python from "../../images/skills/python.png"
import postman from "../../images/skills/postman.png"
import vscode from "../../images/skills/vscode.png"
import ubuntu from "../../images/skills/ubuntu.png"
import git from "../../images/skills/git.png"
import github from "../../images/skills/github.png"
const Main = () => {
  return (
    <div className="container mx-auto ">
      {/* Main Topic */}
      <div className=" flex justify-center m-4">
        <h1 className="text-2xl  mx-auto font-semibold tracking-wider md:text-3xl lg:text-4xl lg:font-bold border-b-4 pb-2 border-rose">
          My Skills
        </h1>
      </div>
      {/* Frontend */}
      <div className=" mx-5 my-2 md:mx-7">
        <h1 className="text-xl inline-block my-2 mx-auto font-medium tracking-wider md:text-2xl lg:text-3xl lg:font-medium border-b-2 border-rose">
          Frontend:
        </h1>
        <div className="md:mx-1 flex justify-center flex-wrap">
          <SkillCards title="NEXT" imgSrc={next} />
          <SkillCards title="REACT" imgSrc={react} />
          <SkillCards title="REDUX" imgSrc={redux} />
          <SkillCards title="TAILWIND" imgSrc={tailwind} />
          <SkillCards title="MUI" imgSrc={mui} />
          <SkillCards title={`MOTION`} imgSrc={fm} />
        </div>
      </div>

      {/* Backend */}
      <div className="mx-5 md:mx-7">
        <h1 className="text-xl inline-block mx-auto font-medium tracking-wider md:text-2xl lg:text-3xl  border-b-2 border-rose">
          Backend:
        </h1>
        <div className="mx-1 flex justify-center flex-wrap">
          <SkillCards title="NODEJS" imgSrc={nodejs} />
          <SkillCards title="EXPRESS" imgSrc={express} />
          <SkillCards title="PYTHON" imgSrc={python} />
          <SkillCards title="FLASK" imgSrc={flask} />
          <SkillCards title="JWT" imgSrc={jwt} />
          <SkillCards title={`MONGO`} imgSrc={mongo} />
          <SkillCards title="IBMDB" imgSrc={ibmdb} />
          <SkillCards title="DOCKER" imgSrc={docker} />
        </div>
      </div>
      {/* Other Tools */}
      <div className="mx-5 md:mx-7">
        <h1 className="text-xl inline-block mx-auto font-medium tracking-wider md:text-2xl lg:text-3xl  border-b-2 border-rose">
          Others:
        </h1>
        <div className="mx-1 flex justify-center flex-wrap">
          <SkillCards title="POSTMAN" imgSrc={postman} />
          <SkillCards title="VSCODE" imgSrc={vscode} />
          <SkillCards title="UBUNTU" imgSrc={ubuntu} />
          <SkillCards title="GIT" imgSrc={git} />
          <SkillCards title="GITHUB" imgSrc={github} />
        </div>
      </div>

      <div className="flex w-fit m-0"></div>
    </div>
  );
};

export default Main;
