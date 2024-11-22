"use client";

import Button from "../UI/Button";
import Image from "next/image";
import "@/assets/styles/services/services.scss";
import img from "@/assets/img/services/check.svg";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SecondGridSec({ title, par_1, par_2, gridDataPar, gridData }) {
  const GridItem = ({ text }) => {
    return (
      <div className="second-grid-sec__grid--item">
        <Image src={img} alt="check icon" />
        <p>{text}</p>
      </div>
    );
  };

  const containerRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { autoAlpha: 0, y: 20 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
        },
      }
    );
  }, []);
  return (
    <section className="container" style={{ padding: "100px 0" }} ref={containerRef}>
      {par_2 && (
        <h2 className="dark second-grid-sec__title" style={{ marginBottom: 40 }}>
          {title}
        </h2>
      )}
      <div className="second-grid-sec" style={{ alignItems: !gridDataPar ? "center" : "start" }}>
        <div className="second-grid-sec__left-container">
          {!par_2 && <h2 className="dark second-grid-sec__title">{title}</h2>}
          <p>{par_1}</p>
          {par_2 && <p>{par_2}</p>}
          <Button text={"Get a Quote"} href={"/get-a-quote?ref=serives"} className={"primary"} />
        </div>
        <div className="second-grid-sec__right-container">
          {gridDataPar && <p>{gridDataPar}</p>}
          <div className="second-grid-sec__grid">
            {gridData.map((item, key) => (
              <GridItem key={key} text={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
