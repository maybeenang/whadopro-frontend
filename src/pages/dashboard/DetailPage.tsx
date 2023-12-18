import * as Icon from "react-icons/fa";
import BodyBoardCard from "../../components/cards/BodyBoardCard";

const DetailPage = () => {
  return (
    <>
      <div className="text-white pt-4 flex border-b-2 pb-8">
        <div className="flex-1">
          <h1 className="text-3xl font-semibold">Title Board</h1>
          <p className="text-sm">Description Board</p>
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
        <button className="text-white bg-primary flex items-center px-20 py-2 gap-2 text-lg">
          Add Task
          <Icon.FaPlus className="text-xs" />
        </button>
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
        <BodyBoardCard />
        <BodyBoardCard />
        <BodyBoardCard />
        <BodyBoardCard />
      </div>
    </>
  );
};

export default DetailPage;
