import { Fragment } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

function Details(){
  const params = useParams();
  const todo = useSelector((state) => {
    return state.find(todos => todos.id === parseInt(params.id));
  });
  console.log(todo)
  return <Fragment>
    <h1>{todo.text}</h1>
    <p>created time : {todo.id}</p>
  </Fragment>
}export default Details;