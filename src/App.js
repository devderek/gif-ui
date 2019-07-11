import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import Home from './pages/Home'
import Center from './custom/Center'

export default class App extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged(this.props.location);
    }
  }

  render() {
    return (
      <Router>
        <Navbar>
          <Center>
            <Nav>
              <NavLink to="/">Gif App</NavLink>
            </Nav>
          </Center>
        </Navbar>
        <div id="main">
          <Center>
            <Route path="/" exact={true} component={Home} />
          </Center>
        </div>
      </Router>
    );
  }
}
