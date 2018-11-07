import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import Ally from './Ally.js';
import './Main.css';

class Main extends Component{
    render(){
        return(
        <main className="content">
          My Body  <Button color="danger" className="danger">Danger!</Button>
          <Ally />
        </main>
    )
}
}
export default Main;