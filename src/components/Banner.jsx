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
          <img src="/images/smarti.avif" alt="Smartphones" />
          <p>Smartphones</p>
        </div>
        <div className="category">
          <img src="/images/smartw.avif" alt="Smart Watches" />
          <p>Smart Watches</p>
        </div>
        <div className="category">
          <img src="/images/smarttv.webp" alt="Android TVs" />
          <p>Android TVs</p>
        </div>
        <div className="category">
          <img src="/images/asso.webp" alt="Accessories" />
          <p>Accessories</p>
        </div>
        <div className="category">
          <img src="/images/tablet.png" alt="Tablets" />
          <p>Tablets</p>
        </div>
        <div className="category">
          <img src="/images/gift.png" alt="Gift Cards" />
          <p>Gift Cards</p>
        </div>
        <div className="category">
          <img src="/images/gadget.png" alt="Smart Gadgets" />
          <p>Smart Gadgets</p>
        </div>
        <div className="category">
          <img src="/images/laptop.png" alt="Laptops" />
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
          <img src="/images/banners1.webp" alt="Banner 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/bs2.webp" alt="Banner 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/bs3.webp" alt="Banner 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/bs4.webp" alt="Banner 4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/bs5.webp" alt="Banner 5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/bs7.webp" alt="Banner 6" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Banner;
