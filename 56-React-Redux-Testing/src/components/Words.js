import React, { Component } from 'react';
import Word from './Word';

class Words extends Component {
    renderWords = () => {
        return this.props.words.map(word => {
            return <Word word={word} key={word.id} />
        })   
    }

    render() {
        console.log(this.props.words)
        return (
            <div id='words' >
                {this.renderWords()}
            </div>
        )
    }
}

export default Words