import DarkBg from "../UI/DarkBg";
import PtaasSlider from "./PtaasSlider";
import How from "../services/How";

export default function SliderAndHowWorks({ data }) {
  return (
    <DarkBg>
      <PtaasSlider data={data.slider} />
      <div className="container">
        <How data={data} />
      </div>
    </DarkBg>
  );
}
