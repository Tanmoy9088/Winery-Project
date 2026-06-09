// import React from "react";
import HeaderPage from "./HeaderPage";
import FooterPage from "./FooterPage";
import { Outlet, useLocation } from "react-router-dom";
import DynamicBanner from "../components/DynamicBanner";

const Wrapper = () => {
  const location = useLocation()
  return (
    <>
      <HeaderPage />
      {!(location.pathname === "/home") && <DynamicBanner />}
      <Outlet />
      <FooterPage />
    </>
  );
};

export default Wrapper;
