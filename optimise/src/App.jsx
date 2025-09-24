import { useState , useCallback , useMemo} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react';
import './App.css'


// const DisplayCount = React.memo(({ count }) => {
//   console.log("Rendering DisplayCount:", count);
//   return <div>Count: {count}</div>;
// });

// function App() {
//   const [count, setCount] = useState(0);
//   const [name, setName] = useState("Neelima");

//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>Increment Count</button>
//       <button onClick={() => setName(name === "Neelima" ? "Dhruv" : "Neelima")}>
//         Change Name
//       </button>

//       <DisplayCount count={count} />
//       <div>Name: {name}</div>
//     </div>
//   );
// }



// const Button = React.memo(({ onClick, label }) => {
//   console.log("Rendering Button:", label);
//   return <button onClick={onClick}>{label}</button>;
// });

// function App() {
//   const [count, setCount] = useState(0);
//   const [name, setName] = useState("Neelima");

  
//   const increment = useCallback(() => {
//     setCount((c) => c + 1);
//   }, []); 

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <h2>Name: {name}</h2>
//       <Button onClick={increment} label="Increment" />
//       <button onClick={() => setName(name === "Neelima" ? "Dhruv" : "Neelima")}>
//         Change Name
//       </button>
//     </div>
//   );
// }


// function App() {
//   const [count, setCount] = useState(0);
//   const [name, setName] = useState("Neelima");


//   const factorial = (n) => {
//     console.log("Computing factorial...");
//     return n <= 1 ? 1 : n * factorial(n - 1);
//   };

  
//   const fact = useMemo(() => factorial(count), [count]);

//   return (
//     <div>
//       <h1>Factorial of {count} is {fact}</h1>
//       <h1>{name}</h1>
//       <button onClick={() => setCount(count + 1)}>Increment Count</button>
//       <button onClick={() => setName(name === "Neelima" ? "Dhruv" : "Neelima")}>
//         Change Name
//       </button>
//     </div>
//   );
// }



// const ListItem = React.memo(({ item }) => {
//   console.log("Rendering:", item.name);
//   return <li>{item.name}</li>;
// });

// function App() {
//   const [count, setCount] = React.useState(0);
//    const items = React.useMemo(() => [{ name: "Apple" }, { name: "Banana" }], []);

//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>Count {count}</button>
//       <ul>
//         {items.map((item, idx) => (
//           <ListItem key={idx} item={item} />
//         ))}
//       </ul>
//     </div>
//   );
// }

const Child = React.memo(({ value }) => {
  console.log("Child rendering");
  return <div>{value}</div>;
});

function App() {
  const [count, setCount] = React.useState(0);
  const [name, setName] = React.useState("Neelima");

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment {count}</button>
      <button onClick={() => setName(name === "Neelima" ? "Dhruv" : "Neelima")}>
        Change Name
      </button>
      <Child value={count} />
    </div>
  );
}


export default App;
