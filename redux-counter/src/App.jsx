import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from "./components/Counter";

function App() {
    return (
        <div className="App">
            <h1>React-Redux Counter App</h1>
            <Counter />
        </div>
    );
}
export default App
