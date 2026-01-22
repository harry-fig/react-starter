import { FilterName, Task } from "../models/app.models";

export const Tasks: Task[] = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false },
];

export const FiltersMap = {
  All: () => true,
  Active: (task: Task) => !task.completed,
  Completed: (task: Task) => task.completed,
};

export const FilterOptions: FilterName[] = Object.keys(
  FiltersMap
) as FilterName[];
