import React from "react";
import { Task } from "../Task/TaskInterface";
import { FaEdit } from "react-icons/fa";
const BtnEditTask: React.FC<{ task: Task }> = ({ task }) => {

  const handleEditTask = () => {
    alert("Edit Task ...");
  };

  return (
    <>
      <button
        title="Edit task"
        className="transition w-7 sm:w-8 h-6 sm:h-8 grid place-items-center dark:hover:text-slate-200 hover:text-slate-700"
        onClick={handleEditTask}
      >
        <FaEdit className="ml-2 w-4 sm:w-5 text-blue-400" />
      </button>
    </>
  )
};

export default BtnEditTask;
