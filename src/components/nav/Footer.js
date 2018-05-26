import React from 'react';
import "./Footer.css";

export default class Footer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <footer className="footer fixed-bottom">
          <div className="container">
            <br/>
            <p className="m-0 text-center text-black">Copyright © { this.props.name || "Your Website 2018"}</p>
            <span className="text-muted"></span>
            {this.props.children}
            <br/>
          </div>
        </footer>
    );
  }
}
