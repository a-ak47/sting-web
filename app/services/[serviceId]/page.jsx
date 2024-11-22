import ServiceContent from "./ServiceContent";
import { IntercomProvider } from "@/utils/IntercomProvider";
import { wepAppSecurityData } from "@/const/services-pages/web-app-security";
import { networkSecurityData } from "@/const/services-pages/network-security";
import { servicesPageData } from "@/const/services-page";
import { webApplicationPenetrationTestingData } from "@/const/services-pages/web-application-penetration-testing";
import { internalAndExternalNetworkPenTestData } from "@/const/services-pages/internal-and-external-network-pen-test";
import { activeDirectoryData } from "@/const/services-pages/active-directory";
import { wiFiSecurityAssessmentData } from "@/const/services-pages/wi-fi-security-assessment";
import { socialEngineering } from "@/const/services-pages/social-engineering";
import { physicalSecurityAssessmentsData } from "@/const/services-pages/physical-security-assessments";
import { phishingCampaignsData } from "@/const/services-pages/phishing-campaigns";

const data = {
  "services-page": servicesPageData,
  "network-security": networkSecurityData,
  "web-application-security": wepAppSecurityData,
  "web-application-penetration-testing": webApplicationPenetrationTestingData,
  "internal-and-external-network-pen-test": internalAndExternalNetworkPenTestData,
  "active-directory": activeDirectoryData,
  "wi-fi-security-assessment": wiFiSecurityAssessmentData,
  "social-engineering": socialEngineering,
  "physical-security-assessments": physicalSecurityAssessmentsData,
  "phishing-campaigns": phishingCampaignsData,
};

export async function generateStaticParams() {
  const services = [
    "network-security",
    "web-application-security",
    "web-application-penetration-testing",
    "internal-and-external-network-pen-test",
    "active-directory",
    "wi-fi-security-assessment",
    "social-engineering",
    "physical-security-assessments",
    "phishing-campaigns",
  ];

  return services.map((serviceId) => ({
    serviceId,
  }));
}

