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
  const addTask = (newTask) => {
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
    const selectedTask = tasks.find((task) => task.id === id);
    if (selectedTask) {
      selectedTask.status =
        selectedTask.status === "completed" ? "incomplete" : "completed";

      const updatedTasks = tasks.map((task) =>
        task.id === id ? selectedTask : task
      );
      // Update tasks with the updated task list
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      setTasks(updatedTasks);
    }
  };

  /* update task data */
  const updateTask = (id, newData) => {
    const selectedTask = tasks.find((task) => task.id === id);

    if (selectedTask) {
      // Merge the new data with the existing task data
      const updatedTask = { ...selectedTask, ...newData };

      // Update the tasks array with the updated task
      const updatedTasks = tasks.map((task) =>
        task.id === id ? updatedTask : task
      );

      // Update localStorage and state
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
        addTask,
        deleteTask,
        filterTasksByStatus,
        countTasksByStatus,
        toggleStatus,
        updateTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
