import React, { Component } from 'react';


export default class Emoji extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
      <div> 
				{console.log('AOISFNOIASNFOINFSA')}
        <img src={this.props.emoji.imageSrc} />
      </div>
		)
	}
}


