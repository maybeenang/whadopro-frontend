import { BsThreeDotsVertical } from "react-icons/bs";

const HeaderBoardCard = () => {
  return (
    <div className="bg-primary text-white rounded-sm flex py-4 px-4 justify-between">
      <div className="flex items-center justify-center gap-2">
        <h1>Todo</h1>
        <div className="rounded-full bg-blue-500 w-6 h-6 text-center">1</div>
      </div>
      <BsThreeDotsVertical className="text-xl" />
    </div>
  );
};

export default HeaderBoardCard;
