import React from 'react';

export default class ImgFrame extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container border"> ImgFrame
      	<div>
      		
      	</div>
      	<img src={this.props.src} />

      </div>
    );
  }
}
