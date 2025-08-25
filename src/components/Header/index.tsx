import { Button } from "../Button";
import { addDayInDate, removeDayInDate } from "@/services/helpers/taskHelpers";

interface HeaderProps {
  taskCompletedsLength: number;
  tasksLength: number;
  currentDate: string;
  setCurrentDate: React.Dispatch<React.SetStateAction<string>>;
}

export const Header = (params: HeaderProps) => {
  const progressPercentage = Math.round(
    (params.taskCompletedsLength / params.tasksLength) * 100
  );

  return (
    <header className="bg-gray-100 rounded-t-2xl">
      <div className="w-full py-4 px-10 flex justify-between items-center">
        <div className="flex">
          <Button
            variant="header"
            onClick={() => {
              params.setCurrentDate((prev: string) => removeDayInDate(prev));
            }}
          >
            Back day
          </Button>
          <h1 className="font-semibold mr-4 text-2xl">{params.currentDate}</h1>
          <Button
            variant="header"
            onClick={() => {
              params.setCurrentDate((prev: string) => addDayInDate(prev));
            }}
          >
            Next day
          </Button>
        </div>
        <h1 className="text-xl">
          <span className="font-bold">
            {params.taskCompletedsLength}/{params.tasksLength}
          </span>{" "}
          Tasks completed
        </h1>
      </div>
      <div
        style={{ width: progressPercentage + "%" }}
        className={`bg-green-400  h-1.5`}
      ></div>
    </header>
  );
};
