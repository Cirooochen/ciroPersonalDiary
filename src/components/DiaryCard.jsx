const DiaryCard = ({ entry }) => {
  // console.log(entry);
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <div className="card-body">
        <h2 className="card-title">{entry.title}</h2>
        <p>{entry.text}</p>
      </div>
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="image"
        />
      </figure>
    </div>
  );
};

export default DiaryCard;
