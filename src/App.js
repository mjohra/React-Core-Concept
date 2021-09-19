import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const names=['Mala','Nannan','Rony','Shovon','azan'];
  const cinemas=[
  {name:"Mala", profession:"Teacher"},
  {name:"Nannan", profession:"Teacher"},
  {name:"Rony" ,profession:"Manager"},
  {name:"Shovon", profession:"Banker"},
  {name:"Mouri", profession:"Unemployed"}

]

  return (
    <div className="App">
      <Counter></Counter>

      {/* <a href="https://www.youtube.com/">Youtube</a>
      <p id="title">Title</p>
     
      <ul>
        {names.map((nam) => (
          <li>{nam}</li>
        ))}
      </ul> */}
        {/* {
            cinemas.map(cinema=><Cinema name={cinema.name} profession={cinema.profession}></Cinema>)
        } */}
    </div>
  );
}

function Counter(){
  const [count,setCount]=useState(0);
console.log(count,setCount);
const handleIncrease=()=>{
  
  setCount(count+1);
}
const handleDecrease=()=>{
  
  setCount(count-1);
}

  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  )
}

function Person(props) {
  console.log(props);
  const person = {
    backgroundColor: "skyblue",
    border: "3px solid lightsalmon",
    margin: "20px",
    borderRadius: "20px",
  };
  return (
    <div className="person">
      <h1>Name:{props.name}</h1>
      <h4>Profession:{props.profession}</h4>
    </div>
  );
}

function Cinema(props){
  return(
    <div className="person">
      <h2>Name:{props.name}</h2>
      <h4>Profession:{props.profession}</h4>
    </div>
  );
}

export default App;

/*    <Person name={names[0]} profession="Teacher"></Person>
      <Person name={names[1]} profession="Teacher"></Person>
      <Person name={names[2]} profession="Manager"></Person>
      <Person name={names[3]} profession="Banker"></Person> */
