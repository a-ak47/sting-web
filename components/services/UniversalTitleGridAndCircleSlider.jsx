import DarkBg from "../UI/DarkBg";
import UniversalTitleGrid from "./UniversalTitleGrid";

export default function UniversalTitleGridAndCircleSlider({data}) {
  return(
    <DarkBg>
      <div className="container">
      <UniversalTitleGrid data={data.universalTitleGrid}/>
      </div>
    </DarkBg>
  )
}