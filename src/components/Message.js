import React, { Component } from 'react';
import Thumb from './Thumb';

export default class Message extends Component {
	constructor (props) {
		super(props);
	}

	render () {
		let {person} = this.props;
    return(
    	<div className="card">
	    	<h1 className="headline white-text">{person.name} is {person.age} years old</h1>
	    	<Thumb {...person}/>
	    </div>
    )
	}
}
