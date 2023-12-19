import { FaPlus } from "react-icons/fa";
import BoardItemCard from "../../components/cards/BoardItemCard";
import useProjects from "../../hooks/useProjects";
import DialodAddProject, {
  toggleDialogAddProject,
} from "../../components/layouts/DialogAddProject";

const DashboardPage = () => {
  const { data, error, isLoading } = useProjects();

  return (
    <>
      <button
        className="bg-primary text-white mt-8 py-2 px-4 rounded-sm flex items-center gap-4"
        onClick={() => {
          toggleDialogAddProject(true);
        }}
      >
        Add Project
        <FaPlus className="text-white text-sm" />
      </button>
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
          <div className="flex flex-wrap gap-8 pt-8">
            {data.map((item, index) => {
              return <BoardItemCard key={index} id={item.id} item={item} />;
            })}
          </div>
        </>
      )}
      <DialodAddProject />
    </>
  );
};

export default DashboardPage;
