import { Task, TaskListProps } from "../models/app.models";
import Todo from "./todo.component";

function TaskList(props: TaskListProps) {

  const taskDivs = props.filteredTasks.map((task) => (
    <Todo
      key={task.id}
      task={task}
      toggleTaskCompleted={toggleTaskCompletedCallback}
      deleteTask={deleteTaskCallback}
      editTask={editTaskCallback}
    />
  ));

  const impcompleteTasks = props.filteredTasks.filter((t) => !t.completed);

  function toggleTaskCompletedCallback(task: Task): Task {
    props.toggleTaskCompletedCallback(task);
    return task;
  }

  function deleteTaskCallback(task: Task): Task {
    props.deleteTaskCallback(task);
    return task;
  }

  function editTaskCallback(task: Task): Task {
    props.editTaskCallback(task);
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
