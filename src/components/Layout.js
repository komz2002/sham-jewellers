import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../utilities/Footer/Footer";
import CustomNavbar from "../utilities/Header/Header";

function Layout() {
  return (
    <>
      <CustomNavbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
