import "./App.css";
import { useState } from "react";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState([]);

  return (
    <div className="App" style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ width: "15vw" }}>
        <TodoInput
          inputValue={inputValue}
          setInputValue={setInputValue}
          setList={setList}
        />
        <TodoList list={list} setList={setList} />
      </div>
    </div>
  );
}

export default App;
