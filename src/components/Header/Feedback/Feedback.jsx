import React, { Component } from 'react';

export class Feedback extends Component {
  render() {
    return (
      <button className="btn header-btn">
        <span className="icon icon-feedback btn-icon" />
        <span className="btn-text">{ this.props.text }</span>
      </button>
    );
  }
}
export default Feedback;