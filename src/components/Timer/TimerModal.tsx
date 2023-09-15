import React from "react";
import "../../styles/Modal.css";
import "../../styles/TimerModal.css";
import {ModalProps} from "../../types/Modal";

export default function TimerModal({onClose}: ModalProps) {
  return (
    <div className="ModalBackdrop">
      <div className="TimerModalContent">
        <button type="button" className="CloseButton" onClick={onClose}>
          Close
        </button>
        <p>모달 창 내용</p>
        <button type="button" className="CancelButton" onClick={onClose}>
          Cancel
        </button>
        <button type="button" className="OKButton" onClick={onClose}>
          OK
        </button>
      </div>
    </div>
  );
}