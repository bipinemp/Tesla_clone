import React from "react";
import ReactDom from "react-dom";
import "./css/navbar.css";
import { GrClose } from "react-icons/gr";

export default function Modal({ open, onClose, children }) {
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <div className="overlay" />
      <div className="model">
        <div className="close" onClick={onClose}>
          <GrClose
            className="close-icon"
            fontSize="35px"
            fill="var(--footer-txt)"
          />
        </div>
        <div className="children">{children}</div>
      </div>
    </>,
    document.getElementById("portal")
  );
}
