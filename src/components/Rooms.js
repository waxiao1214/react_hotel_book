import React from 'react';
import Hero from './Hero';
import { Link } from 'react-router-dom';
import Banner from './Banner';
import RoomsContainer from './RoomsContainer';

export default function Rooms() {
  return (
    <React.Fragment>
      <Hero hero='rooms-hero'>
        <Banner title='our rooms'>
          <Link to='/' className='btn-primary'>
            return home
          </Link>
        </Banner>
      </Hero>
      <RoomsContainer />
    </React.Fragment>
  );
}
