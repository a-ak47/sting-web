import img from "@/assets/img/services/web-app-security/main.png";
import exploreImg_3 from "@/assets/img/main-page/explore/3.svg";
import FeatureCard from "@/assets/img/services/Feature Card.png";

export const wepAppSecurityData = {
  heroSec: {
    title: "Web Application Security",
    description:
      "Web application security is critical to preventing financial loss, data breaches, and a decline in customer trust. It protects web applications from a range of threats and vulnerabilities that could compromise functionality and the sensitive data being managed.",
    img: img,
  },
  secondSec: {
    title: "What is Web Application Security?",
    text_1:
      "Web Application Security is essential for safeguarding your online platforms against potential threats and vulnerabilities. By employing a range of protective measures from vulnerability assessments and secure coding to regular penetration testing and encryption — our approach ensures that your web applications remain secure and resilient against attacks.",
    items: [
      "Identify and evaluate vulnerabilities in your web applications",
      "Implement best practices in secure coding",
      "Prevent suspicious activities and potential breaches",
      "Implement strong user authentication and authorization mechanisms",
    ],
  },
  badge: {
    title: "Following industry-recognized testing standards",
    text: (
      <>
        Stingrai employs the{" "}
        <span style={{ color: "#FFF" }}>Penetration Testing Execution Standard (PTES)</span> as the
        foundation for its general penetration testing methodology. For web applications and API
        assessments, we integrate the{" "}
        <span style={{ color: "#FFF" }}>
          Open Web Application Security Project (OWASP) Testing Guide v4.0
        </span>{" "}
        along with the <span style={{ color: "#FFF" }}>OWASP API Security Project standards</span>.
        Additionally, the <span style={{ color: "#FFF" }}>NIST SP800-115 standard serves</span> as a
        baseline framework to ensure comprehensive penetration testing.
      </>
    ),
    buttons: [
      {
        text: "Get a Quote",
        className: "primary",
        href: "#",
      },
      {
        text: "Book Free Consultation",
        className: "secondary",
        href: "#",
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
  solutionWebApp: {
    title: "Our Solution for Web Application Security",
    items: [
      {
        title: "Web Application Penetration Testing",
        text: "Secure your applications from vulnerabilities and attacks without hindering your development speed.",
        icon: exploreImg_3,
        buttons: [
          {
            text: "Learn More",
            link: "/services/web-application-penetration-testing",
          },
        ],
      },
    ],
  },
  benefits: {
    title: "Benefits of Regular Web Application Penetration Testing",
    description:
      "Reliable application security relies on ongoing, dynamic testing that integrates seamlessly with your security and development processes.",
    items: [
      {
        title: "Proactive Threat Detection",
        text: "In today’s threat landscape, regular security testing is essential to protect your mission-critical applications. Whether it's applications, APIs, or code, our expert team provides fast and reliable testing to keep you ahead of potential threats.",
        img: FeatureCard,
      },
      {
        title: "Find and Fix Vulnerabilities",
        text: "Empower your engineering and technical teams with the right context, tools, and expertise to address vulnerabilities effectively. Our expert security testing helps you identify and remediate flaws in applications and APIs, streamlining the process and improving security.",
        img: FeatureCard,
      },
      {
        title: "Maintain Compliance and Secure Releases",
        text: "Avoid the pitfalls of infrequent compliance testing by integrating regular security assessments into your development cycle. With our services, you can pinpoint vulnerabilities, accelerate resolution, and ensure your releases are secure, whether you’re testing continuously or conducting annual audits.",
        img: FeatureCard,
      },
    ],
  },
  bottomSec: {
    title: "Safeguard Your Business from Cyber Threats",
    text: "Simulate real-world attacks with the expertise of our elite white-hat hackers. We identify vulnerabilities before they can be exploited, providing clear guidance on how to fix them through our cutting-edge platform, all at competitive pricing.",
  },
};
