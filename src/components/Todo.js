export default function Todo({ todo, index, markTodo, removeTodo }) {
  return (
    <div className="todo-item">
      <span>{todo.text}</span>
      <div>
        <button id="mark-todo" onClick={() => markTodo(index)}>
          ✓
        </button>
        <button id="remove-todo" onClick={() => removeTodo(index)}>
          ✕
        </button>
      </div>
    </div>
  );
}
