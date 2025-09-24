import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  items: [
    { id: 1, text: 'Learn Redux', completed: false },
    { id: 2, text: 'Learn React', completed: true },
  ],
  filter: 'all',
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    toggleTodo: (state, action) => {
      const todo = state.items.find(t => t.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const { toggleTodo, setFilter, addTodo } = todosSlice.actions;

export default todosSlice.reducer;
