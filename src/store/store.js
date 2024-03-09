import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import drugReducer from "./drugSlice/drugSlice";
import shopReducer from "./shopSlice/shopSlice";
import cartReducer from "./cartSlice/cartSlice";
import authReducer from "./authSlice/authSlice";

const persistConfig = {
  key: "cart",
  storage,
  blacklist: ["_persist"],
};

const persistConfigauth = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const persistedReducerCart = persistReducer(persistConfig, cartReducer);
const persistedReducerAuth = persistReducer(persistConfigauth, authReducer);

export const store = configureStore({
  reducer: {
    drug: drugReducer,
    shop: shopReducer,
    cart: persistedReducerCart,
    auth: persistedReducerAuth,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
