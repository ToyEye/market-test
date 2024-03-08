import { useDispatch } from "react-redux";
import clsx from "clsx";

import styled from "./Button.module.scss";
import {
  addCount,
  minusCount,
  deleteCart,
} from "/src/store/cartSlice/cartSlice";

const Button = ({ type: Type, role, count, id }) => {
  const dispatch = useDispatch();

  const btnStyle = clsx(
    styled.buttons,
    role === "delete" && styled.deleted,
    role !== "deleted" && styled.mathBtn
  );

  const handleClick = () => {
    if (role === "increment") {
      dispatch(addCount({ id, count }));
    }
    if (role === "decrement") {
      if (count === 1) {
        dispatch(deleteCart(id));
      } else {
        dispatch(minusCount({ id, count }));
      }
    }
    if (role === "delete") {
      dispatch(deleteCart(id));
    }
  };

  return (
    <button type="button" className={btnStyle} onClick={handleClick}>
      <Type />
    </button>
  );
};

export default Button;
