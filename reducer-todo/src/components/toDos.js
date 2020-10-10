import React, { Component, useReducer } from 'react';
const red = require('../reducers/reducer');



function Todos(props) {

    // const [state, dispatch] = useReducer(red.itemReducer, red.listItems);

    const items = props.state;
    

    const list = items.map((item) => (

        <h3 class="listItems" class={item.completed ? "complete" : ""} onClick={() => props.markComplete(item.id)}>{item.item}</h3>
    ))

    return(
        <div>
            <h1>To Do List</h1>
            {list}
        </div> 
    )
}

export default Todos