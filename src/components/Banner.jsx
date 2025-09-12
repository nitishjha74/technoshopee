import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner-section">
      {/* Category Strip */}
      <div className="categories-strip">
        <div className="category">
          <img src="public/images/iphone1.jpeg" alt="Smartphones" />
          <p>Smartphones</p>
        </div>
        <div className="category">
          <img src="/images/watch.png" alt="Smart Watches" />
          <p>Smart Watches</p>
        </div>
        <div className="category">
          <img src="/images/tv.png" alt="Android TVs" />
          <p>Android TVs</p>
        </div>
        <div className="category">
          <img src="/public/images/accessories.png" alt="Accessories" />
          <p>Accessories</p>
        </div>
        <div className="category">
          <img src="/public/images/tablet.png" alt="Tablets" />
          <p>Tablets</p>
        </div>
        <div className="category">
          <img src="/public/images/gift.png" alt="Gift Cards" />
          <p>Gift Cards</p>
        </div>
        <div className="category">
          <img src="/public/images/gadget.png" alt="Smart Gadgets" />
          <p>Smart Gadgets</p>
        </div>
        <div className="category">
          <img src="/public/images/laptop.png" alt="Laptops" />
          <p>Laptops</p>
        </div>
      </div>

      {/* Auto Scroll Banner */}
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="banner-slider"
      >
        <SwiperSlide>
          <img src="/public/images/banner1.jpg" alt="Banner 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/public/images/banner2.jpeg" alt="Banner 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/public/images/banner1.jpg" alt="Banner 3" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Banner;
