import Draggable from 'react-draggable';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Todo.css';

export default function Todo({ todo, index, markTodo, removeTodo }) {
  const showDoneToast = () =>
    toast.success('Done with that', {
      position: 'bottom-left',
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });

  const showDeletedToast = () =>
    toast.info('Deleted', {
      position: 'bottom-left',
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });

  return (
    <Draggable axis="y" handle="#handle">
      <div className="todo-item">
        <span>{todo.text}</span>
        <div>
          <span id="handle"> :: Reorder :: </span>
          <button
            id="mark-todo"
            onClick={(e) => {
              showDoneToast();
              markTodo(e, index);
            }}
          >
            ✓
          </button>

          <button
            id="remove-todo"
            onClick={() => {
              showDeletedToast();
              removeTodo(index);
            }}
          >
            ✕
          </button>
        </div>
      </div>
    </Draggable>
  );
}
