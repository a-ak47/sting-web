"use-client";
import Link from "next/link";
import email from "@/assets/img/contact-us/email.png";
import phone from "@/assets/img/contact-us/phone.png";
import location from "@/assets/img/contact-us/location.png";

export const contactUsData = {
  title: "Contact Us",
  description: (
    <>
      <p className="get-a-quote__text-container--text">
        Whether you have a question, need support, or want to learn more about our services, we're
        here to help.
      </p>
    </>
  ),
  textItems: [
    { text: "Email", img: email, disc: "info@stingrai.io" },
    { text: "Phone number", img: phone, disc: "+1 416-550-8618" },
    { text: "Our location", img: location, disc: "Toronto, Ontario, Canada" },
  ],
};
