import React, { Component } from 'react';
import WordInput from './WordInput';
import Words from './Words';
import { connect } from 'react-redux';

class WordsContainer extends Component {
    render() {
        return (
            <div>
                <WordInput />
                <Words words={this.props.words} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { words: state.words }
}

export default connect(mapStateToProps)(WordsContainer)