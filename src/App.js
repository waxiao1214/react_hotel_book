import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import RoomsList from './components/RoomsList';
import Room from './components/Room';
import Error from './components/Error';

function App() {
  return (
    <Router>
      <React.Fragment>
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
