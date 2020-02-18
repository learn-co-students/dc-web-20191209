import React from 'react'

//problem Comment needs to be dynamic
//Comments should be passed some variable data

//functional component
const Comment = (props) => {
  console.log("Comment", props)
  return (
    <p className="comment">
      {props.data.content} - {props.data.author}
    </p>
  )
}

export default Comment


/*

function run(){
  add(1, 2)
  add(3, 4)
  add(5, 6)
}


function add(a, b){
  console.log(a + b)
}

*/
