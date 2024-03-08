import { asyncThunkCreator, buildCreateSlice } from "@reduxjs/toolkit";

import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001/api";

const handlePending = (state) => {
  state.drugs.loading = true;
  state.drugs.error = null;
};

const handleRejected = (state, action) => {
  state.drugs.loading = false;
  state.drugs.error = action.payload;
};

const createSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

const drugSlice = createSlice({
  name: "drugSlice",
  initialState: {
    drugs: { drugList: [], loading: false, error: null },
  },
  reducers: (creator) => ({
    getDrugs: creator.asyncThunk(
      async (id, { rejectWithValue }) => {
        try {
          const response = await axios.get(`/shopdrugs/${id}`);

          return response.data;
        } catch (error) {
          return rejectWithValue(error.message);
        }
      },
      {
        pending: handlePending,
        fulfilled: (state, { payload }) => {
          state.drugs.loading = false;
          state.drugs.drugList = payload;
        },
        rejected: handleRejected,
      }
    ),
  }),
});

export const { getDrugs } = drugSlice.actions;

export default drugSlice.reducer;
