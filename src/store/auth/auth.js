import { asyncThunkCreator, buildCreateSlice } from "@reduxjs/toolkit";

import axios from "axios";

// axios.defaults.baseURL = "http://localhost:3001/api";

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

const authSlice = createSlice({
  name: "drugSlice",
  initialState: {
    loading: false,
    error: null,
    user: { name: "", email: "" },
    token: null,
  },
  reducers: (creator) => ({
    signUp: creator.asyncThunk(
      async (credential, { rejectWithValue }) => {
        try {
          const response = await axios.post("/auth", credential);

          return response.data;
        } catch (error) {
          return rejectWithValue(error.message);
        }
      },
      {
        pending: handlePending,
        fulfilled: (state, { payload }) => {
          state.drugs.loading = false;
          state.user = payload.user;
          state.token = payload.token;
        },
        rejected: handleRejected,
      }
    ),
    login: creator.asyncThunk(
      async (credential, { rejectWithValue }) => {
        try {
          const response = await axios.post("/login", credential);

          return response.data;
        } catch (error) {
          return rejectWithValue(error.message);
        }
      },
      {
        pending: handlePending,
        fulfilled: (state, { payload }) => {
          state.drugs.loading = false;
          state.user = payload.user;
          state.token = payload.token;
        },
        rejected: handleRejected,
      }
    ),
  }),
});

export const { login, signUp } = authSlice.actions;

export default authSlice.reducer;
