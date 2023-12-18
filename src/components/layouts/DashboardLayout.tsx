import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import NavbarDashboard from "./NavbarDashboard";

const DashboardLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="min-w-[250px]"></div>
      <div className="px-4 py-4 bg-dark w-full min-h-screen">
        <NavbarDashboard />
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
