import { asyncThunkCreator, buildCreateSlice } from "@reduxjs/toolkit";

import axios from "axios";

// axios.defaults.baseURL = "http://localhost:3001/api";

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
          const response = await axios.post("/auth/signup", credential);

          return response.data;
        } catch (error) {
          return rejectWithValue(error.message);
        }
      },
      {
        pending: handlePending,
        fulfilled: (state, { payload }) => {
          state.loading = false;
          state.user = payload.user;
          state.token = payload.token;
        },
        rejected: handleRejected,
      }
    ),
    login: creator.asyncThunk(
      async (credential, { rejectWithValue }) => {
        try {
          const response = await axios.post("/auth/login", credential);

          return response.data;
        } catch (error) {
          return rejectWithValue(error.message);
        }
      },
      {
        pending: handlePending,
        fulfilled: (state, { payload }) => {
          state.loading = false;
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
