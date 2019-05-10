import React from 'react';
import './App.css';
import Home from './components/Home';
import RoomsList from './components/RoomsList';
import Room from './components/Room';
import Error from './components/Error';

function App() {
  return (
    <React.Fragment>
      <h3>hello from App</h3>
      <Home />
      <RoomsList />
      <Room />
      <Error />
    </React.Fragment>
  );
}

export default App;
