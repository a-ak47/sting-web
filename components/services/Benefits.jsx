"use client";

import Button from "../UI/Button";
import Image from "next/image";
import "@/assets/styles/services/benefits.scss";
import circle from "@/assets/img/services/ellipse-1.svg";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Benefits({ data }) {
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
          start: "top 55%",
        },
      }
    );
  }, []);

  return (
    <div className="container benefits" ref={containerRef}>
      <Image src={circle} alt="ellipse" className="benefits__circle" />
      <h2>{data.title}</h2>
      <p className="benefits__description">{data.description}</p>
      <div className="benefits__items-container">
        {data.items.map((item, key) => (
          <div key={key} className="benefits__item">
            <div className="benefits__item--text-container">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <Button
                href={"/get-a-quote?ref=serives"}
                className={"primary"}
                text={"Get a Quote"}
              />
            </div>
            <div className="benefits__item--img-container">
              <Image src={item.img} alt={item.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
