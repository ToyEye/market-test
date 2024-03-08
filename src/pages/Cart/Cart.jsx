import CartList from "/src/components/CartList/CartList";
import Form from "/src/components/Form/Form";

import styled from "./Cart.module.scss";

const Cart = () => {
  return (
    <div className={styled.cartWrapper}>
      <Form />
      <CartList />
    </div>
  );
};

export default Cart;
