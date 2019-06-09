import React from 'react';
import Room from './Room';
import PropTypes from 'prop-types';

export default function RoomsList({ rooms }) {
  return rooms.length === 0 ? (
    <div className="empty-search">
      <h3>no rooms matched your search parameters</h3>
    </div>
  ) : (
    <section className="rooms-list">
      <div className="rooms-list-center">
        {rooms.map(item => (
          <Room key={item.id} room={item} />
        ))}
      </div>
    </section>
  );
}

RoomsList.propTypes = {
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
};
