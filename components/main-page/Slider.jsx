"use client";

import Image from "next/image";
import quote from "@/assets/img/main-page/what-client-says/quote.svg";
import quote_2 from "@/assets/img/main-page/what-client-says/quote-2.svg";
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { ArrowLeft, ArrowRight } from "../UI/ArrowButtons";
import "@/assets/styles/slider.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SliderComponent({ data, dark }) {
  const titleRef = useRef(null);
  const sliderRef = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power1.out", duration: 1 },
    });
    tl.fromTo(
      titleRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 40%",
        },
      }
    ).fromTo(
      sliderRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: sliderRef.current,
          start: "top 40%",
        },
      }
    );
  }, []);

  const SliderItem = ({ text, img, speaker, isActive, animationClass }) => {
    return (
      <div
        className={`${path === "/" ? "slider-container__item" : "slider-container__item-white"} ${
          isActive ? "slider-container__item-active" : ""
        } ${animationClass}
        `}
      >
        <div>
          <Image src={img} alt="company icon" />
          {path === "/" ? (
            <Image src={quote} alt="quote icon" />
          ) : (
            <Image src={quote_2} alt="quote icon" />
          )}
        </div>
        <p>{text}</p>
        <p>{speaker}</p>
      </div>
    );
  };

  const [activeSlide, setActiveSlide] = useState(0);
  const [animationClass, setAnimationClass] = useState("");
  const [isPaused, setIsPaused] = useState(false);
  const sliderLength = data.sliderData.length;

  const goToPrevious = () => {
    setTimeout(() => {
      setActiveSlide((prev) => (prev === 0 ? sliderLength - 1 : prev - 1));
    }, 300);
  };

  const goToNext = () => {
    setTimeout(() => {
      setActiveSlide((prev) => (prev === sliderLength - 1 ? 0 : prev + 1));
    }, 300);
  };

  const nextSlide = (activeSlide + 1) % sliderLength;

  useEffect(() => {
    setAnimationClass("slider-container__item-entering");
  }, [activeSlide]);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(goToNext, 7000);
      return () => clearInterval(interval);
    }
  }, [activeSlide, isPaused]);

  const path = usePathname();

  return (
    <div className="container">
      <div className="slider-container ">
        <div className="slider-container__flex" ref={titleRef}>
          <h2 className={`${path !== "/" ? "dark" : ""}`}>{data.title}</h2>
          <div className="slider-container__buttons-container">
            <ArrowLeft onClick={goToPrevious} />
            <div className="slider-container__dots-container">
              {data.sliderData.map((item, key) => (
                <div
                  key={key}
                  className={`${
                    path === "/"
                      ? "slider-container__dots-container--dot"
                      : "slider-container__dots-container--dot-white"
                  } ${activeSlide === key ? "active" : ""}`}
                ></div>
              ))}
            </div>
            <ArrowRight onClick={goToNext} />
          </div>
        </div>
        <div className="slider-container__flex" style={{ alignItems: "center" }} ref={sliderRef}>
          <SliderItem
            img={data.sliderData[activeSlide].img}
            text={data.sliderData[activeSlide].text}
            speaker={data.sliderData[activeSlide].speaker}
            isActive={true}
            animationClass={animationClass}
          />
          <SliderItem
            img={data.sliderData[nextSlide].img}
            text={data.sliderData[nextSlide].text}
            speaker={data.sliderData[nextSlide].speaker}
            isActive={false}
            animationClass={"for-mobile"}
          />
        </div>
      </div>
    </div>
  );
}
