import { Link } from "react-router-dom";

import React from "react";
import Arrow from '../assets/icons/arrow.svg'

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
        Hi, I'm
        <span className="font-semibold mx-2 text-white">Priya Dharshini</span>
        👋
        <br />
        A Front-End Developer 
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          Worked with TheDot Tech <br /> and picked up many skills along the way
        </p>

        <button className="neo-brutalism-white neo-btn">
          Learn more
          <img src={Arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </button>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className="info-box">
        <p className="font-medium text-center sm:text-xl">
          Collaborated with cross-functional teams, including designers and backend developers, to create seamless and responsive user interfaces. <br /> Curious about the impact?
        </p>

        <button className="neo-brutalism-white neo-btn">
          Visit my portfolio
          <img src={Arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </button>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          Need a project done or looking for a dev? <br/> I'm just a few keystrokes away
        </p>

        <button className="neo-brutalism-white neo-btn">
          Let's talk
          <img src={Arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </button>
      </div>
    );
  }

  return null;
};

export default HomeInfo;
