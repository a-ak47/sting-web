import s from "@/assets/styles/module/arrow-button.module.scss";
import "@/assets/styles/certificates.scss";

export function ArrowLeft({ onClick, position = false }) {
  return (
    <div
      style={{ width: "30px", height: "30px" }}
      className={s.arrow_button + " " + (position ? "arrow-button-left" : "")}
      onClick={onClick}
    >
      <svg
        width="12"
        height="10"
        viewBox="0 0 24 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: "rotate(180deg)" }}
      >
        <path d="M13.2928 19.7071C13.1054 19.5196 13.0001 19.2652 13.0001 19C13.0001 18.7348 13.1054 18.4805 13.2928 18.2929L20.5858 11H1C0.734784 11 0.48043 10.8947 0.292893 10.7071C0.105357 10.5196 0 10.2652 0 10C0 9.73481 0.105357 9.48045 0.292893 9.29292C0.48043 9.10538 0.734784 9.00002 1 9.00002H20.5858L13.2928 1.70712C13.2 1.61425 13.1263 1.50401 13.0761 1.38268C13.0258 1.26135 13 1.1313 13 0.99998C13 0.868655 13.0259 0.738617 13.0761 0.617291C13.1264 0.495965 13.2 0.385726 13.2929 0.29287C13.3858 0.200013 13.496 0.126357 13.6173 0.0761061C13.7387 0.0258555 13.8687 -5.68924e-06 14 9.38794e-10C14.1314 5.69112e-06 14.2614 0.0258778 14.3827 0.076139C14.5041 0.1264 14.6143 0.200066 14.7072 0.292931L23.7072 9.29293C23.7104 9.29617 23.7131 9.29977 23.7163 9.30306C23.7361 9.32333 23.7552 9.34414 23.7732 9.36599C23.7832 9.3782 23.792 9.39114 23.8014 9.40371C23.8115 9.41726 23.822 9.43057 23.8315 9.44466C23.8412 9.45919 23.8497 9.47433 23.8586 9.48928C23.8664 9.50234 23.8746 9.5151 23.8818 9.52859C23.8898 9.5436 23.8967 9.55911 23.9039 9.57442C23.9107 9.58871 23.9178 9.60275 23.9238 9.61733C23.9299 9.6321 23.9349 9.64724 23.9403 9.66226C23.9459 9.67801 23.952 9.69363 23.9569 9.70974C23.9614 9.72469 23.9647 9.73989 23.9685 9.75503C23.9727 9.77151 23.9773 9.78787 23.9806 9.80465C23.9841 9.82211 23.9861 9.83969 23.9887 9.85721C23.9908 9.87198 23.9936 9.88644 23.995 9.90133C23.9983 9.93417 24 9.96706 24 10C24 10.033 23.9983 10.0659 23.995 10.0987C23.9936 10.1136 23.9908 10.1281 23.9887 10.1428C23.9862 10.1604 23.9841 10.1779 23.9806 10.1954C23.9773 10.2122 23.9727 10.2285 23.9685 10.245C23.9647 10.2602 23.9614 10.2754 23.9569 10.2903C23.952 10.3064 23.9459 10.322 23.9403 10.3378C23.9349 10.3528 23.9299 10.3679 23.9238 10.3827C23.9178 10.3973 23.9106 10.4113 23.9039 10.4256C23.8967 10.4409 23.8898 10.4564 23.8818 10.4715C23.8746 10.4849 23.8664 10.4977 23.8586 10.5108C23.8497 10.5257 23.8412 10.5409 23.8315 10.5554C23.822 10.5695 23.8115 10.5828 23.8014 10.5963C23.792 10.6089 23.7832 10.6219 23.7732 10.6341C23.7549 10.6563 23.7354 10.6775 23.7153 10.6981C23.7124 10.701 23.7101 10.7042 23.7072 10.7071L14.7072 19.7071C14.6143 19.8 14.504 19.8736 14.3827 19.9239C14.2614 19.9742 14.1313 20 14 20C13.8687 20 13.7386 19.9742 13.6173 19.9239C13.496 19.8736 13.3857 19.8 13.2928 19.7071Z" />
      </svg>
    </div>
  );
}

