import React,{useState} from 'react';
import { BrowserRouter,Routes,Link } from 'react-router-dom';
import {apples,Oranges,Strawberries,Bananas}from "./pages";


function FruitCounter(props) {
  let [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count > 0 ? count - 1 : 0);
  }

  function handleInputChange(e) {
    let value = parseInt(e.target.value, 10);
    setCount(isNaN(value) || value < 0 ? 0 : value);
  };

  return (
    <div>
      <h2>{props.name}: {count}</h2>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      <input 
        type="number" 
        value={count} 
        onChange={handleInputChange} 
      />
      <BrowserRouter>
      <Routes>
        <link > index element={<apples/>}</link>
        <link> path="/apples" element={<apples />} </link>
        <link > index element={<Oranges/>}</link>
        <link> path="/Oranges" element={<Oranges />} </link>
        <link > index element={<Bananas/>}</link>
        <link> path="/Bananas" element={<Bananas />} </link>
        <link > index element={<Strawberries/>}</link>
        <link> path="/Strawberries" element={<Strawberries />} </link>
       
      </Routes>
      </BrowserRouter>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Farm Harvest Counter</h1>
      
      <FruitCounter name="Apples" />
      <FruitCounter name="Bananas" />
      <FruitCounter name="Oranges" />
      <FruitCounter name="Strawberries" />
    </div>
  );
}

export default App;
