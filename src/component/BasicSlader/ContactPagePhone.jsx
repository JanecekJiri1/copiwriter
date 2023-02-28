import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";

import "./ContactPage.style.css";

function ContactPagePhone(props) {
  return (
    <div className="contactPage">
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
    </div>
  );
}

export default ContactPagePhone;
