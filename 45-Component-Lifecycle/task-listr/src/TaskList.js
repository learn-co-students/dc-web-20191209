import React from 'react'
import Task from './Task'

const TaskList = (props) => {
  return(
    props.tasksArray.map(task =>
      <Task key={task.id} task={task} onDeleteTask={props.onDeleteTask}/>
    )
  )
}

export default TaskList
