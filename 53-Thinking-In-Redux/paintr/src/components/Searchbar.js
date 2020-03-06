import React from "react";
import {connect} from 'react-redux'
import {search} from '../redux/actions'

const Searchbar = props => {
  return (
    <div className="ui container">
      <div className="ui very large fluid input">
        <input
          type="text"
          placeholder="Search"
          value={props.value}
          onChange={e => props.onChange(e.target.value)}
        />
      </div>
      <div className="ui clearing section divider" />
    </div>
  )
}

//~~~~~~~~~~~~~~~~~~~~~~~~~REDUX~~~~~~~~~~~~~~~~~~~~~~~~~~~
//create a new prop called value that is mapped to the store
const mapStateToProps = (state) => {
  return {
    value: state.searchText
  }
}
//{prop: state}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (newSearchTerm) => dispatch( search(newSearchTerm ) )
  }
}
//{prop: ????}

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar)
////e => props.dispatch( {type: "CHANGE_SEARCH_TEXT", payload: e.target.value } )
