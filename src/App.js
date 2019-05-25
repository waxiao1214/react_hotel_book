import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import RoomsList from './components/RoomsList';
import Error from './components/Error';
import Navbar from './components/Navbar';
import SingleRoom from './components/SingleRoom';

function App() {
  return (
    <Router>
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/rooms' exact component={RoomsList} />
          <Route path='/rooms/:slug' component={SingleRoom} />
          <Route component={Error} />
        </Switch>
      </React.Fragment>
    </Router>
  );
}

export default App;
