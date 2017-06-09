import React, { Component } from 'react';
import Card from './Card';

export default class Page extends Component {
	constructor (props) {
		super(props);
	}

	render () {
		let {people} = this.props;
    return(
    	<div className="page">
    		{people.map((person, i) => <Card key={i} {...person} />)}
	    </div>
    )
	}
}
