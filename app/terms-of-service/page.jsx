"use client";
import DarkBg from "@/components/UI/DarkBg";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "@/assets/styles/privacy-policy.scss";
import Image from "next/image";
// import circle_1 from "@/assets/img/badge/circle-1.svg";
// import circle_2 from "@/assets/img/badge/circle-2.svg";
import circle_1 from "@/assets/img/ellipse-grid.svg";
import circle_2 from "@/assets/img/ellipse-grid.svg";
gsap.registerPlugin(ScrollTrigger);
export default function TermsOfService() {
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { autoAlpha: 0, y: 20 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 70%",
        },
      }
    );
  }, []);
  return (
    <div>
      <DarkBg>
        <div className="container bottom-sec ">
          <h2 className="bottom-sec__title" ref={titleRef}>
            Terms of Service
          </h2>
          <div className="bottom-sec__text-container"></div>
        </div>

        <Image className="bottom-sec__circle-1" src={circle_1} />
        <Image className="bottom-sec__circle-2" src={circle_2} />
      </DarkBg>
      <div className="policy-text">
        <p style={{ color: "black", fontWeight: 500, fontSize: "16px" }}>
          Effective Date: September 19, 2024
        </p>
        <ul style={{ paddingLeft: "0px" }}>
          <li style={{ listStyleType: "none" }}>
            <p style={{ color: "black", fontSize: "22px" }}>1 . Introduction</p>
            <p style={{ color: "#334663" }}>
              Welcome to Stingrai Inc. (“Company”, “we”, “our”, “us”)! As you’ve just clicked on our
              Terms of Service, please take a moment to carefully review the following pages. These
              Terms of Service (“Terms”, “Terms of Service”) govern your use of our web pages
              located at [https://stingrai.io] (https://stingrai.io), operated by Stingrai Inc.
            </p>
            <p style={{ color: "#334663" }}>
              Our Privacy Policy also governs your use of our Service, explaining how we collect,
              safeguard, and disclose information resulting from your use of our web pages. Please
              review it at [https://stingrai.io/privacy](https://stingrai.io/privacy).
            </p>
            <p style={{ color: "#334663" }}>
              By accessing or using our Service, you agree to be bound by these Terms and our
              Privacy Policy (collectively, “Agreements”). If you do not agree to these Agreements,
              you may not use the Service. Please contact us at info@stingrai.io for any concerns.
            </p>
          </li>
          <li style={{ listStyleType: "none" }}>
            <p style={{ color: "black", fontSize: "22px" }}>2 . Communications</p>

            <p style={{ color: "#334663" }}>
              By creating an account on our Service, you agree to receive newsletters, marketing or
              promotional materials, and other information. You may opt out of receiving these
              communications by following the unsubscribe link or emailing us at{" "}
              <span style={{ color: "black" }}>info@stingrai.io</span>.
            </p>
          </li>
          <li style={{ listStyleType: "none" }}>
            <p style={{ color: "black", fontSize: "22px" }}>3 . Purchases</p>
            <p style={{ color: "#334663" }}>
              If you wish to make a purchase through our Service (“Purchase”), we may request
              information such as your credit card number, billing address, and shipping
              information.You represent that you have the legal right to use the payment methods
              provided and that the information you supply is accurate.
            </p>
            <p style={{ color: "#334663" }}>
              We may use third-party services to process payments. By submitting your information,
              you grant us the right to provide the information to these third parties, subject to
              our <span style={{ color: "black" }}>Privacy Policy.</span>
            </p>
            <p style={{ color: "#334663" }}>
              We reserve the right to cancel or refuse orders at our discretion, particularly in
              cases of fraud or illegal transactions.
            </p>
          </li>
          <li style={{ listStyleType: "none" }}>
            <p style={{ color: "black", fontSize: "22px" }}>
              4 . Contests, Sweepstakes, and Promotions
            </p>

            <p style={{ color: "#334663" }}>
              Any contests, sweepstakes, or promotions available through our Service are governed by
              their own rules, separate from these Terms. Please review the applicable rules and
              Privacy Policy. If there is a conflict between the promotion rules and these Terms,
              the promotion rules will apply.
            </p>
          </li>
          <li style={{ listStyleType: "none" }}>
            <p style={{ color: "black", fontSize: "22px" }}>5 . Fee Changes</p>

            <p style={{ color: "#334663" }}>
              We reserve the right to adjust our fees for services at any time, providing reasonable
              notice. Your continued use of the Service after fee changes signifies your acceptance
              of the revised fees.
            </p>
          </li>
          <li style={{ listStyleType: "none" }}>
            <p style={{ color: "black", fontSize: "22px" }}>6 . Refunds</p>
            <p style={{ color: "#334663" }}>
              Refunds for contracts will be issued within sixty (60) days of the original purchase.
            </p>
          </li>
          <li style={{ listStyleType: "none" }}>
            <p style={{ color: "black", fontSize: "22px" }}>7 . Content</p>
            <p style={{ color: "#334663" }}>
              Our Service allows users to post content such as text, graphics, and other material
              (“Content”).
            </p>
            <p style={{ color: "#334663" }}>
              You are responsible for the legality and appropriateness of the content you post.By
              posting content, you represent that you own or have the right to use it, and you grant
              us the right to use, modify, and distribute your content. Stingrai Inc. reserves the
              right to monitor and remove any user-submitted content at its discretion.{" "}
            </p>
          </li>
          <li style={{ listStyleType: "none" }}>
            <p style={{ color: "black", fontSize: "22px" }}>8 . Prohibited Uses</p>
            <p style={{ color: "#334663" }}>
              You may only use the Service for lawful purposes. Prohibited uses include, but are not
              limited to:
            </p>
            <p style={{ color: "#334663" }}> - Violating any applicable laws or regulations.</p>
            <p style={{ color: "#334663" }}> - Engaging in illegal or harmful activities.</p>
            <p style={{ color: "#334663" }}>
              {" "}
              - Sending unsolicited promotions, spam, or chain letters.
            </p>
            <p style={{ color: "#334663" }}>
              {" "}
              - Infringing on the rights of others or engaging in fraud.
            </p>
            <p style={{ color: "#334663" }}>
              {" "}
              - Interfering with the Service’s proper functionality or introducing harmful software.
            </p>
            <p style={{ color: "#334663" }}>
              {" "}
              - Attempting unauthorized access to the Service or related systems.
            </p>
          </li>
          <li style={{ listStyleType: "none" }}>
            <p style={{ color: "black", fontSize: "22px" }}>9 . Accounts</p>
            <p style={{ color: "#334663" }}>
              When creating an account, you guarantee that the information provided is accurate and
              that you are over 18 years old. Failure to provide accurate information may result in
              account termination.
            </p>
            <p style={{ color: "#334663" }}>
              You are responsible for maintaining the confidentiality of your account and password
              and for all activities under your account. Notify us immediately of any security
              breaches or unauthorized use of your account.
            </p>
            <p style={{ color: "#334663" }}>
              We reserve the right to refuse service, terminate accounts, or remove content at our
              discretion.
            </p>
          </li>
          <li style={{ listStyleType: "none" }}>
            <p style={{ color: "black", fontSize: "22px" }}>10 . Intellectual Property</p>
            <p style={{ color: "#334663" }}>
              Stingrai Inc. and its licensors retain ownership of all intellectual property related
              to the Service, including its content, features, and functionality. Users may not
              copy, modify, or distribute our content without prior written permission.
            </p>
          </li>
          <li style={{ listStyleType: "none" }}>
            <p style={{ color: "black", fontSize: "22px" }}>11 . Fee Changes</p>
            <p style={{ color: "#334663" }}>
              We reserve the right to adjust our fees for services at any time, providing reasonable
              notice. Your continued use of the Service after fee changes signifies your acceptance
              of the revised fees.
            </p>
          </li>
          <li style={{ listStyleType: "none" }}>
            <p style={{ color: "black", fontSize: "22px" }}>12 . Limitation of Liability</p>
            <p style={{ color: "#334663" }}>
              Except where prohibited by law, Stingrai Inc. will not be held liable for any
              indirect, incidental, or consequential damages arising from the use of the Service.
              Our total liability is limited to the amount paid for the products or services.
            </p>
          </li>
          <li style={{ listStyleType: "none" }}>
            <p style={{ color: "black", fontSize: "22px" }}>13 . Termination</p>
            <p style={{ color: "#334663" }}>
              We reserve the right to terminate or suspend your account at any time, without notice,
              if you breach these Terms. Upon termination, all provisions that should survive will
              remain in effect, including intellectual property, warranties, and limitations of
              liability.
            </p>
          </li>
          <li style={{ listStyleType: "none" }}>
            <p style={{ color: "black", fontSize: "22px" }}>14 . Governing Law</p>
            <p style={{ color: "#334663" }}>
              These Terms are governed by the laws of the Province of Ontario, Canada. Any disputes
              will be resolved in the courts of Ontario.
            </p>
          </li>
          <li style={{ listStyleType: "none" }}>
            <p style={{ color: "black", fontSize: "22px" }}>15 . Changes to Terms</p>
            <p style={{ color: "#334663" }}>
              We reserve the right to modify these Terms at any time. It is your responsibility to
              review the Terms periodically for changes. Your continued use of the Service following
              any updates indicates your acceptance of the new Terms.
            </p>
          </li>
          <li style={{ listStyleType: "none" }}>
            <p style={{ color: "black", fontSize: "22px" }}>16 . Contact Us</p>
            <p style={{ color: "#334663" }}>
              For any questions or feedback, please contact us at{" "}
              <span style={{ color: "black" }}>info@stingrai.io</span>.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
