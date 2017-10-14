import React, { Component } from 'react';
import uuid from 'uuid';
import $ from 'jquery';
import Projects from './components/projects';
import Todos from './components/todos';
import AddProject from './components/AddProject';
import './App.css';

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      projects: [],
      todos: []
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
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos',
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({todos: data}, function(){
          console.log(this.state);
        })
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err)
      }
    })
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
        <hr />
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
