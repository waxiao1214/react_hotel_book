import React from 'react';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import { withConsumer } from './Context';
import Loading from './Loading';
import PropTypes from 'prop-types';

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

RoomsContainer.propTypes = {
  context: PropTypes.shape({
    rooms: PropTypes.arrayOf(
      PropTypes.shape({
        breakfast: PropTypes.bool.isRequired,
        capacity: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        extras: PropTypes.arrayOf(PropTypes.string).isRequired,
        featured: PropTypes.bool.isRequired,
        id: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        name: PropTypes.string.isRequired,
        pets: PropTypes.bool.isRequired,
        price: PropTypes.number.isRequired,
        size: PropTypes.number.isRequired,
        slug: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
    sortedRooms: PropTypes.arrayOf(PropTypes.object).isRequired,
    loading: PropTypes.bool.isRequired,
  }).isRequired,
};
