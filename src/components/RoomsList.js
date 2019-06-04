import React from 'react';
import Room from './Room';

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
