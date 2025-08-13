import React from "react";

const ModeCard = ({ image, description }) => {
  return (
    <div className="rounded-3xl modes-card  p-3 flex flex-col gap-2 border border-[#232323]">
      <img src={image} alt="" className="w-full rounded-2xl object-cover" />
      <p className="border-[#232323] border p-2 rounded-2xl border-dotted">
        {description}
      </p>
    </div>
  );
};

export default ModeCard;
