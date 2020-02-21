import React, { Component } from 'react';
import Form from './Form'
import TaskList from './TaskList'

// const sampleTasks = [
//   {id:1, text: "wake up"},
//   {id:2, text: "eat lunch"},
//   {id:3, text: "go to sleep"}
// ]

class App extends Component {
  constructor(){
    super()
    this.state = {
      formText: '',
      tasksArray: []
    }
    console.warn("App constructor")
  }

  //onload of App, we want to make a fetch call
  //update the state of tasksArray
  //make sure the DOM shows the three tasks
  componentDidMount(){
    console.warn("App componentDidMount")
    fetch('http://localhost:4000/tasks')
    .then(res => res.json())
    .then(tasks => {
      this.setState({
        tasksArray: tasks
      })
    })
  }

  //when click of a X, I want to make a DELETE fetch,
  //update the state of tasksArray
  onDeleteTask = (id) => {
    console.log("delete me", id)
    let newTasksArray = this.state.tasksArray.filter(task => task.id !== id) // an exact copy of taskArray but remove the task
    this.setState({
      tasksArray: newTasksArray
    })
    fetch(`http://localhost:4000/tasks/${id}`, {
      method: "DELETE"
    })
  }

  //when submit of the form, make a POST fetch
  //update the state of tasksArray, show new task on DOM
  onAddNewTask = (event) => {
    event.preventDefault()
    fetch('http://localhost:4000/tasks', {
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
        "Accept" : "application/json"
      },
      body: JSON.stringify({
        text: event.target.firstChild.value
      })
    }).then(res => res.json())
    .then(newTask => {
      // console.log(newTask)
      this.setState({tasksArray: [...this.state.tasksArray, newTask] })
    })
    //new taskArray should be an exact copy of the old state but with the new task pushed in
  }

  componentDidUpdate(){
    console.warn("App componentDidUpdate")
  }

  //state changing callback
  onTypingChange = (event) => {
    this.setState({
      formText : event.target.value
    })
  }

  render() {
    console.warn("App render")
    return (
      <div className="App">
        <Form
          onInputChange={this.onTypingChange}
          onButtonSubmit={this.onAddNewTask}
        />
        <TaskList
          onDeleteTask={this.onDeleteTask}
          tasksArray={this.state.tasksArray}
        />
      </div>
    );
  }
}

export default App;
