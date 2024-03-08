import Button from "../Button/Button";
import { FaPlus, FaMinus } from "react-icons/fa";

const Cart = ({ id, image, name, count }) => {
  return (
    <li>
      <div>
        <img src={image} alt={name} />
        <p>{name}</p>
        <div>
          <Button role="decrement" type={FaMinus} id={id} count={count} />
          <p>{count}</p>
          <Button role="increment" type={FaPlus} id={id} count={count} />
        </div>
      </div>
    </li>
  );
};

export default Cart;
