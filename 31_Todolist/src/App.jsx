import "./App.css";
import { useState } from "react";
import TodoItem from "./components/TodoItem";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState([]);

  const addItemHandler = () => {
    if (inputValue.trim() === "") return;
    setList((prev) => [...prev, { key: Date.now(), text: inputValue }]);
    setInputValue("");
  };

  const deleteItemHandler = (idx) => {
    setList((prev) => prev.filter((_, index) => idx !== index));
  };

  return (
    <div className="App" style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ width: "15vw" }}>
        <div>
          <input
            type="input"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") addItemHandler();
            }}
          />
          <button onClick={addItemHandler}>등록</button>
        </div>
        <ul style={{ width: "50%" }}>
          {list.map((item, idx) => {
            return (
              <TodoItem
                key={item.key}
                text={item.text}
                deleteFunc={() => deleteItemHandler(idx)}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
