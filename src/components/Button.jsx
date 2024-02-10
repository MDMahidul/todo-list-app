import React from "react";
import { MdFormatListBulletedAdd } from "react-icons/md";

const Button = ({ lable, onClick}) => {
  return (
    <div className="text-center">
      <button
        onClick={onClick}
        className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-5 my-5 focus:border-none hover:shadow-lg"
      >
        <div className="flex justify-center items-center gap-3">
          {lable}
        </div>
      </button>
    </div>
  );
};

export default Button;
