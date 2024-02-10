import PageHeader from '../components/PageHeader';
import SingleTask from './SingleTask';
import useTasks from '../hooks/useTasks';
import EmptyData from '../components/EmptyData';

const CompletedList = () => {
  const {filterTasksByStatus}=useTasks();

  const completedTasks=filterTasksByStatus("completed");

  return (
    <div>
      <PageHeader title={"Completed Tasks"} />
      <div className="mt-10">
        {completedTasks.length == 0 ? (
          <EmptyData text={"No completed task found"} />
        ) : (
          completedTasks.map((task) => <SingleTask key={task.id} task={task} />)
        )}
      </div>
    </div>
  );
};

export default CompletedList;