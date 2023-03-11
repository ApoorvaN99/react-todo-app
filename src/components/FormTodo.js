import { useState } from 'react';
import './FormTodo.css';

export default function FormTodo({ addTodo }) {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="todo-form">
        <input
          type="text"
          placeholder="Add a todo item..."
          onChange={(e) => {
            setValue(e.target.value);
          }}
          value={value}
        ></input>
        <button type="submit">Add todo</button>
      </form>
    </>
  );
}
