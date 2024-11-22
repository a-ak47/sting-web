import main from "@/assets/img/services/internal-and-external-network-pen-test/main.png";
import img_1 from "@/assets/img/services/internal-and-external-network-pen-test/1.svg";
import img_2 from "@/assets/img/services/internal-and-external-network-pen-test/2.svg";
import BlackBox from "@/assets/img/services/black-box.svg";
import GrayBox from "@/assets/img/services/gray-box.svg";
import WhiteBox from "@/assets/img/services/white-box.svg";
import progress1 from "@/assets/img/services/web-app-security/progress1.png";
import progress2 from "@/assets/img/services/web-app-security/progress2.png";
import progress3 from "@/assets/img/services/web-app-security/progress3.png";
import progress4 from "@/assets/img/services/web-app-security/progress4.png";
import progress5 from "@/assets/img/services/web-app-security/progress5.png";
import progress6 from "@/assets/img/services/web-app-security/progress6.png";
import progress7 from "@/assets/img/services/web-app-security/progress7.png";
import progress8 from "@/assets/img/services/web-app-security/progress8.png";

export const internalAndExternalNetworkPenTestData = {
  heroSec: {
    title: "Internal and External Network Penetration Testing",
    text: "Enhance your network security with expert penetration testing services. Identify vulnerabilities, prioritize risks, and take decisive action to protect your data. Invest in robust defenses, demonstrate your commitment to security, and build trust with customers and partners.",
    img: main,
  },
  secondSec: {
    title: "Benefits of Network Penetration Testing",
    text_1:
      "By conducting this penetration testing, you’ll gain valuable insights into vulnerabilities within your internal and external networks, especially in the event of a perimeter breach.",
    text_2:
      "Our expert team will provide you with a detailed report, complete with actionable recommendations to address any identified issues.",
    text_3: "After completing this testing, your organization will be better safeguarded against:",
    items: [
      "Ransomware attacks",
      "Malware infections",
      "Denial of Service (DoS) attacks",
      "Insider threats",
    ],
  },
  titleGrid: {
    title: "Tailored Testing Approaches to Fit Your Needs",
    items: [
      {
        img: BlackBox,
        title: "Black Box",
        text: "At Stingrai, we perform black box testing under real-world conditions, simulating an external attacker without any knowledge of your network and no access to security policies or internal structures. This approach allows us to thoroughly assess your software's defenses, identifying potential vulnerabilities by attempting to gain unauthorized access or disrupt web application functionality.",
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
  universalTitleGrid: {
    title: "External and Internal  Penetration Testing",
    type: "custom-1",
    columns: 2,
    items: [
      {
        img: img_1,
        title: "External Penetration Testing",
        list: [
          "Focuses on internet-facing assets, including web servers, email servers, and other external systems.",
          "Identifies and exploits vulnerabilities that external attackers could target.",
          "Covers publicly accessible systems and services, simulating real-world attacks from outside the organization.",
          "Conducted remotely by penetration testers to mirror external threats.",
          "Protects against unauthorized access from external sources.",
          "Identifies vulnerabilities in systems exposed to the internet.",
          "Strengthens the security of your organization’s perimeter defenses",
        ],
      },
      {
        img: img_2,
        title: "Internal Penetration Testing",
        list: [
          "Targets the security of internal networks and systems within the organization.",
          "Identifies and exploits vulnerabilities that could be leveraged by insider threats or attackers who have breached the network perimeter.",
          "Covers internal servers, workstations, network devices, and other internal infrastructure.",
          "Conducted remotely by penetration testers to mirror external threats.",
          "Conducted on-site or via remote access, simulating attacks originating from within the organization.Protects against insider threats and breaches from compromised internal systems.",
          "Identifies weaknesses in internal processes and configurations.",
          "Strengthens the overall security of your organization’s internal network.",
        ],
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
    title: "Our Approach to Network Pentesting",
    sliderItems: [
      {
        title: "Reconnaissance",
        text: "Gathering information passively from publicly available resources about the organization and its assets. This phase involves collecting data without direct interaction, aiming to understand the organization's digital footprint and identify potential areas of interest for further analysis.",
      },
      {
        title: "Scanning",
        text: "This includes tasks like port scanning, identifying open ports, services running on those ports, and other entry points into the network. This foundational step helps us map out the potential attack surface and understand where vulnerabilities may reside.",
      },
      {
        title: "Enumeration",
        text: "In this phase, we dive deeper into the services discovered during scanning. Our team conducts service enumeration, extracting detailed information such as vendor names, service banners, version numbers, and supported protocols. This helps us identify specific targets for further investigation and highlights outdated or vulnerable software.",
      },
      {
        title: "Vulnerability Analysis",
        text: "Using the information gathered from scanning and enumeration, we perform targeted tests to identify known vulnerabilities, misconfigurations, and weaknesses. This step involves automated scanning tools as well as manual testing techniques to ensure a thorough analysis of the system’s security posture. Our goal is to discover any gaps that malicious actors could exploit.",
      },
      {
        title: "Exploitation",
        text: "Once vulnerabilities are identified, we attempt to exploit them to confirm their impact. This can involve using automated tools or manually tweaking exploit code to successfully gain access. The purpose is to demonstrate how an attacker could leverage these vulnerabilities in a real-world scenario. Each exploitation is carefully controlled to avoid any unintentional damage.",
      },
      {
        title: "Post-Exploitation",
        text: "After a successful exploitation, our focus shifts to post-exploitation activities. Here, we aim to escalate privileges, move laterally across the network, access sensitive data, and establish persistence within compromised systems. This phase mimics the actions of a threat actor after gaining a foothold, showcasing the potential damage and impact if vulnerabilities remain unaddressed.",
      },
      {
        title: "Cleaning",
        text: "Following the exploitation and post-exploitation phases, we ensure that all traces of our testing are removed. Any backdoors, scripts, or malicious artifacts that were used or created during the process are completely removed. This prevents any lingering threats that could be leveraged by real attackers in the future.",
      },
      {
        title: "Reporting",
        text: "Finally, we compile a comprehensive report that details the vulnerabilities identified, the methods used for exploitation, and the results of each test. This report also includes clear recommendations for remediation, helping organizations address the weaknesses and strengthen their security defenses. The insights provided are actionable, allowing businesses to prioritize fixes and improve their overall security posture.",
      },
    ],
  },
};
