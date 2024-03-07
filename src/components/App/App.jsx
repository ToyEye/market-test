import Layout from "/src/components/Layout/Layout";
import { Routes, Route, Navigate } from "react-router-dom";
import { routes } from "/src/routes";

import { lazy } from "react";

const Cart = lazy(() => import("/src/pages/Cart/Cart.jsx"));
const Shop = lazy(() => import("/src/pages/Shop/Shop.jsx"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Navigate to={routes.HOME} />} />
      </Route>
    </Routes>
  );
};

export default App;
