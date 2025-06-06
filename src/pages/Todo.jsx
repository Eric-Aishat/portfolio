

import React, { useState } from 'react';

const Todo = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAdd = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const handleDelete = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-white dark:bg-gray-800 rounded shadow-md mt-10">
      <h2 className="text-2xl font-bold text-center mb-6 text-classicNavy dark:text-white">ToDo App</h2>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
          className="flex-1 px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-classicGold dark:bg-gray-700 dark:text-white"
        />
        <button
          onClick={handleAdd}
          className="bg-classicGold text-white px-4 py-2 rounded hover:bg-yellow-600"
        >
          Add
        </button>
      </div>
      <ul className="space-y-2">
        {tasks.map((t, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-gray-100 dark:bg-gray-700 p-2 rounded"
          >
            <span className="text-classicNavy dark:text-white">{t}</span>
            <button
              onClick={() => handleDelete(index)}
              className="text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;