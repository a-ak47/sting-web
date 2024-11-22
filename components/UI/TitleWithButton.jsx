"use client";

import Button from "./Button";
import s from "@/assets/styles/module/title-with-button.module.scss";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TitleWithButton({ title, text, button, arrowImg }) {
  const titleRef = useRef(null);

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
    );
  }, []);

  return (
    <div className={s.container} ref={titleRef}>
      <div className={s.text_container}>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <Button
        arrowImg={arrowImg}
        href={button.href}
        className={button.className}
        text={button.text}
      />
    </div>
  );
}
