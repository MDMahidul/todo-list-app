import React, { useState } from "react";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import {
  MdOutlineCheckBoxOutlineBlank,
  MdOutlineCheckBox,
} from "react-icons/md";
import useTasks from "../hooks/useTasks";
import toast from "react-hot-toast";
import { UpdateModal } from "../components/Modal/UpdateModal";
import FadeUpAni from "../components/Animation/FadeUpAni";

const SingleTask = ({ task,index }) => {
  const { id, name, status, priority } = task;
  const { deleteTask, toggleStatus } = useTasks();
   const [isModalOpen, setIsModalOpen] = useState(false);

  /* handle task delete */
  const handleDelete=id=>{
    deleteTask(id);
    toast.success("Task deleted successfully!!!")
  }
  /* handle task status toggle */
  const handleToggleStatus=id=>{
    toggleStatus(id);
    //toast.success("Task completed!!!")
  }

  /* set color for diff priority */
  const priorityBgColors = {
    low: "bg-green-400",
    medium: "bg-yellow-400",
    high: "bg-red-600",
  };
  const priorityBgColor = priorityBgColors[priority];
  return (
    <FadeUpAni custom={index}>
      <div
        className={`shadow-xl rounded-lg w-9/12 mx-auto px-4 py-3 mb-5 ${priorityBgColor}`}
      >
        <div className="flex flex-col text-white">
          <div className="flex justify-between items-start">
            <div className="flex justify-between items-start">
              <button className="mr-2" onClick={() => handleToggleStatus(id)}>
                <span>
                  {status === "completed" ? (
                    <MdOutlineCheckBox className="h-5 w-5" />
                  ) : (
                    <MdOutlineCheckBoxOutlineBlank className="h-5 w-5" />
                  )}
                </span>
              </button>
              <p className="font-medium md:font-semibold text-base md:text-lg -mt-[3px] md:-mt-[6px]">
                {name}
              </p>
            </div>
            <div className="flex gap-3 ml-5">
              <button onClick={() => setIsModalOpen(true)}>
                <FaRegEdit />
              </button>
              <UpdateModal
                isOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                task={task}
              />
              <button onClick={() => handleDelete(id)}>
                <FaRegTrashAlt />
              </button>
            </div>
          </div>
          <div className="md:flex gap-5 ml-7">
            <p className="text-sm">Status: {status}</p>
            <p className="text-sm">Priority: {priority}</p>
          </div>
        </div>
      </div>
    </FadeUpAni>
  );
};

export default SingleTask;
