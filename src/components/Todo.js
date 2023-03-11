import Draggable from 'react-draggable';
import './Todo.css';

export default function Todo({ todo, index, markTodo, removeTodo }) {
  return (
    <Draggable axis="y" handle="#handle">
      <div className="todo-item">
        <span>
          <span id="handle"> :: </span>
          {todo.text}
        </span>
        <div>
          <button id="mark-todo" onClick={() => markTodo(index)}>
            ✓
          </button>
          <button id="remove-todo" onClick={() => removeTodo(index)}>
            ✕
          </button>
        </div>
      </div>
    </Draggable>
  );
}
