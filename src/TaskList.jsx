import React from 'react';

function TaskList({ tasks, deleteTask, toggleTaskCompletion }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index} onClick={() => toggleTaskCompletion(index)} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
          {task.title}
          <button onClick={(e) => { e.stopPropagation(); deleteTask(index); }}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
