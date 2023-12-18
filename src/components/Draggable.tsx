import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

const Draggable = (props: {
  element: React.ElementType;
  children: React.ReactNode;
  id: string;
}) => {
  const Element = props.element || "div";

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.id,
  });
  const style = {
    transform: CSS.Translate.toString(transform),
  };

  return (
    <Element
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="bg-red-50"
    >
      {props.children}
    </Element>
  );
};

export default Draggable;
