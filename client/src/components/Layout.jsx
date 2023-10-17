import React from "react";
import { Navbar } from "./Navbar";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";

export const Layout = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="h-full overflow-y-auto overflow-x-hidden m-[2rem]">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};
