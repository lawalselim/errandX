import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

class Footer extends Component{
    render(){
        return(
        <div className="footer"> 
            Copyright ErrandX<span></span><code>at 2017</code>
        </div>
    )
}
}
export default Footer;