"use client";
import gsap from "gsap";
import { IntercomProvider } from "@/utils/IntercomProvider";
import Image from "next/image";
import tick1 from "@/assets/img/services/tick1.png";
import DarkBg from "@/components/UI/DarkBg";
import Button from "@/components/UI/Button";
import bgCircle from "@/assets/img/main-page/bg-ellipse.svg";
import { useEffect, useState, useRef } from "react";
import "@/assets/styles/cybersecurity-clients-says.scss";

export default function ThankYou() {
  const imgRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power1.out", duration: 1 },
    });

    tl.fromTo(
      imgRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: imgRef.current,
          start: "top 90%",
          end: "bottom 100%",
          scrub: false,
        },
      }
    );
  }, []);

  return (
    <IntercomProvider>
      <DarkBg>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "100px 70px 170px 70px",
          }}
        >
          <Image ref={imgRef} src={bgCircle} alt="ellipse" className="bg-img" />

          <div style={{ justifyItems: "center", zIndex: "70" }}>
            <Image src={tick1} style={{ width: "300px", height: "auto" }} alt={"tick mark"} />
            <h1 style={{ color: "white", fontSize: "40px" }}>Thank you</h1>
            <p style={{ color: "white", textAlign: "center", marginBottom: "40px" }}>
              One of our team members will get in touch with you within 24 hours.
            </p>
            <Button className={"primary"} text={"Go to homepage"} arrowImg={false} href={"/"} />
          </div>
        </div>
      </DarkBg>
    </IntercomProvider>
  );
}
