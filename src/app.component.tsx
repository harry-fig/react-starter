import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/home.page";
import TasksPage from "./pages/tasks.page";

function App() {
  return (
    <div className="flex flex-col w-full h-screen">
      <nav className="bg-gray-800 text-white shadow-md">
        <div className="max-w-screen-lg mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-xl font-bold hover:text-gray-300 transition-colors">
              TodoMatic
            </Link>
            <div className="flex gap-6">
              <Link to="/" className="hover:text-gray-300 transition-colors">
                Home
              </Link>
              <Link to="/tasks" className="hover:text-gray-300 transition-colors">
                Tasks
              </Link>
            </div>
          </div>
        </div>
      </nav>
      
      <main className="flex-1 overflow-auto">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tasks" element={<TasksPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
