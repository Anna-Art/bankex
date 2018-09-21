import React, { Component } from 'react';
import Header from './Header/Header';

export class Content extends Component {
  render() {
    return (
      <div className="content">
        <div className="content-inner">
          <Header title="Settings" />

          <div className="content-text">
            <p>
              Two-factor autentification is&nbsp;enabled via MFA app. <br />
              You can&apos;t disable 2FA now. If&nbsp;you are having problem with Custody service, contact&nbsp;us <a href="mailto:support@bankexcustody.com">support@bankexcustody.com</a>.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Content;