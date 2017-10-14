import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  
  render() {
    
    return (
      
      <ul className="list-group">
          <li className="Todo list-group-item">
            <strong>{this.props.todo.title}</strong>
          </li>
      </ul>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object,
}

export default TodoItem;
