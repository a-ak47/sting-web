"use client";
import "@/assets/styles/ptaas-slider.scss";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "../UI/ArrowButtons";
import { usePathname } from "next/navigation";
import Button from "@/components/UI/Button";

export default function PtaasSlider({ data }) {
  const path = usePathname();
  const [activeIndex, setActiveIndex] = useState(0);
  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };
  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex < data.items.length - 1 ? prevIndex + 1 : 0));
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : data.items.length - 1));
  };
  console.log("data, ", data);
  return (
    <div className="container ptaas-slider">
      <h2>{data.title}</h2>
      <div className="ptaas-slider__flex">
        <div className="ptaas-slider__left">
          {data.items.map((item, key) => (
            <div key={key} className={`ptaas-slider__item ${activeIndex === key ? "active" : ""}`}>
              <Image src={item.img} alt={item.title} />
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                {path === "/ptaas" && (
                  <div style={{ display: "flex" }}>
                    <div style={{ marginBottom: "40px", marginTop: "10px" }}>
                      <Button
                        className={"primary"}
                        text={"Get a Quote"}
                        arrowImg={false}
                        href={"/get-a-quote?ref=PTAAS"}
                      />
                    </div>
                    <div style={{ marginLeft: "30px", marginBottom: "40px", marginTop: "10px" }}>
                      <Button
                        className={"secondary"}
                        text={"Learn More"}
                        arrowImg={false}
                        href={item?.direct || "#"}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
          <div className="ptaas-slider__arrows-container">
            <ArrowLeft onClick={handlePrev} />
            <div className="ptaas-slider__dots-container">
              {data.items.map((item, key) => (
                // <div className="ptaas-slider__dots-container--dot"></div>
                <div
                  key={key}
                  className={`ptaas-slider__dots-container--dot ${
                    activeIndex === key ? "active" : ""
                  }`}
                ></div>
              ))}
            </div>
            <ArrowRight onClick={handleNext} />
          </div>
        </div>
        <div className="ptaas-slider__right">
          {data.items.map((item, key) => (
            <p
              key={key}
              className={`ptaas-slider__right--title ${activeIndex === key ? "active" : ""}`}
              onMouseEnter={() => handleMouseEnter(key)}
            >
              {item.title}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
