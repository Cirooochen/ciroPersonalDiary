import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
const EntryForm = ({ localEntry, setLocalEntry }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const maxLength = 300;

  // console.log(title);
  // console.log(text);
  // console.log(entry);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !text.trim()) return alert("Please enter a entry");

    setLocalEntry((prev) => [
      { id: Date.now(), title: title, text: text },
      ...prev,
    ]);
    setTitle("");
    setText("");
  };
  useEffect(() => {
    localStorage.setItem("Entries", JSON.stringify(localEntry));
  }, [handleSubmit]); //Updated localStorage

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleTextChange = (e) => setText(e.target.value);
  return (
    <div className="w-full mx-auto flex flex-col justify-center items-center p-4 gap-8">
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="btn btn-secondary"
      >
        Go back
      </button>

      <form
        onSubmit={handleSubmit}
        className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 "
      >
        <label className="label">Title</label>
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          className="input"
          placeholder="What's your thought today"
        />
        <label className="label">Text</label>
        <textarea
          value={text}
          onChange={handleTextChange}
          className="textarea textarea-md"
          placeholder="Tell me about it"
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
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default EntryForm;
