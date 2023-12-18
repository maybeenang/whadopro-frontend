import { ReactSVG } from "react-svg";
import logo from "../../assets/svg/logo.svg";
import CallToActionButton from "../buttons/CallToActionButton";

const Navbar = () => {
  return (
    <nav className="bg-primary flex items-center px-8 py-4 justify-between">
      <ReactSVG src={logo} />
      <ul className="flex gap-8 text-white items-center">
        <li className="text-sm font-semibold">Login</li>
        <li className="">
          <CallToActionButton />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
