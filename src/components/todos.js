import React, { Component } from 'react';
import TodoItem from "./todoItem";
import PropTypes from 'prop-types';

class Todos extends Component {
  
  render() {
    
    let todoItems;
  
    if(this.props.todos){
      todoItems = this.props.todos.map(todo => {
          return( 
              <TodoItem key={todo.title} todo={todo} />
          );
      });
    }
    
    return (
      <div className="Todos">
        <h3 className="text-center display-4">To Do List</h3>
        {todoItems}
      </div>
    );
  }
}

Todos.propTypes = {
  todos: PropTypes.arary,
}
export default Todos;
