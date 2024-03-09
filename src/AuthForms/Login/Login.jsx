import { useState } from "react";
import { useDispatch } from "react-redux";

import { login } from "/src/store/authSlice/authSlice";
import Section from "/src/components/Section/Section";
import style from "../AuthForm.module.scss";
import { Link } from "react-router-dom";
import { routes } from "/src/routes";

const LoginForm = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const handleChange = (evt) => {
    const { name, value } = evt.target;

    switch (name) {
      case "password":
        setPassword(value);
        break;
      case "email":
        setEmail(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    dispatch(login({ email, password }));
    reset();
  };

  const reset = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <Section>
      <div className={style.formWrapper}>
        <form onSubmit={handleSubmit} className={style.form}>
          <p className={style.formTitle}>Sign in to your account</p>
          <div className={style.inputContainer}>
            <input
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              title="Email must contain @ sign"
              required
              value={email}
              onChange={handleChange}
              placeholder="Enter email"
              name="email"
            />
          </div>
          <div className={style.inputContainer}>
            <input
              type="password"
              name="password"
              required
              value={password}
              onChange={handleChange}
              placeholder="Enter password"
            />
          </div>
          <button type="submit" className={style.submit}>
            Sign in
          </button>
          <p className={style.signupLink}>
            No account? <Link to={routes.SIGNUP}>Sign up</Link>
          </p>
        </form>
      </div>
    </Section>
  );
};

export default LoginForm;
