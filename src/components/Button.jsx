import React from 'react';
import {MdFormatListBulletedAdd,} from "react-icons/md";

const AddButton = ({ lable, onClick }) => {
  return (
    <div className="text-center">
      <button
        onClick={onClick}
        className="btn btn-sm mx-auto btn-warning my-4 text-white"
      >
        {lable}
        <MdFormatListBulletedAdd className="h-5 w-5" />
      </button>
    </div>
  );
};

export default AddButton;