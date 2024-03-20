import React from "react";
import { Task } from "./TaskInterface";
import InfoTask from "./InfoTask";

const TaskItem: React.FC<{ task: Task }> = ({
  task,
}) => {
  return (

    <div key={task.id} className="mt-4">
      <div className={`bg-slate-100 border-2 rounded-lg p-5 sm:p-6 flex text-left transition hover:shadow-lg
       hover:shadow-slate-300 dark:bg-slate-800 dark:hover:shadow-transparent flex-row sm:h-46 border`}>
        <InfoTask task={task} />
      </div>
    </div>

  );
};

export default React.memo(TaskItem);
