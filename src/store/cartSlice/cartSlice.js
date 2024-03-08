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
  },
});

export default cartSlice.reducer;
export const { addToCart } = cartSlice.actions;
