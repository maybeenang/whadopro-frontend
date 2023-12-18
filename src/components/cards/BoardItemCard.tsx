import { useNavigate } from "react-router-dom";

type BoardItemCardProps = {
  id: number;
};

const BoardItemCard = (props: BoardItemCardProps) => {
  const navigate = useNavigate();

  return (
    <div
      className="bg-white w-80 rounded-md h-60 flex flex-col justify-between cursor-pointer"
      onClick={() => navigate(`detail/${props.id}`)}
    >
      <div className="flex-1 p-4">
        <h1 className="font-semibold text-lg">Board Name</h1>
        <p className="text-sm text-gray-400">Board Description</p>
        <p className="text-sm text-gray-400">12/09/2023</p>
      </div>

      <div className="bg-secondary flex-[0.5] p-4 rounded-b-md text-white">
        <p>12/18 Tasks</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-red-400 rounded-full mr-2"></div>
            <p>0/6</p>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-yellow-400 rounded-full mr-2"></div>
            <p>0/6</p>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-green-400 rounded-full mr-2"></div>
            <p>0/6</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardItemCard;
