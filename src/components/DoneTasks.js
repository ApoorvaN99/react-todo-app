import { useState } from 'react';
import './DoneTasks.css';

export default function DoneTasks({ todos }) {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <button className="expand" onClick={() => setOpen(!isOpen)}>
        {isOpen ? 'Collapse' : 'Expand'}
      </button>
      {isOpen && (
        <div className="completed-tasks-list">
          {todos.map((task, i) =>
            task.isDone === true ? (
              <li key={i}>
                {task.text}
                <span>✔</span>
              </li>
            ) : null
          )}
        </div>
      )}
    </>
  );
}
