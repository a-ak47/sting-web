import HeroSec from "@/components/HeroSec";
import { IntercomProvider } from "@/utils/IntercomProvider";
import HeroSecCenter from "@/components/HeroSecCenter";
import DarkBg from "@/components/UI/DarkBg";
import { howItWorksData } from "@/const/platform/how-it-works";
import "@/assets/styles/how-it-works.scss";
import Image from "next/image";
import line from "@/assets/img/how-it-works-line.svg";
import BottomSec from "@/components/main-page/BottomSec";

const bottomSec = {
  title: "Safeguard Your Business from Cyber Threats",
  text: "Simulate real-world attacks with the expertise of our elite white-hat hackers. We identify vulnerabilities before they can be exploited, providing clear guidance on how to fix them through our cutting-edge platform, all at competitive pricing.",
};

export default function HowItWorks() {
  const data = howItWorksData;

  return (
    <IntercomProvider>
      <div style={{ marginTop: "70px!important" }}>
        <HeroSecCenter style={{ paddingTop: "70px!important" }} data={data.heroSec} />
        <DarkBg>
          <div className="how-it-works container">
            <div className="how-it-works__left-container">
              <div className="how-it-works__text-container">
                {data.items.map((item, index) => (
                  <div className={`how-it-works__item `}>
                    <div className="how-it-works__item--step">
                      <p>Step {index + 1}</p>
                    </div>
                    <p className="how-it-works__item--title">{item.title}</p>
                    <p className="how-it-works__item--text">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div style={{ marginTop: "100px" }}>
            <BottomSec data={bottomSec} />
          </div>
        </DarkBg>
      </div>
    </IntercomProvider>
  );
}
