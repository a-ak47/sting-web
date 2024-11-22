import main from "@/assets/img/services/Web Application Penetration Testing.png";
import BlackBox from "@/assets/img/services/black-box.svg";
import GrayBox from "@/assets/img/services/gray-box.svg";
import WhiteBox from "@/assets/img/services/white-box.svg";
import FeatureCard from "@/assets/img/services/Feature Card (1).svg";
import circle1 from "@/assets/img/services/web-app-security/circle1.png";
import circle2 from "@/assets/img/services/web-app-security/circle2.png";
import circle3 from "@/assets/img/services/web-app-security/circle3.png";
import circle4 from "@/assets/img/services/web-app-security/circle4.png";

export const webApplicationPenetrationTestingData = {
  heroSec: {
    title: "Web Application Penetration Testing",
    description:
      "In our web application penetration testing services, we take a proactive approach, conducting comprehensive security assessments that simulate real-world cyber attacks.",
    img: main,
  },
  secondSec: {
    title: "Minimize Risks and Strengthen Your Defenses",
    text_1:
      "With our web application penetration testing, you'll quickly identify critical vulnerabilities that could lead to website defacement, reputational damage, and a breach of customer trust. ",
    text_2:
      "Our expert team will conduct thorough assessments and provide you with a detailed report that includes actionable insights and recommendations to remediate any issues discovered.",
    text_3: "By completing this assessment, you'll significantly reduce your risk of:",
    items: [
      "Website defacement",
      "External threats",
      "Common Web Application Attacks",
      "Potential security incidents",
    ],
  },
  titleGrid: {
    title: "Types of Web App Penetration  Testing We Provide",
    items: [
      {
        img: BlackBox,
        title: "Black Box",
        text: "At Stingrai, we perform black box testing under real-world conditions, simulating an external attacker with minimal knowledge of your network and no access to security policies or internal structures. This approach allows us to thoroughly assess your software's defenses, identifying potential vulnerabilities by attempting to gain unauthorized access or disrupt web application functionality.",
      },
      {
        img: GrayBox,
        title: "Gray Box",
        text: "Our gray box testing merges the best of black and white box techniques, simulating an attacker with partial knowledge of your network or application. Using details such as user login credentials, network architecture, and system overviews, we assess your system’s resilience against insider threats, identifying vulnerabilities that could be exploited with limited internal access.",
      },
      {
        img: WhiteBox,
        title: "White Box",
        text: "Our white box testing involves full access to admin privileges, server configurations, database encryption methods, source code, and architecture documentation to thoroughly analyze potential weaknesses. This comprehensive approach allows us to uncover hidden vulnerabilities and improve detection rates within your environment, ensuring a deeper level of security assessment for both the target infrastructure and application source code.",
      },
    ],
  },
  benefits: {
    title: "Benefits of Web Application  Penetration Testing Service",
    items: [
      {
        title: "Risk Reduction",
        text: "Our web application security testing helps you identify and address vulnerabilities before they can be exploited by real cyber attacks. By detecting critical risks early, we enable you to mitigate potential threats and safeguard your business from harmful security breaches.",
        img: FeatureCard,
      },
      {
        title: "Compliance Assurance",
        text: "We align our penetration testing with top industry standards, including PTES, OWASP Testing Guide v4.0, OWASP API Security Project, and NIST SP800-115. This ensures that your security measures meet key regulatory compliance frameworks such as SOC2, PCI DSS, ISO27001 etc.",
        img: FeatureCard,
      },
      {
        title: "Cost Efficiency",
        text: "Investing in web application penetration testing is a cost-effective strategy compared to the high expenses associated with data breaches and successful cyber attacks. By proactively addressing vulnerabilities, you can avoid significant financial losses and reputational damage, ultimately saving valuable resources.",
        img: FeatureCard,
      },
      {
        title: "Strengthened Security Posture",
        text: "Through detailed simulations of real-world attack scenarios, our penetration testing enhances your application's security. This includes testing for web application vulnerabilities such as XSS, SQLi, Access Control, Misconfiguration and more. The result is a robust and resilient security posture that significantly reduces your risk profile.",
        img: FeatureCard,
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
    title: "Our Approach",
    sliderItems: [
      {
        title: "Preparation",
        text: "Gathering detailed information and researching the unique aspects of your web application is a crucial initial step. This phase establishes the foundation for the testing process and allows us to tailor our approach to the specific needs and potential vulnerabilities of the target system. We focus on collecting extensive raw data to enhance the efficiency and depth of the penetration testing. This preparation stage typically lasts about one week.",
      },
      {
        title: "Active Testing",
        text: "Our team conducts the penetration test using a blend of manual and automated methods, following the Penetration Testing Execution Standard (PTES) and other industry best practices such as OWASP and NIST SP800-115. We simulate real-world attacks from a grey-box perspective, using provided credentials to access the application while not having insight into its internal code or configurations.",
      },
      {
        title: "Risk Identification",
        text: "After executing the tests, we analyze and categorize the vulnerabilities discovered. Each identified issue is assessed for its potential impact on your business, from data breaches to loss of service. We assess their potential impact and prioritize them based on severity, identifying any security risks that could be exploited by malicious actors.",
      },
      {
        title: "Comprehensive Reporting and Recommendations",
        text: "We deliver a detailed report outlining the identified vulnerabilities, their risk levels, and actionable recommendations for remediation. Our report provides a clear path for addressing each issue and includes follow-up support to help you implement the suggested improvements and strengthen your application's security posture. In addition, we offer free support calls and free re-tests to assist your team in resolving any vulnerabilities.",
      },
    ],
  },
};
