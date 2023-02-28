import React from "react";
import CaruselInfo from "./CaruselInfo";

import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";

import { Link } from "react-router-dom";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import "./ContactPage.style.css";
import AnimatedPage from "../AnimatedPage";

function ContactPage(props) {
  return (
    <AnimatedPage>
      <div className="contactPage">
        <div>
          <div className="arrowNext">
            <Link to="/Price">
              <div className="leftInfo">
                <IoIosArrowBack className="arrowNextIcons" />
              </div>
            </Link>
            <Link to="/">
              <div className="rightInfo">
                <IoIosArrowForward className="arrowNextIcons" />
              </div>
            </Link>
          </div>
        </div>
        <div className="contactInfo">
          <h2 className="contactH2"> Kontaktujte mě</h2>
          <span>
            <BsFillTelephoneFill className="icons" />
            <a href="tel:+720737600813">+720 737 600 813</a>
          </span>
          <span>
            <MdEmail className="icons" />
            <a href="barbora-tomeckova@seznam.cz">barbora-tomeckova@seznam.cz</a>
          </span>
          <span>
            <FaFacebookF className="icons" />
            <a href="https://www.facebook.com/barca.tomeckova" target="_blank">
              barca.tomeckova
            </a>
          </span>
        </div>
        <CaruselInfo />
      </div>
    </AnimatedPage>
  );
}

export default ContactPage;
