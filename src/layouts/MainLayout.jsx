import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router";
const MainLayout = () => {
  return (
    <div className="bg-amber-50">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
