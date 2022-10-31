import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = ()=>{
    setCounter((prev)=> prev+1);
  }
  const onChange = (e) => setKeyword(e.target.value);
  console.log("Always run");
  useEffect(()=>console.log("Run only one time"), []);
  useEffect(()=>console.log("Run when the counter is changed"), [counter]);
  useEffect(()=>console.log("Run when the keyword is changed"), [keyword]);
  useEffect(()=>console.log("Run when the counter & keyword is changed"), [counter, keyword]);
  return (
    <div className="App">
      <h1 className={styles.title}>Welcome Back!</h1>

      <Button onClick={onClick} text={"Continued"}/>
      <h4>{counter}</h4>
      
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here..."/>
      <h4>{keyword}</h4>
    </div>
  );
}

export default App;
