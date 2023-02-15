import React, { useState } from 'react';
import TodoList from './Components/TodoList';
import NewTodo from './Components/NewTodo';
import { Todo } from './todo.model';

const App: React.FC = () => {
  //const todos = [{ id: 't1', text: 'Finish TS project and course' }];
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text: text },
    ]);
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      {/* A component that adds todos  */}

      <TodoList items={todos} />
    </div>
  );
};

export default App;
