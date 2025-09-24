import { createSelector } from '@reduxjs/toolkit';

export const selectTodos = state => state.todos.items;
export const selectFilter = state => state.todos.filter;

export const selectFilteredTodos = createSelector(
  [selectTodos, selectFilter],
  (todos, filter) => {
    console.log('Calculating filtered todos');  // Only logs when todos or filter changes
    if (filter === 'completed') return todos.filter(todo => todo.completed);
    if (filter === 'incomplete') return todos.filter(todo => !todo.completed);
    return todos;
  }
);
