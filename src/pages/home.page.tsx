import { Link } from "react-router-dom";

function HomePage() {
  return (
    <section className="flex flex-col items-center justify-center w-full h-full p-8">
      <div className="flex flex-col items-center gap-8 max-w-2xl text-center">
        <h1 className="text-4xl font-bold">Welcome to TodoMatic</h1>
        <p className="text-lg text-gray-600">
          A simple and efficient task management application built with React, TypeScript, and Tailwind CSS.
        </p>
        <Link
          to="/tasks"
          className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Go to Tasks
        </Link>
      </div>
    </section>
  );
}

export default HomePage;
