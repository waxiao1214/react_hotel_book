import React, { Component } from 'react';
import Title from './Title';
import {
  FaCocktail,
  FaHiking,
  FaShuttleVan,
  FaWineGlassAlt,
} from 'react-icons/fa';

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: 'free cocktails',
        info:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, at!',
      },
      {
        icon: <FaHiking />,
        title: 'Endless hiking',
        info:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, at!',
      },
      {
        icon: <FaShuttleVan />,
        title: 'Free shuttle',
        info:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, at!',
      },
      {
        icon: <FaWineGlassAlt />,
        title: 'Lannister wine',
        info:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, at!',
      },
    ],
  };
  render() {
    return (
      <section className='services'>
        <Title title='services' />
        <div className='services-center'>
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className='service'>
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
