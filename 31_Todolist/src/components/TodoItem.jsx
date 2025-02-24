import React, { useState } from "react";

const TodoItem = ({ text, deleteFunc }) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <li>
      <input
        type="checkbox"
        value={isChecked}
        onChange={() => setIsChecked((prev) => !prev)}
      />
      <span
        style={{
          textDecoration: isChecked ? "line-through" : "none",
          color: isChecked ? "red" : "black",
        }}
      >
        {text}
      </span>
      <button onClick={deleteFunc}>삭제</button>
    </li>
  );
};

export default TodoItem;
