import ExpertCard from "@/components/ExpertCard";
import { IntercomProvider } from "@/utils/IntercomProvider";
import HeroSecCenter from "@/components/HeroSecCenter";
import Button from "@/components/UI/Button";
import DarkBg from "@/components/UI/DarkBg";
import GridContainer from "@/components/UI/GridContainer";
import { aboutUsData } from "@/const/about-us";
import Image from "next/image";
import "@/assets/styles/about-us.scss";
import ellipse from "@/assets/img/big-ellipse.svg";
import { GoogleTagManager } from "@next/third-parties/google";

export default function AboutUs(params) {
  const data = aboutUsData;

  return (
    <IntercomProvider>
      <DarkBg>
        <div style={{ marginTop: "-90px!important" }}>
          <HeroSecCenter data={data.heroSec} />
        </div>
        <section
          className="container about-us__flex about-us__second-sec"
          style={{ position: "relative" }}
        >
          <Image src={ellipse} style={{ position: "absolute", right: "-55%", top: "-76%" }} />
          <div className="about-us__second-sec--text-container">
            <h2 style={{ width: "100%!important" }} className="about-us__second-sec--title">
              {data.secondSec.title}
            </h2>
            <p className="">{data.secondSec.text}</p>
            <div
              style={{ marginTop: "50px!important", marginBottom: "50px!important" }}
              className="about-us__second-sec--buttons-container"
            >
              <Button
                className={"primary"}
                text={"Get a Quote"}
                arrowImg={false}
                href={"/get-a-quote?ref=aboutUS"}
              />
              <Button
                className={"secondary"}
                text={"Book Free Consultation"}
                arrowImg={true}
                href={"/book-free"}
              />
            </div>
          </div>
          <div className="about-us__second-sec--img-container">
            <Image src={data.secondSec.img} />
          </div>
        </section>
        <section
          style={{ marginTop: "66px!important" }}
          className="container about-us__flex about-us__mission"
        >
          <div className="about-us__mission--text-container">
            <h2>{data.ourMission.title}</h2>
            <p>{data.ourMission.text}</p>
            <p>{data.ourMission.text2}</p>
            <div className="about-us__mission--button">
              <Button
                className={"primary"}
                text={"Explore opportunities"}
                arrowImg={false}
                href={"/get-a-quote?ref=aboutUS"}
              />
            </div>
          </div>
          <div className="about-us__mission--items-container">
            {data.ourMission.items.map((item, key) => (
              <div key={key} className="about-us__mission--item">
                <div className="about-us__mission--circle">
                  <Image src={item.img} />
                </div>
                <div>
                  <h3 className="about-us__mission--subtitle">{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="about-us__mission--mob-button">
            <Button
              className={"primary"}
              text={"Explore opportunities"}
              arrowImg={false}
              href={"/get-a-quote?ref=aboutUS"}
            />
          </div>
        </section>
      </DarkBg>
      <section style={{ padding: "50px 0px!important" }} className="container about-us__experts">
        <h2 className="dark" style={{ marginLeft: "1rem" }}>
          {data.experts.title}
        </h2>
        <GridContainer columns="grid_columns_2">
          {data.experts.items.map((item, key) => (
            <ExpertCard
              key={key}
              img={item.img}
              name={item.name}
              position={item.position}
              text={item.text}
              linkedIn={item.linkedIn}
              certificates={item?.certificates}
              additionalText={item?.additionalText}
            />
          ))}
        </GridContainer>
      </section>
      <DarkBg>
        <section className="container about-us__bottom-sec">
          <h2>{data.bottomSec.title}</h2>
          <Button
            className={"primary"}
            text={"Explore opportunities"}
            arrowImg={false}
            href={"/get-a-quote?ref=aboutUS"}
          />
        </section>
      </DarkBg>
    </IntercomProvider>
  );
}
