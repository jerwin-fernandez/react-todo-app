import React from 'react';


function TodoItem(props) {


    const completedStyle = {
      textDecoration: 'line-through',
      color: 'grey',
      fontStyle: 'italic',
    };

    return (
      <div className="todo-item" style={ props.todo.completed ? completedStyle : null } >
        <label>
          <input 
            type="checkbox" 
            checked={props.todo.completed} 
            onChange={() => { props.handleChange(props.todo.id) }}
          /> 
          <p>{props.todo.text}</p></label>
      </div>
    );
}

export default TodoItem;