import { useState } from 'react';

const TodoList = () => {
  const [task, setTask] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
  }

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <div className="input">
        <input
        type="text"
        required
        value={task}
        onChange={(e) => setTask(e.target.value)}/>
        <button onClick={handleClick}>Add</button>
      </div>
      <div className="list">
        <ul></ul>
      </div>
    </div>
  );
}

export default TodoList;