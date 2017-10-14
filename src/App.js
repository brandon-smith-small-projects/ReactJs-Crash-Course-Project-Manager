import React, { Component } from 'react';
import uuid from 'uuid';
import Projects from './components/projects';
import AddProject from './components/AddProject';
import './App.css';

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      projects: []
    }
  }
  
  handleAddProject(project){
   let projects = this.state.projects;
   projects.push(project)
   this.setState({projects:projects});
  }
  
  handleDeleteProject(id){
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({projects:projects});
  }
  
  getTodos(){
    
  }
  
  getProjects(){
    this.setState({projects: [
      {
        id:uuid.v4(),
        title: 'Business Website',
        category: 'Web Deisgn'
      },
      {
        id:uuid.v4(),
        title: 'Social App',
        category: 'Mobile Development'
      },
      {
        id:uuid.v4(),
        title: 'Ecommerce Shopping Cart',
        category: 'Web Development'
      }
    ]});
  }
  
  componentWillMount(){
    this.getProjects();
    this.getTodos();
  }
  
  componentDidMount(){
    this.getTodos()
  }
  
  
  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)}/>
        {console.log(this.state)}
        <Projects onDelete={this.handleDeleteProject.bind(this)} projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
