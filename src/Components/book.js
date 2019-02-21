import React from 'react';
import Col from 'react-bootstrap/Col';
import '../style.css';

function Book(props){
  if(props.book.flipped===false){
    return (
      <Col  xs ={1} md={3} lg={4}>
        <div className="flip-card" onClick ={() => props.handleClick(props.book.id)}>
            <div className="flip-card-inner">
                <div className="flip-card-front">
                  <h1>{props.book.title}</h1> 
                </div>
                <div className="flip-card-back">
                      <h1>{props.book.description}</h1> 
                </div>
            </div>
          </div>
      </Col>
    );
  }else{
        return (
          <Col xs={1} md={3} lg={4}>
            <div className="flip-card flip-it" onClick ={() => props.handleClick(props.book.id)}>
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <h1>{props.book.title}</h1> 
                  </div>
                    <div className="flip-card-back">
                      <h1>{props.book.description}</h1> 
                    </div>
                </div>
            </div>
          </Col>
      );
  }
}
export default Book;