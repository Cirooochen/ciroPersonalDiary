import { useState, useRef, useEffect } from "react";

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const dropdownRef = useRef();

  const imageOptions = [
    {
      id: 1,
      url: "https://placekitten.com/200/200",
    },
    {
      id: 2,
      url: "https://placebear.com/200/200",
    },
    {
      id: 3,
      url: "https://picsum.photos/200/200",
    },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (url) => {
    setSelectedImage(url);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="border px-4 py-2 rounded bg-gray-200"
      >
        {selectedImage ? "Change Image" : "Select Image"}
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-60 bg-white border rounded shadow-lg p-2 grid grid-cols-3 gap-2">
          {imageOptions.map((option) => (
            <img
              key={option.id}
              src={option.url}
              alt="option"
              className="w-16 h-16 object-cover cursor-pointer rounded hover:scale-105 transition-transform"
              onClick={() => handleSelect(option.url)}
            />
          ))}
        </div>
      )}

      {selectedImage && (
        <div className="mt-4">
          <p className="mb-2">Selected image:</p>
          <img
            src={selectedImage}
            alt="Selected"
            className="w-32 h-32 object-cover rounded"
          />
        </div>
      )}
    </div>
  );
};

export default DropDown;
