import "@/assets/styles/button.scss";
import Image from "next/image";
import arrow from "@/assets/img/button-arrow.svg";

export default function ButtonSimple({ className, text, arrowImg = false, type }) {
  return (
    <button className={`button ${className}`} type={type}>
      <p>{text}</p>
      {arrowImg === false ? null : <Image src={arrow} />}
    </button>
  );
}
