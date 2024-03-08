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

// const persistConfig = {
//   key: "drugs",
//   storage,
//   whitelist: ["drugs"],
// };

// const persistConfigShop = {
//   key: "shops",
//   storage,
//   whitelist: ["shops"],
// };

// const persistedReducerDrugs = persistReducer(persistConfig, drugReducer);
// const persistedReducerShops = persistReducer(persistConfigShop, shopReducer);

export const store = configureStore({
  reducer: {
    drug: drugReducer,
    shop: shopReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// export const persistor = persistStore(store);
