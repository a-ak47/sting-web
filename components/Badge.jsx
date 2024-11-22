"use client";

import Button from "./UI/Button";
import s from "@/assets/styles/module/badge.module.scss";
import circle_1 from "@/assets/img/badge/circle.svg";
import circle_2 from "@/assets/img/badge/circle-2.svg";
import Image from "next/image";
import gridGroup from "@/assets/img/grid-group-2.svg";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Badge({ title, text, buttons }) {
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const buttonsContainerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { autoAlpha: 0, y: 20 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 70%",
        },
      }
    );

    gsap.fromTo(
      textRef.current,
      { autoAlpha: 0, y: 20 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        ease: "power1.out",
        delay: 0.4,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 70%",
        },
      }
    );

    gsap.fromTo(
      buttonsContainerRef.current,
      { autoAlpha: 0, y: 20 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        ease: "power1.out",
        delay: 0.8,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 70%",
        },
      }
    );
  }, []);

  return (
    <section className="container">
      <div className={s.badge}>
        <h2 ref={titleRef}>{title}</h2>
        <p className={s.badge__text} ref={textRef}>
          {text}
        </p>
        <div className={s.badge__buttons_container} ref={buttonsContainerRef}>
          {buttons.map((item, key) => (
            <Button
              key={key}
              className={item.className}
              text={item.text}
              href={item.href}
            />
          ))}
        </div>
        <Image className={s.circle_1} src={circle_1} />
        <Image className={s.circle_2} src={circle_1} />
        <Image className={s.grid_img} src={gridGroup} />
      </div>
    </section>
  );
}
