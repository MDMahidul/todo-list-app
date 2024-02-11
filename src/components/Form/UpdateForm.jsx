import React from "react";
import useTasks from "../../hooks/useTasks";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";

const UpdateForm = ({ setIsModalOpen ,task}) => {
  const { updateTask } = useTasks();
  //console.log(task);
  const { id, name, status, priority } = task;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const updatedTaskData = {
      id: id,
      name: data.tast_name,
      status: data.status,
      priority: data.priority,
    };
    updateTask(id,updatedTaskData);
    toast.success("Task Updated Successfully");
    setIsModalOpen(false); //close modal
    reset(); //rest the form
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <label htmlFor="tast_name" className="task-label">
          About Task
        </label>
        <input
          type="text"
          id="tast_name"
          className="task-input-field"
          placeholder="Write here..."
          defaultValue={name}
          {...register("tast_name", { required: true })}
        />
        {errors.tast_name && (
          <span className="text-sm text-red-500">
            Task Details is required *
          </span>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="class_name" className="task-label">
          Task Status
        </label>
        <select
          required
          className="task-input-field"
          name="priority"
          defaultValue={status}
          {...register("status")}
        >
          <option value="completed"> Completed </option>
          <option value="incomplete"> Incomplete </option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="class_name" className="task-label">
          Task Priority
        </label>
        <select
          required
          className="task-input-field"
          name="priority"
          defaultValue={priority}
          {...register("priority")}
        >
          <option value="low"> Low </option>
          <option value="medium"> Medium </option>
          <option value="high"> High </option>
        </select>
      </div>
      <button className="btn bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl border-none text-white w-full hover:shadow-lg">
        Update
      </button>
    </form>
  );
};

export default UpdateForm;
