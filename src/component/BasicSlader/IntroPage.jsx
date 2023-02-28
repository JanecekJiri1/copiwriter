import React from "react";
import "./IntroPage.style.css";

import { Link } from "react-router-dom";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import AnimatedPage from "../AnimatedPage";

function IntroPage(props) {
  return (
    <AnimatedPage>
      <div className="IntroPage">
        <div>
          <div className="arrowNext">
            <Link to="/ContactPage">
              <div className="leftInfo">
                <IoIosArrowBack className="arrowNextIcons" />
              </div>
            </Link>
            <Link to="/About">
              <div className="rightInfo">
                <IoIosArrowForward className="arrowNextIcons" />
              </div>
            </Link>
          </div>
        </div>
        <div className="sectionOne">
          <h1>Barča copiwriter #1</h1>
          <h2>Úspěch začíná slovy</h2>
          <ul>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
            <li>Lorem ipsum dolor consectetur adipisicing.</li>
          </ul>
        </div>
        <div className="sectionTwo">{/* <CaruselInfo /> */}</div>
      </div>
    </AnimatedPage>
  );
}

export default IntroPage;
