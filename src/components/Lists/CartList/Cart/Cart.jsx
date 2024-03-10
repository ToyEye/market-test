import Button from "../Button/Button";
import { FaPlus, FaMinus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import styled from "./Cart.module.scss";

const Cart = ({ id, image, name, count, price, type = "shop" }) => {
  return (
    <li className={styled.cart}>
      <div>
        {type === "shop" && <Button role="delete" type={MdDelete} id={id} />}
        <img src={image} alt={name} />
        <div className={styled.overviewWrapper}>
          <p>{name}</p>
          <div className={styled.priceWrapper}>
            <p>{price * count}</p>
            {type === "shop" && (
              <div className={styled.buttonWrapper}>
                <Button role="decrement" type={FaMinus} id={id} count={count} />
                <p>{count}</p>
                <Button role="increment" type={FaPlus} id={id} count={count} />
              </div>
            )}
          </div>
        </div>
      </div>
    </li>
  );
};

export default Cart;
