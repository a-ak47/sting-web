"use client";

import { mainPageData } from "@/const/main-page";
import GridContainer from "../UI/GridContainer";
import Image from "next/image";
import icon from "@/assets/img/main-page/how/icon.svg";
import "@/assets/styles/explore.scss";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function How() {
  const titleRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { autoAlpha: 0 },
      {
        autoAlpha: 1,
        duration: 1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 60%",
          toggleActions: "play none none none",
        },
      }
    );
    gsap.fromTo(
      itemsRef.current,
      { autoAlpha: 0 },
      {
        autoAlpha: 1,
        duration: 1,
        ease: "power1.out",
        stagger: 0.8,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 50%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);
  return (
    <div className="container how">
      <h2 style={{ marginBottom: 40 }} ref={titleRef}>
        {mainPageData.how.title}
      </h2>
      <GridContainer columns={"grid_columns_3"} gap={"gap_20"}>
        {mainPageData.how.items.map((item, key) => (
          <div
            className="how__item"
            key={key}
            ref={(el) => (itemsRef.current[key] = el)}
          >
            <Image src={icon} alt="check icon" />
            <div className="how__item--text-container">
              <h3 className="how__item--title">{item.title}</h3>
              <p className="how__item--text"> {item.text}</p>
            </div>
          </div>
        ))}
      </GridContainer>
    </div>
  );
}
