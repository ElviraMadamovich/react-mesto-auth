import Authorization from "./Authorization";
import { useValidation } from "./useValidation";

function Login({ onLogin }) {
  const { values, handleChange, handleReset, errors, isValid } = useValidation()

  function submitAuthorization(e, setLoadingImage) {
    e.preventDefault();
    onLogin(values, handleReset, setLoadingImage);
  }

  return (
    <main className="main">

      <section className="authorization">
        <h1 className="authorization__title">Вход</h1>
        <Authorization isValid={!isValid} name={'log-in'} onSubmit={submitAuthorization} buttonText="Войти">
          <fieldset className="authorization__data">
            <input
              id="emailInput"
              className={errors.emailInput ? "authorization__input authorization__input_type_error" : "authorization__input"}
              type="email"
              name="emailInput"
              placeholder="Email"
              minLength="2"
              maxLength="40"
              required
              value={values.emailInput || ''}
              onChange={handleChange}
              autoComplete="new-email" />

            <span
              id="emailInput-error"
              className="authorization__error">{errors.emailInput}</span>

            <input
              id="passwordInput"
              className={errors.password ? "authorization__input authorization__input_type_error" : "authorization__input"}
              type="password"
              name="password"
              placeholder="Пароль"
              minLength="2"
              maxLength="200"
              required
              value={values.password || ''}
              onChange={handleChange}
              autoComplete="new-password" />

            <span
              id="passwordInput-error"
              className="authorization__error">{errors.password}</span>
          </fieldset>
        </Authorization>
      </section>

    </main>
  );
}

export default Login;