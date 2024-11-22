import main from "@/assets/img/services/social-engineering/main.png";
import img_1 from "@/assets/img/services/social-engineering/icon-1.svg";
import img_2 from "@/assets/img/services/social-engineering/icon-2.svg";
import FeatureCard from "@/assets/img/services/social-engineering/Feature Card.png";

export const socialEngineering = {
  heroSec: {
    title: "Social Engineering",
    text: "From phishing simulations to physical security assessments, we help you build a robust defense against manipulation-based threats, ensuring your team is prepared and your business stays secure.",
    img: main,
  },
  secondSec: {
    title: "What is Social Engineering?",
    text_1:
      "Social engineering exploits human psychology to manipulate individuals into divulging confidential information. It can take various forms, including phishing, pretexting, and physical breaches. Our services focus on educating and protecting your team to prevent these attacks.",
    items: [
      "Physical security of your premises to prevent unauthorized access",
      "Simulated phishing attacks to identify and address weaknesses",
      "Develop and implement customized policies",
      "Prepare your team to respond quickly and effectively to social engineering incidents",
    ],
  },
  universalTitleGrid: {
    title: "Our Social Engineering Services",
    type: "item grid with item",
    columns: 2,
    items: [
      {
        img: img_1,
        title: "Physical Security Assessments",
        text: "Strengthen your organization's defenses with proactive, offensive measures that identify and mitigate physical vulnerabilities, ensuring your facilities and critical assets are protected from potential threats.",
        buttons: [
          {
            text: "Learn More",
            link: "#",
          },
        ],
      },
      {
        img: img_2,
        title: "Phishing Campaigns",
        text: "Enhance your cybersecurity posture by simulating real-world phishing attacks to identify weaknesses and train your team to recognize and respond to deceptive tactics, reducing the risk of credential theft and data breaches.",
        buttons: [
          {
            text: "Learn More",
            link: "#",
          },
        ],
      },
    ],
  },
  benefits: {
    title: "Benefits of Social Engineering Protection ",
    items: [
      {
        title: "Comprehensive Employee Training",
        text: "Equip your staff with the knowledge to recognize and respond to social engineering threats effectively.",
        img: FeatureCard,
      },
      {
        title: "Phishing Simulations",
        text: "Regularly test your organization’s resilience with simulated phishing attacks to identify and address weaknesses.",
        img: FeatureCard,
      },
      {
        title: "Physical Security Assessments",
        text: "Evaluate and enhance the physical security of your premises to prevent unauthorized access.",
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
};
