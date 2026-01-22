import { useEffect, useState } from "react";
import { Task, TaskListProps } from "../models/app.models";
import Todo from "./Todo";
import { FiltersMap, Tasks } from "../constants/data.const";

function TaskList(props: TaskListProps) {
  const [tasks, setTasks] = useState(Tasks);
  const [filteredTasks, setFilteredTasks] = useState(() =>
    tasks.filter(FiltersMap[props.selectedFilter])
  );

  useEffect(() => {
    updateFilteredTasks();
  }, [tasks, props.selectedFilter]);

  // Watch for changes to newTaskName
  useEffect(() => {
    if (props.newTaskName) {
      const newTask = {
        id: `${props.newTaskName.toLowerCase()}-${Math.floor(
          Math.random() * 100000
        )}`,
        name: props.newTaskName,
        completed: false,
      };

      setTasks((prevTasks) => [newTask, ...prevTasks]);
    }
  }, [props.newTaskName]); // Runs whenever newTaskName changes

  function updateFilteredTasks() {
    setFilteredTasks(() => tasks.filter(FiltersMap[props.selectedFilter]));
  }

  const taskDivs = filteredTasks.map((task) => (
    <Todo
      key={task.id}
      task={task}
      toggleTaskCompleted={handleToggleTaskCompleted}
      deleteTask={handleDeleteTask}
      editTask={handleEditTask}
    />
  ));

  const impcompleteTasks = filteredTasks.filter((t) => !t.completed);

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

  function handleDeleteTask(task: Task) {
    const updatedTasks: Task[] = tasks.filter((t) => t.id !== task.id);
    setTasks(updatedTasks);
  }

  function handleEditTask(task: Task): Task {
    const newTasks = tasks.map((t) => {
      if (t.id === task.id && t.name !== task.name) {
        t = task;
      }
      return t;
    });
    setTasks(newTasks);
    return task;
  }

  return (
    <div className="flex flex-col gap-4">
      <h2 id="text-lg">{impcompleteTasks.length} tasks remaining</h2>
      <ul
        role="list"
        className="flex flex-col gap-6"
        aria-labelledby="list-heading"
      >
        {taskDivs}
      </ul>
    </div>
  );
}

export default TaskList;
