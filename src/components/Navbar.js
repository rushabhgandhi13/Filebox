import React, { Component } from 'react';
import Identicon from 'identicon.js';
import box from '../box.png'

class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-light bg-primary p-0 text-monospace">
        <a
          className="navbar-brand col-sm-3 col-md-2 mr-0"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          
        >
        
          FileBox
        </a>
        <ul className="navbar-nav px-3">
          <li>
            <small id="account">
              <a target="_blank"
                 alt=""
                 className="text-white"
                 rel="noopener noreferrer"
                 href={"https://etherscan.io/address/" + this.props.account}>
                {this.props.account.substring(0,6)}...{this.props.account.substring(38,42)}
              </a>
            </small>
            
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;