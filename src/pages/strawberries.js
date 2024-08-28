import React from "react";
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
    };}
    function App() {
        return (
          <div className="App">
            <h1>Strawberry</h1>
            
           
            <FruitCounter name="strawberries" />
            
          </div>
        );
      }
      
      export default App;