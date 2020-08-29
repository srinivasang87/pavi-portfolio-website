import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';

// Importing the Bootstrap CSS
import './custom.scss'
import "./GoogleFonts.css"
import "./core.css";

ReactDOM.render(<Home />, document.getElementById('root'));
/*
function App() {
    return (
      <Router>
        <div>
          {/* <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/fashion-design/time-travel">TimeTravel</Link>
              </li>
            </ul>
          </nav> } */
  /*
          { 
            //A <Switch> looks through its children <Route>s and renders the first one that matches the current URL.
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/fashion-design/time-travel.html">
              
              <TimeTravel />
            </Route>
            <Route path="/">
            
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
  */
  //ReactDOM.render(<App />, document.getElementById('root'));