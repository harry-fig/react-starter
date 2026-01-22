import { useEffect, useState } from "react";
import Filters from "./components/Filters";
import Form from "./components/Form";
import TaskList from "./components/TaskList";
import { FilterOptions, FiltersMap, Tasks } from "./constants/data.const";
import { FilterName, Task } from "./models/app.models";

function App() {
  const [newTaskName, setNewTaskName] = useState("");
  const [selectedFilter, setSelectedFilter] = useState(FilterOptions[0]);
  const [tasks, setTasks] = useState(Tasks);
  const [filteredTasks, setFilteredTasks] = useState(() => tasks.filter(FiltersMap[selectedFilter]));

  useEffect(() => {
    setFilteredTasks(() => tasks.filter(FiltersMap[selectedFilter]));
  }, [tasks]);

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
      setNewTaskName(name);
    }
  }

  function handleChangeFilter(selectedFilter: FilterName): FilterName {
    setSelectedFilter(selectedFilter);
    setFilteredTasks(() => tasks.filter(FiltersMap[selectedFilter]));
    return selectedFilter;
  }

  function handleToggleTaskCompleted(task: Task): Task {
    const updatedTasks: Task[] = tasks.map((t) => {
      if (task.id === t.id) {
        return { ...task, completed: !task.completed };
      }
      return t;
    });

    if (updatedTasks) {
      setTasks(updatedTasks);
    }
    return task;
  }

  function handleEditTask(task: Task): Task {
    const updatedTasks = tasks.map((t) => {
      if (t.id === task.id && t.name !== task.name) {
        t = task;
      }
      return t;
    });

    if (updatedTasks) {
      setTasks(updatedTasks);
    }
    return task;
  }

  function handleDeleteTask(task: Task): Task {
    const updatedTasks: Task[] = tasks.filter((t) => t.id !== task.id);

    if (updatedTasks) {
      setTasks(updatedTasks);
    }
    return task;
  }

  return (
    <section className="flex flex-col w-full h-full p-8">
      <div className="flex flex-col w-full h-full max-w-screen-lg gap-10 p-8 mx-auto">
        <h1 className="text-xl font-bold">TodoMatic</h1>
        <Form addTask={handleAddTask} />
        <Filters changeFilter={handleChangeFilter} />
        <TaskList toggleTaskCompletedCallback={handleToggleTaskCompleted}
          editTaskCallback={handleEditTask}
          deleteTaskCallback={handleDeleteTask}
          filteredTasks={filteredTasks} />
      </div>
    </section>
  );
}

export default App;
