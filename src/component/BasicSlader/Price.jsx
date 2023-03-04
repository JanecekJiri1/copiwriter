import React from "react";
import "./Price.style.css";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { Link } from "react-router-dom";
import AnimatedPage from "../AnimatedPage";
import Swiper from "../Swiper";

function Price(props) {
  return (
    <AnimatedPage>
      <div className="price">
        <div>
          <div className="arrowNext">
            <Link to="/About">
              <div className="leftInfo">
                <IoIosArrowBack className="arrowNextIcons" />
              </div>
            </Link>
            <Link to="/ContactPage">
              <div className="rightInfo">
                <IoIosArrowForward className="arrowNextIcons" />
              </div>
            </Link>
          </div>
        </div>
        <div className="priceInfo">
          <h2>Cena služeb</h2>
          <p>Hodinová sazba: 500 kč</p>
          <p>Úprava jedné normostrany: 250 kč</p>
        </div>
        <div className="sectionTwo">
          <Swiper />
        </div>
      </div>
    </AnimatedPage>
  );
}

export default Price;
