import React, { Component } from 'react';
import ProjectItem from "./projectItem";
import PropTypes from 'prop-types';

class Projects extends Component {
  
  deleteProject(id){
    this.props.onDelete(id)
  }
  
  render() {
    
    let projectItems;
  
    if(this.props.projects){
      projectItems = this.props.projects.map(project => {
          return( 
              <ProjectItem onDelete={this.deleteProject.bind(this)} key={project.title} project={project} />
          );
      });
    }
    
    return (
      <div className="Projects">
        <h3 className="text-center">Latest Projects</h3>
        {projectItems}
      </div>
    );
  }
}

Projects.propTypes = {
  projects: PropTypes.arary,
  onDelete: PropTypes.func
}
export default Projects;
