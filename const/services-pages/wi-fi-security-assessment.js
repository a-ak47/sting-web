import main from "@/assets/img/services/wi-fi-security-assessment/main.png";
import img_1 from "@/assets/img/services/wi-fi-security-assessment/1.svg";
import img_2 from "@/assets/img/services/wi-fi-security-assessment/2.svg";
import img_3 from "@/assets/img/services/wi-fi-security-assessment/3.svg";
import circle1 from "@/assets/img/services/web-app-security/circle1.png";
import circle2 from "@/assets/img/services/web-app-security/circle2.png";
import circle3 from "@/assets/img/services/web-app-security/circle3.png";
import circle4 from "@/assets/img/services/web-app-security/circle4.png";

export const wiFiSecurityAssessmentData = {
  heroSec: {
    title: "Wi-Fi Security Assessment",
    description:
      "At Stingrai, we conduct comprehensive wireless security assessments to evaluate the security of your Wi-Fi network. Utilizing advanced tools like the Wi-Fi Pineapple, our remote testing process allows you to choose how many locations you want to assess, ensuring potential vulnerabilities are identified wherever you need them.",
    img: main,
  },
  secondSec: {
    title: "Benefits of Our Wi-Fi Security Assessment",
    text_1:
      "In today's digital landscape, securing your wireless network is more critical than ever. Our Wireless Security Assessment helps you identify and eliminate vulnerabilities within your Wi-Fi network, protecting your business from potential threats. Let Stingrai’s expert team ensure that your network is as secure as possible.",
    items: [
      "Ensuring that your encryption methods are robust and up-to-date.",
      "Identifying any weaknesses in your Wi-Fi Protected Setup (WPS) that could be exploited.",
      "Evaluating the strength of your network passwords to prevent unauthorized access.",
      "Detecting unauthorized access points that may be compromising your network’s security.",
    ],
  },
  badge: {
    title: "Our Testing Methodology",
    text: (
      <>
        Our testing approach leverages the Wi-Fi Pineapple device, a powerful tool designed to
        identify and exploit common vulnerabilities in Wi-Fi networks. By remotely testing your
        network's perimeter, we can pinpoint security flaws, including weak Pre-shared Keys,
        misconfigured WPS, and the presence of rogue access points. All data is securely transmitted
        back to our centralized Command and Control (C2) server for thorough analysis.
      </>
    ),
    buttons: [
      {
        text: "Get a Quote",
        className: "primary",
        href: "/get-a-quote?ref=wifiAssesment",
      },
      {
        text: "Book Free Consultation",
        className: "secondary",
        href: "/book-free",
      },
    ],
  },
  universalTitleGrid: {
    title: "The Stingrai Advantage in Wi-Fi Security Assessment",
    type: "custom-2",
    items: [
      {
        img: img_1,
        title: "Stay Ahead of Security Threats",
        text: "Regular evaluations by our experts keep you one step ahead of emerging risks.",
      },
      {
        img: img_2,
        title: "Practical and Actionable Recommendations",
        text: "We provide clear, easy-to-implement guidance to address any vulnerabilities found.",
      },
      {
        img: img_3,
        title: "Ensure Compliance",
        text: "Our assessments align with industry security standards, helping you maintain compliance and protect your business.",
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
    title: "The phases of Wi-Fi security assessment",
    sliderItems: [
      {
        title: "Scope",
        text: "During the initial phase, Stingrai collaborates closely with your team to define the scope of the assessment. We work together to identify the specific SSIDs (Service Set Identifiers) and Client MAC addresses that will be included in the testing. This ensures that our evaluation is thorough and targets the most critical areas of your wireless network.",
      },
      {
        title: "Deploy",
        text: "Once the scope is finalized, we proceed with the deployment phase. Stingrai will ship a pre-configured Wi-Fi Pineapple device to your designated locations. Setting up the device is straightforward, requiring minimal effort from your team. This device will serve as the cornerstone of our testing, allowing us to remotely assess your network’s security.",
      },
      {
        title: "Test",
        text: "With the Wi-Fi Pineapple in place, we move on to the testing phase. Here, we enumerate the attack surface, identifying potential vulnerabilities within your Wi-Fi perimeter. Our comprehensive testing process focuses on critical aspects such as weak password protection, WPS misconfigurations, and the detection of rogue access points. By simulating real-world attack scenarios, we uncover the weaknesses that could be exploited by malicious actors.",
      },
      {
        title: "Report",
        text: "In the final phase, the Wi-Fi Pineapple submits the collected data securely to our centralized Command and Control (C2) server. Stingrai's security experts then analyze the findings and compile a detailed report. This report includes a list of identified security issues, along with practical remediation advice tailored to your specific environment. Our goal is to not only highlight vulnerabilities but also to provide clear, actionable steps to enhance your wireless network security.",
      },
    ],
  },
};
