import EmptyTodoItemCard from "./EmptyTodoItemCard";
import HeaderBoardCard from "./HeaderBoardCard";
import TodoItemCard from "./TodoItemCard";
import { SortableContext, useSortable } from "@dnd-kit/sortable";
import clsx from "clsx";

type BodyBoardCardProps = {
  title: string;
  color: string;
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
        <HeaderBoardCard
          title={props.title}
          count={props.items.length}
          color={props.color}
        />
        <div
          className={clsx(
            "min-h-[50px] bg-[#444444] rounded-md mt-4 border-dashed border-2 p-2 flex flex-col gap-2 transition-all"
          )}
          ref={setNodeRef}
        >
          <EmptyTodoItemCard
            status={
              props.id === "todo"
                ? "todo"
                : props.id === "doing"
                ? "doing"
                : props.id === "review"
                ? "review"
                : props.id === "done"
                ? "done"
                : "todo"
            }
          />
          {props.items.map((item) => {
            return <TodoItemCard key={item.id} data={item} id={item?.id} />;
          })}
        </div>
      </div>
    </SortableContext>
  );
};

export default BodyBoardCard;
