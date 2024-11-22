import main from "@/assets/img/services/physical-security-assessments/main.png";
import img_1 from "@/assets/img/services/physical-security-assessments/1.svg";
import img_2 from "@/assets/img/services/physical-security-assessments/2.svg";
import img_3 from "@/assets/img/services/physical-security-assessments/3.svg";
import img_4 from "@/assets/img/services/physical-security-assessments/4.svg";
import img_5 from "@/assets/img/services/physical-security-assessments/5.svg";
import img_6 from "@/assets/img/services/physical-security-assessments/6.svg";
import circle1 from "@/assets/img/services/web-app-security/circle1.png";
import circle2 from "@/assets/img/services/web-app-security/circle2.png";
import circle3 from "@/assets/img/services/web-app-security/circle3.png";
import circle4 from "@/assets/img/services/web-app-security/circle4.png";

export const physicalSecurityAssessmentsData = {
  heroSec: {
    title: "Physical Security Assessments",
    description:
      "Ensure that your physical security measures are robust against various attack vectors. Our comprehensive Physical Security Assessment helps you identify and close any gaps in your security perimeter, making your organization less vulnerable to external threats.",
    img: main,
  },
  secondSec: {
    title: "Benefits of Physical Security Assessments",
    text_1:
      "Our Physical Security Assessment is designed to help you identify and address any vulnerabilities within your physical security perimeter. By simulating real-world attacks, we attempt to compromise your security using advanced techniques like RFID Cloning, Tailgating, and Social Engineering, focusing on sample locations of your choice.",
    items: [
      "Reduce the risk of external adversaries gaining access to your internal network",
      "Avoid physical security bypass through access card spoofing or piggybacking",
      "Lower the chances of keystroke logger attacks that can compromise sensitive information",
      "Identify and address physical security risks with real-world attack simulations ",
    ],
  },
  titleGrid: {
    title: "Tailored Testing Approaches to Fit Your Needs",
    items: [
      {
        img: img_1,
        title: "Proactive Threat Detection",
        text: "Identify potential loopholes in your physical security before adversaries can exploit them.",
      },
      {
        img: img_2,
        title: "Tailored Security Solutions",
        text: "Customized assessment based on your selected locations, ensuring targeted and relevant testing.",
      },
      {
        img: img_3,
        title: "Expert Recommendations",
        text: "Receive actionable advice on how to strengthen your physical defenses.",
      },
    ],
  },
  universalTitleGrid: {
    title: "Our Testing Techniques",
    columns: 3,
    type: "custom-1",
    items: [
      {
        img: img_4,
        title: "RFID Cloning",
        text: "Attempting to duplicate access cards to bypass security controls.",
      },
      {
        img: img_5,
        title: "Tailgating",
        text: "Testing the effectiveness of entry protocols by trying to gain unauthorized access.",
      },
      {
        img: img_6,
        title: "Social Engineering",
        text: "Simulating social engineering attacks to exploit human factors in your security measures.",
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
  serviceSlider: {
    imageName: [circle1, circle2, circle3, circle4],
    title: "The phases of Physical Security Assessments",
    sliderItems: [
      {
        title: "Scope Definition",
        text: "Our first step involves working closely with your team to select the locations and establish a timeline for the assessment. This ensures the testing is relevant and tailored to your specific needs.",
      },
      {
        title: "Reconnaissance",
        text: "We will perform passive reconnaissance to meticulously map out the physical attack surface of your facilities. This phase helps us identify potential vulnerabilities and entry points that could be exploited.",
      },
      {
        title: "Testing",
        text: "Our team will visit your sites to conduct real-world testing using techniques such as tailgating, social engineering, RFID cloning, and lockpicking to stealthily attempt gaining unauthorized access. This hands-on approach uncovers vulnerabilities in your physical security measures, ensuring a comprehensive assessment.",
      },
      {
        title: "Reporting",
        text: "After completing the testing, we will deliver a thorough report detailing the techniques used to bypass security controls. The report will include specific findings, insights into the vulnerabilities discovered, and practical recommendations for remediation to enhance your physical security defenses.",
      },
    ],
  },
};
