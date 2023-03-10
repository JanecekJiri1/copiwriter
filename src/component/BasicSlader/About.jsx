import React from "react";
import "./About.style.css";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { Link } from "react-router-dom";
import AnimatedPage from "../AnimatedPage";
import Swiper from "../SwiperCarus";

import PhoneVersion from "./Phone/PhoneVersion";

function About(props) {
  return (
    <>
      <div className="phoneVersionHide">
        <AnimatedPage>
          <div className="about">
            <div>
              <div className="arrowNext">
                <Link to="/">
                  <div className="leftInfo">
                    <IoIosArrowBack className="arrowNextIcons" />
                  </div>
                </Link>
                <Link to="/Price">
                  <div className="rightInfo">
                    <IoIosArrowForward className="arrowNextIcons" />
                  </div>
                </Link>
              </div>
            </div>
            <div className="aboutText">
              <h2>O mně:</h2>
              <p>
                Vše začalo když jsem byla malá holčička a chtěl být princezna. Teď už jsem princezna
                a ve svém království chci pomáhat lidem které písmenka stále matou
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque porro quidem esse
                quae explicabo ut earum provident facilis, quisquam voluptas! Ipsam ut aspernatur
                maiores sit id necessitatibus facilis nesciunt culpa!
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error nesciunt beatae
                vitae provident atque in eum voluptatem, commodi autem hic soluta numquam odit
                obcaecati mollitia tempora? Nam enim illo ex consequuntur natus minima corporis quas
                placeat est sequi, eius quis omnis, quo dolores, laboriosam expedita esse? Beatae
                fugiat delectus eligendi quam eveniet? Maiores ab recusandae alias quaerat sed
                voluptatibus laudantium, expedita, totam pariatur neque delectus quisquam est velit,
                consequuntur iusto quibusdam molestias architecto quia! Nesciunt amet quisquam
                delectus aliquid numquam.
              </p>
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

export default About;
