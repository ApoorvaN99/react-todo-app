import './App.css';
import { useState } from 'react';
import Todo from './components/Todo';
import FormTodo from './components/FormTodo';

export default function App() {
  const [todos, setTodos] = useState([
    {
      text: 'this is dummy todo',
      isDone: false,
    },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const markTodo = (index) => {
    let newTodos = [...todos];
    newTodos[index].isDone = true;
    newTodos[index].text += ' [DONE]';
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
      <h3>Things left to be done:</h3>
      <div className="todo-list">
        {todos.map((todo, i) => (
          <Todo
            key={i}
            todo={todo}
            index={i}
            markTodo={markTodo}
            removeTodo={removeTodo}
          />
        ))}
      </div>
    </div>
  );
}
