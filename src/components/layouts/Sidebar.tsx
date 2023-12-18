import logo from "../../assets/svg/logo.svg";
import * as Icon from "react-icons/fa";
import SideBarButton from "../buttons/SideBarButton";
const Sidebar = () => {
  return (
    <nav className="min-h-screen min-w-[250px] fixed top-0 left-0 bg-primary px-4 py-4 ">
      <img src={logo} alt="logo" />
      <ul className="flex flex-col gap-4 mt-8">
        <SideBarButton
          icon={Icon.FaBorderAll}
          text="Boards"
          href="/dashboard"
        />
        <SideBarButton
          icon={Icon.FaUserFriends}
          text="Members"
          href="/dashboard/members"
        />
        <SideBarButton
          icon={Icon.FaCog}
          text="Settings"
          href="/dashboard/settings"
        />
      </ul>
    </nav>
  );
};

export default Sidebar;
