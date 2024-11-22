"use-client";
import Link from "next/link";

export const getAQuoteData = {
  title: "Get a Quote",
  description: (
    <>
      <p
        style={{ marginTop: "0px", marginBottom: "0px" }}
        className="get-a-quote__text-container--text"
      >
        Take the first step towards securing your digital assets with Stingrai. Fill out the form,
        and our team will provide you with a detailed, custom quote within 24 hours, tailored to
        your unique cybersecurity needs.
      </p>
      <p
        style={{ marginTop: "0px", marginBottom: "0px" }}
        className="get-a-quote__text-container--text"
      >
        If you have any questions or need assistance, don't hesitate to{" "}
        <Link style={{ color: "#2563EB" }} href={"/book-free"}>
          Book a Free Consultation
        </Link>{" "}
        with our experts.
      </p>
    </>
  ),
  textItems: [
    {
      title: "Specialized Expertise:",
      text: "Leverage our elite ethical hackers, each with an average of 9 years of experience in advanced penetration testing, uncovering vulnerabilities that other penetration testers often miss.",
    },
    {
      title: "Complimentary Vulnerability Management Platform:",
      text: "Our Services come with complimentary access to our PTaaS platform. This platform streamlines the testing process and saves time by offering:",
      subpoints: [
        {
          title: "Real-time Reporting: ",
          text: "Access vulnerabilities as they are discovered by our ethical hackers.",
        },
        {
          title: "Seamless Integration: ",
          text: "Directly send identified vulnerabilities to your ticketing systems.",
        },
        {
          title: "Live Collaboration: ",
          text: "Chat directly with our ethical hackers for clarification or assistance.",
        },
        {
          title: "Customizable Reporting: ",
          text: "Securely share reports by redacting sensitive information",
        },
        {
          title: "Free Retesting: ",
          text: "Request free retests directly from the PTaaS platform.",
        },
      ],
    },
    {
      title: "Instant and Comprehensive Support:",
      text: "Detailed remediation instructions are provided for every reported vulnerability, along with free on-call support to assist in implementing fixes.",
    },
  ],
};
