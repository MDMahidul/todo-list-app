import React, { useContext, useState } from "react";
import PageHeader from "../components/PageHeader";
import Button from "../components/Button";
import SingleTask from "./SingleTask";
import useTasks from "../hooks/useTasks";
import EmptyData from "../components/EmptyData";
import { Modal } from "../components/Modal/Modal";

const AllLists = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { tasks } = useTasks();
  //console.log(tasks);

  return (
    <div>
      <PageHeader title={"All Tasks"} />
      <div>
        <Button onClick={() => setIsModalOpen(true)} lable={"Add Task"} />
        <Modal isOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      </div>
      <div>
        {tasks.length == 0 ? (
          <EmptyData text={"No task available"} />
        ) : (
          tasks.map((task, index) => (
            <SingleTask key={task.id} task={task} index={index} />
          ))
        )}
      </div>
    </div>
  );
};

export default AllLists;
