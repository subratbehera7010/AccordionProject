import React from "react";

const FAQ = ({ data, isOpen, onToggle }) => {
  return (
    <div className="p-2 hover:bg-gray-50">
      <div className="flex justify-between border-b py-2">
        <h1 className="text-xl">{data.question}</h1>
        <button onClick={onToggle}>
          {isOpen ? (
            <img
              className="w-10 h-10"
              src="https://wumbo.net/symbols/minus/feature.png"
              alt="Collapse"
            />
          ) : (
            <img
              className="w-10 h-10"
              src="https://wumbo.net/symbols/plus/feature.png"
              alt="Expand"
            />
          )}
        </button>
      </div>
      {isOpen && <p className="text-sm text-gray-500 py-2">{data.answer}</p>}
    </div>
  );
};

export default FAQ;
