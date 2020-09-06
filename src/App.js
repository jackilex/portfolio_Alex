import React, { Fragment } from 'react';
import Nav from "./components/Nav"
import Jumbo from './components/Jumbo';
import Cards from './components/Card';
import Contact from './components/Contact';
import Bio from './components/Bio'
import Resume from "./components/Resume"
import Footer from './components/Footer'
import { Worker } from '@phuocng/react-pdf-viewer';


function App() {
  return (
  <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.4.456/build/pdf.worker.min.js"> 
  <Fragment>
  <Nav />
  {/* <Bio /> */}
  {/* <Cards /> */}
  {/* <Contact /> */}
  <Resume />
  <Footer />
  </Fragment>
  </Worker>
  );
}

export default App;
