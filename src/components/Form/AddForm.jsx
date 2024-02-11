import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";
import useTasks from "../../hooks/useTasks";
import { useNavigate } from "react-router-dom";

const AddForm = ({ setIsModalOpen }) => {
  //const [tasks, setTasks] = useState([]);
  const { tasks, addTask } = useTasks();
  const navigate=useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const taskData = {
      id: uuidv4(),
      name: data.tast_name,
      status: "incomplete",
      priority: data.priority,
    };
    addTask(taskData);
    toast.success("Task Added Successfully");
    setIsModalOpen(false); //close modal
    /* redirect to all task data after add new task */
    navigate('/');
    reset(); //rest the form
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <label htmlFor="tast_name" className="task-label">
          About Task
        </label>
        <input
          type="text"
          id="tast_name"
          className="task-input-field"
          placeholder="Write here..."
          {...register("tast_name", { required: true })}
        />
        {errors.tast_name && (
          <span className="text-sm text-red-500">
            Task Details is required *
          </span>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="class_name" className="task-label">
          Task Priority
        </label>
        <select
          required
          className="task-input-field"
          name="priority"
          defaultValue="medium"
          {...register("priority")}
        >
          <option value="low"> Low </option>
          <option value="medium"> Medium </option>
          <option value="high"> High </option>
        </select>
      </div>
      <button className="btn bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl border-none text-white w-full hover:shadow-lg">
        Submit
      </button>
    </form>
  );
};

export default AddForm;
