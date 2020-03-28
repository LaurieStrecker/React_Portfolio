import React from 'react';
import logo from './box-black.png';

import { BrowserRouter, Route, Link} from 'react-router-dom';
import Projects from './Projects';
import Articles from './Articles';
import About from './About';

import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    
    <Route exact path="/" component={Projects} />
    <Route path="/articles" component={Articles} />
    <Route path="/about" component={About} />

    
     <div className="navigation">
       <img src={logo} className="App-logo" alt="logo" />
       <div className="navigation-sub">

       <Link to="/" className="item">Projects</Link>
       <Link to="/articles" className="item">Artilces</Link>
       <Link to="/about" className="item">About</Link>
       </div>
     </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
