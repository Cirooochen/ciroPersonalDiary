import { useState } from "react";
const About = () => {
  const [copied, setCopied] = useState(false);
  const email = "cirochen0406@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-8">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT COLUMN */}
        <div>
          <h1 className="text-5xl font-bold mb-6">About Me</h1>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Hi, I’m Ciro — a passionate product designer based in Berlin. I love
            crafting meaningful user experiences, bridging design and code, and
            turning ideas into beautiful digital products. When I’m not
            designing, you’ll find me exploring AI, web development, or sipping
            coffee in a cozy cafe.
          </p>

          <div className="flex items-center space-x-4">
            <span className="text-gray-800 font-mono p-2 border border-gray-200 rounded-md">
              {email}
            </span>
            <button
              onClick={handleCopy}
              className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
            >
              {copied ? "Copied!" : "Copy Email"}
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="overflow-hidden rounded-xl shadow">
          <img
            src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXE1dDVvbjA0M2ZyZ3hrZTljeG01bDhkcjhucndtb2Fsemhid29mZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SiGe0LNINZ9SLy86i2/giphy.gif" // Replace with your image URL!
            alt="About Me"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
