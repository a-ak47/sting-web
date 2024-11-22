import Image from "next/image";
import img from "@/assets/img/check-icon.svg";
import { forwardRef } from "react";

const GridServicesItem = forwardRef(({ title, text }, ref) => {
  return (
    <div className="grid-services-item" ref={ref}>
      <div className="grid-services-item__top">
        <Image src={img} alt="check icon" />
        <p>{title}</p>
      </div>
      <p className="grid-services-item__text">{text}</p>
    </div>
  )
})
export default GridServicesItem;