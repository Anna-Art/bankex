import React, { Component } from 'react';
import Feedback from './Feedback/Feedback';

export class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-inner">
          <Feedback text="Send Feedback" />
        </div>
      </div>
    );
  }
}
export default Header;