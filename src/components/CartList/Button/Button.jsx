import { useDispatch } from "react-redux";
import styled from "./Button.module.scss";
import { addCount, minusCount } from "/src/store/cartSlice/cartSlice";

const Button = ({ type: Type, role, count, id }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    if (role === "increment") {
      dispatch(addCount({ id, count }));
    }
    if (role === "decrement") {
      dispatch(minusCount({ id, count }));
    }
  };

  return (
    <button type="button" className={styled.buttons} onClick={handleClick}>
      <Type />
    </button>
  );
};

export default Button;
