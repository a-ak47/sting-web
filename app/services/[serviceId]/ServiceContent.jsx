"use client";

import Badge from "@/components/Badge";
import HeroSec from "@/components/HeroSec";
import BottomSec from "@/components/main-page/BottomSec";
import SliderComponent from "@/components/main-page/Slider";
import BenefitsAndCircleSlider from "@/components/services/BenefitsAndCircleSlider";
import BenefitsAndTitleGrid from "@/components/services/BenefitsAndTitleGrid";
import ServicesGrid from "@/components/services/GridServices";
import SecondGridSec from "@/components/services/SecondGridSec";
import SolutionAndBenefits from "@/components/services/SolutionAndBenefits";
import TitleGrid from "@/components/services/TitleGrid";
import ServiceSlider from "@/components/services/ServiceSlider";
import UniversalTitleGridAndCircleSlider from "@/components/services/UniversalTitleGridAndCircleSlider";

const componentsMap = {
  HeroSec,
  SecondGridSec,
  ServicesGrid,
  SliderComponent,
  BottomSec,
  Badge,
  SolutionAndBenefits,
  TitleGrid,
  BenefitsAndCircleSlider,
  BenefitsAndTitleGrid,
  UniversalTitleGridAndCircleSlider,
  ServiceSlider,
};

const ServiceContent = ({ componentsData }) => {
  return (
    <>
      {componentsData.map(({ name, props }) => {
        const Component = componentsMap[name];
        return <Component {...props} key={name} />;
      })}
    </>
  );
};

export default ServiceContent;
