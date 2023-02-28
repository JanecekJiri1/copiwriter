import React from "react";
import "./Price.style.css";
import CaruselInfo from "./CaruselInfo";

import { Link } from "react-router-dom";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import AnimatedPage from "../AnimatedPage";
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
        <CaruselInfo />
      </div>
    </AnimatedPage>
  );
}

export default Price;
