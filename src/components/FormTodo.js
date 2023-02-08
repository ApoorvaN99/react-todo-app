import { useState } from 'react';

export default function FormTodo({ addTodo }) {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
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
