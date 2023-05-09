import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {

  const ref = React.useRef();

  function handleSubmit(event) {
    event.preventDefault();

    props.onUpdateAvatar({
      avatar: ref.current.value,
    });
  }

  return (
    <PopupWithForm
      title={'Обновить аватар'}
      name="avatar"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}>

      <input
        ref={ref}
        type="url"
        className="popup__content popup__content_input_avatar"
        id="avatar"
        name="avatar"
        placeholder="Ссылка на картинку"
        required />

      <span
        className="popup__error popup__error_active popup__error_avatar"
        id="avatar-error" />
    </PopupWithForm>
  )
}

export default EditAvatarPopup;
