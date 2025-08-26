import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

export default function RootLayout() {
  return (
    <div className="px-4 w-full h-[86vh] relative">
      <Header />
      <div className="flex justify-center items-center h-full">
      <Outlet />
      </div>
      <Footer />
    </div>
  );
}
