import { useState } from "react";
import Filters from "./components/Filters";
import Form from "./components/Form";
import TaskList from "./components/TaskList";
import { FilterOptions } from "./constants/data.const";
import { FilterName } from "./models/app.models";

function App() {
  const [newTaskName, setNewTaskName] = useState("");
  const [selectedFilter, setSelectedFilter] = useState(FilterOptions[0]);

  function handleAddTask(name: string) {
    if (name) {
      setNewTaskName(name);
    }
  }

  function handleChangeFilter(selectedFilter: FilterName): FilterName {
    setSelectedFilter(selectedFilter);
    return selectedFilter;
  }

  return (
    <section className="w-full h-full p-8 flex flex-col">
      <div className="w-full h-full p-8 max-w-screen-lg mx-auto flex flex-col gap-10">
        <h1 className="text-xl font-bold">TodoMatic</h1>
        <Form addTask={handleAddTask} />
        <Filters changeFilter={handleChangeFilter} />
        <TaskList newTaskName={newTaskName} selectedFilter={selectedFilter} />
      </div>
    </section>
  );
}

export default App;
