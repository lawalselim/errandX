import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

class Footer extends Component{
    render(){
        return(
        <div className="footer"> 
            Copyright ErrandX<span></span><strong>at 2017</strong>
        </div>
    )
}
}
export default Footer;