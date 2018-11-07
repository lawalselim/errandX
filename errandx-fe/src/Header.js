import React, { Component } from 'react';
import './Header.css';
class Header extends Component{
    render(){
        return(
            <div className="top">
                <div className="row">
                  <div className="col-sm-8">
                    <h1>Errandx-Logo</h1>
                  </div>
                  <div className="col-sm-4">
                    <ul className="menu">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Quests</a></li>
                        <li><a href="#">Sign Up</a></li>
                        <li><a href="#">Sign In</a></li>
                    </ul>
                  </div>
                </div>
            </div>

    )
  }
}
export default Header;