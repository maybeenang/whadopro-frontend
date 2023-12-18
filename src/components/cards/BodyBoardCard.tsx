import { useDroppable } from "@dnd-kit/core";
import EmptyTodoItemCard from "./EmptyTodoItemCard";
import HeaderBoardCard from "./HeaderBoardCard";
import TodoItemCard from "./TodoItemCard";
import { SortableContext, useSortable } from "@dnd-kit/sortable";
import clsx from "clsx";

type BodyBoardCardProps = {
  id: string;
  items: {
    id: number;
    title: string;
    description: string;
  }[];
};

const BodyBoardCard = (props: BodyBoardCardProps) => {
  const { setNodeRef } = useSortable({
    id: props.id,
  });

  return (
    <SortableContext items={props.items} id={props.id}>
      <div className="flex-1 ">
        <HeaderBoardCard />
        <div
          className={clsx(
            "min-h-[50px] bg-[#444444] rounded-md mt-4 border-dashed border-2 p-2 flex flex-col gap-2 transition-all"
          )}
          ref={setNodeRef}
        >
          <EmptyTodoItemCard />
          {props.items.map((item) => {
            return <TodoItemCard key={item.id} data={item} id={item?.id} />;
          })}
        </div>
      </div>
    </SortableContext>
  );
};

export default BodyBoardCard;