export function ArrowRight({ onClick, position = false }) {
  return (
    <div
      style={{ width: "30px", height: "30px" }}
      className={s.arrow_button + " " + (position ? "arrow-button-right" : "")}
      onClick={onClick}
    >
      <svg
        width="12"
        height="10"
        viewBox="0 0 24 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M13.2928 19.7071C13.1054 19.5196 13.0001 19.2652 13.0001 19C13.0001 18.7348 13.1054 18.4805 13.2928 18.2929L20.5858 11H1C0.734784 11 0.48043 10.8947 0.292893 10.7071C0.105357 10.5196 0 10.2652 0 10C0 9.73481 0.105357 9.48045 0.292893 9.29292C0.48043 9.10538 0.734784 9.00002 1 9.00002H20.5858L13.2928 1.70712C13.2 1.61425 13.1263 1.50401 13.0761 1.38268C13.0258 1.26135 13 1.1313 13 0.99998C13 0.868655 13.0259 0.738617 13.0761 0.617291C13.1264 0.495965 13.2 0.385726 13.2929 0.29287C13.3858 0.200013 13.496 0.126357 13.6173 0.0761061C13.7387 0.0258555 13.8687 -5.68924e-06 14 9.38794e-10C14.1314 5.69112e-06 14.2614 0.0258778 14.3827 0.076139C14.5041 0.1264 14.6143 0.200066 14.7072 0.292931L23.7072 9.29293C23.7104 9.29617 23.7131 9.29977 23.7163 9.30306C23.7361 9.32333 23.7552 9.34414 23.7732 9.36599C23.7832 9.3782 23.792 9.39114 23.8014 9.40371C23.8115 9.41726 23.822 9.43057 23.8315 9.44466C23.8412 9.45919 23.8497 9.47433 23.8586 9.48928C23.8664 9.50234 23.8746 9.5151 23.8818 9.52859C23.8898 9.5436 23.8967 9.55911 23.9039 9.57442C23.9107 9.58871 23.9178 9.60275 23.9238 9.61733C23.9299 9.6321 23.9349 9.64724 23.9403 9.66226C23.9459 9.67801 23.952 9.69363 23.9569 9.70974C23.9614 9.72469 23.9647 9.73989 23.9685 9.75503C23.9727 9.77151 23.9773 9.78787 23.9806 9.80465C23.9841 9.82211 23.9861 9.83969 23.9887 9.85721C23.9908 9.87198 23.9936 9.88644 23.995 9.90133C23.9983 9.93417 24 9.96706 24 10C24 10.033 23.9983 10.0659 23.995 10.0987C23.9936 10.1136 23.9908 10.1281 23.9887 10.1428C23.9862 10.1604 23.9841 10.1779 23.9806 10.1954C23.9773 10.2122 23.9727 10.2285 23.9685 10.245C23.9647 10.2602 23.9614 10.2754 23.9569 10.2903C23.952 10.3064 23.9459 10.322 23.9403 10.3378C23.9349 10.3528 23.9299 10.3679 23.9238 10.3827C23.9178 10.3973 23.9106 10.4113 23.9039 10.4256C23.8967 10.4409 23.8898 10.4564 23.8818 10.4715C23.8746 10.4849 23.8664 10.4977 23.8586 10.5108C23.8497 10.5257 23.8412 10.5409 23.8315 10.5554C23.822 10.5695 23.8115 10.5828 23.8014 10.5963C23.792 10.6089 23.7832 10.6219 23.7732 10.6341C23.7549 10.6563 23.7354 10.6775 23.7153 10.6981C23.7124 10.701 23.7101 10.7042 23.7072 10.7071L14.7072 19.7071C14.6143 19.8 14.504 19.8736 14.3827 19.9239C14.2614 19.9742 14.1313 20 14 20C13.8687 20 13.7386 19.9742 13.6173 19.9239C13.496 19.8736 13.3857 19.8 13.2928 19.7071Z" />
      </svg>
    </div>
  );
}