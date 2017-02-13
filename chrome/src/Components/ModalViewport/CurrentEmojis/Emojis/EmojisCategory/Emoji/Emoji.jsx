import React, { Component } from 'react';


export default class Emoji extends Component {

	constructor(props) {
		super(props);
		this.clicked  = this.clicked.bind(this)
	}

	clicked() {
		console.log('clicked',this.props.emoji)
	}

	render() {
		let style = {height: '40px', padding: '3px'}
		return (
			<div onClick={this.clicked}> 
				<img src={this.props.emoji.imageSrc} style={style}/>
      </div>
		)
	}
}


