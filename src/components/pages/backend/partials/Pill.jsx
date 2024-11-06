import React from "react";

const Pill = ({ isActive }) => {
  return (
    <span
      className={`text-[10px] py-1 px-2.5 rounded-2xl ${
        isActive ? "bg-[#06380e] text-white" : "bg-gray-300 text-gray-700"
      }`}
    >
      Active
    </span>
  );
};

export default Pill;
