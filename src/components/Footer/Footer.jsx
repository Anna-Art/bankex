import React, { Component } from 'react';
import Nav from './Nav/Nav';

export class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-inner">
          <div className="footer-col -nav">
            <Nav />
          </div>
          <div className="footer-col -social" />
        </div>
      </div>
    );
  }
}
export default Footer;