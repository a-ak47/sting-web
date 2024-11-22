"use client";

import Image from "next/image";
import DarkBg from "../UI/DarkBg";
import bgCircle from "@/assets/img/main-page/bg-ellipse.svg";
import "@/assets/styles/cybersecurity-clients-says.scss";
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { ArrowLeft, ArrowRight } from "../UI/ArrowButtonsServices";
import "@/assets/styles/serivce-slider.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "@/assets/styles/how-it-works.scss";

gsap.registerPlugin(ScrollTrigger);

export default function ServiceSlider({ data, dark }) {
  const titleRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power1.out", duration: 1 },
    });

    tl.fromTo(
      imgRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: imgRef.current,
          start: "top 60%",
          end: "bottom 60%",
          scrub: false,
        },
      }
    );
  }, []);

  const SliderItem = ({ text, title, isActive, activeSlide }) => {
    return (
      <div style={{ backgroundColor: "#07112A", borderRadius: "24px", height: "500" }}>
        <div
          style={{ backgroundColor: "#07112A", minHeight: "370px" }}
          className={`${
            path === "/" ? "service-slider-container__item" : "service-slider-container__item-white"
          } ${isActive ? "service-slider-container__item-active" : ""} 
        `}
        >
          <div
            style={{ width: "fit-content", marginBottom: "10px" }}
            className="how-it-works__item--step"
          >
            <p>Step {activeSlide + 1}</p>
          </div>
          <p
            style={{
              color: "white",
              fontSize: "24px",
              fontWeight: "400",
              margin: "0px",
              marginTop: "20px",
            }}
          >
            {title}
          </p>
          <p style={{ color: "#A8AAB0" }}>{text}</p>
        </div>
        <div>
          <div
            style={{ marginLeft: "20px", marginBottom: "20px" }}
            className="service-slider-container__buttons-container"
          >
            <ArrowLeft fontSize={1} onClick={goToPrevious} />
            <div className="service-slider-container__dots-container">
              {data.sliderItems.map((item, key) => (
                <div
                  key={key}
                  className={`${
                    path === "/"
                      ? "service-slider-container__dots-container--dot"
                      : "service-slider-container__dots-container--dot-white"
                  } ${activeSlide === key ? "active" : ""}`}
                ></div>
              ))}
            </div>
            <ArrowRight onClick={goToNext} />
          </div>
        </div>
      </div>
    );
  };

  const [activeSlide, setActiveSlide] = useState(0);
  const [animationClass, setAnimationClass] = useState("");
  const [isPaused, setIsPaused] = useState(false);
  const sliderLength = data.sliderItems.length;

  const goToPrevious = () => {
    setAnimationClass("service-slider-container__item-exiting");
    setTimeout(() => {
      setActiveSlide((prev) => (prev === 0 ? sliderLength - 1 : prev - 1));
      setAnimationClass("service-slider-container__item-entering");
    }, 300);
  };

  const goToNext = () => {
    setAnimationClass("service-slider-container__item-exiting");
    setTimeout(() => {
      setActiveSlide((prev) => (prev === sliderLength - 1 ? 0 : prev + 1));
      setAnimationClass("service-slider-container__item-entering");
    }, 300);
  };

  const nextSlide = (activeSlide + 1) % sliderLength;

  useEffect(() => {
    setAnimationClass("service-slider-container__item-entering");
  }, [activeSlide]);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(goToNext, 9000);
      return () => clearInterval(interval);
    }
  }, [activeSlide, isPaused]);

  const path = usePathname();

  return (
    <DarkBg>
      <Image ref={imgRef} src={bgCircle} alt="ellipse" className="bg-img" />
      <h2
        style={{
          color: "white",
          fontSize: "50px",
          fontweight: "500",
          marginLeft: "80px",
          marginBottom: "35px",
          marginTop: "-35px",
        }}
      >
        {data.title}
      </h2>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
        <Image
          src={data?.imageName[activeSlide]}
          style={{
            maxWidth: "75%",
            marginTop: "45px",
            height: "fit-content",
          }}
          alt="ellipse"
        />

        <div
          className="container"
          style={{ maxWidth: "630px", margin: "0", paddingBottom: "30px" }}
        >
          <div className="service-slider-container ">
            <div
              className="service-slider-container__flex"
              style={{ alignItems: "center", borderRadius: "24px" }}
            >
              <SliderItem
                img={data.sliderItems[activeSlide].img}
                text={data.sliderItems[activeSlide].text}
                title={data.sliderItems[activeSlide].title}
                speaker={data.sliderItems[activeSlide].speaker}
                isActive={true}
                activeSlide={activeSlide}
              />
            </div>
          </div>
        </div>
      </div>
    </DarkBg>
  );
}
