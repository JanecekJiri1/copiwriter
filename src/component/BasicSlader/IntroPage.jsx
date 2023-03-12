import React from "react";
import "./IntroPage.style.css";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { Link } from "react-router-dom";
import AnimatedPage from "../AnimatedPage";
import Swiper from "../SwiperCarus";

import PhoneVersion from "./Phone/PhoneVersion";

function IntroPage(props) {
  return (
    <>
      <div className="phoneVersionHide">
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
            <div className="sectionTwo">
              <Swiper />
            </div>
          </div>
        </AnimatedPage>
      </div>
      <div className="phoneVersionShow">
        <PhoneVersion />
      </div>
    </>
  );
}

export default IntroPage;
