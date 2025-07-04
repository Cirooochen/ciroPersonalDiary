import { useParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";
const Detail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [entryDetail, setEntryDetail] = useState({});
  const localStoredEntry = JSON.parse(localStorage.getItem("Entries"));
  const theOne = localStoredEntry.find((entry) => entry.id === Number(id));
  console.log(theOne);
  useEffect(() => {
    setEntryDetail(theOne);
  }, []);

  return (
    <div className="card lg:card-side bg-base-100 shadow-sm">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
          alt="Album"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{entryDetail.title}</h2>
        <p>{entryDetail.text}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => {
              navigate(-1);
            }}
            className="btn btn-primary"
          >
            Listen
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