const ServicePage = ({ params }) => {
  const { serviceId } = params;

  let componentsData = [];
  if (serviceId === "network-security") {
    componentsData = [
      {
        name: "HeroSec",
        props: {
          title: data["network-security"].heroSec.title,
          text: data["network-security"].heroSec.text,
          img: data["network-security"].heroSec.img,
          alt: data["network-security"].heroSec.title,
        },
      },
      {
        name: "SecondGridSec",
        props: {
          title: data["network-security"].secondSec.title,
          par_1: data["network-security"].secondSec.text_1,
          gridData: data["network-security"].secondSec.items,
        },
      },
      {
        name: "BenefitsAndTitleGrid",
        props: { data: data["network-security"] },
      },
      {
        name: "ServicesGrid",
        props: { data: data["network-security"].servicesGrid },
      },
      {
        name: "SliderComponent",
        props: {
          data: data["services-page"].servicesSlider,
        },
      },
      {
        name: "BottomSec",
        props: {
          data: data["web-application-security"].bottomSec,
        },
      },
    ];
  } else if (serviceId === "web-application-security") {
    componentsData = [
      {
        name: "HeroSec",
        props: {
          title: data["web-application-security"].heroSec.title,
          text: data["web-application-security"].heroSec.description,
          img: data["web-application-security"].heroSec.img,
          alt: data["web-application-security"].heroSec.title,
        },
      },
      {
        name: "SecondGridSec",
        props: {
          title: data["web-application-security"].secondSec.title,
          par_1: data["web-application-security"].secondSec.text_1,
          gridData: data["web-application-security"].secondSec.items,
        },
      },
      {
        name: "SolutionAndBenefits",
        props: { data: data["web-application-security"] },
      },
      {
        name: "Badge",
        props: {
          title: data["web-application-security"].badge.title,
          text: data["web-application-security"].badge.text,
          buttons: data["web-application-security"].badge.buttons,
        },
      },
      {
        name: "ServicesGrid",
        props: {
          data: data["web-application-security"].servicesGrid,
        },
      },
      {
        name: "SliderComponent",
        props: {
          data: data["services-page"].servicesSlider,
        },
      },

      {
        name: "BottomSec",
        props: {
          data: data["web-application-security"].bottomSec,
        },
      },
    ];
  } else if (serviceId === "web-application-penetration-testing") {
    componentsData = [
      {
        name: "HeroSec",
        props: {
          title: data["web-application-penetration-testing"].heroSec.title,
          text: data["web-application-penetration-testing"].heroSec.description,
          img: data["web-application-penetration-testing"].heroSec.img,
          alt: data["web-application-penetration-testing"].heroSec.title,
        },
      },
      {
        name: "ServiceSlider",
        props: {
          data: data["web-application-penetration-testing"].serviceSlider,
        },
      },
      {
        name: "SecondGridSec",
        props: {
          title: data["web-application-penetration-testing"].secondSec.title,
          par_1: data["web-application-penetration-testing"].secondSec.text_1,
          par_2: data["web-application-penetration-testing"].secondSec.text_2,
          gridDataPar: data["web-application-penetration-testing"].secondSec.text_3,
          gridData: data["web-application-penetration-testing"].secondSec.items,
        },
      },
      {
        name: "TitleGrid",
        props: {
          data: data["web-application-penetration-testing"].titleGrid,
        },
      },
      {
        name: "BenefitsAndCircleSlider",
        props: { data: data["web-application-penetration-testing"] },
      },
      {
        name: "ServicesGrid",
        props: {
          data: data["web-application-penetration-testing"].servicesGrid,
        },
      },
      {
        name: "SliderComponent",
        props: {
          data: data["services-page"].servicesSlider,
        },
      },

      {
        name: "BottomSec",
        props: {
          data: data["web-application-security"].bottomSec,
        },
      },
    ];
  } else if (serviceId === "internal-and-external-network-pen-test") {
    componentsData = [
      {
        name: "HeroSec",
        props: {
          title: data["internal-and-external-network-pen-test"].heroSec.title,
          text: data["internal-and-external-network-pen-test"].heroSec.description,
          img: data["internal-and-external-network-pen-test"].heroSec.img,
          alt: data["internal-and-external-network-pen-test"].heroSec.title,
        },
      },
      {
        name: "ServiceSlider",
        props: {
          data: data["internal-and-external-network-pen-test"].serviceSlider,
        },
      },
      {
        name: "SecondGridSec",
        props: {
          title: data["internal-and-external-network-pen-test"].secondSec.title,
          par_1: data["internal-and-external-network-pen-test"].secondSec.text_1,
          par_2: data["internal-and-external-network-pen-test"].secondSec.text_2,
          gridDataPar: data["internal-and-external-network-pen-test"].secondSec.text_3,
          gridData: data["internal-and-external-network-pen-test"].secondSec.items,
        },
      },
      {
        name: "TitleGrid",
        props: {
          data: data["internal-and-external-network-pen-test"].titleGrid,
        },
      },
      {
        name: "UniversalTitleGridAndCircleSlider",
        props: {
          data: data["internal-and-external-network-pen-test"],
        },
      },
      {
        name: "ServicesGrid",
        props: {
          data: data["internal-and-external-network-pen-test"].servicesGrid,
        },
      },
      {
        name: "SliderComponent",
        props: {
          data: data["services-page"].servicesSlider,
        },
      },
      {
        name: "BottomSec",
        props: {
          data: data["web-application-security"].bottomSec,
        },
      },
    ];
  } else if (serviceId === "active-directory") {
    componentsData = [
      {
        name: "HeroSec",
        props: {
          title: data["active-directory"].heroSec.title,
          text: data["active-directory"].heroSec.description,
          img: data["active-directory"].heroSec.img,
          alt: data["active-directory"].heroSec.title,
        },
      },
      {
        name: "ServiceSlider",
        props: {
          data: data["active-directory"].serviceSlider,
        },
      },
      {
        name: "SecondGridSec",
        props: {
          title: data["active-directory"].secondSec.title,
          par_1: data["active-directory"].secondSec.text_1,
          gridData: data["active-directory"].secondSec.items,
        },
      },
      {
        name: "Badge",
        props: {
          title: data["active-directory"].badge.title,
          text: data["active-directory"].badge.text,
          buttons: data["active-directory"].badge.buttons,
        },
      },
      {
        name: "UniversalTitleGridAndCircleSlider",
        props: {
          data: data["active-directory"],
        },
      },
      {
        name: "ServicesGrid",
        props: {
          data: data["active-directory"].servicesGrid,
        },
      },
      {
        name: "SliderComponent",
        props: {
          data: data["services-page"].servicesSlider,
        },
      },
      {
        name: "BottomSec",
        props: {
          data: data["web-application-security"].bottomSec,
        },
      },
    ];
  } else if (serviceId === "wi-fi-security-assessment") {
    componentsData = [
      {
        name: "HeroSec",
        props: {
          title: data["wi-fi-security-assessment"].heroSec.title,
          text: data["wi-fi-security-assessment"].heroSec.description,
          img: data["wi-fi-security-assessment"].heroSec.img,
          alt: data["wi-fi-security-assessment"].heroSec.title,
        },
      },
      {
        name: "ServiceSlider",
        props: {
          data: data["wi-fi-security-assessment"].serviceSlider,
        },
      },
      {
        name: "SecondGridSec",
        props: {
          title: data["wi-fi-security-assessment"].secondSec.title,
          par_1: data["wi-fi-security-assessment"].secondSec.text_1,
          gridData: data["wi-fi-security-assessment"].secondSec.items,
        },
      },
      {
        name: "Badge",
        props: {
          title: data["wi-fi-security-assessment"].badge.title,
          text: data["wi-fi-security-assessment"].badge.text,
          buttons: data["wi-fi-security-assessment"].badge.buttons,
        },
      },
      {
        name: "UniversalTitleGridAndCircleSlider",
        props: {
          data: data["wi-fi-security-assessment"],
        },
      },
      {
        name: "ServicesGrid",
        props: {
          data: data["wi-fi-security-assessment"].servicesGrid,
        },
      },
      {
        name: "SliderComponent",
        props: {
          data: data["services-page"].servicesSlider,
        },
      },
      {
        name: "BottomSec",
        props: {
          data: data["web-application-security"].bottomSec,
        },
      },
    ];
  } else if (serviceId === "social-engineering") {
    componentsData = [
      {
        name: "HeroSec",
        props: {
          title: data["social-engineering"].heroSec.title,
          text: data["social-engineering"].heroSec.text,
          img: data["social-engineering"].heroSec.img,
          alt: data["social-engineering"].heroSec.title,
        },
      },
      {
        name: "SecondGridSec",
        props: {
          title: data["social-engineering"].secondSec.title,
          par_1: data["social-engineering"].secondSec.text_1,
          gridData: data["social-engineering"].secondSec.items,
        },
      },
      {
        name: "BenefitsAndTitleGrid",
        props: { data: data["social-engineering"] },
      },
      {
        name: "ServicesGrid",
        props: { data: data["social-engineering"].servicesGrid },
      },
      {
        name: "SliderComponent",
        props: {
          data: data["services-page"].servicesSlider,
        },
      },
      {
        name: "BottomSec",
        props: {
          data: data["web-application-security"].bottomSec,
        },
      },
    ];
  } else if (serviceId === "phishing-campaigns") {
    componentsData = [
      {
        name: "HeroSec",
        props: {
          title: data["phishing-campaigns"].heroSec.title,
          text: data["phishing-campaigns"].heroSec.description,
          img: data["phishing-campaigns"].heroSec.img,
          alt: data["phishing-campaigns"].heroSec.title,
        },
      },
      {
        name: "ServiceSlider",
        props: {
          data: data["phishing-campaigns"].serviceSlider,
        },
      },
      {
        name: "SecondGridSec",
        props: {
          title: data["phishing-campaigns"].secondSec.title,
          par_1: data["phishing-campaigns"].secondSec.text_1,
          gridData: data["phishing-campaigns"].secondSec.items,
        },
      },
      {
        name: "TitleGrid",
        props: {
          data: data["phishing-campaigns"].titleGrid,
        },
      },
      {
        name: "UniversalTitleGridAndCircleSlider",
        props: {
          data: data["phishing-campaigns"],
        },
      },
      {
        name: "ServicesGrid",
        props: {
          data: data["phishing-campaigns"].servicesGrid,
        },
      },
      {
        name: "SliderComponent",
        props: {
          data: data["services-page"].servicesSlider,
        },
      },
      {
        name: "BottomSec",
        props: {
          data: data["web-application-security"].bottomSec,
        },
      },
    ];
  } else if (serviceId === "physical-security-assessments") {
    componentsData = [
      {
        name: "HeroSec",
        props: {
          title: data["physical-security-assessments"].heroSec.title,
          text: data["physical-security-assessments"].heroSec.description,
          img: data["physical-security-assessments"].heroSec.img,
          alt: data["physical-security-assessments"].heroSec.title,
        },
      },
      {
        name: "ServiceSlider",
        props: {
          data: data["physical-security-assessments"].serviceSlider,
        },
      },
      {
        name: "SecondGridSec",
        props: {
          title: data["physical-security-assessments"].secondSec.title,
          par_1: data["physical-security-assessments"].secondSec.text_1,
          gridData: data["physical-security-assessments"].secondSec.items,
        },
      },
      {
        name: "TitleGrid",
        props: {
          data: data["physical-security-assessments"].titleGrid,
        },
      },
      {
        name: "UniversalTitleGridAndCircleSlider",
        props: {
          data: data["physical-security-assessments"],
        },
      },
      {
        name: "ServicesGrid",
        props: {
          data: data["physical-security-assessments"].servicesGrid,
        },
      },
      {
        name: "SliderComponent",
        props: {
          data: data["services-page"].servicesSlider,
        },
      },
      {
        name: "BottomSec",
        props: {
          data: data["web-application-security"].bottomSec,
        },
      },
    ];
  }

  return (
    <IntercomProvider>
      <ServiceContent componentsData={componentsData} />
    </IntercomProvider>
  );
};

export default ServicePage;
