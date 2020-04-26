import React from 'react';
import './App.css';

import TodoItem from './components/TodoItem';
import todosData from './todosData';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState((prevState) => {
      const updatedTodos = prevState.todos.map((todo) => {
        if(todo.id === id) {
          return {
            id: todo.id,
            text: todo.text,
            completed: !todo.completed
          }
        }
        return todo
      });


      return {
        todos: updatedTodos
      };
    })
  }

  render() {

    const title = 'MY TODO APP';
    const titleStyles = {
      color: 'yellow',
      backgroundColor: 'black',
      margin: '0',
      textAlign: 'center',
      padding: 5,
      fontSize: 30,
      fontWeight: 200,
    }

    const TodoItemComponents = this.state.todos.map((todo) => {
      return <TodoItem key={todo.id} todo={todo} handleChange={this.handleChange} />
    });

    return (
      <div className="todo-list">
        <h1 style={titleStyles}>{`${title}`}</h1>
        <div className="todo-items">
          {TodoItemComponents}
        </div>
      </div>
    );
  }
}

export default App;