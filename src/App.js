import React, { Component } from 'react';
import Footer from './Components/footer';
import Book from './Components/book';
import ThreeBooks from './Components/threeBooks';
import Container from 'react-bootstrap/Container'
import bookData from './bookData';


class App extends Component {
  
  constructor(){
    super()
    
    this.state = {
        books: bookData
    }
    this.handleClick = this.handleClick.bind(this);
    this.listThem = this.listThem.bind(this);
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

  listThem(array){
    let newArray = []
    let size = 3;
    
    while(array.length>0){
        newArray.push(array.splice(0, size));
      }
    return newArray
  }

  render() {
    const bookList = this.state.books.map((book) => <Book key = {book.id} book={book} handleClick = {this.handleClick} />);
    const orderedList = this.listThem(bookList);
    console.log(orderedList)
    const threes = orderedList.map((books, index) => <ThreeBooks key = {index} books = {books} />);


    return (
      <div className="App">
        <Container>
            {threes}
        </Container>
        <Footer/>
      </div>
    );
  }
}



export default App;