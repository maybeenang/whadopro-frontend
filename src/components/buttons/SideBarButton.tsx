import { IconType } from "react-icons";

type SideBarButtonProps = {
  text: string;
  icon: IconType;
};

const SideBarButton = (props: SideBarButtonProps) => {
  return (
    <li className="text-white text-sm font-semibold flex  items-center gap-4">
      <props.icon className="inline-block text-[24px]" />
      <span>{props.text}</span>
    </li>
  );
};

export default SideBarButton;
