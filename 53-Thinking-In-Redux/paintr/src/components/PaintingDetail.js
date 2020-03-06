import React from "react";
import { Link, withRouter } from "react-router-dom";
import {connect} from 'react-redux'
import {vote} from '../redux/actions'

class PaintingDetail extends React.Component {
  render() {
    console.log("PaintingList's props:", this.props)
    return (
      <div>
        <img alt={this.props.painting.title} src={this.props.painting.image} />
        <h3>{this.props.painting.title}</h3>
        <h4>
          {this.props.painting.artist.name}{" "}
          {this.props.painting.artist.birthday}-{
            this.props.painting.artist.deathday
          }
        </h4>
        <Link to={`/paintings/${this.props.painting.id}/edit`}>
          <button className="ui button">Edit</button>
        </Link>
        <button
          className="ui button"
          onClick={() => {this.props.vote(this.props.painting.id)}}
        >
          Vote! {this.props.painting.votes}
        </button>
      </div>
    );
  }
}

//~~~~~~~~~~~~~~~~~~~~~~~~~REDUX~~~~~~~~~~~~~~~~~~~~~~~~~~~

//read from the store state
const mapStateToProps = (state, ownProps) => {
  return {
    painting: state.paintings.find(
      painting => painting.id === ownProps.match.params.paintingId
    )
  }
}

//update the state
// const mapDispatchToProps = (dispatch) => {
//   return {
//     vote: (paintingId) => { dispatch( vote(paintingId) ) }
//   }
// }

export default withRouter(connect(mapStateToProps, {vote} )(PaintingDetail))


// const PaintingDetailsWithReduxProps = connect(mapStateToProps)(PaintingDetail)
//
// const PaintingDetailsWithReduxPropsANDRouteProps = withRouter(PaintingDetailsWithReduxProps)
// //need to update the store's state as well
// export default PaintingDetailsWithReduxPropsANDRouteProps
