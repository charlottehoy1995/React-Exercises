import React, { Component } from 'react';
import './App.css';
import DropDownBar from './DropDownBar.js';
import Table from './Table.js';
import NavBar from './NavBar';
import Header from './Header';
 

class App extends Component {
  constructor(){
    super();
    this.state = {
      header: "Trainer Table"
    }
  }

  render() {
    return (
 
      <div>
        
      <Header header={this.state.header}/>
      <DropDownBar />
      <NavBar />
      <Table />

      
      </div>
              
 
      
    );
  }
}

export default App;
