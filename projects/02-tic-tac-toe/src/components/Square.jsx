import React from "react";

export const Square = ({ children, updateBoard, i }) => {
  const handleClick = () => {
    updateBoard(i);
  };
  return (
    <div
      onClick={handleClick}
      className="w-24 h-24 bg-white rounded-lg flex items-center justify-center text-[#5746AF] font-semibold text-4xl cursor-pointer"
    >
      {children}
    </div>
  );
};
