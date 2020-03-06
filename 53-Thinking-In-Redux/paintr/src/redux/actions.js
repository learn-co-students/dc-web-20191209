
function vote(paintingId){
  return {type:"INCREASE_VOTE", paintingId}
}

function search(newSearchTerm){
  return {type: "CHANGE_SEARCH_TEXT", payload: newSearchTerm}
}

export {vote, search}
//search() //{type: "CHANGE_SEARCH_TEXT", payload: newSearchTerm}
