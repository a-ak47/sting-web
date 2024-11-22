"use client";
import Image from "next/image";
import ScrolledText from "./ScrolledText";
import img from "@/assets/img/services/how.svg";
import img_2 from "@/assets/img/main-page/how/icon-2.svg";
import { usePathname } from "next/navigation";

export default function How({ data }) {
  const path = usePathname();

  return (
    <section className="services-how">
      <h2>{data.how.title}</h2>
      <div className="services-how__flex">
        <div className="services-how__flex--left">
          <ScrolledText data={data} />
        </div>
        <div className="services-how__flex--right">
          {path === "/ptaas" ? (
            <Image className="services-how__flex--img" src={img_2} />
          ) : (
            <Image className="services-how__flex--img" src={img} />
          )}
        </div>
      </div>
    </section>
  );
}
