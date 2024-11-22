import DarkBg from "../UI/DarkBg";
import Benefits from "./Benefits";
import UniversalTitleGrid from "./UniversalTitleGrid";

export default function BenefitsAndTitleGrid ({data}) {
  return(
    <DarkBg>
      <div className="container">
        <UniversalTitleGrid data={data.universalTitleGrid}/>
        <Benefits data={data.benefits}/>
      </div>
    </DarkBg>
  )
}