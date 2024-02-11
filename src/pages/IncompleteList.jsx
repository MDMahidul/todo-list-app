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
          incompleteTasks.map((task, index) => (
            <SingleTask key={task.id} task={task} index={index} />
          ))
        )}
      </div>
    </div>
  );
};

export default IncompleteList;
