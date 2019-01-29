import React, { Component } from 'react';
import Footer from './Components/footer';
import Book from './Components/book';
import './App.css';


class App extends Component {
  
  constructor(){
    super()
    this.state = {

    }
  }
 

  render() {
    return (
      <div className="App">
        <Book/>
        <Footer/>
      </div>

    );
  }
}



export default App;