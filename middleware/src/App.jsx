import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch({
      type: "LOGIN",
      payload: { name: "Neelima", token: "jwt-token-123" }
    });
  };

  const callApi = () => {
    dispatch({ type: "API_CALL", payload: { url: "/posts", headers: {} } });
  };

  return (
    <div>
      <h1>User: {user.name}</h1>
      <button onClick={handleLogin}>Login</button>
      <button onClick={callApi}>Call API</button>
    </div>
  );
};

export default App;



