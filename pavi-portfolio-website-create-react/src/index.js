import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Importing the Bootstrap CSS
import './custom.scss'
import "./GoogleFonts.css"
import "./core.css";

import TimeTravel from './Fashion-Design/TimeTravel';


//ReactDOM.render(<Home />, document.getElementById('root'));
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
          </nav> */}
  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/fashion-design/time-travel">
              
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
  
  
  function About() {
    return <h2>About</h2>;
  }
  
  function Users() {
    return <h2>Users</h2>;
  }

  ReactDOM.render(<App />, document.getElementById('root'));