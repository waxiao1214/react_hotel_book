import React from 'react';
import { Consumer } from './Context';
import Title from './Title';
import Room from './Room';
import Loading from './Loading';

export default function FeaturedRooms() {
  return (
    <Consumer>
      {({ featuredRooms, loading }) => (
        <section className='featured-rooms'>
          <Title title='featured rooms' />
          <div className='featured-rooms-center'>
            {loading ? (
              <Loading />
            ) : (
              featuredRooms.map(room => <Room key={room.id} room={room} />)
            )}
          </div>
        </section>
      )}
    </Consumer>
  );
}
