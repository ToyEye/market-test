import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

import CartList from "/src/components/Lists/CartList/CartList";
import Form from "/src/components/Forms/Form/Form";

import { getCart } from "/src/store/cartSlice/selector";
import styled from "./Cart.module.scss";
import { addOrder } from "/src/api/api";
import { sendCart } from "/src/store/cartSlice/cartSlice";

const Cart = () => {
  const [order, setOrder] = useState(null);

  const { cartList } = useSelector(getCart);
  const dispatch = useDispatch();
  const totalCost = cartList.reduce((accumulator, currentItem) => {
    const itemCost = parseInt(currentItem.price) * currentItem.count;
    return accumulator + itemCost;
  }, 0);

  useEffect(() => {
    if (!order) return;

    const makeOrder = async () => {
      try {
        const { orderId } = await addOrder(order);
        dispatch(sendCart());
        toast.success(`Order ${orderId} send`);
      } catch (error) {
        toast.error(error.message);
      }
    };
    makeOrder();
  }, [order, dispatch]);

  const handleOrder = (order) => {
    setOrder({ ...order, totalCost, cartList });
  };

  return (
    <div className={styled.cartWrapper}>
      <Form handleOrder={handleOrder} totalCost={totalCost} />

      <CartList cartList={cartList} />
    </div>
  );
};

export default Cart;
