import img from "@/assets/img/about-us/Planet.png";
import icon_1 from "@/assets/img/about-us/Icon1.svg";
import icon_2 from "@/assets/img/about-us/Icon2.svg";
import icon_3 from "@/assets/img/about-us/Icon3.svg";
import expert_1 from "@/assets/img/about-us/experts/1.png";
import expert_2 from "@/assets/img/about-us/experts/2.png";
import expert_3 from "@/assets/img/about-us/experts/3.png";
import expert_4 from "@/assets/img/about-us/experts/4.png";
import expert_5 from "@/assets/img/about-us/experts/5.png";
import alan from "@/assets/img/about-us/experts/alan.png";

export const aboutUsData = {
  heroSec: {
    title: "About Us",
    text: "Gain continuous protection and insights with our on-demand penetration testing services.",
    buttons: false,
  },
  secondSec: {
    title: "Offensive Cyber Security Experts",
    text: "Stingrai is an offensive cybersecurity firm based in Toronto, Canada, founded in September 2022. Stingrai is also a certified vendor of “Ontario Innovation Center” for Offensive Cybersecurity consulting services. We specialize in delivering top-tier cybersecurity consulting services to businesses of all sizes, from small enterprises to large corporations, at competitive rates. Our elite team of white-hat hackers, all thoroughly vetted and subjected to criminal background checks, leverages cutting-edge Pentest-as-a-Service (PTaaS) to simulate real-world attacks, identifying vulnerabilities before they can be exploited by malicious actors. With a proven track record of helping companies fortify their defenses and secure critical data, we provide tailored consulting solutions to meet your specific security needs.",
    img: img,
  },
  ourMission: {
    title: "Our Mission & Values",
    text: "Stingrai is dedicated to helping organizations secure their digital assets against cyber threats. Our team of ethical hackers are highly skilled at identifying vulnerabilities in your systems, ensuring your business is protected from cybercriminals.",
    text2:
      "As part of our service, we provide complimentary access to our proprietary PTaaS platform, offering your team the tools and support needed to efficiently address and remediate all identified vulnerabilities.",
    items: [
      {
        title: "Innovation",
        text: "We continuously innovate to stay ahead of emerging threats.",
        img: icon_1,
      },
      {
        title: "Integrity",
        text: "We uphold the highest ethical standards in everything we do.",
        img: icon_2,
      },
      {
        title: "Customer Focus",
        text: "Our clients’ security is at the heart of our operations.",
        img: icon_3,
      },
    ],
  },
  experts: {
    title: "Meet Our Experts",
    items: [
      {
        img: expert_1,
        name: "Arafat Afzalzada",
        position: "Co-Founder and Team Lead",
        text: "Bachelor Degree in Computer Science, over 9 years of experience in the Cybersecurity Industry",
        certificates: "Certificates: CISSP, PCNSE, CCNA, ITIL",
        linkedIn: "https://ca.linkedin.com/in/arafatafzalzada",
      },
      {
        img: expert_2,
        name: "Mohammad Waqas",
        position: "Co-Founder and Penetration Tester",
        text: "Undergraduate Degree in Computer Science, over 3 years of experience in the Cybersecurity Industry",
        linkedIn: "https://www.linkedin.com/in/mohammad-waqas-958a46237",
      },
      {
        img: expert_3,
        name: "Gustavo Roberto",
        position: "Team Lead Penetration Tester",
        text: "Computer Science, Network Management,  over 9 years of experience in the Cybersecurity Industry",
        certificates: "Certificates: CRTO",
        additionalText: "Bugbounty Hall of Fame: PicPay, Arlo, C6 Bank, Sophos, Telekom",
        linkedIn: "https://www.linkedin.com/in/gustavorobertux",
      },
      {
        img: alan,
        name: "Alan Cordeiro",
        position: "Team Lead Penetration Tester",
        text: "Alan Cordeiro is a seasoned cybersecurity professional with over 20 years of experience in penetration testing and vulnerability assessment, specializing in Network Security, Web Application testing, API and, Red Teaming.",
        certificates: "Certificates: OSCP, CRTO, CRTP, eWPTX",
        linkedIn: "https://www.linkedin.com/in/alancordeiro/",
      },
      {
        img: expert_4,
        name: "Abbas Rajabpour",
        position: "Penetration Tester",
        text: "Bachelor of computer engineering, over 7 years of experience in the Cybersecurity Industry",
        linkedIn: "https://www.linkedin.com/in/abrpr",
      },
      {
        img: expert_5,
        name: "Daniel Gladys",
        position: "Penetration Tester",
        text: "Master of Engineering, Electrical & Computer, over 2 years of experience in the Cybersecurity Industry",
        certificates:
          "Certificates: SSCP, CC, eJPT, PEH, Jr. PT, CompTIA Sec+, CS Bootcamp, IBM Cyber Analyst, ISS",
        linkedIn: "https://www.linkedin.com/in/gladys-daniel",
      },
    ],
  },
  bottomSec: {
    title: "Want to Join the Stingrai Team?",
  },
};
