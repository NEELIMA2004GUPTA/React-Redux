import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, setFilter } from './todosSlice';
import { selectFilteredTodos, selectFilter } from './selectors';

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector(selectFilteredTodos);
  const filter = useSelector(selectFilter);

  console.log('Rendering TodoList'); // Will only log when filtered todos change

  return (
    <div>
      <h2>Todos</h2>
      <div>
        <button onClick={() => dispatch(setFilter('all'))}>All</button>
        <button onClick={() => dispatch(setFilter('completed'))}>Completed</button>
        <button onClick={() => dispatch(setFilter('incomplete'))}>Incomplete</button>
      </div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(toggleTodo(todo.id))}
            />
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(TodoList); 
