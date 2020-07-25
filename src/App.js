import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import "./Layout/Navbar/TopNavbar.css"
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import PageNotFound from './Pages/PageNotFound';
import NavBar from './Layout/NavBar';
import Services from './Pages/Services';
import Footer from './Layout/Footer';
import Doctors from './Pages/Doctors';
import TopNavbar from"./Layout/Navbar/TopNavbar";


function App() {
  return (
    <>
    <TopNavbar></TopNavbar> 
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/About" exact component={About}></Route>
      <Route path="/Contact" exact component={Contact}></Route>
      <Route path="/service" exact component={Services}></Route>
      <Route path="/doctors" exact component={Doctors}></Route>
      <Route path="**" exact component={PageNotFound}></Route>
    </Switch> 
    <Footer></Footer>   
    </>
  );
}
export default App;
