import DarkBg from "../UI/DarkBg";
import Explore from "@/components/main-page/Explore";
import How from "./How";

export default function ExploreAndHow({ data }) {
  return (
    <DarkBg>
      <div className="container">
        <Explore data={data} />
        <How data={data} />
      </div>
    </DarkBg>
  );
}
