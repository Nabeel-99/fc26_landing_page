import React from "react";

const ModeCard = ({ image, description, title }) => {
  return (
    <div className="rounded-3xl modes-card  p-3   bg-gradient-to-bl  from-[#292a29] via-[#020622] to-[#140101] border border-[#232323]">
      <div className="w-full flex flex-col gap-2 backdrop-blur-3xl bg-black/40 rounded-3xl p-3 border border-[#232323]">
        <div className="flex justify-start">
          <p className="border-[#232323] backdrop-blur-2xl font-bold shadow-2xl shadow-amber-200 border p-2 rounded-2xl border-dotted">
            {title}
          </p>
        </div>

        <img
          src={image}
          alt=""
          className="w-full rounded-2xl object-cover backdrop-blur-2xl"
        />
        <p className="border-[#232323] backdrop-blur-2xl border p-2 rounded-2xl border-dotted">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ModeCard;
