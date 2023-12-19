import clsx from "clsx";
import { FaPlus } from "react-icons/fa";
import { toggleDialog } from "../layouts/DialogAddTask";

type EmptyTodoItemCardProps = {
  status: string;
};

const EmptyTodoItemCard = (props: EmptyTodoItemCardProps) => {
  return (
    <div
      className={clsx(
        "bg-[#444444] border-2 rounded-md p-2 min-h-[50px] flex items-center justify-center gap-2 transition-all",
        "hover:bg-[#555555] cursor-pointer"
      )}
      onClick={() => {
        toggleDialog(true, props.status);
      }}
    >
      <h1 className="text-white text-lg text-center">Add task</h1>
      <FaPlus className="text-white text-sm" />
    </div>
  );
};

export default EmptyTodoItemCard;
