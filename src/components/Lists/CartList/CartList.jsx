import { nanoid } from "@reduxjs/toolkit";

import Cart from "./Cart/Cart";
import Section from "/src/components/Section/Section";
import Heading from "/src/components/Heading/Heading";

import styled from "./CartList.module.scss";

const CartList = ({ cartList, type = "shop" }) => {
  return (
    <Section>
      {cartList.length === 0 && type === "shop" && (
        <Heading text="No drugs in your cart" tag="h2" type />
      )}
      <ul className={styled.list}>
        {cartList.length > 0 &&
          cartList.map(({ name, image, id, count, price }) => (
            <Cart
              key={id + nanoid()}
              id={id}
              image={image}
              name={name}
              count={count}
              price={price}
              type={type}
            />
          ))}
      </ul>
    </Section>
  );
};

export default CartList;
