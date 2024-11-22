"use client";

import "@/assets/styles/get-a-quote/get-a-quote.scss";
import { IntercomProvider } from "@/utils/IntercomProvider";
import DarkBg from "@/components/UI/DarkBg";
import { contactUsData } from "@/const/contact-us";
import Image from "next/image";
import checkIcon from "@/assets/img/check-icon.svg";
import Form from "@/components/get-a-quote/Form";
import FormPage from "@/components/FormPage";
import { Typography } from "@mui/material";

export default function GetAQuote() {
  const data = contactUsData;

  const Description = () => {
    return (
      <IntercomProvider>
        {data.description}
        <ul className="get-a-quote__text-container--list">
          {data.textItems.map((item, key) => (
            <li key={key}>
              <div style={{ display: "flex", marginTop: "15px" }}>
                <Image style={{ height: "50px", width: "50px" }} src={item.img} alt="check-icon" />
                <div style={{ marginLeft: "20px" }}>
                  <Typography style={{ fontWeight: "400", fontSize: "18px", color: "white" }}>
                    {item.text}
                  </Typography>
                  <Typography style={{ fontWeight: "400", fontSize: "14px" }}>
                    {item.disc}
                  </Typography>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </IntercomProvider>
    );
  };

  return <FormPage title={data.title} description={<Description />} form={<Form />} />;
}
