import React from "react";

import HeroSlider, { Slide, Nav } from "hero-slider";
import { Link } from "react-router-dom";

export default function ReferencesSlider() {
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

  return (
    <HeroSlider
      className="heroS"
      slidingAnimation="left_to_right"
      orientation="horizontal"
      height={"200px"}
      autoplay
      controller={{
        initialSlide: 1,
        autoplayDuration: 100,
        slidingDuration: 500,
        slidingDelay: 50,
        onSliding: (nextSlide) => console.debug("onSliding(nextSlide): ", nextSlide),
        onBeforeSliding: (previousSlide, nextSlide) =>
          console.debug("onBeforeSliding(previousSlide, nextSlide): ", previousSlide, nextSlide),
        onAfterSliding: (nextSlide) => console.debug("onAfterSliding(nextSlide): ", nextSlide),
      }}
      style={{ backgroundColor: "rgba(249, 249, 249, 0.5)" }}
    >
      <Slide>
        <span className="refSpan">{one}</span>
      </Slide>
      <Slide>
        <span className="refSpan">{two}</span>
      </Slide>
      <Slide>
        <span className="refSpan">{three}</span>
      </Slide>
      <Nav />;
    </HeroSlider>
  );
}
