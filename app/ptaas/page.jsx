import HeroSec from "@/components/HeroSec";
import { IntercomProvider } from "@/utils/IntercomProvider";
import BottomSec from "@/components/main-page/BottomSec";
import SliderComponent from "@/components/main-page/Slider";
import WhyChoose from "@/components/main-page/WhyChoose";
import SliderAndHowWorks from "@/components/ptaas/SliderAndHowWorks";
import ServicesGrid from "@/components/services/GridServices";
import SecondGridSec from "@/components/services/SecondGridSec";
import TitleGrid from "@/components/services/TitleGrid";
import { ptaasData } from "@/const/platform/ptaas";
import { mainPageDataPtaas } from "@/const/main-page";

export default function Ptaas() {
  const data = ptaasData;

  return (
    <IntercomProvider>
      <HeroSec
        title={data.heroSec.title}
        text={data.heroSec.text}
        img={data.heroSec.img}
        alt={data.heroSec.title}
      />

      <SecondGridSec
        title={data.secondGridSec.title}
        par_1={data.secondGridSec.text_1}
        par_2={data.secondGridSec.text_2}
        gridData={data.secondGridSec.items}
      />
      <WhyChoose data={mainPageDataPtaas} />
      {/* <WhyChoose data={data}/> */}
      <SliderAndHowWorks data={data} />
      <TitleGrid data={data.titleGrid} />
      <ServicesGrid data={data.servicesGrid} />
      <SliderComponent data={data.servicesSlider} />
      <BottomSec data={data.bottomSec} />
    </IntercomProvider>
  );
}
