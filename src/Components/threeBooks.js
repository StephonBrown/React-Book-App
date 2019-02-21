import React from 'react';
import Row from 'react-bootstrap/Row'


function ThreeBooks(props){
    return(
        <Row>
            { props.books}  
        </Row>
    )
}

export default ThreeBooks;