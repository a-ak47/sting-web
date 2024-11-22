import DarkBg from "../UI/DarkBg";
import Explore from "./Explore";
import How from "./How";
import Image from "next/image";
import ellipse from "@/assets/img/big-ellipse.svg";

export default function ExploreHow({ data }) {
  return (
    <DarkBg>
      <div className="container">
        <Explore data={data} />
      </div>
      <Image className="big-explore" src={ellipse} />
      <How />
    </DarkBg>
  );
}
