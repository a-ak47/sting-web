import main from "@/assets/img/services/main.png";
import exploreImg_1 from "@/assets/img/main-page/explore/1.svg";
import exploreImg_2 from "@/assets/img/main-page/explore/2.svg";
import exploreImg_3 from "@/assets/img/main-page/explore/3.svg";
import whatClientsSaysImg_1 from "@/assets/img/main-page/what-client-says/1.svg";
import whatClientsSaysImg_2 from "@/assets/img/main-page/what-client-says/2.svg";
import whatClientsSaysImg_3 from "@/assets/img/main-page/what-client-says/3.svg";

export const servicesPageData = {
  heroSec: {
    title: "Our Cybersecurity Services",
    description:
      "Comprehensive Penetration testing as a service (PTaaS) platform and a team of elite white-hat-hackers to protect your digital assets.",
    img: main,
  },
  secondSec: {
    title: "What is Adversary Simulation?",
    text_1:
      "Adversary Simulation is a security testing approach where we mimic the tactics, techniques, and procedures of real-world attackers to assess an organization’s defenses. Unlike traditional testing, Adversary Simulation is designed to replicate the actions of a skilled hacker, providing a realistic evaluation of your security posture.",
    text_2:
      "Through penetration testing, we simulate potential attacks on your systems, attempting to exploit vulnerabilities just as a malicious actor would. This proactive approach helps organizations identify and address security gaps before they can be exploited by  cyber criminals.",
    text_3:
      "By uncovering and fixing these vulnerabilities, Stingrai can protect your organization from:",
    items: [
      "Data breaches",
      "Legal liabilities",
      "Loss of brand reputation",
      "Significant financial losses",
    ],
  },
  explore: {
    title: "Explore our Stingrai services",
    text: "Explore comprehensive suite of Stingrai's Offensive Cyber Security services designed designed to protect your business from all angles. See how our tailored solutions can address your unique cybersecurity needs and enhance your overall security posture.",
    button: {
      href: "/get-a-quote?ref=serives",
      text: "Get a Quote",
      className: "primary",
      arrowImg: false,
    },
    items: [
      {
        img: exploreImg_1,
        title: "Web Application Security",
        text: "Secure your applications from vulnerabilities and attacks without hindering your development speed.",
        link: "#",
        buttons: [
          {
            text: "Web Application Penetration Testing",
            link: "#",
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
            text: "Internal Network Penetration Testing",
            link: "#",
          },
          {
            text: "External Network Penetration Testing",
            link: "#",
          },
          {
            text: "Active Directory Security Assessment",
            link: "#",
          },
          {
            text: "Wi-Fi Security Assessment",
            link: "#",
          },
        ],
      },
      {
        img: exploreImg_3,
        title: "Social Engineering",
        text: "Defend against manipulation tactics with comprehensive assessments and training to bolster your team’s awareness and resilience.",
        link: "#",
        buttons: [
          {
            text: "Physical Security Assessments",
            link: "#",
          },
          {
            text: "Phishing Campaigns",
            link: "#",
          },
        ],
      },
    ],
  },
  how: {
    title: "How Our Cyber Security Services Work",
    items: [
      {
        title: "Get a Quote",
        text: "Begin by filling out our online form to request a quote tailored to your specific cybersecurity needs.",
      },
      {
        title: "Receive & Sign SOW",
        text: "After reviewing your requirements, we’ll send you a customized quote along with a Statement of Work (SOW). This document outlines the scope, deliverables, and timelines. Once you’re satisfied, simply sign the SOW to proceed.",
      },
      {
        title: "Onboard to the Portal",
        text: "Upon signing the SOW, you’ll receive an invitation to join our secure client portal. This portal will serve as your command center throughout the testing process, giving you control and visibility into every step.",
      },
      {
        title: "View Live Findings",
        text: "As our certified ethical hackers begin testing your systems, you’ll see live findings directly in the portal. This real-time insight allows you to monitor vulnerabilities as they’re discovered, giving you immediate visibility into potential risks.",
      },
      {
        title: "Integrate with Your Ticketing System",
        text: "Our platform offers seamless integration with your existing ticketing system. This means you can automatically forward findings to your internal teams, ensuring swift action and tracking without disrupting your current workflows.",
      },
      {
        title: "Request Retests",
        text: "Once your team has addressed the vulnerabilities, you can easily request a retest through the portal. Our experts will verify that the issues have been resolved, providing you with peace of mind that your systems are secure.",
      },
      {
        title: "Communicate via Live Chat",
        text: "Stay connected with our hackers in real-time using our live chat feature. Whether you need clarification on a finding or have questions during the retest, our team is always available to assist you.",
      },
      {
        title: "Customize and Download Your Reports",
        text: "Our platform allows you to select which sections to include in your final report, ensuring that only the relevant information is shared externally. Download your customized report with confidence, knowing that sensitive data remains protected.",
      },
    ],
  },
  servicesGrid: {
    title: "How Stingrai Protects Your Organization from Hackers",
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
  servicesSlider: {
    title: "What Clients Says About Our Services",
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
  bottomSec: {
    title: "Safeguard Your Business from Cyber Threats",
    text: "Simulate real-world attacks with the expertise of our elite white-hat hackers. We identify vulnerabilities before they can be exploited, providing clear guidance on how to fix them through our cutting-edge platform, all at competitive pricing.",
  },
};
