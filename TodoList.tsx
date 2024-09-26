import React, { useState } from 'react';

const TodoList: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const handleAddTask = () => {
    if (inputValue.trim() === '') return; // Prevent adding empty tasks
    setTasks([...tasks, inputValue.trim()]);
    setInputValue(''); // Clear input field after adding
  };

  const handleRemoveTask = (index: number) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="todo-list">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={handleAddTask}>Add</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleRemoveTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
