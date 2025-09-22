**React Redux Todo App**

<!-- Overview -->

The Todo App is a simple task management application built with React and Redux. 
Users can:
    - Add new todos.
    - Toggle completion of todos.
    - Delete todos.
    - Fetch initial todos from an API (simulated or real).
The app demonstrates state management with Redux, asynchronous actions, and React hooks like useState and useEffect.

<!-- Features -->

- Add todos with text input.
- Toggle todo completion by clicking on the task.
- Delete todos individually.
- Fetch initial todos using asynchronous Redux action (fetchTodos).
- Loading and error handling while fetching todos.

<!-- Tech Stack -->

- React – Front-end UI library.
- Redux & Redux Toolkit – State management.
- React-Redux – Binding for React and Redux.
- JavaScript (ES6+) – Modern JavaScript features.
- Vite / Create React App – Development build tool.

<!-- Installation -->
# Clone the repository
git clone https://github.com/yourusername/react-redux-todo-app.git

# Navigate into the project folder
cd react-redux-todo-app

# Install dependencies
npm install

# Start development server
npm run dev

<!-- Usage -->

- Type a task in the input field.
- Click Add or press Enter to add the todo.
- Click on a todo item to toggle completion (line-through effect).
- Click the Delete button to remove a todo.
- On initial load, todos are fetched from the API automatically.

<!-- File Structure -->
src/
├─ App.jsx          # Main React component
├─ slice.jsx        # Redux slice with actions and reducers
├─ store.jsx        # Redux store setup
├─ index.css        # Styling

<!-- Code Highlights -->

- useState – For controlled input fields.
- useEffect – Fetch todos on component mount.
- useSelector – Access Redux state (items, loading, error).
- useDispatch – Dispatch Redux actions (addTodo, toggleTodo, deleteTodo, fetchTodos).
- Conditional Rendering – Show loading or error messages.
- Dynamic styling – Line-through completed todos.

**HAPPY CODING**