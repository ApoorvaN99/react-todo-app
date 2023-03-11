import './Home.css';
import { useState, useEffect } from 'react';
import Todo from './Todo';
import FormTodo from './FormTodo';

export default function Home() {
  const [todos, setTodos] = useState([
    {
      text: 'this is dummy todo. Psst... remove me!',
      isDone: false,
    },
  ]);

  useEffect(() => {
    const data = window.localStorage.getItem('TODO_APP_STATE');
    if (data !== null) setTodos(JSON.parse(data));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('TODO_APP_STATE', JSON.stringify(todos));
  }, [todos]);

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
    <div className="todo-container">
      <h1 className="heading">THINGS TO DO</h1>
      <FormTodo addTodo={addTodo} />
      <section>
        <h3>Things left to be done</h3>
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
        <h3>Things taken care of</h3>
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
