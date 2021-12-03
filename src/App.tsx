import React, { useEffect, useState, SyntheticEvent, FormEvent } from "react";
import { Form, Input } from "./Input";
import Number from "./Number";

interface IState {
  counter: number;
  name: string;
}

function App() {
  const [states, setStates] = useState<IState>({counter:0, name:""});  
  const add = () => {
     setStates(prev=>(
       {...prev, counter:prev.counter + 1 }
      ))
  }
  const onChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const {currentTarget:{value}} = e; 
    setStates((prev) => ({ ...prev, name: value }));
  };
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    // console.log( states.name, states.counter );
    setStates({counter:0, name:"" })
  };

  useEffect(()=>{
    setStates({counter:0, name:""})
  },[])
  return (
    <div>
      <Form onSubmit={onSubmit}>
        <Input value={states.name} onChange={onChange}/>
        <h2><Number count={states.counter}/></h2>
        <button type="button" onClick={add}>Add</button>
        <button type="submit">submit</button>
      </Form>
    </div>
  )
}

export default App;
