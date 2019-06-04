import React from 'react';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import { withConsumer } from './Context';
import Loading from './Loading';

function RoomsContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  return loading ? (
    <div style={{ margin: 100 }}>
      <Loading />
    </div>
  ) : (
    <React.Fragment>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </React.Fragment>
  );
}

export default withConsumer(RoomsContainer);
