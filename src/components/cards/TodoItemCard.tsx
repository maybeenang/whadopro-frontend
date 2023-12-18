import { Avatar, Chip } from "@material-tailwind/react";
import { BsThreeDots } from "react-icons/bs";
import clsx from "clsx";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { UniqueIdentifier } from "@dnd-kit/core";

type TodoItemCardProps = {
  data?: {
    id: number;
    title: string;
    description: string;
  };
  id: number | UniqueIdentifier;
};

const TodoItemCard = (props: TodoItemCardProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: props.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      style={style}
      className={clsx(
        "bg-primary rounded-md p-2 cursor-grab",
        isDragging && "opacity-50"
      )}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      onClick={() => console.log("clicked")}
    >
      <div className="grid">
        <BsThreeDots className="text-white text-xl justify-self-end" />
      </div>
      <h1 className="text-white text-lg font-semibold">{props.data?.title}</h1>
      <p className="text-white text-sm">{props.data?.title}</p>
      <div className="mt-4 flex justify-between items-center">
        <div className="flex items-center -space-x-4">
          <Avatar
            variant="circular"
            alt="user 1"
            size="sm"
            className="border-2 border-white hover:z-10 focus:z-10"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
          <Avatar
            variant="circular"
            alt="user 2"
            size="sm"
            className="border-2 border-white hover:z-10 focus:z-10"
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
          />
        </div>
        <Chip value="12/12/2012" />
      </div>
    </div>
  );
};

export default TodoItemCard;
