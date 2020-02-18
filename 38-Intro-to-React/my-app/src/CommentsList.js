import React from 'react'                    //import React, {Component} from 'react'
import Comment from './Comment'

const commentData = [
  {id: 1, content: "Hello", author: "Shannon"},
  {id: 2, content: "Hi", author: "JC"},
  {id: 3, content: "Sup", author: "Paul"},
  {id: 4, content: "WEEE", author: "Su"}
]

//class component
class CommentsList extends React.Component { //extends Component
  render(){
    console.log("CommentList", this.props)
    return (
      <div className="comments" disabled={true}>CommentsList Component
        {commentData.map(
          commentObject =>
            <Comment data={commentObject} key={commentObject.author} />
        )}
      </div>
    )
  }
}


export default CommentsList

//named exports
// export {CommentsList, name}
