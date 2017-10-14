import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProjectItem extends Component {
  
  deleteProject(id){
    this.props.onDelete(id)
  }
  
  render() {
    
    return (
      
      <ul className="list-group">
        <li className="Project list-group-item">
          <strong>{this.props.project.title}</strong>: {this.props.project.category}<a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}> <i className="fa fa-trash-o"></i></a>
        </li>
      </ul>
    );
  }
}

ProjectItem.propTypes = {
  project: PropTypes.object,
  onDelete: PropTypes.func
}

export default ProjectItem;
