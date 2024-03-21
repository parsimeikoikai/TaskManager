import React from "react";
import { Task } from "./TaskInterface";
import BtnEditTask from "../buttonActions/BtnEditTask";
import BtnDeleteTask from "../buttonActions/BtnDeleteTask";

const ActionsTaskItem: React.FC<{ task: Task;  }> = ({
  task,

}) => {
  return (
    <>
      <div
        className={`ml-2 flex border-dashed border-slate-200 dark:border-slate-700/[.3] items-center`}
      >
        <BtnDeleteTask  task={task} />
        <BtnEditTask task={task} />
      </div>
    </>
  );
};

export default ActionsTaskItem;
