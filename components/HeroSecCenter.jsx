"use client";

import Button from "./UI/Button";
import DarkBg from "./UI/DarkBg";
import "@/assets/styles/hero-sec-center.scss";
import Image from "next/image";
import ellipse from "@/assets/img/big-ellipse.svg";
import gridGroup from "@/assets/img/grid-group-2.svg";
import { usePathname } from "next/navigation";

export default function HeroSecCenter({ data }) {
  const path = usePathname();

  return (
    <DarkBg>
      <div className="hero-sec-center container" style={{ position: "relative", zIndex: 2 }}>
        <h1>{data.title}</h1>
        <p className="hero-sec-center__text">{data.text}</p>
        {data.buttons && (
          <div className="hero-sec-center__buttons">
            <Button
              className={"primary"}
              text={"Get a Quote"}
              arrowImg={false}
              href={"/get-a-quote?ref=landingPage"}
            />
            <Button
              className={"secondary"}
              text={"Book Free Consultation"}
              arrowImg={true}
              href={"/book-free"}
            />
          </div>
        )}
      </div>
      {path === "/how-it-works" ? (
        <Image
          src={ellipse}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -68%)",
          }}
        />
      ) : (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-62%, -50%)",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Image src={gridGroup} />
          <Image src={gridGroup} style={{ transform: "translateY(-116px)" }} />
        </div>
      )}
    </DarkBg>
  );
}
