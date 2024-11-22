"use client";

import "@/assets/styles/get-a-quote/get-a-quote.scss";
import { IntercomProvider } from "@/utils/IntercomProvider";
import DarkBg from "@/components/UI/DarkBg";
import { getAQuoteData } from "@/const/get-a-quote";
import Image from "next/image";
import checkIcon from "@/assets/img/check-icon.svg";
import Form from "@/components/get-a-quote/Form";
import FormPage from "@/components/FormPage";

export default function GetAQuote() {
  const data = getAQuoteData;

  const Description = () => {
    return (
      <IntercomProvider>
        {data.description}
        <ul className="get-a-quote__text-container--list" style={{ marginTop: "0px" }}>
          {data.textItems.map((item, key) => (
            <li key={key}>
              <Image src={checkIcon} alt="check-icon" />
              <div style={{ display: "block" }}>
                <p style={{ marginTop: "0px", marginBottom: "0px" }}>
                  <span style={{ fontWeight: 700, color: "white" }}>{item.title}</span> {item?.text}
                </p>
                {item?.subpoints?.map((sub) => (
                  <div style={{ display: "flex" }}>
                    <Image
                      src={checkIcon}
                      alt="check-icon"
                      style={{
                        marginRight: "10px",
                        width: "15px",
                        height: "auto",
                      }}
                    />
                    <p style={{ marginTop: "15px", marginBottom: "0px", fontSize: "17px" }}>
                      <span style={{ fontWeight: 700, color: "white" }}>{sub.title}</span>{" "}
                      {sub?.text}
                    </p>
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </IntercomProvider>
    );
  };

  return <FormPage title={data.title} description={<Description />} form={<Form />} />;
}
