import React, { Component }  from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Main from './Components/Main';
import './Components/style.css'
import Pokedex from './Components/Pokedex';
function App() {
  return (
    <><>
      <Main />
    </>
    <Router>
        
        <Routes>
          <Route exact path='/pokedex' component={Pokedex} />
          
        </Routes>
      </Router></>
    
  );
}

export default App;
