import { asyncThunkCreator, buildCreateSlice } from "@reduxjs/toolkit";

import axios from "axios";
import toast from "react-hot-toast";

// axios.defaults.baseURL = "http://localhost:3001/api";

const setHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearHeader = () => {
  axios.defaults.headers.common.Authorization = ``;
};

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
    user: null,
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
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
          state.isLoggedIn = true;
          setHeader(payload.token);
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
          state.isLoggedIn = true;
          setHeader(payload.token);
        },
        rejected: handleRejected,
      }
    ),
    logout: creator.asyncThunk(
      async (_, { rejectWithValue }) => {
        try {
          const { data } = await axios.post("/auth/logout");

          toast.success(`See you again!`);

          return data;
        } catch (error) {
          toast.error("Oops, something went wrong");
          return rejectWithValue();
        }
      },
      {
        pending: handlePending,
        fulfilled: (state) => {
          state.loading = false;
          state.user = null;
          state.token = null;
          state.isLoggedIn = false;
          clearHeader();
        },
        rejected: handleRejected,
      }
    ),
    currentUser: creator.asyncThunk(
      async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistToken = state.auth.token;
        if (persistToken === null) {
          return thunkAPI.rejectWithValue();
        }
        setHeader(persistToken);
        try {
          const { data } = await axios.get("/auth/current");
          toast.success(`Hello!`);
          return data;
        } catch (error) {
          toast.error("Oops, something went wrong");
        }
      },
      {
        pending: handlePending,
        fulfilled: (state, { payload }) => {
          state.loading = false;
          state.user = payload;
          state.isLoggedIn = true;
        },
        rejected: handleRejected,
      }
    ),
  }),
});

export const { login, signUp, logout, currentUser } = authSlice.actions;

export default authSlice.reducer;
