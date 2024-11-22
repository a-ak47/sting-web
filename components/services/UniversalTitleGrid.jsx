"use client";

import { ExploreGridItem } from "../main-page/Explore";
import GridContainer from "../UI/GridContainer";
import Image from "next/image";
import check from "@/assets/img/check-icon.svg";
import s from "@/assets/styles/module/custom-item.module.scss";
import gridGroup from "@/assets/img/grid-group-2.svg";
import ellipse from "@/assets/img/main-page/explore/ellipse.svg";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function UniversalTitleGrid({ data }) {
  const CustomItem_1 = ({ img, title, text, list }) => {
    return (
      <div className={s.item}>
        <Image src={img} alt={title} />
        <p className={s.item__title}>{title}</p>
        {text && <p className={s.item__text}>{text}</p>}
        {list && (
          <ul className={s.item__list}>
            {list.map((item, key) => (
              <li key={key}>
                <Image src={check} alt="check icon" />
                <p className={s.item__text}>{item}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };

  const ItemGridWithButton = ExploreGridItem;
  const titleRef = useRef(null);
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
  }, []);
  return (
    <div
      className="title-grid-container"
      style={{ marginBottom: 100, position: "relative", zIndex: 2 }}
      ref={titleRef}
    >
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
      <h2 style={{ marginBottom: 50 }}>{data.title}</h2>
      <GridContainer
        columns={data.columns == 2 ? "grid_columns_2" : "grid_columns_3"}
      >
        {data.items.map((item, key) => {
          if (data.type === "item grid with item") {
            return (
              <ExploreGridItem
                key={key}
                img={item.img}
                text={item.text}
                title={item.title}
                buttons={item.buttons}
              />
            );
          } else if (data.type === "custom-1" || data.type === "custom-2") {
            return (
              <CustomItem_1
                key={key}
                img={item.img}
                text={item?.text}
                title={item.title}
                list={item?.list}
              />
            );
          }
        })}
      </GridContainer>
    </div>
  );
}
