import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function createSlide() {
  return (
    <SwiperSlide className="swiperP">
      <div className="carouselText">
        <h2>David z Webik</h2>
        <p>
          Naprostá spokojenost, vše doporučuji.
          <br /> Konečně mám webkterý je bez chyby ...
          <Link to="/Referenc">
            <p className="referenceLinkP">Zobrazit celou recenzi</p>
          </Link>
        </p>
      </div>
    </SwiperSlide>
  );
}
function createSlide2() {
  return (
    <SwiperSlide className="swiperP">
      <div className="carouselText">
        <h2>Spokojenost</h2>
        <p>Věděla že paprika je s měkým I o tom jsem neměla tušení</p>
        <Link to="/Referenc">
          <p className="referenceLinkP">Zobrazit celou recenzi</p>
        </Link>
      </div>
    </SwiperSlide>
  );
}
function createSlide3() {
  return (
    <SwiperSlide className="swiperStyle">
      <div className="carouselText">
        <h2>Anna z Moje bota</h2>
        <p>
          Spolupráce byla super, s Barčou se skvěle komunikovalo
          <br /> a dokázala mi poradit když jsem si sama nebyla jistá ...
        </p>
        <Link to="/Referenc">
          <p className="referenceLinkP">Zobrazit celou recenzi</p>
        </Link>
      </div>
    </SwiperSlide>
  );
}

export default () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      navigation
      autoplay={{ delay: 3500 }}
      pagination={{ clickable: true }}
    >
      <div>
        {createSlide()}
        {createSlide2()}
        {createSlide3()}
      </div>
    </Swiper>
  );
};
