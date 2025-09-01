import React from "react";
import Header from "../components/common/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/common/Footer";

export default function RootLayout() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />

        <main className="flex-grow p-6">
          <Outlet />
        </main>

        <Footer />
      </div>
    </>
  );
}
