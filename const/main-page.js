import cybersecurityExpertsImg_1 from "@/assets/img/main-page/cybersecurity-experts/1.svg";
import cybersecurityExpertsImg_2 from "@/assets/img/main-page/cybersecurity-experts/2.svg";
import cybersecurityExpertsImg_3 from "@/assets/img/main-page/cybersecurity-experts/3.svg";
import whatClientsSaysImg_1 from "@/assets/img/main-page/what-client-says/1.svg";
import whatClientsSaysImg_2 from "@/assets/img/main-page/what-client-says/2.svg";
import whatClientsSaysImg_3 from "@/assets/img/main-page/what-client-says/3.svg";

import whyChooseImg_1 from "@/assets/img/main-page/why-choose/1.png";
import whyChooseImg_2 from "@/assets/img/main-page/why-choose/2.png";
import whyChooseImg_3 from "@/assets/img/main-page/why-choose/3.png";
import whyChooseImg_4 from "@/assets/img/main-page/why-choose/4.png";

import whyChooseItem_1_img_1 from "@/assets/img/main-page/why-choose/item-1/img-1.svg";
import whyChooseItem_1_img_2 from "@/assets/img/main-page/why-choose/item-1/img-2.png";
import whyChooseItem_1_img_3 from "@/assets/img/main-page/why-choose/item-1/img-3.png";
import whyChooseItem_1_img_4 from "@/assets/img/main-page/why-choose/item-1/img-4.png";

import whyChooseItem_2_img_1 from "@/assets/img/main-page/why-choose/item-2/img-1.svg";
import whyChooseItem_2_img_2 from "@/assets/img/main-page/why-choose/item-2/img-2.png";
import whyChooseItem_2_img_3 from "@/assets/img/main-page/why-choose/item-2/img-3.png";
import whyChooseItem_2_img_4 from "@/assets/img/main-page/why-choose/item-2/img-4.png";

import whyChooseItem_3_img_1 from "@/assets/img/main-page/why-choose/item-3/img-1.svg";
import whyChooseItem_3_img_2 from "@/assets/img/main-page/why-choose/item-3/img-2.png";
import whyChooseItem_3_img_3 from "@/assets/img/main-page/why-choose/item-3/img-3.png";
import whyChooseItem_3_img_4 from "@/assets/img/main-page/why-choose/item-3/img-4.png";
import whyChooseItem_3_img_5 from "@/assets/img/main-page/why-choose/item-3/img-5.png";

import whyChooseItem_4_img_1 from "@/assets/img/main-page/why-choose/item-4/img-1.svg";
import whyChooseItem_4_img_2 from "@/assets/img/main-page/why-choose/item-4/img-2.png";
import whyChooseItem_4_img_3 from "@/assets/img/main-page/why-choose/item-4/img-3.png";
import whyChooseItem_4_img_4 from "@/assets/img/main-page/why-choose/item-4/img-4.png";

import exploreImg_1 from "@/assets/img/main-page/explore/1.svg";
import exploreImg_2 from "@/assets/img/main-page/explore/2.svg";
import exploreImg_3 from "@/assets/img/main-page/explore/3.svg";
import main_1 from "@/assets/img/main-page/hero-sec/main-1.png";
import main_2 from "@/assets/img/main-page/hero-sec/main-2.svg";
import main_3 from "@/assets/img/main-page/hero-sec/main-3.svg";
import main_4 from "@/assets/img/main-page/hero-sec/main-4.svg";
import main_5 from "@/assets/img/main-page/hero-sec/main-5.svg";

