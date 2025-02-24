import React from "react";

const TodoInput = ({ inputValue, setInputValue, setList }) => {
  const addItemHandler = () => {
    if (inputValue.trim() === "") return;
    setList((prev) => [...prev, { key: Date.now(), text: inputValue }]);
    setInputValue("");
  };

  return (
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
  );
};

export default TodoInput;
