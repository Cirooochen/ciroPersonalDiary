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
    <div className="min-h-screen bg-gray-50 p-8 flex flex-col">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Image */}
        <div className="overflow-hidden rounded-xl shadow">
          <img
            src={entryDetail.image}
            alt={entryDetail.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right: Text */}
        <div className="flex flex-col justify-between">
          <div>
            <p className="text-sm text-gray-500 mb-2">
              {entryDetail.publishedAt}
            </p>
            <h1 className="text-4xl font-bold mb-4">{entryDetail.title}</h1>
            <p className="text-gray-700 leading-relaxed">{entryDetail.text}</p>
          </div>

          <button
            onClick={() => navigate(-1)}
            className="mt-8 self-start bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-700 transition"
          >
            ← Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
