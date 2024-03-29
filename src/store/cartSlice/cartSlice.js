import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartList: [],
  },
  reducers: {
    addToCart: (state, { payload }) => {
      const newCart = { ...payload, count: 1 };
      state.cartList.push(newCart);
    },
    addCount: (state, { payload }) => {
      state.cartList = state.cartList.map((item) => {
        return payload.id === item.id
          ? { ...item, count: payload.count + 1 }
          : item;
      });
    },
    minusCount: (state, { payload }) => {
      state.cartList = state.cartList.map((item) => {
        return payload.id === item.id
          ? { ...item, count: payload.count - 1 }
          : item;
      });
    },
    deleteCart: (state, { payload }) => {
      state.cartList = state.cartList.filter(({ id }) => id !== payload);
    },
    sendCart: (state) => {
      state.cartList = [];
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, addCount, minusCount, deleteCart, sendCart } =
  cartSlice.actions;
