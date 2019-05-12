import React from 'react';
import Hero from './Hero';
import Banner from './Banner';
import { Link } from 'react-router-dom';

export default function Error() {
  return (
    <React.Fragment>
      <Hero >
        <Banner title="404" subtitle="page not found">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
    </React.Fragment>
  )
}
