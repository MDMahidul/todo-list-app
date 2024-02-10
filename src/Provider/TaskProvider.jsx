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

  /* delete data */
  const deleteTask = (id) => {
    const newTaskList = tasks.filter((task) => task.id !== id);
    localStorage.setItem("tasks", JSON.stringify(newTaskList));
    setTasks(newTaskList);
  };

  /* toggle the task status*/
  const toggleStatus = (id) => {
    /* find the id */
    const selectedTask = tasks.find((task) => task.id === id);
    if (selectedTask) {
      /* update the task status */
      selectedTask.status = selectedTask.status === "completed" ? "incomplete" : "completed";

      /* update new task data with the old one */
      const updatedTasks = tasks.map((task) =>
        task.id === id ? selectedTask : task
      );

      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      setTasks(updatedTasks);
    }
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
      value={{
        tasks,
        updateTasks,
        deleteTask,
        filterTasksByStatus,
        countTasksByStatus,
        toggleStatus,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
