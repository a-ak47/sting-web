"use client";

import Button from "../UI/Button";
import GridContainer from "../UI/GridContainer";
import TitleWithButton from "../UI/TitleWithButton";
import Image from "next/image";
import "@/assets/styles/explore.scss";
import ellipse from "@/assets/img/main-page/explore/ellipse.svg";
import s from "@/assets/styles/module/grid-item.module.scss";
import { usePathname } from "next/navigation";
// import ellipse from "@/assets/img/big-ellipse,svg";
import gridGroup from "@/assets/img/grid-group-2.svg";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ExploreGridItem({ img, title, text, buttons }) {
  const itemRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      itemRef.current,
      { autoAlpha: 0 },
      {
        autoAlpha: 1,
        duration: 1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: itemRef.current,
          start: "top 55%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div className={s["explore__grid-item"]} ref={itemRef}>
      <div className={s["explore__grid-item--icon"]}>
        <Image src={img} alt={title} />
      </div>
      <h3 className={s["explore__grid-item--title"]}>{title}</h3>
      <p className={s["explore__grid-item--text"]}>{text}</p>
      {buttons &&
        buttons.map((button, key) => (
          <Button
            className={"transparent-button"}
            arrowImg={true}
            text={button.text}
            href={button.link}
            key={key}
          />
        ))}
    </div>
  );
}

export default function Explore({ data }) {
  const path = usePathname();

  return (
    <div className="explore">
      {path.includes("/services") && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div style={{ position: "relative" }}>
            <Image
              src={ellipse}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
            <Image
              src={gridGroup}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
          </div>
        </div>
      )}
      <TitleWithButton
        title={data.explore.title}
        text={data.explore.text}
        button={data.explore.button}
      />
      <GridContainer columns={"grid_columns_3"} gap={"gap_20"}>
        {data.explore.items.map((item, key) => (
          <ExploreGridItem
            key={key}
            img={item.img}
            title={item.title}
            text={item.text}
            buttons={item.buttons}
          />
        ))}
      </GridContainer>
    </div>
  );
}
