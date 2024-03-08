import { useSelector } from "react-redux";
import { getCart } from "/src/store/cartSlice/selector";
import Cart from "./Cart/Cart";

const CartList = () => {
  const { cartList } = useSelector(getCart);

  return (
    <div>
      <ul>
        {cartList.length > 0 &&
          cartList.map(({ name, image, id, count }) => (
            <Cart key={id} id={id} image={image} name={name} count={count} />
          ))}
      </ul>
    </div>
  );
};

export default CartList;