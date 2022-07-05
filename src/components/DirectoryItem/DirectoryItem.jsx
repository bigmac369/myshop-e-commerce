import React from "react";
import { useNavigate } from "react-router-dom";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <div
      onClick={onNavigateHandler}
      className="rounded-md hover:cursor-pointer flex justify-center items-center hover:scale-105 duration-500 group"
    >
      <img className="h-64 w-full rounded-md" src={imageUrl} alt="" />
      <div className="h-[90px] flex flex-col justify-center items-center absolute bg-white px-[25px] opacity-70 group-hover:opacity-90">
        <h2 className="font-bold uppercase mb-[6px] text-base text-[#4a4a4a]">
          {title}
        </h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
