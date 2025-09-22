import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const user = useSelector(state => state.user);
  const posts = useSelector(state => state.posts);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>User: {user.name}</h1>
      <h2>Posts: {posts.posts.length}</h2>
      <button onClick={() => dispatch({ type: "LOGIN", payload: "Neelima" })}>Login</button>
    </div>
  );
};


export default App
