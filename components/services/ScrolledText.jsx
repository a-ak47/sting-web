"use client";

import "@/assets/styles/services/scrolled-text.scss";
import Image from "next/image";
import line from "@/assets/img/services/line.svg";

export default function ScrolledText({ data }) {


  const ScrolledItem = ({ index, title, text }) => {
    return (
      <div className={`scrolled-text__item `}>
        <div className="scrolled-text__item--step">
          <p>Step {index + 1}</p>
        </div>
        <p className="scrolled-text__item--title">{title}</p>
        <p className="scrolled-text__item--text">{text}</p>
      </div>
    );
  };

  return (
    <div className="scrolled-text-line-container" >
      <Image src={line} alt="line" />
      <div className={`scrolled-text `} >
        {data.how.items.map((item, index) => (
          <ScrolledItem
            key={index}
            index={index}
            title={item.title}
            text={item.text}
          />
        ))}
      </div>
    </div>
  );
}
