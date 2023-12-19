import { clsx } from "clsx";
import { BsThreeDotsVertical } from "react-icons/bs";

type HeaderBoardCardProps = {
  title: string;
  count: number;
  color: string;
};

const HeaderBoardCard = (props: HeaderBoardCardProps) => {
  return (
    <div className="bg-primary text-white rounded-sm flex py-4 px-4 justify-between">
      <div className="flex items-center justify-center gap-2">
        <h1>{props.title}</h1>
        <div className={clsx("rounded-full w-6 h-6 text-center", props.color)}>
          {props.count}
        </div>
      </div>
      <BsThreeDotsVertical className="text-xl" />
    </div>
  );
};

export default HeaderBoardCard;
