import React from "react";
import Carousel from "../../hooks/carousel/Carousel";
import "./CaruselInfo.style.css";

const one = (
  <div className="carouselText">
    <h2>Anna z Moje bota</h2>
    <p>
      Spolupráce byla super, s Barčou se skvěle komunikovalo
      <br /> a dokázala mi poradit když jsem si sama nebyla jistá ...
    </p>
    <a href="">Zobrazit celou recenzi</a>
  </div>
);
const two = (
  <div className="carouselText">
    <h2>David z Webik</h2>
    <p>
      Naprostá spokojenost, vše doporučuji.
      <br /> Konečně mám webkterý je bez chyby ...
    </p>
    <a href="">Zobrazit celou recenzi</a>
  </div>
);
const three = (
  <div className="carouselText">
    <h2>Spokojenost</h2>
    <p>Věděla že paprika je s měkým I o tom jsem neměla tušení</p>
    <a href="">Zobrazit celou recenzi</a>
  </div>
);

function SectionFiveCarousel(props) {
  const slides = [one, two, three];

  return (
    <div className="container-carousal">
      <Carousel slides={slides} controls indicators autoPlay={true} />
    </div>
  );
}

export default SectionFiveCarousel;