export const mainPageData = {
  heroSec: {
    title: "Protect your Organization from",
    title1: " Hackers",
    text: "Our elite ethical hackers simulate real-world cybercriminal tactics to identify vulnerabilities in your systems. Gain complimentary access to our innovative vulnerability management platform providing real-time insights, integration with your ticketing systems, and live communication with our expert team.",
    images: [main_1, main_2, main_3, main_4, main_5],
  },
  cybersecurityExperts: {
    title: "Trusted Cybersecurity Experts",
    text: "With expert knowledge and a proactive approach, we ensure your digital environment is secure, so your organization can thrive confidently.",
    button: {
      href: "/about-us",
      text: "About us",
      className: "primary",
    },
    items: [
      {
        img: cybersecurityExpertsImg_1,
        title: "Experienced Team",
        text: "Our seasoned cybersecurity professionals bring years of expertise to protect your digital assets.",
      },
      {
        img: cybersecurityExpertsImg_2,
        title: "Competitive Pricing",
        text: "We offer premium services at competitive rates, providing exceptional value without compromising quality.",
      },
      {
        img: cybersecurityExpertsImg_3,
        title: "Innovative Portal",
        text: "Our cutting-edge portal streamlines your security management, offering real-time insights and easy access to critical data.",
      },
    ],
  },
  whatClientsSays: {
    title: "Client Success Stories",
    sliderData: [
      {
        img: whatClientsSaysImg_1,
        text: "Stingrai transformed our security approach by finding vulnerabilities we hadn’t noticed, with insights that were easy for our team to act on. The portal kept us updated in real time, and now we feel confident in our system’s resilience.",
        speaker: "— IT Director, Shpun Remit",
      },
      {
        img: whatClientsSaysImg_2,
        text: "Stingrai’s penetration testing and phishing assessment gave us clear visibility into our vulnerabilities. Their detailed reports and easy-to-use portal made tracking progress and communicating with their team effortless. We highly recommend their services to any organization looking to strengthen its security.",
        speaker: "— Founder, Royal Financial Group",
      },
      {
        img: whatClientsSaysImg_3,
        text: "Stingrai’s team conducted thorough web application and network testing, uncovering critical issues that needed swift action. Their user-friendly portal allowed us to track vulnerabilities in real time and integrate with our systems seamlessly. The direct communication with pentesters made the process efficient and transparent.",
        speaker: "— Director, Bakhter Money Transfer",
      },
    ],
  },
  whyChoose: {
    title: "Why Choose Stingrai",
    text: "Empowering your security with our Penetration testing as a service (PTaaS) platform.",
    items: [
      {
        title: "Unified Dashboad",
        text: "Get a unified view of all security vulnerabilities reported by our expert white-hat hackers, making it easier to track and the executive team can use the analytics to improve their cyber security posture.",
        images: [
          whyChooseItem_1_img_1,
          whyChooseItem_1_img_2,
          whyChooseItem_1_img_3,
          whyChooseItem_1_img_4,
        ],
        // img: whyChooseImg_1,
        link: "#",
      },
      {
        title: "Comprehensive Reporting",
        text: "Access comprehensive, automated reports that offer valuable insights into your security posture. Our platform also enables you to easily redact sensitive company information from specific sections before sharing client-facing versions of the report.",
        // img: whyChooseImg_2,
        images: [
          whyChooseItem_2_img_1,
          whyChooseItem_2_img_2,
          whyChooseItem_2_img_3,
          whyChooseItem_2_img_4,
        ],
        link: "#",
      },
      {
        title: "Integration Capabilities",
        text: "Seamlessly connect with your existing tools and platforms. Our PTaaS platform enables automatic reporting of vulnerabilities directly to your ticketing systems, allowing you to efficiently track and manage remediation efforts.",
        img: whyChooseImg_3,
        images: [
          whyChooseItem_3_img_1,
          whyChooseItem_3_img_2,
          whyChooseItem_3_img_3,
          whyChooseItem_3_img_4,
          whyChooseItem_3_img_5,
        ],
        link: "#",
      },
      {
        title: "Instant Support",
        text: "Enable seamless communication with our expert white-hat hackers through live chat during the pentest, allowing for immediate feedback and swift resolution of issues as they arise.",
        img: whyChooseImg_4,
        images: [
          whyChooseItem_4_img_1,
          whyChooseItem_4_img_2,
          whyChooseItem_4_img_3,
          whyChooseItem_4_img_4,
        ],
        link: "#",
      },
    ],
  },
  explore: {
    title: "Our Offensive Cyber Security Services",
    text: "Explore our comprehensive suite of Stingrai services designed to protect your business from all angles. See how our tailored solutions can address your unique cybersecurity needs and enhance your overall security posture.",
    button: {
      href: "/get-a-quote?ref=landingPage",
      text: "Get a Quote",
      className: "primary",
      arrowImg: true,
    },
    items: [
      {
        img: exploreImg_3,
        title: "Web Application Security",
        text: "Secure your applications from vulnerabilities and attacks without hindering your development speed.",
        link: "#",
        buttons: [
          {
            text: "Learn More",
            link: "/services/web-application-security",
          },
        ],
      },
      {
        img: exploreImg_2,
        title: "Network Security",
        text: "Safeguard your systems and data with proactive, offensive security measures that identify and address potential threats.",
        link: "#",
        buttons: [
          {
            text: "Learn More",
            link: "/services/network-security",
          },
        ],
      },
      {
        img: exploreImg_1,
        title: "Social Engineering",
        text: "Defend against manipulation tactics with comprehensive assessments and training to bolster your team’s awareness and resilience.",
        link: "#",
        buttons: [
          {
            text: "Learn More",
            link: "/services/social-engineering",
          },
        ],
      },
    ],
  },
  how: {
    title: "What Makes Stingrai Unique",
    items: [
      {
        title: "Innovative PTaaS Platform",
        text: "Our Penetration Testing as a Service (PTaaS) model provides continuous, on-demand security testing, giving you real-time insights and proactive threat management. We focus on delivering measurable improvements, backed by detailed reports and recommendations.",
      },
      {
        title: "Proven Track Record",
        text: "We have a history of successfully securing businesses of all sizes, from startups to Fortune 500 companies. Our clients trust us to deliver results that make a tangible difference.",
      },
      {
        title: "Client-Centric Approach",
        text: "We prioritize your needs and work closely with you throughout the process, offering clear communication, regular updates, and ongoing support.",
      },
      {
        title: "Simulate Real Threats",
        text: "At Stingrai, we don’t just run tests—we simulate real-world hacking scenarios to expose vulnerabilities before malicious actors can exploit them. By replicating the tactics, techniques, and procedures of real hackers, we identify critical weaknesses and show you exactly what needs fixing.",
      },
      {
        title: "Expert Remediation Support",
        text: "Stingrai offers detailed remediation steps along with free on-call support, ensuring our clients receive expert guidance to efficiently fix vulnerabilities and strengthen their security.",
      },
      {
        title: "Accessible to All",
        text: "We believe advanced security should be accessible to all. That’s why Stingrai offers competitive pricing without compromising on quality. Protect your organization with top-tier security solutions tailored to your budget.",
      },
    ],
  },
  badge: {
    title: "Remediation Support at No Extra Cost",
    text: (
      <>
        Stingrai goes beyond identifying vulnerabilities. We provide{" "}
        <span style={{ color: "#FFF" }}>detailed remediation instructions</span> in every report,
        giving you the guidance needed to fix issues effectively. In addition, we offer{" "}
        <span style={{ color: "#FFF" }}>free support calls</span> to assist your team in resolving
        any vulnerabilities. To ensure your security, we also provide{" "}
        <span style={{ color: "#FFF" }}></span>free re-tests for reported vulnerabilities,
        guaranteeing a smoother, more secure resolution process.
      </>
    ),
    buttons: [
      {
        text: "Get a Quote",
        className: "primary",
        href: "/get-a-quote?ref=landingPage",
      },
      {
        text: "Book Free Consultation",
        className: "secondary",
        href: "/book-free",
      },
    ],
  },
  bottomSec: {
    title: "Safeguard Your Business from Cyber Threats",
    text: "Simulate real-world attacks with the expertise of our elite white-hat hackers. We identify vulnerabilities before they can be exploited, providing clear guidance on how to fix them through our cutting-edge platform, all at competitive pricing.",
  },
};

