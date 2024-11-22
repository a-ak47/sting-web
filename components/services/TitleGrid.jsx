"use client";

import GridContainer from "../UI/GridContainer";
import Image from "next/image";
import s from "@/assets/styles/module/title-grid-container.module.scss";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { forwardRef } from "react";

gsap.registerPlugin(ScrollTrigger);

// const TitleGridItem = ({ img, title, text }) => {
const TitleGridItem = forwardRef(({ img, title, text }, ref) => {
  return (
    <div className={s["title-grid-container__item"]} ref={ref}>
      <Image src={img} alt={title} />
      <p className={s["title-grid-container__item--title"] + " " + "dark"}>{title}</p>
      <p className={s["title-grid-container__item--text"]}>{text}</p>
    </div>
  );
});

export default function TitleGrid({ data }) {
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
    <section className={"container" + " " + s["title-grid-container"]}>
      <h2 className="dark" ref={titleRef}>
        {data.title}
      </h2>
      <GridContainer columns={data.columns === 2 ? "grid_columns_2" : "grid_columns_3"}>
        {data.items.map((item, key) => (
          <TitleGridItem
            key={key}
            img={item.img}
            title={item.title}
            text={item.text}
            ref={(el) => (itemsRef.current[key] = el)}
          />
        ))}
      </GridContainer>
    </section>
  );
}
