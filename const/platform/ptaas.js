import main from "@/assets/img/ptaas/main.png";
import img_1 from "@/assets/img/ptaas/1.png";
import img_2 from "@/assets/img/ptaas/2.png";
import img_3 from "@/assets/img/ptaas/3.png";
import img_4 from "@/assets/img/ptaas/4.png";
import img_5 from "@/assets/img/ptaas/1.svg";
import img_6 from "@/assets/img/ptaas/2.svg";
import img_7 from "@/assets/img/ptaas/3.svg";
import img_8 from "@/assets/img/ptaas/4.svg";
import img_9 from "@/assets/img/ptaas/5.svg";
import img_10 from "@/assets/img/ptaas/6.svg";
import img_11 from "@/assets/img/ptaas/7.svg";
import img_12 from "@/assets/img/ptaas/8.svg";
import img_13 from "@/assets/img/ptaas/9.svg";
import img_14 from "@/assets/img/ptaas/10.svg";
import whatClientsSaysImg_1 from "@/assets/img/main-page/what-client-says/1.svg";
import whatClientsSaysImg_2 from "@/assets/img/main-page/what-client-says/2.svg";
import whatClientsSaysImg_3 from "@/assets/img/main-page/what-client-says/3.svg";

export const ptaasData = {
  heroSec: {
    title: "Elevate Your Security with PTaaS",
    text: "At Stingrai, our elite white-hat hackers use advanced PTaaS technology to simulate real cyber threats, pinpointing vulnerabilities before they can be exploited. Manage your security testing seamlessly through our innovative platform.",
    img: main,
  },
  secondGridSec: {
    title: "What is PtaaS?",
    text_1:
      "Penetration Testing as a Service (PTaaS) revolutionizes how organizations approach security compared to traditional testing methods. Unlike conventional testing, which often provides results only after completion, PTaaS offers a continuous, dynamic testing environment. With PTaaS, organizations can submit quote requests, onboard quickly, and see vulnerabilities in real-time.",
    text_2:
      "The service enhances communication by allowing direct interaction with our elite white-hat hackers throughout the testing process. Integrations with your existing ticketing systems ensure that vulnerabilities are automatically sent for remediation, streamlining your workflow. Additionally, you can download specific sections of the report tailored to your needs, making PTaaS a more agile and responsive solution for maintaining robust security.",
    items: [
      "PTaaS offers continuous monitoring for immediate threat identification",
      "Collaborate directly with white-hat hackers for faster issue resolution",
      "Vulnerabilities are instantly sent to your ticketing system for quick action",
      "Download tailored reports focusing on specific security needs",
    ],
  },
  whyChoose: {
    title: "Benefits of Our PtaaS Platform",
    items: [
      {
        title: "Unified Dashboad",
        text: "Get a unified view of all security vulnerabilities reported by our expert white-hat hackers, making it easier to track and the executive team can use the analytics to improve their cyber security posture.",
        img: img_1,
        link: "#",
      },
      {
        title: "Comprehensive Reporting",
        text: "Access comprehensive, automated reports that offer valuable insights into your security posture. Our platform also enables you to easily redact sensitive company information from specific sections before sharing client-facing versions of the report.",
        img: img_2,
        link: "#",
      },
      {
        title: "Integration Capabilities",
        text: "Seamlessly connect with your existing tools and platforms. Our PTaaS platform enables automatic reporting of vulnerabilities directly to your ticketing systems, allowing you to efficiently track and manage remediation efforts.",
        img: img_3,
        link: "#",
      },
      {
        title: "Live Chat With Our Expert White-Hat Hackers",
        text: "Enable seamless communication with our expert white-hat hackers through live chat during the pentest, allowing for immediate feedback and swift resolution of issues as they arise.",
        img: img_4,
        link: "#",
      },
    ],
  },
  slider: {
    title: "Penetration Testing Services We Offer",
    items: [
      {
        img: img_5,
        title: "Web Application Penetration Testing",
        text: "In our web application penetration testing services, we take a proactive approach, conducting comprehensive security assessments that simulate real-world cyber attacks. ",
        direct: "/services/web-application-penetration-testing",
      },
      {
        img: img_6,
        title: "Internal and External Penetration Testing",
        text: "Enhance your network security with expert penetration testing services. Identify vulnerabilities, prioritize risks, and take decisive action to protect your data. Invest in robust defenses, demonstrate your commitment to security, and build trust with customers and partners.",
        direct: "/services/internal-and-external-network-pen-test",
      },
      {
        img: img_7,
        title: "Active Directory Security Assessment",
        text: "Stingrai’s Active Directory Security Assessment evaluates your AD environment to identify security misconfigurations and vulnerabilities. This assessment provides actionable insights to strengthen your Active Directory security posture.",
        direct: "/services/active-directory",
      },
      {
        img: img_8,
        title: "Wi-Fi Security Assessment",
        text: "At Stingrai, we conduct comprehensive wireless security assessments to evaluate the security of your Wi-Fi network. Utilizing advanced tools like the Wi-Fi Pineapple, our remote testing process allows you to choose how many locations you want to assess, ensuring potential vulnerabilities are identified wherever you need them.",
        direct: "/services/wi-fi-security-assessment",
      },
      {
        img: img_9,
        title: "Physical Security Assessments",
        text: "Ensure that your physical security measures are robust against various attack vectors. Our comprehensive Physical Security Assessment helps you identify and close any gaps in your security perimeter, making your organization less vulnerable to external threats.",
        direct: "/services/physical-security-assessments",
      },
      {
        img: img_10,
        title: "Phishing Campaigns",
        text: "Strengthen your defense against email-based threats by uncovering vulnerabilities in your email security and enhancing employee awareness. Our expert team uses advanced techniques, including a custom Gophish instance integrated with Evilginx, to simulate real-world phishing attacks. By capturing authorization cookies, even with multi-factor authentication, we assess the resilience of your internal network.",
        direct: "/services/phishing-campaigns",
      },
    ],
  },
  titleGrid: {
    title: "Optimized Security Solutions for Every Role",
    columns: 2,
    items: [
      {
        img: img_11,
        title: "Security Teams",
        text: "Ensure robust security with dynamic, ongoing testing that’s integrated seamlessly with your security and development programs. With PTaaS, you benefit from fresh perspectives and advanced tools without the hassle of new procurement processes, enhancing your security posture effortlessly.",
      },
      {
        img: img_12,
        title: "IT Administrators",
        text: "Enhance your security strategy with streamlined PTaaS integration. Choose from a diverse pool of pentesters, avoid procurement delays, and monitor results in real-time, all while simplifying your security management.",
      },
      {
        img: img_13,
        title: "Developers",
        text: "Minimize risk and cut costs by testing your code early and often. Integrate penetration testing and quality checks into your software development lifecycle (SDLC) and development tools, keeping your teams agile and your applications secure from day one.",
      },
      {
        img: img_14,
        title: "C-Suite Executives",
        text: "Avoid vulnerabilities that slip through annual compliance testing by adopting continuous testing. With PTaaS, identify weaknesses and speed up resolution, ensuring your security measures keep pace with daily code updates and rapid changes.",
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
        text: "The Stingrai team conducted both web application and network penetration testing for us, and we couldn’t be more impressed. Their assessments were comprehensive,uncovering critical issues that needed immediate attention. What stood out most was their user-friendly portal, which allowed us to track vulnerabilities in real time and integrate directly with our internal  systems. The ability to chat with their pentesters and manage vulnerabilities through the dashboard made the process efficient and transparent.",
        speaker: "— Director, Bakhter Money Transfer",
      },
    ],
  },
  bottomSec: {
    title: "Safeguard Your Business from Cyber Threats",
    text: "Simulate real-world attacks with the expertise of our elite white-hat hackers. We identify vulnerabilities before they can be exploited, providing clear guidance on how to fix them through our cutting-edge platform, all at competitive pricing.",
  },
  how: {
    title: "How PTaaS Works",
    items: [
      {
        title: "Request a Quote Online",
        text: "Submit your security testing request through our online form, and our team will promptly provide a tailored quote to kickstart your onboarding process.",
      },
      {
        title: "Real-Time Data Access",
        text: "Access detailed, real-time data through an intuitive dashboard. This feature provides instant visibility into test results and vulnerabilities as they are discovered, allowing for prompt action.",
      },
      {
        title: "Vulnerability Analysis",
        text: "Utilize comprehensive resources and a knowledge base to analyze identified vulnerabilities. Our platform helps you understand the severity of issues and prioritize them based on their impact on your security.",
      },
      {
        title: "Custom Reporting",
        text: "Generate tailored reports that meet your organization’s specific needs. These reports include detailed findings, risk assessments, and compliance documentation, providing a clear overview of your security status and remediation progress.",
      },
      // {
      //   title: "Integrate with Your Ticketing System",
      //   text: "Our platform offers seamless integration with your existing ticketing system. This means you can automatically forward findings to your internal teams, ensuring swift action and tracking without disrupting your current workflows.",
      // },
      // {
      //   title: "Request Retests",
      //   text: "Once your team has addressed the vulnerabilities, you can easily request a retest through the portal. Our experts will verify that the issues have been resolved, providing you with peace of mind that your systems are secure.",
      // },
      // {
      //   title: "Communicate via Live Chat",
      //   text: "Stay connected with our hackers in real-time using our live chat feature. Whether you need clarification on a finding or have questions during the retest, our team is always available to assist you.",
      // },
      // {
      //   title: "Customize and Download Your Reports",
      //   text: "Our platform allows you to select which sections to include in your final report, ensuring that only the relevant information is shared externally. Download your customized report with confidence, knowing that sensitive data remains protected.",
      // },
    ],
  },
};
