import './App.css';
import { useState } from 'react';
import Todo from './components/Todo';
import FormTodo from './components/FormTodo';

export default function App() {
  const [todos, setTodos] = useState([
    {
      text: 'this is dummy todo. Psst... remove me!',
      isDone: false,
    },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text: text, isDone: false }];
    setTodos(newTodos);
  };

  const markTodo = (index) => {
    let newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="container">
      <h1 className="heading">THINGS TO DO</h1>
      <FormTodo addTodo={addTodo} />
      <section>
        <h3>Things left to be done:</h3>
        <div className="todo-list">
          {todos.map((todo, i) =>
            todo.isDone === false ? (
              <Todo
                key={i}
                todo={todo}
                index={i}
                markTodo={markTodo}
                removeTodo={removeTodo}
              />
            ) : null
          )}
        </div>
      </section>

      <section>
        <h3>Things taken care of:</h3>
        <div className="completed-tasks-list">
          {todos.map((task, i) =>
            task.isDone === true ? (
              <li key={i}>
                {task.text}
                <button id="mark-todo">✓</button>
              </li>
            ) : null
          )}
        </div>
      </section>

      {/* <div>
        <button>Deleted tasks</button>
      </div> */}
    </div>
  );
}
