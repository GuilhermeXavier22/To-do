"use client";
import { useEffect, useState } from "react";
import { TaskCard } from "@/components/TaskCard";
import { Sidebar } from "@/components/Sidebar";
import { Task } from "@/interfaces";
import taskServices from "@/services/api/task";
import { Header } from "@/components/Header";

export default function Home() {
  const [tasks, setTasks] = useState<Array<Task>>([]);
  const [currentDate, setCurrentDate] = useState(
    new Date(Date.now()).toLocaleDateString()
  );

  const getTasks = async () => {
    await taskServices
      .getTasks({ date: currentDate })
      .then((res) => setTasks(res));
  };

  const tasksCompleteds = tasks.filter((task: Task) => task.completed);

  useEffect(() => {
    getTasks();
  }, [currentDate]);

  return (
    <main className="mx-28">
      <h1 className="text-center">To do list</h1>
      <Header
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
        taskCompletedsLength={tasksCompleteds.length}
        tasksLength={tasks.length}
      />
      <div className="w-full min-h-[600px] bg-white rounded-b-2xl grid grid-cols-6 overflow-hidden">
        <div className="col-span-4">
          {tasks?.map((task) => (
            <TaskCard key={task.id} task={task} setTasks={setTasks} />
          ))}
        </div>
        <div className="col-span-2 p-6 border-l border-gray-200 bg-[#f8f8f8]">
          <Sidebar setTasks={setTasks} />
        </div>
      </div>
    </main>
  );
}
