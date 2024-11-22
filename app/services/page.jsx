import HeroSec from "@/components/HeroSec";
import ExploreAndHow from "@/components/services/ExploreAndHow";
import SecondGridSec from "@/components/services/SecondGridSec";
import "@/assets/styles/services/services.scss";
import { servicesPageData } from "@/const/services-page";
import ServicesGrid from "@/components/services/GridServices";
import SliderComponent from "@/components/main-page/Slider";
import BottomSec from "@/components/main-page/BottomSec";

export default function ServicesPage(params) {
  const data = servicesPageData;

  return (
    <>
      <HeroSec
        title={data.heroSec.title}
        text={data.heroSec.description}
        img={data.heroSec.img}
        alt={data.heroSec.title}
      />
      <SecondGridSec
        title={data.secondSec.title}
        par_1={data.secondSec.text_1}
        par_2={data.secondSec.text_2}
        gridDataPar={data.secondSec.text_3}
        gridData={data.secondSec.items}
      />
      <ExploreAndHow data={data} />
      <ServicesGrid data={data.servicesGrid} />
      <SliderComponent data={data.servicesSlider} dark={true} />F
      <BottomSec data={data.bottomSec} />
    </>
  );
}
