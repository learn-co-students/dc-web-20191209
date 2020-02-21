import React from 'react'

class Task extends React.Component {
  constructor(props){
    super(props)//how to initialize state based on initial props
    this.state = {
      color: "black"
    }
    console.warn(`Task #${props.task.id} constructor`)
  }

  //when click of a task, make a state change, and text should be green
  changeColorToGreen = () => {
    this.setState({color: "green"})
  }

  componentWillUnmount(){
    console.warn(`Task #${this.props.task.id} componentWillUnmount`)
  }

  componentDidMount(){
    console.warn(`Task #${this.props.task.id} componentDidMount`)
  }

  componentDidUpdate(){
    console.warn(`Task #${this.props.task.id} componentDidUpdate`)
  }

  render(){
    console.warn(`Task #${this.props.task.id} render`)
    return(
      <div>
        <b onClick={this.changeColorToGreen} style={{color: this.state.color}}>
          {this.props.task.text}
        </b>
        <button onClick={()=>this.props.onDeleteTask(this.props.task.id)}>x</button>
      </div>
    )
  }
}

export default Task
