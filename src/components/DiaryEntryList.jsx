import DiaryCard from "./DiaryCard";

function DiaryEntryList() {
  return (
    <div className="w-full flex flex-wrap gap-4">
      <h1>Your Diary Entry</h1>
      <DiaryCard />
      <DiaryCard />
      <DiaryCard />

      {/* <button
        className="btn"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        open modal
      </button> */}
    </div>
  );
}

export default DiaryEntryList;
