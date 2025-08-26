import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />

        <div className="flex-1 p-4">
          <Outlet />
        </div>

        <Footer />
      </div>
    </>
  );
}
