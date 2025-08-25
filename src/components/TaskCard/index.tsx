import { Button } from "../Button";
import { Task } from "@/interfaces";
import taskServices from "@/services/api/task";

interface TaskCardProps {
  task: Task;
  setTasks: React.Dispatch<React.SetStateAction<Array<Task>>>;
}

export const TaskCard = ({ task, setTasks }: TaskCardProps) => {
  const handleClick = async () => {
    await taskServices.deleteTask(task.id);
    setTasks((prev: Array<Task>) =>
      prev.filter((item: Task) => item.id !== task.id)
    );
  };

  const updateTasks = (updatedTask: Task) => {
    setTasks((prev: Array<Task>) =>
      prev.map((item: Task) => {
        return item.id === task.id ? updatedTask : item;
      })
    );
  };

  const handleFinishTask = async () => {
    const updatedTask = { ...task, completed: !task.completed };
    await taskServices.editTask(task.id, updatedTask);
    updateTasks(updatedTask);
  };

  return (
    <div className="w-full flex justify-between py-4 px-10 border-b border-gray-200">
      <p
        className={`text-lg flex justify-center items-center hover:cursor-pointer ${
          task.completed && "line-through"
        }`}
        onClick={handleFinishTask}
      >
        {task?.name}
      </p>{" "}
      <Button onClick={handleClick} variant="delete">
        Excluir
      </Button>
    </div>
  );
};
