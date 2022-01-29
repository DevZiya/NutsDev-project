import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./App.scss";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";

SwiperCore.use([EffectCoverflow, Pagination]);

export default function App() {
  const [active, setActive] = useState(null);
  const text = useRef(0);
  console.log(active);

  const data = [
    {
      id: 1,
      leftImg:
        "https://www.mariodragicevic.com/wp-content/uploads/2018/12/02-4.jpg",
      mainImg:
        "https://www.mariodragicevic.com/wp-content/uploads/2018/12/03-1.jpg",
      rightImg:
        "https://www.mariodragicevic.com/wp-content/uploads/2018/12/04-1.jpg",
    },
    {
      id: 2,
      leftImg:
        "https://www.mariodragicevic.com/wp-content/uploads/2018/12/01-7.jpg",
      mainImg:
        "https://www.mariodragicevic.com/wp-content/uploads/2018/12/01-6.jpg",
      rightImg:
        "https://www.mariodragicevic.com/wp-content/uploads/2018/12/01-4.jpg",
    },
    {
      id: 3,
      leftImg:
        "https://www.mariodragicevic.com/wp-content/uploads/2018/12/02-4.jpg",
      mainImg:
        "https://www.mariodragicevic.com/wp-content/uploads/2018/12/03-1.jpg",
      rightImg:
        "https://www.mariodragicevic.com/wp-content/uploads/2018/12/04-1.jpg",
    },
    {
      id: 4,
      leftImg:
        "https://www.mariodragicevic.com/wp-content/uploads/2018/12/01-7.jpg",
      mainImg:
        "https://www.mariodragicevic.com/wp-content/uploads/2018/12/01-6.jpg",
      rightImg:
        "https://www.mariodragicevic.com/wp-content/uploads/2018/12/01-4.jpg",
    },
    {
      id: 5,
      leftImg:
        "https://www.mariodragicevic.com/wp-content/uploads/2018/12/02-4.jpg",
      mainImg:
        "https://www.mariodragicevic.com/wp-content/uploads/2018/12/03-1.jpg",
      rightImg:
        "https://www.mariodragicevic.com/wp-content/uploads/2018/12/04-1.jpg",
    },
  ];

  useEffect(() => {
    if (active === 0) {
      document.body.style.backgroundColor = "rgb(17, 30, 16)";
      text.current.style.transform = "translateY(0)";
    } else if (active === 1) {
      document.body.style.backgroundColor = "rgb(7, 19, 29)";
      text.current.style.transform = "translateY(-9vw)";
    } else if (active === 2) {
      document.body.style.backgroundColor = "rgb(3, 31, 27)";
      text.current.style.transform = "translateY(-17vw)";
    } else if (active === 3) {
      document.body.style.backgroundColor = "rgb(30, 26, 17)";
      text.current.style.transform = "translateY(-24vw)";
    } else if (active === 4) {
      document.body.style.backgroundColor = "rgb(40, 20, 17)";
      text.current.style.transform = "translateY(-33vw)";
    }
  }, [active, text]);

  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        breakpoints={{
          1800: {
            spaceBetween: 900,
          },
          1280: {
            spaceBetween: 600,
          },
          760: {
            spaceBetween: 350,
          },
          380:{
            spaceBetween: 180,
          },
          200:{
            spaceBetween: 135,
          }
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{
          type: "fraction",
        }}
        className="mySwiper"
        onActiveIndexChange={(e) => setActive(e.realIndex)}
      >
        {data.map((slide) => (
          <SwiperSlide key={slide.id}>
            {({ isActive }) => (
              <>
                <div className={isActive ? "left-image active" : "left-image"}>
                  <img src={slide.leftImg} alt="img" />
                </div>
                <div className="main-image">
                  <img src={slide.mainImg} alt="img" />
                </div>
                <div
                  className={isActive ? "right-image active" : "right-image"}
                >
                  <img src={slide.rightImg} alt="img" />
                </div>
              </>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="i-title">
        <div className="i-title-wrapper " ref={text}>
          <div className="i-title-item">Passionate Star</div>

          <div className="i-title-item">Shadowy Motion</div>

          <div className="i-title-item">Poetic Calmness</div>

          <div className="i-title-item">Obscure Places</div>

          <div className="i-title-item">Untamed Emotion</div>
        </div>
      </div>
    </>
  );
}
