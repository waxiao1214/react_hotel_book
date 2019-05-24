import React from 'react';
import Hero from './Hero';
import { Link } from 'react-router-dom';
import Banner from './Banner';

export default function RoomsList() {
  return (
    <React.Fragment>
      <Hero hero="rooms-hero" >
        <Banner title="our rooms">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
    </React.Fragment>
  );
}