export const mainPageDataPtaas = {
  heroSec: {
    title: "Protect your Organization from Hackers",
    text: "Our elite ethical hackers simulate real-world cybercriminal tactics to identify vulnerabilities in your systems. Gain complimentary access to our innovative vulnerability management platform providing real-time insights, integration with your ticketing systems, and live communication with our expert team.",
    images: [main_1, main_2, main_3, main_4, main_5],
  },
  cybersecurityExperts: {
    title: "Trusted Cybersecurity Experts",
    text: "With expert knowledge and a proactive approach, we ensure your digital environment is secure, so your organization can thrive confidently.",
    button: {
      href: "/about-us",
      text: "About us",
      className: "primary",
    },
    items: [
      {
        img: cybersecurityExpertsImg_1,
        title: "Experienced Team",
        text: "Our seasoned cybersecurity professionals bring years of expertise to protect your digital assets.",
      },
      {
        img: cybersecurityExpertsImg_2,
        title: "Competitive Pricing",
        text: "We offer premium services at competitive rates, providing exceptional value without compromising quality.",
      },
      {
        img: cybersecurityExpertsImg_3,
        title: "Innovative Portal",
        text: "Our cutting-edge portal streamlines your security management, offering real-time insights and easy access to critical data.",
      },
    ],
  },
  whatClientsSays: {
    title: "Client Success Stories",
    sliderData: [
      {
        img: whatClientsSaysImg_1,
        text: "Stingrai transformed our security approach by finding vulnerabilities we hadn’t noticed, with insights that were easy for our team to act on. The portal kept us updated in real time, and now we feel confident in our system’s resilience.",
        speaker: "— IT Director, Shpun Remit",
      },
      {
        img: whatClientsSaysImg_2,
        text: "Stingrai’s penetration testing and phishing assessment gave us clear visibility into our vulnerabilities. Their detailed reports and easy-to-use portal made tracking progress and communicating with their team effortless. We highly recommend their services to any organization looking to strengthen its security.",
        speaker: "— Founder, Royal Financial Group",
      },
      {
        img: whatClientsSaysImg_3,
        text: "The Stingrai team conducted both web application and network penetration testing for us, and we couldn’t be more impressed. Their assessments were comprehensive,uncovering critical issues that needed immediate attention. What stood out most was their user-friendly portal, which allowed us to track vulnerabilities in real time and integrate directly with our internal  systems. The ability to chat with their pentesters and manage vulnerabilities through the dashboard made the process efficient and transparent.",
        speaker: "— Director, Bakhter Money Transfer",
      },
    ],
  },
  whyChoose: {
    title: "Benefits of Our PtaaS Platform",
    text: "",
    items: [
      {
        title: "Unified Dashboad",
        text: "Get a unified view of all security vulnerabilities reported by our expert white-hat hackers, making it easier to track and the executive team can use the analytics to improve their cyber security posture.",
        images: [
          whyChooseItem_1_img_1,
          whyChooseItem_1_img_2,
          whyChooseItem_1_img_3,
          whyChooseItem_1_img_4,
        ],
        // img: whyChooseImg_1,
        link: "#",
      },
      {
        title: "Comprehensive Reporting",
        text: "Access comprehensive, automated reports that offer valuable insights into your security posture. Our platform also enables you to easily redact sensitive company information from specific sections before sharing client-facing versions of the report.",
        // img: whyChooseImg_2,
        images: [
          whyChooseItem_2_img_1,
          whyChooseItem_2_img_2,
          whyChooseItem_2_img_3,
          whyChooseItem_2_img_4,
        ],
        link: "#",
      },
      {
        title: "Integration Capabilities",
        text: "Seamlessly connect with your existing tools and platforms. Our PTaaS platform enables automatic reporting of vulnerabilities directly to your ticketing systems, allowing you to efficiently track and manage remediation efforts.",
        img: whyChooseImg_3,
        images: [
          whyChooseItem_3_img_1,
          whyChooseItem_3_img_2,
          whyChooseItem_3_img_3,
          whyChooseItem_3_img_4,
          whyChooseItem_3_img_5,
        ],
        link: "#",
      },
      {
        title: "Instant Support",
        text: "Enable seamless communication with our expert white-hat hackers through live chat during the pentest, allowing for immediate feedback and swift resolution of issues as they arise.",
        img: whyChooseImg_4,
        images: [
          whyChooseItem_4_img_1,
          whyChooseItem_4_img_2,
          whyChooseItem_4_img_3,
          whyChooseItem_4_img_4,
        ],
        link: "#",
      },
    ],
  },
  explore: {
    title: "Our Offensive Cyber Security Services",
    text: "Explore our comprehensive suite of Stingrai services designed to protect your business from all angles. See how our tailored solutions can address your unique cybersecurity needs and enhance your overall security posture.",
    button: {
      href: "/get-a-quote?ref=PTAAS",
      text: "Get a Quote",
      className: "primary",
      arrowImg: true,
    },
    items: [
      {
        img: exploreImg_3,
        title: "Web Application Security",
        text: "Secure your applications from vulnerabilities and attacks without hindering your development speed.",
        link: "#",
        buttons: [
          {
            text: "Learn More",
            link: "/services/web-application-security",
          },
        ],
      },
      {
        img: exploreImg_2,
        title: "Network Security",
        text: "Safeguard your systems and data with proactive, offensive security measures that identify and address potential threats.",
        link: "#",
        buttons: [
          {
            text: "Learn More",
            link: "/services/network-security",
          },
        ],
      },
      {
        img: exploreImg_1,
        title: "Social Engineering",
        text: "Defend against manipulation tactics with comprehensive assessments and training to bolster your team’s awareness and resilience.",
        link: "#",
        buttons: [
          {
            text: "Learn More",
            link: "/services/social-engineering",
          },
        ],
      },
    ],
  },
  how: {
    title: "What Makes Stingrai Unique",
    items: [
      {
        title: "Innovative PTaaS Platform",
        text: "Our Penetration Testing as a Service (PTaaS) model provides continuous, on-demand security testing, giving you real-time insights and proactive threat management. We focus on delivering measurable improvements, backed by detailed reports and recommendations.",
      },
      {
        title: "Proven Track Record",
        text: "We have a history of successfully securing businesses of all sizes, from startups to Fortune 500 companies. Our clients trust us to deliver results that make a tangible difference.",
      },
      {
        title: "Client-Centric Approach",
        text: "We prioritize your needs and work closely with you throughout the process, offering clear communication, regular updates, and ongoing support.",
      },
      {
        title: "Simulate Real Threats",
        text: "At Stingrai, we don’t just run tests—we simulate real-world hacking scenarios to expose vulnerabilities before malicious actors can exploit them. By replicating the tactics, techniques, and procedures of real hackers, we identify critical weaknesses and show you exactly what needs fixing.",
      },
      {
        title: "Expert Remediation Support",
        text: "Stingrai offers detailed remediation steps along with free on-call support, ensuring our clients receive expert guidance to efficiently fix vulnerabilities and strengthen their security.",
      },
      {
        title: "Accessible to All",
        text: "We believe advanced security should be accessible to all. That’s why Stingrai offers competitive pricing without compromising on quality. Protect your organization with top-tier security solutions tailored to your budget.",
      },
    ],
  },
  badge: {
    title: "Remediation Support at No Extra Cost",
    text: (
      <>
        Stingrai goes beyond identifying vulnerabilities. We provide{" "}
        <span style={{ color: "#FFF" }}>detailed remediation instructions</span> in every report,
        giving you the guidance needed to fix issues effectively. In addition, we offer{" "}
        <span style={{ color: "#FFF" }}>free support calls</span> to assist your team in resolving
        any vulnerabilities. To ensure your security, we also provide{" "}
        <span style={{ color: "#FFF" }}></span>free re-tests for reported vulnerabilities,
        guaranteeing a smoother, more secure resolution process.
      </>
    ),
    buttons: [
      {
        text: "Get a Quote",
        className: "primary",
        href: "/get-a-quote?ref=PTAAS",
      },
      {
        text: "Book Free Consultation",
        className: "secondary",
        href: "/book-free",
      },
    ],
  },
  bottomSec: {
    title: "Safeguard Your Business from Cyber Threats",
    text: "Simulate real-world attacks with the expertise of our elite white-hat hackers. We identify vulnerabilities before they can be exploited, providing clear guidance on how to fix them through our cutting-edge platform, all at competitive pricing.",
  },
};
