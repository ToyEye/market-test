import { useState } from "react";

import Section from "/src/components/Section/Section";
import Heading from "/src/components/Heading/Heading";
import { useAuth } from "/src/hooks/useAuth";

import styled from "./Form.module.scss";

const Form = ({ handleOrder, totalCost }) => {
  const { user } = useAuth();

  const [credentialt, setCredentialt] = useState(() => {
    return user
      ? { ...user, phone: "", address: "" }
      : {
          name: "",
          email: "",
          phone: "",
          address: "",
        };
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentialt((prevState) => ({ ...prevState, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    handleOrder(credentialt);

    setCredentialt({
      name: "",
      phone: "",
      email: "",
      address: "",
    });
  };

  return (
    <Section>
      <div className={styled.formWrapper}>
        <form
          id="consultation-form"
          className={styled.form}
          onSubmit={onSubmit}
        >
          <input
            required
            name="name"
            placeholder="Name"
            type="text"
            value={credentialt.name}
            onChange={handleChange}
          />
          <input
            name="phone"
            required
            placeholder="Phone number"
            type="tel"
            value={credentialt.phone}
            onChange={handleChange}
          />
          <input
            name="email"
            required
            placeholder="E-mail"
            type="email"
            value={credentialt.email}
            onChange={handleChange}
          />
          <input
            name="address"
            required
            placeholder="Address"
            type="text"
            value={credentialt.address}
            onChange={handleChange}
          />
          <button className={styled.button}>ORDER</button>
        </form>
      </div>
      <Heading tag="h2" text={`Total price: ${totalCost} UAH`} type="price" />
    </Section>
  );
};

export default Form;
