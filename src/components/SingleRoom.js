import React, { Component } from 'react';
import { Consumer } from './Context';
import { Link } from 'react-router-dom';
import defaultBg from '../img/room-1.jpeg';
import Banner from './Banner';
import StyledHero from '../components/StyledHero';

export default class SingleRoom extends Component {
  state = {
    slug: this.props.match.params.slug,
    defaultBg,
  };

  render() {
    return (
      <Consumer>
        {({ getRoom }) => {
          const room = getRoom(this.state.slug);
          if (!room) {
            return (
              <div className='error'>
                <h3>could not find room</h3>
                <Link to='/rooms' className='btn-primary'>
                  back to rooms
                </Link>
              </div>
            );
          }
          const {
            name,
            description,
            capacity,
            size,
            price,
            extras,
            breakfast,
            pets,
            images,
          } = room;
          return (
            <React.Fragment>
              <StyledHero img={images[0] || this.state.defaultBg}>
                <Banner title={`${name} room`}>
                  <Link to='/rooms' className='btn-primary'>
                    back to rooms
                  </Link>
                </Banner>
              </StyledHero>
              <section className='single-room'>
                <div className='single-room-images'>
                  {images.map((item, index) => (
                    <img src={item} alt={name} key={index} />
                  ))}
                </div>
                <div className='single-room-info'>
                  <article className='desc'>
                    <h3>details</h3>
                    <p>{description}</p>
                  </article>
                  <article className='info'>
                    <h3>info</h3>
                    <h6>price: {price}€</h6>
                    <h6>
                      size: {size}m<sup>2</sup>
                    </h6>
                    <h6>
                      max capacity:{' '}
                      {capacity > 1
                        ? `${capacity} people`
                        : `${capacity} person`}
                    </h6>
                    <h6>{pets ? 'pets allowed' : 'no pets allowed'}</h6>
                    <h6>{breakfast && 'free breakfast included'}</h6>
                  </article>
                </div>
              </section>
              <section className='room-extras'>
                <h6>extras</h6>
                <ul className='extras'>
                  {extras.map((item, index) => (
                    <li key={index}>- {item}</li>
                  ))}
                </ul>
              </section>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}
