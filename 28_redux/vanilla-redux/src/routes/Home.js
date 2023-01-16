import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToDo, deleteToDo } from "../store";

function Home(){
  const [text, setText] = useState("");
  const todo = useSelector((state) => state);
  const dispatch = useDispatch();

  const onChange = (e) => {
    setText(e.target.value);
  }
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addToDo(text));
    setText("");
    console.log(todo);
  }
  
  return(
    <>
      <h1>TO DO LIST</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange}/>
        <button>Add</button>
      </form>
      <ul>
        {todo.map((val, idx)=>{
          return <li key={idx}>{val.text} <button onClick={()=>dispatch(deleteToDo(val.id))}>X</button></li>
        })}
      </ul>
    </>
  )
}

export default Home;