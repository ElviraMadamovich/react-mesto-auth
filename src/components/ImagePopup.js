import React from "react";

function ImagePopup({ card, onClose }) {

  function handleOverlayClose(event) {
    if (event.target.classList.contains('popup')) {
      onClose();
    }
  }

  return (
    <section className={`popup image-popup` + (card !== null && " popup_opened")} onClick={handleOverlayClose}>
      <div className="image-popup__container">
        <button type="button" className="popup__close" onClick={onClose}></button>
        <img className="image-popup__pic" src={card !== null ? card.link : "#"} alt={card !== null ? card.name : "#"} />
        <h2 className="image-popup__name">{card !== null ? card.name : "#"}</h2>
      </div>
    </section>
  );
}

export default ImagePopup;
