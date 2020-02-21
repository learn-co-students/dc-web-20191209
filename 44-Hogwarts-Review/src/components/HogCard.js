import React, { Component } from 'react'
import CardFront from "./CardFront"
import CardBack from "./CardBack"

class HogCard extends Component {
    constructor() {
        super()
        this.state = {front: true}
    }

    snakeCasedName = () => {
        return this.props.hog.name.toLowerCase().replace(/ /g,"_")
    }

    flipCard = () => {
        let front = this.state.front
        this.setState({ front: !front })
    }

    render() {
        return (
            this.state.front ?
            <CardFront hog={this.props.hog} imgName={this.snakeCasedName()} flip={this.flipCard}/> :
            <CardBack hog={this.props.hog} imgName={this.snakeCasedName()} flip={this.flipCard}/>
        )
    }
}

export default HogCard