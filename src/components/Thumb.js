import React, { Component } from 'react';

export default class Thumb extends Component {
	constructor (props) {
		super(props);
	}

	render () {
		let {name, picture} = this.props;
		let fullName = (name.title ? name.title : '') + name.first + (name.last ? ', ' + name.last: '');
    return(
    		<div className="thumb">
    			<img src={picture.thumbnail} alt={fullName} />
    		</div>
    )
	}
}
