import PageHeader from "../components/PageHeader";
import SingleTask from "./SingleTask";
import useTasks from "../hooks/useTasks";
import EmptyData from "../components/EmptyData";

const IncompleteList = () => {
  const { filterTasksByStatus } = useTasks();
  const incompleteTasks = filterTasksByStatus("incomplete");
  return (
    <div>
      <PageHeader title={"Incomplete Tasks"} />
      <div className="mt-10">
        {incompleteTasks.length == 0 ? (
          <EmptyData text={"No incomplete task found"} />
        ) : (
          incompleteTasks.map((task) => (
            <SingleTask key={task.id} task={task} />
          ))
        )}
      </div>
    </div>
  );
};

export default IncompleteList;
