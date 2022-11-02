import {useState} from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onChange = (event)=>setTodo(event.target.value);
  const onSubmit = (event)=>{
    event.preventDefault();
    if(todo === "") return;
    else{
      setTodos(p=>[todo, ...p]);
      setTodo("");
    }
  }
  return (
    <div>
      <h1>My To Dos ({todos.length})</h1>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder='Write your to do' value={todo} onChange={onChange}/>
        <button>Add To Do</button>
      </form>
      <hr/>
      <ul>{todos.map((val, idx)=><li key={idx}>{val}</li>)}</ul>
    </div>    
  );
}
export default App;