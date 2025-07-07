import DiaryCard from "./DiaryCard";

const DiaryEntryList = ({ localEntry }) => {
  const totalEntry = localEntry.length;

  console.log(localEntry);
  return (
    <section className="py-16 px-8 bg-blue-50 flex-1">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold">My Entries</h2>
          <span className="text-gray-500">{totalEntry} Entries</span>
        </div>
      </div>
      <div className="w-full flex flex-wrap gap-4 justify-center">
        {localEntry.map((entry) => (
          <DiaryCard key={entry.id} entry={entry} />
        ))}
      </div>
    </section>
  );
};

export default DiaryEntryList;
