import React, { Component } from 'react';


export class Social extends Component {
  render() {

    return (
      <div className="footer-social">
        <div className="footer-social-inner">
          <header className="footer-social-header">
            <div className="footer-social-title">{ this.props.title }</div>
          </header>

          <div className="footer-social-items">
            <div className="footer-social-item">
              <a href="#" className="footer-social-link">
                <span className="icon icon-facebook" />
              </a>
            </div>
            <div className="footer-social-item">
              <a href="#" className="footer-social-link">
                <span className="icon icon-instagram" />
              </a>
            </div>
            <div className="footer-social-item">
              <a href="#" className="footer-social-link">
                <span className="icon icon-linkedin" />
              </a>
            </div>
            <div className="footer-social-item">
              <a href="#" className="footer-social-link">
                <span className="icon icon-twitter" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Social;