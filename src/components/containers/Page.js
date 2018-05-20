import React from 'react';

export default class Page extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
	return (
	  <div className="container"> 
	  {this.props.children}
	  </div>
	);
	}
}

