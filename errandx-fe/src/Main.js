import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Ally from './Ally.js';
import './Main.css';

class Main extends Component{
    render(){
        return(
        <main className="content">
          <Ally />
        </main>
    )
}
}
export default Main;