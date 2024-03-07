import { Suspense } from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import Loader from "/src/components/Loader/Loader";

const Layout = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
