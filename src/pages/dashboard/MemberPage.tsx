import MemberCard from "../../components/cards/MemberCard";
import useMembers from "../../hooks/useMembers";

const MemberPage = () => {
  const { data, isLoading, error } = useMembers();

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
          <div className="flex flex-wrap gap-8 py-8">
            {data.map((item) => (
              <MemberCard key={item.id} {...item} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default MemberPage;
