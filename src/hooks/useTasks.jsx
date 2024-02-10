import { useContext } from "react";
import { TaskContext } from "../Provider/TaskProvider";

const useTasks = () => {
  return useContext(TaskContext);
};
export default useTasks;