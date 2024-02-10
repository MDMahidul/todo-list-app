import PageHeader from '../components/PageHeader';
import SingleTask from './SingleTask';
import useTasks from '../hooks/useTasks';

const CompletedList = () => {
  const {filterTasksByStatus}=useTasks();

  const completedTasks=filterTasksByStatus("completed");

  return (
    <div>
      <PageHeader title={"Completed Tasks"} />
      <div className='mt-10'>
        {completedTasks.map((task) => (
          <SingleTask key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default CompletedList;