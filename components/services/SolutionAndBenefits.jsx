import DarkBg from "../UI/DarkBg";
import Benefits from "./Benefits";
import SolutionWebApp from "./SolutionWebApp";

export default function SolutionAndBenefits({ data }) {
  return (
    <DarkBg>
      <SolutionWebApp data={data.solutionWebApp} />
      <Benefits data={data.benefits} />
    </DarkBg>
  );
}
