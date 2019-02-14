import React, { Component } from 'react';
import Footer from './Components/footer';
import Book from './Components/book';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import bookData from './bookData';
import './App.css';


class App extends Component {
  
  constructor(){
    super()
    
    this.state = {
        books: bookData
    }
    this.handleClick =this.handleClick.bind(this);
  }

  handleClick(id){
    this.setState(prevState => {
      const updatedBooks = prevState.books.map(book =>{
        if(book.id === id){
          book.flipped = !book.flipped
        }
        return book;
      })
      
      return{
        books: updatedBooks
      }
    })
  }

  render() {
    const bookList = this.state.books.map((book) => <Book key= {book.id} book={book} handleClick = {this.handleClick} />);


    return (
      <div className="App">
        <Container>
          <Row>
            {bookList}
          </Row>
        </Container>
        <Footer/>
      </div>
    );
  }
}



export default App;