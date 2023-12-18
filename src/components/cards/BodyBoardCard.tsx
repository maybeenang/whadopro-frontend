import EmptyTodoItemCard from "./EmptyTodoItemCard";
import HeaderBoardCard from "./HeaderBoardCard";
import TodoItemCard from "./TodoItemCard";

const BodyBoardCard = () => {
  return (
    <div className="flex-1 ">
      <HeaderBoardCard />
      <div className="min-h-[50px] bg-[#444444] rounded-md mt-4 border-dashed border-2 p-2 flex flex-col gap-2">
        <EmptyTodoItemCard />
        <TodoItemCard />
      </div>
    </div>
  );
};

export default BodyBoardCard;
