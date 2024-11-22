"use client";
import { IntercomProvider } from "@/utils/IntercomProvider";
import HeroSec from "@/components/HeroSec";
import mainImg from "@/assets/img/main-page/main.png";
import { mainPageData } from "@/const/main-page";
import CybersecurityAndClients from "@/components/main-page/CybersecurityAndClients";
import WhyChoose from "@/components/main-page/WhyChoose";
import ExploreHow from "@/components/main-page/ExploreHow";
import Badge from "@/components/Badge";
import Certificates from "@/components/main-page/Certificates";
import BottomSec from "@/components/main-page/BottomSec";
import { GoogleTagManager } from "@next/third-parties/google";

export default function Home() {
  const data = mainPageData;

  return (
    <IntercomProvider>
      <HeroSec
        title={mainPageData.heroSec.title}
        title1={mainPageData.heroSec.title1}
        text={mainPageData.heroSec.text}
        img={mainImg}
        images={mainPageData.heroSec.images}
      />
      <CybersecurityAndClients data={data} />
      <WhyChoose data={mainPageData} />
      <ExploreHow data={data} />
      <Badge
        title={mainPageData.badge.title}
        text={mainPageData.badge.text}
        buttons={mainPageData.badge.buttons}
      />
      <Certificates />
      <BottomSec data={data.bottomSec} />
    </IntercomProvider>
  );
}
