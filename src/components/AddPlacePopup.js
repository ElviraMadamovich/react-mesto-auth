import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("");

  React.useEffect(() => {
    setName("");
    setLink("");
  }, [isOpen]);

  function handleChangeName(event) {
    const text = event.target.value;
    setName(text);
  }

  function handleChangeLink(event) {
    const text = event.target.value;
    setLink(text);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onAddPlace({
      name,
      link,
    });
  }

  return (
    <PopupWithForm
      title={'Новое место'}
      name="card"
      buttonText="Создать"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}>

      <input
        onChange={handleChangeName}
        value={name}
        type="text"
        className="popup__content popup__content_input_title"
        id="caption"
        name="caption"
        placeholder="Название"
        required
        minLength={2}
        maxLength={30} />

      <span
        className="popup__error popup__error_active popup__error_title"
        id="caption-error" />

      <input
        onChange={handleChangeLink}
        value={link || ''}
        type="url"
        className="popup__content popup__content_input_link"
        id="link"
        name="link"
        placeholder="Ссылка на картинку"
        required />

      <span
        className="popup__error popup__error_active popup__error_link"
        id="link-error" />
    </PopupWithForm>
  )
}

export default AddPlacePopup;
