import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom"

function NavbarComp() {
  const cartProducts=useSelector(state=>state.cart)
  // console.log(cardProdusts.length)
  return (

    <div>
      {/* <h1>navbar</h1> */}
      <Navbar expand="lg" className="bg-body-tertiarymp">
        <Container>
          <Navbar.Brand style={{fontSize:"2rem"}}href="#home">Shopping Cart</Navbar.Brand>
         
          <Nav><Nav.Link style={{fontSize:"1.5rem"}} to="/" as={Link}>Home</Nav.Link></Nav>          <Navbar.Toggle/>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text >
            <Nav.Link style={{fontSize:"2rem", color:"red"}} to="/cart" as={Link}>Cart-item={ cartProducts.length}</Nav.Link>
            </Navbar.Text>
          </Navbar.Collapse>
            
              {/* <Link to="/" >Home</Link> */}
              {/* <Link className="justify-content-end" to="/cart" >Cart</Link> */}
              
               
               
          
               
              
        
        
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComp;
