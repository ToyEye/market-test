import { lazy, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Toaster } from "react-hot-toast";
import { RestrictedRoute } from "../RestrictedRoute";

import Layout from "/src/components/Layout/Layout";
import { routes } from "/src/routes";
import { getShops } from "/src/store/shopSlice/shopSlice";
import { getDrugs } from "/src/store/drugSlice/drugSlice";
import { currentUser } from "/src/store/authSlice/authSlice";

const Cart = lazy(() => import("/src/pages/Cart/Cart.jsx"));
const Shop = lazy(() => import("/src/pages/Shop/Shop.jsx"));
const Login = lazy(() => import("/src/pages/Login/Login.jsx"));
const Signup = lazy(() => import("/src/pages/Signup/Signup.jsx"));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUser());
    dispatch(getShops());
    dispatch(getDrugs("65e9d347964506c493d532f7"));
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path={routes.HOME} element={<Layout />}>
          <Route index element={<Shop />} />
          <Route path={routes.CART} element={<Cart />} />
          <Route
            path={routes.LOGIN}
            element={
              <RestrictedRoute redirectTo={routes.CART} component={<Login />} />
            }
          />
          <Route
            path={routes.SIGNUP}
            element={
              <RestrictedRoute
                redirectTo={routes.CART}
                component={<Signup />}
              />
            }
          />
          <Route path="*" element={<Navigate to={routes.HOME} />} />
        </Route>
      </Routes>
      <Toaster />
    </>
  );
};

export default App;
