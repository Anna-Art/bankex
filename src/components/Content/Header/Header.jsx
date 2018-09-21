import React, { Component } from 'react';

export class Header extends Component {
  render() {
    return (
      <header className="content-header">
        <div className="content-header-title">{ this.props.title }</div>
      </header>
    );
  }
}
export default Header;