import profile from "../../assets/svg/account-circle.svg";
import * as Icon from "react-icons/fa";
import BreadCrumbs from "../Breadcrumbs";
import { Link, useLocation } from "react-router-dom";

const NavbarDashboard = () => {
  const location = useLocation();

  const getTitles = () => {
    const titles = location.pathname.split("/");

    const res = titles.map((title) => {
      if (title === "") {
        return "Home";
      } else {
        return title.charAt(0).toUpperCase() + title.slice(1);
      }
    });

    return res;
  };

  return (
    <div className="border-b-2 flex py-2 pb-4 justify-between items-center">
      <div className="">
        <h1 className="text-lg font-semibold text-white">
          {parseInt(getTitles()[getTitles().length - 1])
            ? "Board Detail"
            : getTitles()[getTitles().length - 1]}
        </h1>
        <BreadCrumbs text={getTitles()} />
      </div>
      <div className="justify-self-end flex items-center gap-4">
        <Icon.FaBell className="text-2xl text-white" />
        <Link to={"/dashboard/settings"}>
          <Icon.FaCog className="text-2xl text-white" />
        </Link>
        <img src={profile} alt="profile" className="w-10" />
      </div>
    </div>
  );
};

export default NavbarDashboard;
