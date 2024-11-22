"use client";

import GridContainer from "../UI/GridContainer";
import TitleWithButton from "../UI/TitleWithButton";
import Image from "next/image";
import { mainPageData } from "@/const/main-page";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger); 

export default function Cybersecurity({ ref }) {
  
  const gridItemsRef = useRef([]);
  gridItemsRef.current = [];

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power1.out", duration: 2 },
    });

    gridItemsRef.current.forEach((item, index) => {
      tl.fromTo(
        item,
        { opacity: 0 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: item,
            start: "top 40%", 
            toggleActions: "play none none none", 
          },
        }
      );
    });
  }, []);

  const Item = ({ img, title, text }) => {
    return (
      <div
        className="cybersecurity__grid-item"
        ref={(el) => el && gridItemsRef.current.push(el)}
      >
        <Image src={img} alt={title} />
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    );
  };

  return (
    <div style={{ position: "relative", zIndex: 2 }}>
      <TitleWithButton
        title={mainPageData.cybersecurityExperts.title}
        text={mainPageData.cybersecurityExperts.text}
        button={mainPageData.cybersecurityExperts.button}
      />
      <GridContainer columns={"grid_columns_3"} gap={"gap_20"}>
        {mainPageData.cybersecurityExperts.items.map((item, key) => (
          <Item key={key} img={item.img} title={item.title} text={item.text} />
        ))}
      </GridContainer>
    </div>
  );
}
