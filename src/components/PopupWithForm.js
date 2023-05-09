import React from "react";

function PopupWithForm({
  title,
  name,
  children,
  buttonDescription,
  isOpen,
  onClose,
  onSubmit
}) {

  function handleOverlayClose(event) {
    if (event.target.classList.contains('popup')) {
      onClose();
    }
  }

  return (
    <section className={`popup ${name}-popup ${isOpen ? `popup_opened` : ""}`}
      onClick={handleOverlayClose}>
      <div className="popup__container">
        <button type="button" className="popup__close" onClick={onClose} />
        <h2 className="popup__order">{title}</h2>
        <form name={`${name}`} method="post" target="_parent" action="#" encType="application/x-www-form-urlencoded" onSubmit={onSubmit} className={`popup__form ${name}-popup__form`} noValidate>
          {children}
          <button type="submit" className="popup__confirm">{buttonDescription || 'Сохранить'}</button>
        </form>
      </div>
    </section >
  );
}

export default PopupWithForm;
