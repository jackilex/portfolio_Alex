import React, { Fragment } from 'react';
import Nav from "./components/Nav"
import Jumbo from './components/Jumbo';
import Cards from './components/Card';



function App() {
  return (
  <Fragment>
  <Nav />
  {/* <Bio /> */}
  <Cards />
  </Fragment>
  );
}

export default App;
