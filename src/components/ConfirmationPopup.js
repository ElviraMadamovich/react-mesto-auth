import React from "react";
import PopupWithForm from "./PopupWithForm";

function ConfirmationPopup({ isOpen, onClose, onConfirmation }) {
  function handleSubmit(event) {
    event.preventDefault();
    onConfirmation();
  }

  return (
    <PopupWithForm
      name="confirmation"
      title="Вы уверены?"
      buttonDescription="Да"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    />
  );
}

export default ConfirmationPopup;