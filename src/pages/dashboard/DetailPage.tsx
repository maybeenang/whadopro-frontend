import * as Icon from "react-icons/fa";
import BodyBoardCard from "../../components/cards/BodyBoardCard";
// import DrawerDetail from "../../components/layouts/DrawerDetail";
import {
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragOverlay,
  DragStartEvent,
  KeyboardSensor,
  PointerSensor,
  UniqueIdentifier,
  closestCorners,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { data } from "../../utils/data";
import { useEffect, useState } from "react";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import TodoItemCard from "../../components/cards/TodoItemCard";
import useProjek from "../../hooks/useProjek";
import DialogAddTask from "../../components/layouts/DialogAddTask";
import { axiosInstance } from "../../utils/axios";

const DetailPage = () => {
  const { data: datas, error, isLoading } = useProjek();

  const filterTaks = (status: string) => {
    return datas?.tasks.filter((task) => task.status === status);
  };

  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);
  const [items, setItems] = useState({
    todo: data[0].items,
    doing: data[1].items,
    review: data[2].items,
    done: data[3].items,
  });

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  useEffect(() => {
    if (datas) {
      setItems({
        todo: filterTaks("todo"),
        doing: filterTaks("doing"),
        review: filterTaks("review"),
        done: filterTaks("done"),
      });
    }

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [datas]);

  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center h-screen">
          <div className="w-16 h-16 border-b-4 border-gray-900 rounded-full animate-spin"></div>
        </div>
      ) : error ? (
        <div className="flex items-center justify-center h-screen">
          <p className="text-white">Tidak ada data</p>
        </div>
      ) : (
        <>
          <div className="text-white pt-4 flex border-b-2 pb-8">
            <div className="flex-1">
              <h1 className="text-3xl font-semibold">{datas.title}</h1>
              <p className="text-sm">{datas.description}</p>
            </div>
            <div className="flex-1 flex flex-col items-end gap-4">
              <p>Member</p>

              <div className="flex gap-2">
                <div className="w-8 h-8 bg-white rounded-full"></div>
                <div className="w-8 h-8 bg-white rounded-full"></div>
                <div className="w-8 h-8 bg-white rounded-full"></div>
                <button className="bg-primary px-4 rounded-sm ml-2 flex items-center gap-2">
                  Invite
                  <Icon.FaPaperPlane className="text-xs" />
                </button>
              </div>
            </div>
          </div>
          <div className="py-4 border-b-2 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <input
                type="text"
                name="search"
                id="search"
                className="py-2 w-64 rounded-sm px-4 bg-white"
                placeholder="Search Task"
              />
              <button className="text-white px-8 py-2 bg-secondary rounded-sm">
                Search
              </button>
            </div>
          </div>
          <div className="flex gap-4 py-4 flex-wrap">
            <DndContext
              collisionDetection={closestCorners}
              sensors={sensors}
              onDragStart={handleDragStart}
              onDragOver={handleDragOver}
              onDragEnd={handleDragEnd}
            >
              <BodyBoardCard
                items={items.todo}
                id={"todo"}
                title="Todo"
                color="bg-red-400"
              />
              <BodyBoardCard
                items={items.doing}
                id={"doing"}
                title="Doing"
                color="bg-yellow-900"
              />
              <BodyBoardCard
                items={items.review}
                id={"review"}
                title="Review"
                color="bg-yellow-900"
              />
              <BodyBoardCard
                items={items.done}
                id={"done"}
                title="Done"
                color="bg-green-400"
              />
              <DragOverlay>
                {activeId ? (
                  <div className="border-2 rounded-md">
                    <TodoItemCard
                      id={activeId}
                      data={
                        items.todo.find((item) => item.id === activeId) ||
                        items.doing.find((item) => item.id === activeId) ||
                        items.review.find((item) => item.id === activeId) ||
                        items.done.find((item) => item.id === activeId)
                      }
                    />
                  </div>
                ) : null}
              </DragOverlay>
            </DndContext>
          </div>
          {/* <DrawerDetail /> */}
          <DialogAddTask />
        </>
      )}
    </>
  );

  function findContainer(id: number | UniqueIdentifier) {
    // check is id number or not
    if (typeof id === "number") {
      return Object.keys(items).find((key) =>
        items[key as keyof typeof items]
          .map((item) => item.id)
          .includes(id as number)
      );
    }

    return Object.keys(items).find((key) => key.includes(id as string));
  }

  function handleDragStart(event: DragStartEvent) {
    const { active } = event;
    const { id } = active;

    setActiveId(id);
  }

  function handleDragOver(event: DragOverEvent) {
    const { active, over } = event;
    const { id } = active;
    const { id: overId } = over as { id: number };

    // Find the containers
    const activeContainer = findContainer(id);
    const overContainer = findContainer(overId);

    if (
      !activeContainer ||
      !overContainer ||
      activeContainer === overContainer
    ) {
      return;
    }

    setItems((prev) => {
      const activeItems = prev[activeContainer as keyof typeof prev];
      const overItems = prev[overContainer as keyof typeof prev];

      // Find the indexes for the items
      const activeIndex = activeItems.indexOf(
        activeItems.find((item) => item.id === id)!
      );
      const overIndex = overItems.indexOf(
        overItems.find((item) => item.id === overId)!
      );

      let newIndex;

      if (activeIndex < overIndex) {
        newIndex = overIndex + 1;
      } else {
        newIndex = overIndex;
      }

      return {
        ...prev,
        [activeContainer]: [
          ...prev[activeContainer as keyof typeof prev].filter(
            (item) => item.id !== active.id
          ),
        ],
        [overContainer]: [
          ...prev[overContainer as keyof typeof prev].slice(0, newIndex),
          items[activeContainer as keyof typeof items][activeIndex],
          ...prev[overContainer as keyof typeof prev].slice(
            newIndex,
            prev[overContainer as keyof typeof prev].length
          ),
        ],
      };
    });
  }

  async function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    const { id } = active as { id: number };
    const { id: overId } = over as { id: number };

    const activeContainer = findContainer(id);
    const overContainer = findContainer(overId);

    if (
      !activeContainer ||
      !overContainer ||
      activeContainer !== overContainer
    ) {
      return;
    }

    const activeIndex = items[activeContainer as keyof typeof items]
      .map((item) => item.id)
      .indexOf(id);

    const overIndex = items[overContainer as keyof typeof items]
      .map((item) => item.id)
      .indexOf(overId);

    if (activeIndex !== overIndex) {
      console.log(items[overContainer as keyof typeof items]);

      setItems((items) => ({
        ...items,
        [overContainer]: arrayMove(
          items[overContainer as keyof typeof items],
          activeIndex,
          overIndex
        ),
      }));

      // console.log(items[overContainer as keyof typeof items]);
    }
    await axiosInstance.post(`/api/v1/update/task`, {
      id: id,
      status: overContainer,
    });

    setActiveId(null);
  }
};

export default DetailPage;
