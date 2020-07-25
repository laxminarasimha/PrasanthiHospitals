import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar,Nav } from 'react-bootstrap';
import logoSmall from "../../Assets/img/logo_small1.png"
import logoBig from "../../Assets/img/logo_big1.png"

import $ from 'jquery';

const TopNavBar = () => {

  $(document).ready(function(){
    var $default2 = $("#default2");
    $(window).scroll(function(){
      if ( $(this).scrollTop() > 100 && $default2.hasClass("navbar-light bg-light default2") ){
        $default2.removeClass("navbar-light bg-light default2").addClass("navbar-dark bg-dark fixed-top");
      } else if($(this).scrollTop() <= 100 && $default2.hasClass("navbar-dark bg-dark fixed-top")) {
        $default2.removeClass("navbar-dark bg-dark fixed-top").addClass("navbar-light bg-light default2");
      }
    });
  });
  
  $(document).ready(function(){
    var $default3 = $("#nav-size");  
    $(window).scroll(function(){
      if ( $(this).scrollTop() > 100 && $default3.hasClass("container-fuil") ){
        $default3.removeClass("container-fuil").addClass("container");
      } else if($(this).scrollTop() <= 100 && $default3.hasClass("container")) {
        $default3.removeClass("container").addClass("container-fuil");
      }
    });
  });
  
  $(window).scroll(function(){
        if($(window).scrollTop()>100){          
            $('#logo-small').css('display','block');
         }else{         
            $('#logo-small').css('display','none');
         }
   });
  $(window).scroll(function(){
        if($(window).scrollTop()>100){
          $('#nav-size').css('display','block');
            $('#nav-size-small').css('display','none');
         }else{
           $('#nav-size').css('display','block');
            $('#nav-size-small').css('display','none');
         }
   });     



return (
<>
<header id="topnavbar" className="bg-light">
<div className="container">
  <div className="row">
    <div className="col-sm-3 m-auto d-none d-lg-block">
      <img className="logo" src={logoBig} alt="test " />
    </div>        
    <div className="col-md-10 col-lg-9">
          <nav className="navbar navbar-expand-md navbar-light bg-light ">
            <ul className="navbar-nav">
            <li className="nav-item p-3">
              <h6><i className="fa fa-map-marker"></i> <span><strong>beside N.T.R sahakara bhavan</strong><br />Governerpet "Vijayawada - 2"</span></h6>
            </li>
            <li className="nav-item p-3">
              <h6><i className="fa fa-phone"></i> <span><strong><span className="ringo-phone">+91 94404 21528</span></strong></span></h6>
            </li>
            <li className="nav-item p-3">
              <h6><i className="fas fa-envelope-open-text"></i> <span><strong>support@prasanthihospitals.com</strong></span></h6>
            </li>
              <li className="nav-item p-3">
            <h6><i className="far fa-comment-alt"></i> <span><strong>24/7 Emergency Support</strong><br /></span></h6>
            </li>
            </ul>
          </nav>
          <hr />
          <Navbar id="default2" className="navbar navbar-expand-md navbar-light bg-light default2" expand="lg">          
            <div id="nav-size" className="container-fuil">
              <div className="row">
                <div className="d-none d-sm-block d-md-none">
                <NavLink  className="navbar-brand" to="/">Prasanthi Hospitals</NavLink>
                </div>
                <NavLink id='logo-small' className="navbar-brand" to="/"><img  src={logoSmall}  className="d-inline-block align-top"   alt="React Bootstrap logo"  />  </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="basic-navbar-nav text-center" id="navbarsExampleDefault">
                <Nav className="ml-auto">
                    <NavLink activeClassName="menu-active" exact className="nav-link" to="/">Home</NavLink> 
                    <NavLink activeClassName="menu-active" className="nav-link" to="/about">About</NavLink>        
                    <NavLink activeClassName="menu-active" className="nav-link" to="/service">Service</NavLink>     
                    <NavLink activeClassName="menu-active" className="nav-link" to="/doctors">Doctors</NavLink> 
                    <NavLink activeClassName="menu-active" className="nav-link" to="/contact">Contact</NavLink> 
                </Nav>    
                </Navbar.Collapse>
              </div>
            </div>
          </Navbar>
      </div>
    </div>
  </div>
</header>    
 </>

    );
};

export default TopNavBar;