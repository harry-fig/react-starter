import { useState } from "react";
import Filters from "../components/filters.component";
import Form from "../components/form.component";
import TaskList from "../components/task-list.component";
import { FilterOptions, FiltersMap, Tasks } from "../constants/data.const";
import { FilterName, Task } from "../models/app.models";

function TasksPage() {
    const [selectedFilter, setSelectedFilter] = useState(FilterOptions[0]);
    const [tasks, setTasks] = useState(Tasks);
    const filteredTasks = tasks.filter(FiltersMap[selectedFilter]);

    function handleAddTask(name: string) {
        if (name) {
            const newTask = {
                id: `${name.toLowerCase().split(' ').join('-')}-${Math.floor(
                    Math.random() * 100000
                )}`,
                name: name,
                completed: false,
            };

            setTasks((prevTasks) => {
                return [newTask, ...prevTasks];
            });
        }
    }

    function handleChangeFilter(selectedFilter: FilterName): void {
        setSelectedFilter(selectedFilter);
    }

    function handleToggleTaskCompleted(task: Task): void {
        const updatedTasks = tasks.map((t) => {
            if (task.id === t.id) {
                return { ...task, completed: !task.completed };
            }
            return t;
        });

        if (updatedTasks) {
            setTasks(updatedTasks);
        }
    }

    function handleEditTask(task: Task): void {
        const updatedTasks = tasks.map((t) => {
            if (t.id === task.id && t.name !== task.name) {
                t = task;
            }
            return t;
        });

        if (updatedTasks) {
            setTasks(updatedTasks);
        }
    }

    function handleDeleteTask(task: Task): void {
        const updatedTasks: Task[] = tasks.filter((t) => t.id !== task.id);

        if (updatedTasks) {
            setTasks(updatedTasks);
        }
    }

    return (
        <section className="flex flex-col w-full h-full p-8">
            <div className="flex flex-col w-full h-full max-w-screen-lg gap-10 p-8 mx-auto">
                <h1 className="text-xl font-bold">TodoMatic</h1>
                <Form addTask={handleAddTask} />
                <Filters changeFilter={handleChangeFilter} />
                <TaskList
                    toggleTaskCompletedCallback={handleToggleTaskCompleted}
                    editTaskCallback={handleEditTask}
                    deleteTaskCallback={handleDeleteTask}
                    filteredTasks={filteredTasks}
                />
            </div>
        </section>
    );
}

export default TasksPage;
