import React, { useState } from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import styles from './MainSlider.module.scss';

SwiperCore.use([Navigation, Pagination]);

interface MainSliderProps {
  slides: string[];
}

const MainSlider: React.FC<MainSliderProps> = ({ slides }) => {
  const [swiper, setSwiper] = useState<SwiperCore | null>(null);


  return (
    <div className={styles.mainSlider}>
      <Swiper
        onSwiper={setSwiper}
        navigation
        pagination={{ clickable: true }}
        className={styles.mainSlider__swiper}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img src={slide} alt={`Slide ${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MainSlider;