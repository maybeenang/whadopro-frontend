import { IconType } from "react-icons";
import { Link } from "react-router-dom";

type SideBarButtonProps = {
  text: string;
  icon: IconType;
  href: string;
};

const SideBarButton = (props: SideBarButtonProps) => {
  return (
    <Link to={props.href}>
      <li className="text-white text-sm font-semibold flex  items-center gap-4 cursor-pointer">
        <props.icon className="inline-block text-[24px]" />
        <span>{props.text}</span>
      </li>
    </Link>
  );
};

export default SideBarButton;
