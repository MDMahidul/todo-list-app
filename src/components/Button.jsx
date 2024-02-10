import React from 'react';
import {MdFormatListBulletedAdd,} from "react-icons/md";

const AddButton = ({ lable, onClick }) => {
  return (
    <div className="text-center">
      <button
        onClick={onClick}
        className="btn btn-sm mx-auto bg-gradient-to-bl from-blue-400 to-green-500 hover:from-green-400 hover:to-blue-500 border-none my-4 text-white transition-all duration-200 hover:scale-105"
      >
        {lable}
        <MdFormatListBulletedAdd className="h-5 w-5" />
      </button>
    </div>
  );
};

export default AddButton;