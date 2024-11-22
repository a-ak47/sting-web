"use client";

import GridContainer from "../UI/GridContainer";
import GridServicesItem from "./GridServicesItem";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesGrid({ data }) {
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
    <section className="container" style={{ padding: "100px 0" }}>
      <h2 className="services-grid-h2 dark" ref={titleRef}>
        {data.title}
      </h2>
      <GridContainer columns={"grid_columns_3"} gap={"gap_20"}>
        {data.items.map((item, key) => (
          <GridServicesItem
            text={item.text}
            title={item.title}
            key={key}
            ref={(el) => (itemsRef.current[key] = el)}
          />
        ))}
      </GridContainer>
    </section>
  );
}
