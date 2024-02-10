import React, { createContext, useEffect, useState } from "react";

export const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  /* get data from ls */
  useEffect(() => {
    const prevTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(prevTasks);
  }, []);

  /* add data */
  const updateTasks = (newTask) => {
    const updatedTasks = [...tasks, newTask];
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setTasks(updatedTasks);
  };

  /* get filtred data status wise*/
  const filterTasksByStatus = (status) => {
    return tasks.filter((task) => task.status === status);
  };

  /* get status wise count */
  const countTasksByStatus = (status) => {
    return filterTasksByStatus(status).length;
  };


  return (
    <TaskContext.Provider
      value={{ tasks, updateTasks, filterTasksByStatus, countTasksByStatus }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
