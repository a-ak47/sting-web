import main from "@/assets/img/services/active-directory/main.png";
import img_1 from "@/assets/img/services/active-directory/1.png";
import img_2 from "@/assets/img/services/active-directory/2.png";
import progress1 from "@/assets/img/services/web-app-security/progress1.png";
import progress2 from "@/assets/img/services/web-app-security/progress2.png";
import progress3 from "@/assets/img/services/web-app-security/progress3.png";
import progress4 from "@/assets/img/services/web-app-security/progress4.png";
import progress5 from "@/assets/img/services/web-app-security/progress5.png";
import progress6 from "@/assets/img/services/web-app-security/progress6.png";
import progress7 from "@/assets/img/services/web-app-security/progress7.png";
import progress8 from "@/assets/img/services/web-app-security/progress8.png";

export const activeDirectoryData = {
  heroSec: {
    title: "Active Directory Security Assessment",
    description:
      "Stingrai’s Active Directory Security Assessment evaluates your AD environment to identify security misconfigurations and vulnerabilities. This assessment provides actionable insights to strengthen your Active Directory security posture.",
    img: main,
  },
  secondSec: {
    title: "Benefits of Active Directory Security Assessment",
    text_1:
      "Enhance the security of your Active Directory environment with our comprehensive assessment. This service helps you identify and address critical vulnerabilities by evaluating:",
    items: [
      "Detect and resolve inactive user accounts, old computer accounts, and outdated authentication protocols.",
      "Prevent account takeovers with detailed checks on ACLs and delegation settings.",
      "Secure domain trusts by reviewing SID history and identifying inactive or vulnerable trusts.",
      "Uncover and fix issues such as golden tickets, temporary admin accounts, and unauthorized password retrieval.",
    ],
  },
  badge: {
    title: "Our Methodology",
    text: (
      <>
        The Active Directory Security Assessment is designed to deliver actionable guidance for
        mitigating security risks in your Active Directory environment. It focuses on evaluating and
        improving operational processes, examining the security and management of privileged
        accounts and groups, and assessing the integrity of forest and domain trusts. This thorough
        approach aims to enhance the overall security posture of your Active Directory by addressing
        these key areas.
      </>
    ),
    buttons: [
      {
        text: "Get a Quote",
        className: "primary",
        href: "/get-a-quote?ref=activeDirectory",
      },
      {
        text: "Book Free Consultation",
        className: "secondary",
        href: "/book-free",
      },
    ],
  },
  universalTitleGrid: {
    title: "Advanced Tools for Comprehensive Security Evaluation",
    type: "custom-1",
    columns: 2,
    items: [
      {
        img: img_1,
        title: "Pingcastle",
        text: "Delivers a comprehensive analysis of your AD infrastructure, highlighting potential security risks, configuration issues, and vulnerabilities. It provides actionable insights to strengthen your AD security posture, including recommendations for remediation.",
      },
      {
        img: img_2,
        title: "Bloodhound",
        text: "Conducts an in-depth examination to uncover hidden vulnerabilities and misconfigurations. It maps out attack paths and identifies potential risks, allowing for targeted and effective security improvements.",
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
    imageName: [
      progress1,
      progress2,
      progress3,
      progress4,
      progress5,
      progress6,
      progress7,
      progress8,
    ],
    title: "Our Approach to AD Security Assessment",
    sliderItems: [
      {
        title: "Initial Consultation",
        text: "We begin with a discussion to understand your AD environment, security objectives, and any specific concerns you may have.",
      },
      {
        title: "Tool Deployment",
        text: "We deploy advanced tools like Pingcastle and Bloodhound to analyze your AD infrastructure. These tools help in identifying potential security risks, misconfigurations, and vulnerabilities.",
      },
      {
        title: "Data Collection",
        text: "We gather data on operational processes, privileged accounts, and domain trusts. This includes reviewing account hygiene, access controls, and trust relationships within your AD environment.",
      },
      {
        title: "Risk Identification",
        text: "Using the collected data, we identify and categorize risks such as stale objects, misconfigured privileged accounts, and insecure domain trusts. We also look for anomalies and potential attack vectors.",
      },
      {
        title: "Analysis and Evaluation",
        text: "We analyze the findings from the tools and data collection to evaluate the overall security posture of your AD environment. This includes assessing the effectiveness of current security controls and identifying gaps.",
      },
      {
        title: "Recommendations",
        text: "Based on our analysis, we provide detailed, actionable recommendations to address identified issues. This includes remediation strategies for misconfigurations, securing privileged accounts, and improving overall AD security.",
      },
      {
        title: "Reporting",
        text: "We deliver a comprehensive report that includes an overview of the assessment, identified risks, recommended actions, and an overall risk rating. This report serves as a guide for improving your AD security posture.",
      },
      {
        title: "Follow-Up",
        text: "We deliver a comprehensive report that includes an overview of the assessment, identified risks, recommended actions, and an overall risk rating. This report sWe offer follow-up support to assist with implementing recommendations and addressing any additional questions or concerns. This ensures that the remediation efforts are effectively applied and the security posture is enhanced.erves as a guide for improving your AD security posture.",
      },
    ],
  },
};
