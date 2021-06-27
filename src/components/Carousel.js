import panen1 from "../assets/img/panen1.svg";
import "../assets/css/Carousel-css.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Pagination, Navigation } from "swiper/core";
SwiperCore.use([Pagination, Navigation]);

const Carousel = () => {
  return (
    <>
      <div className="px-40">
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={panen1} alt="" />
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Carousel;
