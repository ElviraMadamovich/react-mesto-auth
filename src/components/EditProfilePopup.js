import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const [name, setName] = React.useState('');
  const [about, setAbout] = React.useState('');
  const currentUser = React.useContext(CurrentUserContext);

  function handleAmendName(evt) {
    setName(evt.target.value);
  }

  function handleAmendAbout(evt) {
    setAbout(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateUser({
      name,
      about: about,
    })
  }

  React.useEffect(() => {
    setName(currentUser.name);
    setAbout(currentUser.about);
  }, [currentUser]);

  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        onChange={handleAmendName}
        value={name || ''}
        type="text"
        className="popup__content popup__content_input_name"
        id="name"
        name="name"
        placeholder="Имя пользователя"
        required
        minLength={2}
        maxLength={40} />

      <span
        className="popup__error popup__error_active popup__error_name"
        id="name-error" />

      <input
        onChange={handleAmendAbout}
        value={about || ''}
        type="text"
        className="popup__content popup__content_input_work"
        id="work"
        name="work"
        placeholder="О пользователе"
        required
        minLength={2}
        maxLength={200} />

      <span
        className="popup__error popup__error_active popup__error_work"
        id="work-error" />
    </PopupWithForm>
  )
}

export default EditProfilePopup;
