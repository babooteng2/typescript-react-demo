import React, { useState } from "react";
import Number from "./Number";

function App() {
  const [counter, setCounter] = useState(0);
  const add = () => {
     setCounter(prev=>(prev + 1))
  }
  return (    
    <div>
      <h2><Number count={counter}/></h2>
      <button type="button" onClick={add}>Add</button>
    </div>
  )
}

export default App;
