import Image from "next/image";
import "@/assets/styles/modal.scss";
import success from "@/assets/img/modal/success-icon.svg";
import error from "@/assets/img/modal/error-icon.svg";
import closeIcon from "@/assets/img/modal/close-icon.svg";

export default function Modal({ isOpen, status, onClose }) {
  if (!isOpen) {
    return null;
  }

  const getStatusStyles = () => {
    return status === "success" ? "modal-success" : "modal-error";
  };

  return (
    <div className={`modal ${getStatusStyles()}`}>
      <Image
        src={status === "success" ? success : error}
        alt={`${status === "success" ? "success" : "error"} icon`}
      />
      <div className="modal__text-container">
        <div className="modal__text-container--top">
          <h3 className="modal__title">{status === "success" ? "Success" : "Error occurred"}</h3>
          <p className="modal__text">
            {status === "success"
              ? "Your quote request has been successfully submitted."
              : "Something went wrong while submitting your request."}
          </p>
        </div>
        <p className="modal__text-bottom">{status === "success" ? "" : "Please try again."}</p>
      </div>
      <Image onClick={onClose} src={closeIcon} alt="close icon" />
    </div>
  );
}
