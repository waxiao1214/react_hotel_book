import React from 'react';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import { Consumer } from './Context';
import Loading from './Loading';

export default function RoomsContainer() {
  return (
    <Consumer>
      {({ loading, sortedRooms, rooms }) =>
        loading ? (
          <div style={{ margin: 100 }}>
            <Loading />
          </div>
        ) : (
          <React.Fragment>
            <h3>Hello from RoomsContainer</h3>
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms} />
          </React.Fragment>
        )
      }
    </Consumer>
  );
}
