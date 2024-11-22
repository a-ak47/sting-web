"use client";

import DarkBg from "./UI/DarkBg";
import "@/assets/styles/form-page.scss";
import bigEllipse from "@/assets/img/big-ellipse.svg";
import gridGroup from "@/assets/img/grid-group-2.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function FormPage({ title, description, form }) {
  const path = usePathname();

  return (
    <DarkBg>
      <div className="form-page container">
        <div className="form-page__text-container">
          <h1 style={{ marginBottom: "-17px!important" }} className="form-page__text-container--h1">
            {title}
          </h1>
          {description}
        </div>
        <div className="form-page__form-container">{form}</div>
      </div>
      <Image
        className="big-ellipse-top"
        style={path === "/book-free" ? { top: "-78%" } : ""}
        src={bigEllipse}
      />
      <Image className="big-ellipse-bottom" src={bigEllipse} />
      <Image
        className="big-ellipse-top"
        style={{ bottom: "-20%", top: path === "/book-free" ? "-10%" : "unset" }}
        src={gridGroup}
      />
      <Image className="big-ellipse-bottom" style={{ top: "-13%" }} src={gridGroup} />
    </DarkBg>
  );
}
