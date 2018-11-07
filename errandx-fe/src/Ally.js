import React, { Component } from 'react';
import google from './images/google.png';
import dsc from './images/dsc.png';
import gdg from './images/gdg.png';
import googleNigeria from './images/googlenigeria.jpg';
import './Ally.css';


class Ally extends Component{
    render(){
        return(
            <section className="">
	            <div className="row">
		            <div className="col-sm-3"><img src={google} className="img-responsive" alt="google logo" /></div>
		            <div className="col-sm-3"><img src={dsc} className="img-responsive" alt="dsc logo" /></div>
		            <div className="col-sm-3"><img src={gdg} className="" alt="gdg logo" /></div>
		            <div className="col-sm-3"><img src={googleNigeria} className="" alt="google nigeria" /></div>
		            <hr />
	            </div>
            </section>
        )
}
}
export default Ally;