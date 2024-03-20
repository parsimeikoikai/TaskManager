import TaskItem from "./Task/TaskItem";
import { useQuery } from 'react-query';
import Header from "./Header";
import { useState } from "react";
import { getAllTasksUrl } from "./urls/apiUrls";

export default function Todolist() {
    const [searchQuery, setSearchQuery] = useState('');

    const getTasks = async () => {
        const res = await fetch(getAllTasksUrl);
        return res.json();
    };

    const { data, error, isLoading } = useQuery('tasks', getTasks);

    if (error) return <div>Request Failed</div>;
    if (isLoading) return <div>Loading...</div>;
    if (!data || !Array.isArray(data)) return <div>No data available</div>;
    const filteredTasks = data.filter(task => {
        return (
            task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            task.description.toLowerCase().includes(searchQuery.toLowerCase())
        );
    });

    return (
        <div className="pt-5 mt-8 pb-8 sm:pb-16 px-3 md:px-8 md:w-full xl:w-8/12 m-auto min-h-screen">
            <Header setSearchQuery={setSearchQuery} />
            <ul className="mt-4 grid gap-2 sm:gap-4 xl:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {filteredTasks.map((task) => (
                    <TaskItem key={task.id} task={task} />
                ))}
            </ul>
        </div>
    );
}
