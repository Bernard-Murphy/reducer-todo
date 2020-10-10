import React, { useState, useReducer } from 'react';
import logo from './logo.svg';
import './App.css';
import { itemReducer, listItems } from './reducers/reducer';
import Todos from './components/toDos';
import Form from './components/form';
const red = require('./reducers/reducer');


function App() {

  const [text, setText] = useState("");
  const [state, dispatch] = useReducer(red.itemReducer, red.listItems);

  const inputChange = event => {
    setText(event.target.value);
  }

  const markComplete = (id) => {
    dispatch({ type: 'mark complete', id: id })
  }

  const addClick = event => {
    if (text.length !== 0){
      dispatch({type: "add item", payload: {item: text, completed: false, id: Math.floor(Math.random()*90000000) + 10000000}});
      setText("");
    }
  }

  const remClick = () => {
    dispatch({type: 'remove completed'})
  }

  return (
    <div className="App">
      <Todos markComplete={markComplete} state={state}/>
      <Form inputChange={inputChange} addClick={addClick} remClick = {remClick}/>
    </div>
  );
}

export default App;
