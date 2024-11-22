import "@/assets/styles/footer.scss";
import logo from "@/assets/img/logo.svg";
import icon_1 from "@/assets/img/footer/Social.svg";
import icon_2 from "@/assets/img/footer/Social-1.svg";
import icon_3 from "@/assets/img/footer/Social-2.svg";
import oic from "@/assets/img/footer/oic.svg";
import Image from "next/image";
import Input from "./UI/Input";
import { footerNav } from "@/const/footer_nav";

export default function Footer() {
  const images = [
    {
      img: icon_1,
      href: "https://www.facebook.com/StingraiOffensive/",
    },
    {
      img: icon_2,
      href: "https://www.linkedin.com/company/stingrai/",
    },
    {
      img: icon_3,
      href: "https://www.instagram.com/stingrai_cybersecurity?igsh=cmF4eHJzZWpkMGYw",
    },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__container-top">
          <div className="footer__info">
            <Image src={logo} alt="logo icon" />
            <p style={{ maxWidth: "320px" }}>
              Stingrai has been a registered federal corporation in Canada since September 2022. You
              can verify our registration in{" "}
              <a
                href="https://ised-isde.canada.ca/cc/lgcy/fdrlCrpDtls.html?p=0&corpId=13381285&V_TOKEN=null&crpNm=stingrai&crpNmbr=&bsNmbr=&cProv=&cStatus=&cAct="
                target="_blank"
              >
                Canada's Federal Company Registry
              </a>
              .
            </p>
            <div
              style={{
                display: "flex",
                width: "83vw",
                justifyContent: "space-between",
                flexWrap: "wrap",
                zIndex: "1100",
              }}
            >
              <div className="footer__input-container" style={{ margin: "40px 0px" }}>
                <p>To get the latest cyber security news.</p>
                <Input
                  placeholder={"Enter your email"}
                  type={"email"}
                  className={"transparent"}
                  style={{ maxWidth: "300px" }}
                />
              </div>
            </div>

            <div className="footer__socials">
              {images.map((item, key) => (
                <a key={key} href={item.href}>
                  <Image src={item.img} alt="social icon" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className="footer__links">
              {Object.entries(footerNav).map(([section, items], index) => (
                <div key={index} className="footer__links--column">
                  <p className="footer__links--title">{section}</p>
                  {items.map((item, key) => (
                    <a href={item.link}>{item.text}</a>
                  ))}
                </div>
              ))}
            </div>
            <div style={{ margin: "50px 0px" }}>
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                <Image src={oic} alt="logo icon" />
                <div>
                  <p>Ontario Centre of Innovation</p>
                  <a href="https://www.oc-innovation.ca" target="_blank">
                    www.oc-innovation.ca
                  </a>
                </div>
              </div>
              <p style={{ maxWidth: "430px", marginTop: "30px" }}>
                {" "}
                Stingrai is a proud member of the{" "}
                <a href="https://www.oc-innovation.ca" target="_blank">
                  Ontario Center of Innovation’s
                </a>{" "}
                approved vendors.
              </p>
            </div>
          </div>
        </div>

        <div className="footer__container-bottom">
          <p>© 2024 Stingrai Inc. All rights reserve</p>
          <div>
            <a
              target="_blank"
              href="https://ised-isde.canada.ca/cc/lgcy/fdrlCrpDtls.html?p=0&corpId=13381285&V_TOKEN=null&crpNm=stingrai&crpNmbr=&bsNmbr=&cProv=&cStatus=&cAct="
            >
              Canada's Federal Company Registry
            </a>
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-of-service">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
