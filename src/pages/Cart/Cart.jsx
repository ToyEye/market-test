import { useSelector } from "react-redux";

import CartList from "/src/components/CartList/CartList";
import Form from "/src/components/Form/Form";

import { getCart } from "/src/store/cartSlice/selector";
import styled from "./Cart.module.scss";

const Cart = () => {
  const { cartList } = useSelector(getCart);

  const totalCost = cartList.reduce((accumulator, currentItem) => {
    const itemCost = parseInt(currentItem.price) * currentItem.count;
    return accumulator + itemCost;
  }, 0);

  return (
    <div className={styled.cartWrapper}>
      <Form cartList={cartList} totalCost={totalCost} />
      <CartList cartList={cartList} />
    </div>
  );
};

export default Cart;
