import React from 'react';
import PropTypes from 'prop-types';

export default function Hero({ hero, children }) {
  return <header className={hero}>{children}</header>;
}

Hero.defaultProps = {
  hero: 'default-hero',
};

Hero.propTypes = {
  children: PropTypes.element,
  hero: PropTypes.string,
};
