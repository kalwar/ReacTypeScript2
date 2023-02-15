import React, { useRef } from 'react';
import './NewTodo.css';

type NewTodoProps = {
  state: string;
  text: string;
  onSubmitTodo: (todoText: string) => void; // function type
  onChangeTodo: (todoText: string) => void; // function type
};

const NewTodo: React.FC<NewTodoProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value.trim();
    if (enteredText) props.onSubmitTodo(enteredText);
  };

  const todoChangeHandler = (event: React.ChangeEvent) => {
    event.preventDefault();
    props.onChangeTodo((event.target as HTMLInputElement).value);
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div className="form-control">
        <label htmlFor="todo-text">Todo Text</label>
        <input
          type="text"
          id="todo-text"
          ref={textInputRef}
          value={props.text}
          onChange={todoChangeHandler}
        />
      </div>
      <div>
        {props.state !== 'edit' && <button type="submit">Add Todo</button>}
        {props.state === 'edit' && <button type="submit">Update Todo</button>}
      </div>
    </form>
  );
};

export default NewTodo;

