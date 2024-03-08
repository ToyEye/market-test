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
import CartReducer from "./cartSlice/cartSlice";

const persistConfig = {
  key: "cart",
  storage,
  blacklist: ["_persist"],
};

const persistedReducerCart = persistReducer(persistConfig, CartReducer);

export const store = configureStore({
  reducer: {
    drug: drugReducer,
    shop: shopReducer,
    cart: persistedReducerCart,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
