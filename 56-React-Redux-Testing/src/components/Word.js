import React, { Component } from 'react';
import { connect } from 'react-redux';

class Word extends Component {
    render() {
        return (
            <div className='word-card'>
                <h2>{this.props.word.name}</h2>
                <img className="word-image" src={this.props.word.img_url} /><br></br>
                <button onClick={() => this.props.deleteWord(this.props.word.id)} >Delete</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteWord: (wordId) => dispatch({ type: 'DELETE_WORD', payload: wordId})
    }
}

export default connect(null, mapDispatchToProps)(Word)