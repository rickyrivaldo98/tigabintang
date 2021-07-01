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
            <div className="textContent">
              <div className="text-xl text-white font-reguler">
                WE ARE COMMITE
              </div>
              <div className="text-3xl text-white font-bold">
                TO GIVE THE BEST HARVESTING TOOLS
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={panen1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={panen1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={panen1} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Carousel;
