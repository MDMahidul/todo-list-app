import React from 'react';
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { MdOutlineCheckBoxOutlineBlank,MdOutlineCheckBox  } from "react-icons/md";

const SingleTask = ({task}) => {
    const {id,name,status,priority} = task;

    /* set color for diff priority */
    const priorityBgColors = {
        low:'bg-green-400',
        medium:'bg-yellow-400',
        high:'bg-red-600',
    }
    const priorityBgColor = priorityBgColors[priority];
    return (
      <div
        className={`shadow-xl rounded-lg w-9/12 mx-auto px-4 py-2 mb-5 ${priorityBgColor}`}
      >
        <div className="flex flex-col text-white">
          <div className="flex items-center gap-8">
            <p className="font-semibold  text-xl mt-[-3px]">{name}</p>
            <div className="flex gap-3">
              <button>
                <span>
                  {status === "completed" ? (
                    <MdOutlineCheckBox />
                  ) : (
                    <MdOutlineCheckBoxOutlineBlank className="h-[18px] w-[18px]" />
                  )}
                </span>
              </button>
              <button>
                <FaRegEdit />
              </button>
              <button>
                <FaRegTrashAlt />
              </button>
            </div>
          </div>
          <div className="flex gap-5">
            <p className="text-sm">Status: {status}</p>
            <p className="text-sm">Priority: {priority}</p>
          </div>
        </div>
      </div>
    );
};

export default SingleTask;