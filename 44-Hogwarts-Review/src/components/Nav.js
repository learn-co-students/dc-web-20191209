import piggy from '../porco.png'
import React from 'react'

const Nav = () => {
	return (
		<div className="navWrapper">
			<span className="headerText">Hogwarts</span>
			<img src={piggy} className="App-logo" alt="piggy" />
			<span className="normalText">A React App for County Fair Hog Fans</span>
		</div>
	)
}

export default Nav
