import React, { Component } from 'react';
import Thumb from './Thumb';

export default class Card extends Component {
	constructor (props) {
		super(props);
	}

	render () {
		let {name, gender, id} = this.props;
		let genderSign = (gender === 'male') ? '♂' : '♀';
    return(
    	<div className="details">
    		<div className="line">Name: {name.title} - {name.first}, {name.last}</div>
    		<div className="line">Id: {id.value}</div>
    		<div className="line">Gender: {genderSign}</div>
	    </div>
    )
	}
}
