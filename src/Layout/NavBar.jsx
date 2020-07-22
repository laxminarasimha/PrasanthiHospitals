import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar,Nav } from 'react-bootstrap';
import web from "../Assets/img/logo.svg"

const NavBar = () => {
    return (
        <>

<div className="container-fluid nav-bg">
    <div className="row">
        <div className="col-10 mx-auto">

<Navbar bg="light" expand="lg">
<img
        src={web}
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
  <NavLink  className="navbar-brand" to="/">Prasanthi Hospitals</NavLink>

  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <NavLink activeClassName="menu-active" exact className="nav-link" to="/">Home</NavLink> 
      <NavLink activeClassName="menu-active" className="nav-link" to="/about">About</NavLink>  
      <NavLink activeClassName="menu-active" className="nav-link" to="/service">Service</NavLink>     
      <NavLink activeClassName="menu-active" className="nav-link" to="/contact">Contact</NavLink> 
    </Nav>    
  </Navbar.Collapse>
</Navbar>


</div>
    </div>
</div>


        </>

    );
};

export default NavBar;