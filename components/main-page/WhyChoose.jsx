"use client";

import "@/assets/styles/why-choose.scss";
import Button from "../UI/Button";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { isMobile } from "react-device-detect";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Divider from "@mui/material/Divider";

gsap.registerPlugin(ScrollTrigger);

export default function WhyChoose({ data }) {
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const itemRefs = useRef([]);

  const Item = ({ title, text, images, index }) => {
    const itemClass = index % 2 === 1 ? "why-choose__item-reverse" : "";

    const isFiveImages = images.length === 5;

    return (
      <div className={`why-choose__item ${itemClass}`} ref={(el) => (itemRefs.current[index] = el)}>
        <div className="why-choose__item--text-container">
          <div style={{ display: "flex" }}>
            <div>
              <h3 style={{ marginTop: "15px" }} className="dark" ref={titleRef}>
                {title}
              </h3>
              <p className="why-choose__item--text" ref={textRef}>
                {text}
              </p>
            </div>
          </div>
        </div>
        <div className="why-choose__item--img-container">
          <Image src={images[0]} alt={title} className="animated-image" />
        </div>
      </div>
    );
  };

  return (
    <section className="container why-choose">
      <div className="why-choose__title-container">
        <h2 className="dark">{data.whyChoose.title}</h2>
        {data.whyChoose.text && <p>{data.whyChoose.text}</p>}
      </div>
      {data.whyChoose.items.map((item, index) => (
        <>
          <Item
            key={index}
            title={item.title}
            text={item.text}
            images={item.images}
            index={index}
          />
        </>
      ))}
    </section>
  );
}
