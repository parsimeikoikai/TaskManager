import React from "react";
import { Task, TaskStatus } from "./TaskInterface";
import Actions from "./Actions";
import LinesEllipsis from 'react-lines-ellipsis';
import { formatDate } from './DateFormatter';

const InfoTask: React.FC<{ task: Task }> = ({ task }) => {

  return (
    <div className={`flex flex-col flex-1 mr-6`}>
      <div
        className={`flex ml-1 items-center justify-between mb-2`}
      >

        <span className="block font-medium dark:text-slate-200">
          {task.title}
        </span>

      </div>
      <div
        title={task.description}
        className={`mb-2 ml-1`}
      >
        <LinesEllipsis
          text={task.description}
          maxLine='1'
          ellipsis='...'
          trimRight
          basedOn='letters'
        />
      </div>
      <hr />
      <div className="flex-grow mt-2 mb-2"> 
      <div className="flex items-center"> 
        <span className="text-sm">{formatDate(task.deadline)}</span>
        <Actions task={task} />
      </div>
     
    </div>
      <hr />
      <div className="flex items-center mt-2">
        {task.status === TaskStatus.TODO && (
          <span className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-100 bg-blue-600 rounded-full">TODO </span>
        )}
        {task.status === TaskStatus.IN_PROGRESS && (
          <span className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-100 bg-gray-600 rounded-full">IN_PROGRESS</span>
        )}
        {task.status === TaskStatus.COMPLETED && (
          <span className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-green-100 bg-green-600 rounded-full">COMPLETED</span>
        )}
      </div>
    </div>
  );
};

export default InfoTask;
