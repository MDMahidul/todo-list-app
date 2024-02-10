import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import Button from "../components/Button";
import { Modal } from "../components/Modal";
import SingleTask from "./SingleTask";

const AllLists = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    /* get data from lg */
    const allTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    //console.log(allTasks);
  return (
    <div>
      <PageHeader title={"All Tasks"} />
      <div>
        <Button onClick={() => setIsModalOpen(true)} lable={"Add Task"} />
        <Modal isOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      </div>
      <div>
        {allTasks.map(task=>(<SingleTask key={task.id} task={task}/>))}
      </div>
    </div>
  );
};

export default AllLists;
