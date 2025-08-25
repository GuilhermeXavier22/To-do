import { useState } from "react";
import { Button } from "@/components/Button";
import { Task } from "@/interfaces";
import { idGenerator } from "@/services/helpers/taskHelpers";
import taskServices from "@/services/api/task";

interface SidebarProps {
  setTasks: React.Dispatch<React.SetStateAction<Array<Task>>>;
}

export const Sidebar = ({ setTasks }: SidebarProps) => {
  const [taskName, setTaskName] = useState("");

  const handleClick = async () => {
    const task = {
      id: idGenerator(),
      name: taskName,
      completed: false,
      date: new Date(Date.now()).toLocaleDateString(),
    };
    await taskServices.postTask(task);
    setTasks((prev: Array<Task>) => [...prev, task]);
    setTaskName("");
  };

  return (
    <>
      <label htmlFor="" className="font-semibold py-3 block">
        Task to do
      </label>
      <input
        className="text-lg outline-none border-2 focus:border-gray-500 border-gray-400 rounded-lg w-full h-9 px-4 py-6"
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Task name"
      />
      <Button
        onClick={handleClick}
        className="w-full flex justify-center py-3 mt-4"
      >
        Adicionar Tarefa
      </Button>
    </>
  );
};
