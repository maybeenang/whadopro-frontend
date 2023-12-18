import { ReactSVG } from "react-svg";
import logo from "../../assets/svg/logo.svg";
import CallToActionButton from "../buttons/CallToActionButton";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-primary flex items-center px-8 py-4 justify-between">
      <ReactSVG src={logo} />
      <ul className="flex gap-8 text-white items-center">
        <li className="text-sm font-semibold">
          <Link to="/login">Login</Link>
        </li>
        <li className="">
          <CallToActionButton />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
