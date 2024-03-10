import { useDispatch } from "react-redux";
import styled from "./DrugCart.module.scss";
import { addToCart } from "/src/store/cartSlice/cartSlice";

const DrugCart = ({ name, image, id, price }) => {
  const dispatch = useDispatch();

  const addCart = () => {
    dispatch(addToCart({ name, image, id, price }));
  };

  return (
    <li className={styled.drugCart}>
      <div>
        <img src={image} alt={name} />
        <p className={styled.drugName}>{name}</p>
        <p>{price} UAH</p>
        <button type="button" className={styled.button} onClick={addCart}>
          <span className={styled.button__text}>Add Item</span>
          <span className={styled.button__icon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinejoin="round"
              strokeLinecap="round"
              stroke="currentColor"
              height="24"
              fill="none"
              className="svg"
            >
              <line y2="19" y1="5" x2="12" x1="12"></line>
              <line y2="12" y1="12" x2="19" x1="5"></line>
            </svg>
          </span>
        </button>
      </div>
    </li>
  );
};

export default DrugCart;
