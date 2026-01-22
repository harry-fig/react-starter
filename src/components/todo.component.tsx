import { BaseSyntheticEvent, useState } from "react";
import { Task, TodoProps } from "../models/app.models";

function Todo(props: TodoProps) {
  const [isEdit, setIsEdit] = useState(false);
  const [newName, setNewName] = useState(props.task.name);

  function editTask(isEdit: boolean, task: Task): void {
    setIsEdit(isEdit);
    if (!isEdit) {
      if (newName) {
        const newTask: Task = {
          id: props.task.id,
          name: newName,
          completed: props.task.completed,
        };
        props.editTask(newTask);
      } else {
        setNewName(props.task.name);
      }
    }
  }

  function handleNameChange(event: BaseSyntheticEvent) {
    setNewName(event.target.value);
  }

  return (
    <li className="flex items-center gap-8 p-2 rounded-sm bg-stone-100">
      <div className="flex items-center w-full gap-2">
        <input
          id={props.task.id}
          type="checkbox"
          defaultChecked={props.task.completed}
          onChange={() => props.toggleTaskCompleted(props.task)}
        />
        <label
          className="font-bold text-lf"
          htmlFor={props.task.id}
          hidden={isEdit}
        >
          {props.task.name}
        </label>
        <input
          className="input"
          id={props.task.id}
          type="text"
          hidden={!isEdit}
          onChange={handleNameChange}
          value={newName}
        />
      </div>
      <div className="flex items-center gap-2">
        <button
          hidden={isEdit}
          type="button"
          className="btn btn-primary"
          onClick={() => editTask(true, props.task)}
        >
          Edit <span className="hidden">{props.task.name}</span>
        </button>

        <button
          hidden={!isEdit}
          type="button"
          className="btn btn-primary"
          onClick={() => editTask(false, props.task)}
        >
          Save <span className="hidden">{props.task.name}</span>
        </button>
        <button
          type="button"
          className="btn btn-error"
          onClick={() => props.deleteTask(props.task)}
        >
          Delete <span className="hidden">{props.task.name}</span>
        </button>
      </div>
    </li>
  );
}

export default Todo;
