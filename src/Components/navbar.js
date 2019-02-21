import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';


class Nav extends Component {
    state = {  }

    render() { 
        return (
            <Navbar bg="dark" expand="lg">
                <Navbar.Brand>
                    BookCase
                </Navbar.Brand>
            </Navbar>
          );
    }
}
 
export default Nav;