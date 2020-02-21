import React from 'react'

const Form = (props) => {
  return(
    <form onSubmit={props.onButtonSubmit}>
      <input type="text" onChange={props.onInputChange}/>
      <input type="submit" />
    </form>
  )
}

export default Form
