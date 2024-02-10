import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import Button from '../components/Button';
import { Modal } from '../components/Modal';
import SingleTask from './SingleTask';

const CompletedList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  /* get data from lg */
  const allTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  // Filter completed tasks
  const completedTasks = allTasks.filter((task) => task.status === "completed");
  return (
    <div>
      <PageHeader title={"Completed Tasks"} />
      <div>
        <Button onClick={() => setIsModalOpen(true)} lable={"Add Task"} />
        <Modal isOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      </div>
      <div>
        {completedTasks.map((task) => (
          <SingleTask key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default CompletedList;