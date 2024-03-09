import { useState } from "react";
import { useDispatch } from "react-redux";

import Section from "/src/components/Section/Section";
import { signUp } from "/src/store/authSlice/authSlice";
import style from "../AuthForm.module.scss";
import { Link } from "react-router-dom";
import { routes } from "/src/routes";

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();

  const handleChange = (evt) => {
    const { name, value } = evt.target;

    switch (name) {
      case "name":
        setName(value);
        break;
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

  const handleSubmit = (evt) => {
    evt.preventDefault();

    dispatch(signUp({ name, password, email }));
    reset();
  };

  const reset = () => {
    setName("");
    setPassword("");
    setEmail("");
  };

  return (
    <Section>
      <div className={style.formWrapper}>
        <form onSubmit={handleSubmit} className={style.form}>
          <p className={style.formTitle}>Sign up to your account</p>
          <div className={style.inputContainer}>
            <input
              required
              value={name}
              onChange={handleChange}
              placeholder="Enter name"
              name="name"
            />
          </div>
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
            Sign Up
          </button>
          <p className={style.signupLink}>
            Have account? <Link to={routes.LOGIN}>Sign in</Link>
          </p>
        </form>
      </div>
    </Section>
  );
};

export default SignUpForm;
