import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

// We can replace below sentences with createAction method
// const ADD = "ADD";
// const DELETE = "DELETE";
// 
// export const addToDo = (text) => {
//   return {
//     type: ADD,
//     text
//   }
// }
// export const deleteToDo = (id) => {
//   return {
//     type: DELETE,
//     id
//   }
// }

export const addToDo = createAction("ADD");
export const deleteToDo = createAction("DELETE");

console.log(addToDo(), deleteToDo())

// const reducer = (state = [], action) => {
//    switch(action.type){
//     case addToDo.type:
//       return [{ text: action.payload, id: Date.now() }, ...state];
//     case deleteToDo.type:
//       return state.filter(toDo => toDo.id !== action.payload);
//     default:
//       return state;
//    }
// }

const reducer = createReducer([], {
  [addToDo]: (state, action) => {
    state.push({ text: action.payload, id: Date.now() })
  },
  [deleteToDo]: (state, action) =>
    state.filter(toDo => toDo.id !== action.payload)
})

const store = configureStore({reducer});

export default store;