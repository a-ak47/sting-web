"use client";
import "@/assets/styles/expert-card.scss";
import Image from "next/image";
import icon from "@/assets/img/linkedIn-icon.svg";
import { usePathname } from "next/navigation";

export default function ExpertCard({
  img,
  name,
  position,
  text,
  certificates,
  linkedIn,
  additionalText,
}) {
  const path = usePathname();
  console.log({ linkedIn });
  return (
    <div style={{ margin: "1rem" }} className={`expert-card expert-card-bg`}>
      <div className="expert-card__expert-info">
        <Image src={img} alt={`${name} photo`} />
        <div className="expert-card__expert-info--text">
          <p className="expert-card__expert-info--name">{name}</p>
          <p className="expert-card__expert-info--position">{position}</p>
        </div>
      </div>
      <p className="expert-card__text">{text}</p>
      {certificates && <p className="expert-card__text">{certificates}</p>}
      {additionalText && <p className="expert-card__text">{additionalText}</p>}
      <a target="_blank" href={linkedIn}>
        <Image src={icon} alt="linkedin icon" />
      </a>
    </div>
  );
}
