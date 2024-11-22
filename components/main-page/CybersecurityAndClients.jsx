"use client";

import DarkBg from "../UI/DarkBg";
import Cybersecurity from "./Cybersecurity";
import Image from "next/image";
import bgCircle from "@/assets/img/main-page/bg-ellipse.svg";
import "@/assets/styles/cybersecurity-clients-says.scss";
import SliderComponent from "./Slider";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CybersecurityAndClients({ data }) {
  const imgRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power1.out", duration: 4 },
    });

    tl.fromTo(
      imgRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: imgRef.current,
          start: "top 20%",
          end: "bottom 80%",
          scrub: false,
        },
      }
    );
  }, []);

  return (
    <DarkBg>
      <div className="container" style={{ position: "relative", marginTop: "-110px!important" }}>
        <SliderComponent data={data.whatClientsSays} />
        <div style={{ marginTop: "70px" }}>
          <Image ref={imgRef} src={bgCircle} alt="ellipse" className="bg-img" />
          <Cybersecurity />
        </div>
      </div>
    </DarkBg>
  );
}
