import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import RoomsList from './components/RoomsList';
import Room from './components/Room';
import Error from './components/Error';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms" component={RoomsList} />
          <Route path="/rooms/:slug" component={Room} />
          <Route component={Error} />
        </Switch>
      </React.Fragment>
    </Router>
  );
}

export default App;
