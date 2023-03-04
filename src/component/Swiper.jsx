/* eslint-disable import/no-anonymous-default-export */
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";

import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import "./App.css";

import "swiper/css/autoplay";

function createSlide() {
  return (
    <SwiperSlide>
      <>
        <h1>1111111111111</h1>
      </>
    </SwiperSlide>
  );
}
function createSlide2() {
  return (
    <SwiperSlide>
      <>
        <h1>222222222</h1>
      </>
    </SwiperSlide>
  );
}
function createSlide3() {
  return (
    <SwiperSlide>
      <>
        <h1>33333333333</h1>
      </>
    </SwiperSlide>
  );
}

export default () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      navigation
      autoplay={{ delay: 1000 }}
      pagination={{ clickable: true }}
    >
      <div className="swiperP">
        {createSlide()}
        {createSlide2()}
        {createSlide3()}{" "}
      </div>
    </Swiper>
  );
};
