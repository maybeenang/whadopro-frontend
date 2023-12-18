import MemberCard from "../../components/cards/MemberCard";

const MemberPage = () => {
  return (
    <div className="flex flex-wrap gap-8 py-8">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
        <MemberCard key={item} />
      ))}
    </div>
  );
};

export default MemberPage;
