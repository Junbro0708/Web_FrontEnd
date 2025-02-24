import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ list, setList }) => {
  const deleteItemHandler = (idx) => {
    setList((prev) => prev.filter((_, index) => idx !== index));
  };

  return (
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
  );
};

export default TodoList;
