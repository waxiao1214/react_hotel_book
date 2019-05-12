import React from 'react';
import Hero from './Hero';
import Banner from './Banner';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <React.Fragment>
      <Hero >
        <Banner
          title="luxurious rooms"
          subtitle="Lorem ipsum dolor sit amet.">
          <Link to="/rooms" className="btn-primary">
            view rooms
        </Link>
        </Banner>
      </Hero>
    </React.Fragment>
  )
}
