"use client";

import "@/assets/styles/button.scss";
import Image from "next/image";
import arrow from "@/assets/img/button-arrow.svg";
import Link from "next/link";

export default function Button({ href, className, text, arrowImg = false, type, ref }) {
  return (
    <Link href={href} ref={ref}>
      <button className={`button ${className}`} type={type}>
        <p>{text}</p>
        {(arrowImg === false ? null : <Image src={arrow} />)}
      </button>
    </Link>
  );
}
