import React from "react";

export const TurnMarker = ({ turn, isSelected }) => {
    const classNameBg = isSelected ? " bg-[#a698ec]" : " bg-transparent";
    return (
      <div
        className={
          " text-white font-bold text-2xl rounded-md px-5 py-3 hover:" + classNameBg
        }
      >
        {turn}
      </div>
    );
  };