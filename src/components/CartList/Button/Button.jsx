import styled from "./Button.module.scss";

const Button = ({ type: Type, role, count, id }) => {
  return (
    <button type="button" className={styled.buttons}>
      <Type />
    </button>
  );
};

export default Button;
