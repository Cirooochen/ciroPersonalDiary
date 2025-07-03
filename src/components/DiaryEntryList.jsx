import DiaryCard from "./DiaryCard";

const DiaryEntryList = ({ localEntry }) => {
  console.log(localEntry);
  return (
    <div className="w-full flex flex-wrap gap-4 justify-center">
      <h1>Your Diary Entry</h1>
      {localEntry.map((entry) => (
        <DiaryCard key={entry.id} entry={entry} />
      ))}
    </div> //
  );
};

export default DiaryEntryList;
