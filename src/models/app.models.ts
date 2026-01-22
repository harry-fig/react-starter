import { FiltersMap } from "../constants/data.const";

export interface Task {
  id: string;
  name: string;
  completed: boolean;
}

export interface AppProps {
  tasks: Task[];
}

export interface TaskListProps {
  filteredTasks: Task[];
  toggleTaskCompletedCallback: (task: Task) => Task;
  editTaskCallback: (task: Task) => Task;
  deleteTaskCallback: (task: Task) => Task;

}

export interface FormProps {
  addTask: (name: string) => void;
}

export interface TodoProps {
  task: Task;
  toggleTaskCompleted: (task: Task) => Task;
  deleteTask: (task: Task) => void;
  editTask: (task: Task) => Task;
}

export interface FiltersProps {
  changeFilter: (filter: FilterName) => FilterName;
}

export type FilterName = keyof typeof FiltersMap; // "All" | "Active" | "Completed"
