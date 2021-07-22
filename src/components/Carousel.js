import panen1 from "../assets/img/panen1.svg";
import panen2 from "../assets/img/panen2.jpg";
import panen3 from "../assets/img/panen3.jpg";
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
      <div className="xl:px-40">
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
              <div className="text-xs lg:text-xl text-white font-reguler">
                WE ARE COMMITE
              </div>
              <div className="text-sm lg:text-3xl text-white font-bold">
                TO GIVE THE BEST HARVESTING TOOLS
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img style={{ height: "auto" }} src={panen2} alt="" />
            <div className="textContent">
              <div className="text-xs lg:text-xl text-white font-reguler">
                WE ARE PROVIDE
              </div>
              <div className="text-sm lg:text-3xl text-white font-bold">
                QUALITY AND COMPLETE PRODUCT
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={panen3} alt="" />
            <div className="textContent">
              <div className="text-xs lg:text-xl text-white font-reguler">
                TO SIMPLIFY YOU
              </div>
              <div className="text-sm lg:text-3xl text-white font-bold">
                WHEN HARVEST THE OIL PALM
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Carousel;
