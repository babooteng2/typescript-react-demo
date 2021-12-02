import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const add = () => {
     setCounter(prev=>(prev + 1))
  }
  return (    
    <div>
      <h2>{counter}</h2>
      <button type="button" onClick={add}>Add</button>
    </div>
  )
}

export default App;
