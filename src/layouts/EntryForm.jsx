import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
const EntryForm = ({ localEntry, setLocalEntry }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const [lastPostDate, setLastPostDate] = useState(null);
  const maxLength = 300;

  const today = new Date().toISOString().split("T")[0]; // "2024-06-27"

  // console.log(title);
  // console.log(text);
  // console.log(entry);

  //Submit event function
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !text.trim() || !image.trim())
      return alert("Please complete the entry");
    const lastPostDate = localStorage.getItem("lastPostDat"); // Check localStorage

    if (lastPostDate === today) {
      alert("You can only post once per day!");
      return;
    } // Submit post note...
    console.log("Post submitt note!");

    localStorage.setItem("lastPostDate", today);
    setLastPostDate(today);

    setLocalEntry((prev) => [
      {
        id: Date.now(),
        publishedAt: new Date().toISOString(),
        lastPostDate: lastPostDate,
        title: title,
        text: text,
        image: image,
      },
      ...prev,
    ]);
    setTitle("");
    setText("");
  };
  useEffect(() => {
    const savedDate = localStorage.getItem("lastPostDate");
    setLastPostDate(savedDate);
    localStorage.setItem("Entries", JSON.stringify(localEntry));
  }, [handleSubmit]); //Updated localStorage

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleTextChange = (e) => setText(e.target.value);
  const handleImageChange = (e) => setImage(e.target.value);
  return (
    <div className="w-full mx-auto flex flex-col justify-center items-center p-4 gap-8">
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="btn btn-ghost"
      >
        Back
      </button>

      <form onSubmit={handleSubmit}>
        {lastPostDate === today ? (
          <div className="border-base-300 rounded-box w-xs border p-4">
            <figure className="w-[8rem] h-[8rem] overflow-hidden rounded-full">
              <img
                className="object"
                src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExODNxbnN2emp1dXRycWpsMWRmdTh2Ym85dWYxN2Zra3A4dGNsYTd4NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Ct2fBe0rc69nq/giphy.gif"
              />
            </figure>
            <p className="text-red-500">
              You’ve already posted today. Keep it up tomorrow!
            </p>
          </div>
        ) : (
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-lg border p-4 ">
            <label className="label">Title</label>
            <input
              type="text"
              value={title}
              onChange={handleTitleChange}
              className="input border-none w-auto"
              placeholder="What's your thought today"
            />

            <label className="label">Text</label>
            <textarea
              value={text}
              onChange={handleTextChange}
              className="textarea textarea-md border-none w-auto"
              placeholder="Tell me about it"
            />
            <label className="label">Image</label>
            <input
              type="text"
              value={image}
              onChange={handleImageChange}
              className="input border-none w-auto"
              placeholder="Put an Image link here"
            />

            <div className="flex justify-between mt-2 text-sm text-gray-600">
              <span>
                Characters:
                <span
                  className={`${
                    text.length >= 200 ? "text-yellow-600" : "text-gray-600"
                  }`}
                >
                  {text.length}
                </span>
                /{maxLength}
              </span>
            </div>
            <button
              onClick={() => {
                if (title.trim() && text.trim() && image.trim()) {
                  alert("Congrats! You've created a new Entry!");
                  navigate(-1);
                }
                // handleSubmit;
              }}
              className="btn btn-primary"
            >
              Post now
            </button>
          </fieldset>
        )}
      </form>
    </div>
  );
};

export default EntryForm;
