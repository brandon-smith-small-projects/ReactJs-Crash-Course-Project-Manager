import React, { Component } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';
class AddProject extends Component {
  
  
  constructor(props){
      super(props)
      this.state = {
          newProject:{}
      }
  }
  
  static defaultProps ={
      categories: ['Web Design', 'Web Development', 'Mobile Development']
  }
  
  handleSubmit(e){
      if(this.refs.title.value === ''){
          alert('Title Is Required')
      } else {
          this.setState({newProject:{
              id: uuid.v4(),
              title: this.refs.title.value,
              category: this.refs.category.value
          }}, function() {
            //   console.log(this.state);
            this.props.addProject(this.state.newProject);
          })
      }
      e.preventDefault();
  }
  
  render() {
      let categoryOptions = this.props.categories.map(category => {
          return <option key={category} value={category}>{category}</option>
      })
    return (
      <div >
        <h3 className="text-center">Add Project</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
            <div className="form-group">
                <label>Title</label>
                <input className="form-control" type="text" ref="title" />
                <br />
            </div>
            <div className="form-group">
                <label>Category</label>
                <select className="form-control" ref="category">
                    {categoryOptions}
                </select>
            </div>
            <input className="btn btn-dark btn-block" type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

AddProject.propTypes = {
  categories: PropTypes.array,
  addProject: PropTypes.func
}

export default AddProject;
