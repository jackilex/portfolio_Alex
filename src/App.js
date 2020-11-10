import React, { Fragment } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import Nav from "./components/Nav"
import Jumbo from './components/Jumbo';
import Cards from './components/Card';
import Contact from './components/Contact';
import Bio from './components/Bio'
import Resume from "./components/Resume"
import Footer from './components/Footer'
import { Worker } from '@phuocng/react-pdf-viewer';
import Particles from 'react-particles-js'; 
import ParticlesBg from 'particles-bg'
function App() {
  
  return (
  <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.4.456/build/pdf.worker.min.js"> 
  <Fragment>
  <Nav />
  <Switch>
    <Route path="/about" component={Bio}/>
    <Route path="/portfolio" component={Cards}/>
    <Route path="/contact" component={Contact}/>
    <Route path="/resume" component={Resume}/>
    <Route path="/not-found" exact component={Bio}/>
    <Redirect path="/" exact to="/about"/>
    <Redirect to="/not-found"/>
  </Switch>
  <Footer/>
  </Fragment>
  </Worker>

  );
}

export default App;
