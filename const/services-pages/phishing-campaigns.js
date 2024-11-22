import main from "@/assets/img/services/phishing-campaigns/main.png";
import img_1 from "@/assets/img/services/phishing-campaigns/1.svg";
import img_2 from "@/assets/img/services/phishing-campaigns/2.svg";
import img_3 from "@/assets/img/services/phishing-campaigns/3.svg";
import img_4 from "@/assets/img/services/phishing-campaigns/4.svg";
import img_5 from "@/assets/img/services/phishing-campaigns/5.svg";
import img_6 from "@/assets/img/services/phishing-campaigns/6.svg";
import circle1 from "@/assets/img/services/web-app-security/circle1.png";
import circle2 from "@/assets/img/services/web-app-security/circle2.png";
import circle3 from "@/assets/img/services/web-app-security/circle3.png";
import circle4 from "@/assets/img/services/web-app-security/circle4.png";

export const phishingCampaignsData = {
  heroSec: {
    title: "Phishing Campaigns",
    description:
      "Empower your organization by identifying and eliminating email security vulnerabilities",
    img: main,
  },
  secondSec: {
    title: "Benefits of Phishing Campaigns",
    text_1:
      "Strengthen your defense against email-based threats by uncovering vulnerabilities in your email security and enhancing employee awareness. Our expert team uses advanced techniques, including a custom Gophish instance integrated with Evilginx, to simulate real-world phishing attacks. By capturing authorization cookies, even with multi-factor authentication, we assess the resilience of your internal network.",
    items: [
      "Uncover and address vulnerabilities in your email systems",
      "Improve defenses against phishing and other email-based threats",
      "Boost your team’s ability to recognize and respond to phishing attempts",
      "Identify and neutralize potential phishing vulnerabilities before attackers can exploit them",
    ],
  },
  titleGrid: {
    title: "Unlock Your Email Security Potential",
    items: [
      {
        img: img_1,
        title: "Identify Loopholes",
        text: "Detect weaknesses in email security that could expose your internal network.",
      },
      {
        img: img_2,
        title: "Enhance Security Awareness",
        text: "Measure and improve employee responses to phishing threats.",
      },
      {
        img: img_3,
        title: "Prevent Data Theft",
        text: "Reduce the risk of ransomware and unauthorized access.",
      },
    ],
  },
  universalTitleGrid: {
    title: "What You Gain",
    type: "custom-1",
    columns: 3,
    items: [
      {
        img: img_4,
        title: "Reduced Susceptibility to External Adversaries",
        text: "Strengthen your defenses against external threats by identifying and addressing vulnerabilities that could allow attackers to breach your internal network through phishing tactics.",
      },
      {
        img: img_5,
        title: "Enhanced Employee Security Awareness",
        text: "Equip your team with the knowledge and training needed to recognize and respond to phishing attempts, fostering a culture of vigilance and reducing the likelihood of successful attacks.",
      },
      {
        img: img_6,
        title: "Get Practical Recommendations",
        text: "Receive actionable insights and tailored recommendations from our experts, designed to help you fortify your email security and mitigate risks effectively.",
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
    title: "The phases of Phishing Campaigns",
    sliderItems: [
      {
        title: "Reconnaissance & Targeting",
        text: "Our team conducts thorough research to identify potential targets within your organization. This step involves mapping out your network and pinpointing areas where phishing attacks could be most effective.",
      },
      {
        title: "Email Simulation",
        text: "We deploy realistic phishing emails using a custom Gophish instance integrated with Evilginx. These emails are designed to mimic trusted providers, testing your employees' responses and your email security defenses.",
      },
      {
        title: "Lateral Movement",
        text: "If initial attempts are successful, we simulate lateral movement within your network to assess how far an attacker could potentially advance. This helps us evaluate the effectiveness of your internal security measures.",
      },
      {
        title: "Analysis & Reporting",
        text: "After the assessment, we analyze the data collected and provide a detailed report. This includes identified vulnerabilities, the effectiveness of your security measures, and actionable recommendations for improving your email security posture.",
      },
    ],
  },
};
