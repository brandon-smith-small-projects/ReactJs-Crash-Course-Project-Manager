import React, { Component } from 'react';
import Projects from './components/projects';
import './App.css';

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      projects: []
    }
  }
  
  componentWillMount(){
    this.setState({projects: [
      {

        title: 'Business Website',
        category: 'Web Deisgn'
      },
      {

        title: 'Social App',
        category: 'Mobile Development'
      },
      {
        title: 'Ecommerce Shopping Cart',
        category: 'Web Development'
      }
    ]});
  }
  
  render() {
    return (
      <div className="App">
        My App
        {console.log(this.state)}
        <Projects projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
