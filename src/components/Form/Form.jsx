import Section from "/src/components/Section/Section";
import styled from "./Form.module.scss";

const Form = () => {
  return (
    <Section>
      <form id="consultation-form" className={styled.form} action="#">
        <input required="" placeholder="Name" type="text" />
        <input name="phone" required="" placeholder="Phone number" />
        <input name="email" required="" placeholder="E-mail" type="email" />
        <input name="address" required="" placeholder="E-mail" type="text" />
        <button className={styled.button}>ORDER</button>
      </form>
    </Section>
  );
};

export default Form;
