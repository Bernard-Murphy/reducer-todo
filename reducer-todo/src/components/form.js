import React, { Component, useReducer } from 'react';
const red = require('../reducers/reducer');

const Form = (props) => {
    const [state, dispatch] = useReducer(red.itemReducer, red.listItems);


    return (
        <div id="form">
            <input onChange={props.inputChange}/>
            <button onClick={props.addClick}>Add item</button>
            <button onClick={props.remClick}>Remove completed</button>
        </div>
    )
}

export default Form