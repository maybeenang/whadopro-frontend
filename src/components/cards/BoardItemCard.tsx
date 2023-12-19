import { useNavigate } from "react-router-dom";
import { IProject } from "../../hooks/useProjects";

type BoardItemCardProps = {
  id: number;
  item: IProject;
};

const BoardItemCard = (props: BoardItemCardProps) => {
  const navigate = useNavigate();

  const getTaskCount = (status: string) => {
    return props.item.tasks.filter((item) => item.status === status).length;
  };

  const totalTask = props.item.tasks.length;
  const totalTodo = getTaskCount("todo");
  const totalDoing = getTaskCount("doing") + getTaskCount("review");
  const totalDone = getTaskCount("done");

  return (
    <div
      className="bg-white w-80 rounded-md h-60 flex flex-col justify-between cursor-pointer"
      onClick={() => navigate(`detail/${props.id}`)}
    >
      <div className="flex-1 p-4">
        <h1 className="font-semibold text-lg">{props.item.title}</h1>
        <p className="text-sm text-gray-400">{props.item.description}</p>
      </div>

      <div className="bg-secondary flex-[0.5] p-4 rounded-b-md text-white">
        <p>
          {getTaskCount("riview") + getTaskCount("done")} / {totalTask} Tasks
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-red-400 rounded-full mr-2"></div>
            <p>{totalTodo}</p>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-yellow-400 rounded-full mr-2"></div>
            <p>{totalDoing}</p>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-green-400 rounded-full mr-2"></div>
            <p>{totalDone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardItemCard;
