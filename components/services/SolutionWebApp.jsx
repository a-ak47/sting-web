import { ExploreGridItem } from "../main-page/Explore";
import "@/assets/styles/services/solution-web-app.scss";
import Image from "next/image";
import ellipse from "@/assets/img/services/ellipse-2.svg";

export default function SolutionWebApp({ data }) {
  return (
    <div className="container solution-web-app" style={{ display: "flex" }}>
      <Image src={ellipse} alt="ellipse" className="solution-web-app__ellipse" />
      <h2 className="solution-title">{data.title}</h2>
      <div className="solution-web-app__right">
        <ExploreGridItem
          img={data.items[0].icon}
          title={data.items[0].title}
          text={data.items[0].text}
          buttons={data.items[0].buttons}
        />
      </div>
    </div>
  );
}
