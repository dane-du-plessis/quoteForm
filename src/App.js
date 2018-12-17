import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import home from './Pages/home';

const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;

const AppRouter = () => (
  <MuiThemeProvider>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/home/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/home/" component={home} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
      </div>
    </Router>
  </MuiThemeProvider>
);

export default AppRouter;
