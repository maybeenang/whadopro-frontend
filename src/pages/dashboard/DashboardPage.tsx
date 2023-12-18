import BoardItemCard from "../../components/cards/BoardItemCard";

const DashboardPage = () => {
  return (
    <div className="flex flex-wrap gap-8 pt-8">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
        return <BoardItemCard key={index} id={item} />;
      })}
    </div>
  );
};

export default DashboardPage;
