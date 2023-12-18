import logo from "../../assets/svg/logo.svg";
import * as Icon from "react-icons/fa";
import SideBarButton from "../buttons/SideBarButton";
import clsx from "clsx";
import useDropdown from "../../hooks/useDropdown";
const Sidebar = () => {
  const { open, toggle } = useDropdown();

  return (
    <nav className="min-h-screen min-w-[250px] fixed top-0 left-0 bg-primary px-4 py-4 ">
      <img src={logo} alt="logo" />
      <ul className="flex flex-col gap-4 mt-8">
        <SideBarButton icon={Icon.FaBorderAll} text="Boards" />
        <SideBarButton icon={Icon.FaUserFriends} text="Members" />
        <SideBarButton icon={Icon.FaCog} text="Settings" />
      </ul>
      <div
        className={clsx(
          "w-full bg-[#040D12] p-2 mt-8 rounded-sm  overflow-hidden pb-4 transition-all",
          open ? "max-h-12" : "max-h-full"
        )}
      >
        <button
          className={clsx(
            "text-white text-sm flex items-center gap-2 justify-between w-full transition-all",
            "hover:bg-[#0F1721] p-2 rounded-sm"
          )}
          onClick={toggle}
        >
          <span>Direct Message</span>
          <Icon.FaAngleDown />
        </button>
        <ul className="flex flex-col ml-2">
          <li className="text-white">John Doe</li>
          <li className="text-white">John Doe</li>
          <li className="text-white">John Doe</li>
          <li className="text-white">John Doe</li>
          <li className="text-white">John Doe</li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
