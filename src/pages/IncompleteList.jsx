import PageHeader from "../components/PageHeader";
import SingleTask from "./SingleTask";
import useTasks from "../hooks/useTasks";

const IncompleteList = () => {
  const { filterTasksByStatus } = useTasks();
  const incompleteTasks = filterTasksByStatus("incomplete");
  return (
    <div>
      <PageHeader title={"Incomplete Tasks"} />
      <div className="mt-10">
        {incompleteTasks.map((task) => (
          <SingleTask key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default IncompleteList;
