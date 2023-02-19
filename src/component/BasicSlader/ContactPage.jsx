import React from "react";
import CaruselInfo from "./CaruselInfo";

import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";

import { Link } from "react-router-dom";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import "./ContactPage.style.css";

function ContactPage(props) {
  return (
    <div className="contactPage">
      <div>
        <div className="arrowNext">
          <div className="leftInfo">
            <Link to="/Price">
              <IoIosArrowBack className="arrowNextIcons" />
            </Link>
          </div>
          <div className="rightInfo">
            <Link to="/">
              <IoIosArrowForward className="arrowNextIcons" />
            </Link>
          </div>
        </div>
      </div>
      <div>
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
  );
}

export default ContactPage;
