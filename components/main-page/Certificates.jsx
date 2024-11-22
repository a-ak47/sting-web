"use client";
import "@/assets/styles/certificates.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { isMobile } from "react-device-detect";

import Image from "next/image";
import icon_1 from "@/assets/img/main-page/certificates/1.svg";
import icon_2 from "@/assets/img/main-page/certificates/2.svg";
import icon_3 from "@/assets/img/main-page/certificates/3.svg";
import icon_4 from "@/assets/img/main-page/certificates/4.svg";
import icon_5 from "@/assets/img/main-page/certificates/5.svg";
import icon_6 from "@/assets/img/main-page/certificates/6.svg";
import icon_7 from "@/assets/img/main-page/certificates/7.svg";
import icon_8 from "@/assets/img/main-page/certificates/8.svg";
import icon_9 from "@/assets/img/main-page/certificates/9.svg";
import icon_10 from "@/assets/img/main-page/certificates/10.webp";
import icon_11 from "@/assets/img/main-page/certificates/11.jpg";
import icon_12 from "@/assets/img/main-page/certificates/12.png";

import { ArrowLeft, ArrowRight } from "../UI/ArrowButtons";
import { useRef } from "react";

export default function Certificates(params) {
  const images = [
    icon_10,
    icon_8,
    icon_11,
    icon_2,
    icon_12,
    icon_3,
    icon_5,
    icon_6,
    icon_9,
    icon_1,
    icon_4,

    // icon_7,
  ];
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slideToScroll: 1,
    autoplay: true,
    speed: 5000,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  const goToPrevious = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <section className="certificates container">
      <h2 className="dark">Certified Expertise</h2>
      <div className="certificates__slider">
        <ArrowLeft onClick={goToPrevious} position={true} />
        <Slider style={{ margigLeft: "10px", paddingLeft: "40px" }} ref={sliderRef} {...settings}>
          {images.map((img, key) => (
            <div style={{ height: "200px", width: "200px" }}>
              <Image
                key={key}
                src={img}
                style={{
                  height: "200px",
                  width: "200px",
                  marginBottom: "70px",
                }}
              />
            </div>
          ))}
        </Slider>
        <ArrowRight onClick={goToNext} position={true} />
      </div>
    </section>
  );
}
