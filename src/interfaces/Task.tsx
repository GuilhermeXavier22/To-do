export interface Task {
  id: string;
  name: string;
  completed: boolean;
  date?: string;
}

export interface TaskCardProps {
  task: Task;
  setTasks: React.Dispatch<React.SetStateAction<Array<Task>>>;
}
