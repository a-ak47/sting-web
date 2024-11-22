"use client";

import "@/assets/styles/hero-sec.scss";
import Button from "./UI/Button";
import Image from "next/image";
import { usePathname } from "next/navigation";
import imgGrid from "@/assets/img/grid-group.svg";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HeroSec({ title, text, img, alt, images, title1 }) {
  const pathname = usePathname();

  //animations

  const h1Ref = useRef(null);
  const textRef = useRef(null);
  const buttonsRef = useRef(null);
  const div1Ref = useRef(null);
  const div2Ref = useRef(null);
  const div3Ref = useRef(null);
  const div4Ref = useRef(null);
  const div5Ref = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power1.out", duration: 0.8 },
    });

    tl.fromTo(h1Ref.current, { x: -100, opacity: 0 }, { x: 0, opacity: 1 })
      .fromTo(
        div1Ref.current,
        { scale: 0 },
        { scale: 1, transform: "translate(-50%, -50%)" },
        "-=0.4"
      )
      .fromTo(textRef.current, { x: -100, opacity: 0 }, { x: 0, opacity: 1 }, "-=0.4")
      .fromTo(div2Ref.current, { x: 200, opacity: 0 }, { x: -50, opacity: 1 }, "-=0.3")
      .fromTo(buttonsRef.current, { x: -100, opacity: 0 }, { x: 0, opacity: 1 }, "-=0.4")
      .fromTo(div3Ref.current, { x: 200, opacity: 0 }, { x: -10, opacity: 1 }, "-=0.4")
      .fromTo(div4Ref.current, { x: 200, opacity: 0 }, { x: 10, opacity: 1 }, "-=0.4")
      .fromTo(div5Ref.current, { x: 200, opacity: 0 }, { x: 40, opacity: 1 }, "-=0.4");
    tl.fromTo(imgRef.current, { scale: 0 }, { scale: 1 });
  }, []);

  return (
    <section className="hero-sec">
      {/* <div className="img-grid-container">
            <Image  className="img-grid-group img-grid-group-left" src={imgGrid} />
            {pathname === "/" && (
              <Image
                className="img-grid-group img-grid-group-right"
                src={imgGrid}
              />
            )}
           </div>
     */}

      <div className="container">
        <div className="hero-sec__container">
          <div className="hero-sec__text-container">
            <h1 className={`${pathname === "/" ? "" : "h1"}`} ref={h1Ref}>
              {title} {title1}
            </h1>
            <p className="hero-sec__text" ref={textRef}>
              {text}
            </p>
            <div className="hero-sec__buttons" ref={buttonsRef}>
              <Button
                className={"primary"}
                text={"Get a Quote"}
                href={"/get-a-quote?ref=landingPage"}
              />
              <Button
                className={"secondary"}
                text={"Book Free Consultation"}
                href={"/book-free"}
                arrowImg={true}
              />
            </div>
          </div>
          <div className="hero-sec__images">
            <Image className="hero-sec__mobile-img" src={img} alt={alt} />
            {images && pathname !== "/ptaas" ? (
              <>
                <div className="hero-sec__img-container-1" id="1" ref={div1Ref}>
                  <Image src={images[0]} />
                </div>
                <div
                  id="2"
                  className="hero-sec__img-container-2 hero-sec__position-1"
                  ref={div2Ref}
                >
                  <Image src={images[1]} />
                </div>
                <div
                  id="3"
                  className="hero-sec__img-container-2 hero-sec__position-2"
                  ref={div3Ref}
                >
                  <Image src={images[2]} />
                </div>
                <div
                  id="4"
                  className="hero-sec__img-container-2 hero-sec__position-3"
                  ref={div4Ref}
                >
                  <Image src={images[3]} />
                </div>
                <div
                  id="5"
                  className="hero-sec__img-container-2 hero-sec__position-4"
                  ref={div5Ref}
                >
                  <Image src={images[4]} />
                </div>
              </>
            ) : (
              <Image src={img} alt={alt} ref={imgRef} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
