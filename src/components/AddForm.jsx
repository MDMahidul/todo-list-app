import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from "uuid";
import toast from 'react-hot-toast';

const AddForm = ({ setIsModalOpen }) => {
  const [tasks, setTasks] = useState([]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  /* update the local storage with new data */
  useEffect(() => {
    const prevTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(prevTasks);
  }, []);

  const onSubmit = (data) => {
    const taskData = {
      id: uuidv4(),
      name: data.tast_name,
      status: "incomplete",
      priority: data.priority,
    };
    const newTasks = [...tasks, taskData];
    setTasks(newTasks); //added new data with prev data
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    toast.success("Task Added Successfully");
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
          Task Priority
        </label>
        <select
          required
          className="task-input-field"
          name="priority"
          defaultValue="medium"
          {...register("priority")}
        >
          <option value="low"> Low </option>
          <option value="medium"> Medium </option>
          <option value="high"> High </option>
        </select>
      </div>
      <button className="btn btn-sm btn-success text-white w-full">
        Submit
      </button>
    </form>
  );
};

export default AddForm;