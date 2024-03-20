import React from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Task } from "../Task/TaskInterface";

const BtnEditTask: React.FC<{ task: Task }> = ({ task }) => {
  const handleDeleteTask = () => {
    alert("Delete Task ...");
  };

  return (
    <>
      <button
        title="Delete task"
        className="transition w-7 sm:w-8 h-6 sm:h-8 grid place-items-center
         dark:hover:text-slate-200 hover:text-slate-700"
        onClick={handleDeleteTask}
      >
        <RiDeleteBin6Fill />
      </button>
    </>
  );
};

export default BtnEditTask;
