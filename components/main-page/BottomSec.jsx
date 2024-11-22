"use client";

import Button from "../UI/Button";
import DarkBg from "../UI/DarkBg";
import Image from "next/image";
// import circle_1 from "@/assets/img/badge/circle-1.svg";
// import circle_2 from "@/assets/img/badge/circle-2.svg";
import circle_1 from "@/assets/img/ellipse-grid.svg";
import circle_2 from "@/assets/img/ellipse-grid.svg";
import gridGroup from "@/assets/img/grid-group.svg";
import { usePathname } from "next/navigation";

import "@/assets/styles/bottom-sec.scss";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BottomSec({ data }) {
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const buttonsContainerRef = useRef(null);
  const path = usePathname();
  let pathref = path.substring(1);

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
    <DarkBg>
      <div className="container bottom-sec ">
        <h2 className="bottom-sec__title" ref={titleRef}>
          {data.title}
        </h2>
        <div className="bottom-sec__text-container">
          <p ref={textRef}>{data.text}</p>
          <div className="bottom-sec__buttons" ref={buttonsContainerRef}>
            <Button
              text={"Get a Quote"}
              className={"primary"}
              href={pathref ? `/get-a-quote?ref=${pathref}` : "/get-a-quote?ref=landingPage"}
            />
            <Button text={"Book Free Consultation"} className={"secondary"} href={"/book-free"} />
          </div>
        </div>
      </div>
      <Image className="bottom-sec__circle-1" src={circle_1} />
      <Image className="bottom-sec__circle-2" src={circle_2} />
    </DarkBg>
  );
}
