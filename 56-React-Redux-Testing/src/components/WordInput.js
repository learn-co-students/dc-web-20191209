import React, { Component } from 'react';
import { connect } from 'react-redux';

class WordInput extends Component {
    constructor() {
        super() 
        this.state = {
            name: '',
            img_url: ''
        }
    }

    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.submitWord(this.state)
        this.setState({
            name: '',
            img_url: ''
        })
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <h3>Add a Word!</h3>
                    <p>
                        <label>Word: </label>
                        <input type='text' placeholder='name' name='name' value={this.state.name} onChange={this.handleOnChange} />
                    </p>
                    <p>
                        <label>Image: </label> 
                        <input type='text' placeholder='image' name='img_url' value={this.state.img_url} onChange={this.handleOnChange} />
                    </p>
                    <input type='submit' name='Sumbit' />
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        submitWord: (newWord) => dispatch({ type: 'ADD_WORD', payload: newWord })
    }  
}

export default connect(null, mapDispatchToProps)(WordInput)