import main from "@/assets/img/services/network-security/main.png";
import img_1 from "@/assets/img/services/network-security/1.svg";
import img_2 from "@/assets/img/services/network-security/2.svg";
import img_3 from "@/assets/img/services/network-security/3.svg";
import FeatureCard from "@/assets/img/services/network-security/Feature Card.svg";

export const networkSecurityData = {
  heroSec: {
    title: "Network Security",
    text: "Given the financial costs of suffering a breach, it is advisable to perform regular internal and external penetration testing to identify and help address vulnerabilities.",
    img: main,
  },
  secondSec: {
    title: "What is Network Security?",
    text_1: "Network Security is a critical component of your organization’s overall cybersecurity strategy, focused on protecting your network infrastructure from unauthorized access, data breaches, and other cyber threats. It involves a comprehensive approach to safeguarding your internal and external network environments.",
    items: [
      "Prevent unauthorized access to network resources",
      "Control incoming and outgoing network traffic",
      "Ensuring that sensitive information remains secure from interception and unauthorized access",
      "Ensuring that your network defenses remain robust and up-to-date"
    ]
  },
  universalTitleGrid: {
    title: "Our Network Security Services",
    type: "item grid with item",
    items: [
      {
        img: img_1,
        title: "Internal and External Network Penetration Testing",
        text: "Secure your network from vulnerabilities and attacks without hindering your development speed.",
        buttons: [
          {
            text: "Learn More",
            link: "#",
          }
        ]
      },
      {
        img: img_2,
        title: "Active Directory Security Assessment",
        text: "Safeguard your systems and data with proactive, offensive security measures that identify and address potential threats in your Active Directory (AD) environment.",
        buttons: [
          {
            text: "Learn More",
            link: "#",
          }
        ]
      },
      {
        img: img_3,
        title: "Wi-Fi Security Assessment",
        text: "Protect your network and sensitive data with proactive, offensive security measures that uncover and address vulnerabilities in your Wi-Fi infrastructure, ensuring secure and reliable wireless connectivity for your organization.",
        buttons: [
          {
            text: "Learn More",
            link: "#",
          }
        ]
      },
    ]
  },
  benefits: {
    title: "Benefits of Network Security Testing",
    description: "Experience peace of mind with our advanced network security solutions designed to safeguard your business from cyber threats. Our comprehensive approach not only protects your critical data but also ensures your operations run smoothly without disruption.",
    items: [
      {
        title: "Enhanced Protection",
        text: "Network security solutions provide robust defenses against a wide range of cyber threats, including malware, ransomware, and unauthorized access. By implementing advanced security measures, you safeguard sensitive data and critical infrastructure from potential breaches and attacks.",
        img: FeatureCard,
      },
      {
        title: "Improved Compliance and Risk Management",
        text: "Effective network security not only safeguards your business and clients from data breaches and unauthorized access but also ensures compliance with industry regulations and standards. By maintaining robust security protocols, you reduce the risk of legal and financial penalties while adhering to key regulatory frameworks such as SOC2, PCI DSS, ISO27001, and others. ",
        img: FeatureCard,
      },
      {
        title: "Increased Operational Efficiency",
        text: "With network security solutions in place, you minimize disruptions caused by security incidents, ensuring smooth and uninterrupted business operations. Enhanced security also helps streamline network performance, optimize resource usage, and reduce the likelihood of downtime, leading to greater overall efficiency.",
        img: FeatureCard,
      },
    ]
  },
  servicesGrid: {
    title: "How Stingrai Protects Your Organization from Hackers",
    items: [
      {
        title: "Innovative PTaaS Platform",
        text: "Our Penetration Testing as a Service (PTaaS) model provides continuous, on-demand security testing, giving you real-time insights and proactive threat management. We focus on delivering measurable improvements, backed by detailed reports and recommendations."
      },
      {
        title: "Proven Track Record",
        text: "We have a history of successfully securing businesses of all sizes, from startups to Fortune 500 companies. Our clients trust us to deliver results that make a tangible difference."
      },
      {
        title: "Client-Centric Approach",
        text: "We prioritize your needs and work closely with you throughout the process, offering clear communication, regular updates, and ongoing support."
      },
      {
        title: "Simulate Real Threats",
        text: "At Stingrai, we don’t just run tests—we simulate real-world hacking scenarios to expose vulnerabilities before malicious actors can exploit them. By replicating the tactics, techniques, and procedures of real hackers, we identify critical weaknesses and show you exactly what needs fixing."
      },
      {
        title: "Expert Remediation Support",
        text: "Stingrai offers detailed remediation steps along with free on-call support, ensuring our clients receive expert guidance to efficiently fix vulnerabilities and strengthen their security."
      },
      {
        title: "Accessible to All",
        text: "We believe advanced security should be accessible to all. That’s why Stingrai offers competitive pricing without compromising on quality. Protect your organization with top-tier security solutions tailored to your budget.",
      }
    ]
  }
}