import DarkBg from "../UI/DarkBg";
import Benefits from "./Benefits";

export default function BenefitsAndCircleSlider({data}) {
  return (
    <DarkBg>
      <Benefits data={data.benefits}/>
    </DarkBg>
  )
}