import React from "react";
import Carousel from "../../hooks/carousel/Carousel";
import "./CaruselInfo.style.css";
import { Link } from "react-router-dom";

const one = (
  <div className="carouselText">
    <h2>Anna z Moje bota</h2>
    <p>
      Spolupráce byla super, s Barčou se skvěle komunikovalo
      <br /> a dokázala mi poradit když jsem si sama nebyla jistá ...
    </p>
    <Link to="/Referenc">
      <p>Zobrazit celou recenzi</p>
    </Link>
  </div>
);
const two = (
  <div className="carouselText">
    <h2>David z Webik</h2>
    <p>
      Naprostá spokojenost, vše doporučuji.
      <br /> Konečně mám webkterý je bez chyby ...
    </p>
    <Link to="/Referenc">
      <p>Zobrazit celou recenzi</p>
    </Link>
  </div>
);
const three = (
  <div className="carouselText">
    <h2>Spokojenost</h2>
    <p>Věděla že paprika je s měkým I o tom jsem neměla tušení</p>
    <Link to="/Referenc">
      <p>Zobrazit celou recenzi</p>
    </Link>
  </div>
);

function SectionFiveCarousel(props) {
  const slides = [one, two, three];

  return (
    <div className="container-carousal">
      <Carousel slides={slides} key={Math.random} controls indicators autoPlay={true} />
    </div>
  );
}

export default SectionFiveCarousel;
