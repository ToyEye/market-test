// import { createSlice } from "@reduxjs/toolkit";

import { asyncThunkCreator, buildCreateSlice } from "@reduxjs/toolkit";
// import { createSelector } from "reselect";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001/api";

const handlePending = (state) => {
  state.loading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const createSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

const shopSlice = createSlice({
  name: "shopSlice",
  initialState: {
    shopList: [],
    loading: false,
    error: null,
  },
  reducers: (creator) => ({
    getShops: creator.asyncThunk(
      async (_, { rejectWithValue }) => {
        try {
          const response = await axios.get(`/shops`);

          return response.data;
        } catch (error) {
          return rejectWithValue(error.message);
        }
      },
      {
        pending: handlePending,
        fulfilled: (state, { payload }) => {
          state.loading = false;
          state.shopList = payload;
        },
        rejected: handleRejected,
      }
    ),
  }),
});

export const { getShops } = shopSlice.actions;

export default shopSlice.reducer;
