import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import { Film } from "@/models/models";
import Slide from "../MainSlide/MainSlide";

interface MainSliderProps {
  films: Film[];
}

const MainSlider: React.FC<MainSliderProps> = ({ films }) => {
  return (
    <Swiper
    loop={true}
    pagination={{
      type: "progressbar",
    }}
    navigation={true}
    modules={[Pagination, Navigation]}
    className="mySwiper"
  >
      {films.map((film) => (
        <SwiperSlide key={film.id}>
          <Slide  film={film} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MainSlider